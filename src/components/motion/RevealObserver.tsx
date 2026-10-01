import { useEffect } from 'react';

/**
 * Scroll-reveal without touching component structure.
 *
 *   <div data-reveal>                 fades + rises in when scrolled into view
 *   <div data-reveal="left|right|scale|fade" data-reveal-delay="150">
 *   <ul  data-reveal-group>           children reveal one after another (staggered)
 *
 * Mount <RevealObserver /> once. It also catches elements added later
 * (lazy routes, accordions) via a MutationObserver. The "hidden" state is only
 * applied after this component mounts (html.js-reveal), so content can never
 * get stuck invisible if something fails.
 */
const STAGGER_MS = 80;
const MAX_STAGGER = 8;

export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-in', '');
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    const seen = new WeakSet<Element>();

    const register = (el: Element) => {
      if (seen.has(el)) return;
      seen.add(el);
      const delay = el.getAttribute('data-reveal-delay');
      if (delay) (el as HTMLElement).style.setProperty('--rd', `${delay}ms`);
      io.observe(el);
    };

    const scan = () => {
      document.querySelectorAll('[data-reveal-group]').forEach((group) => {
        if (seen.has(group)) return;
        seen.add(group);
        Array.from(group.children).forEach((child, i) => {
          if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', '');
          const ms = Math.min(i, MAX_STAGGER) * STAGGER_MS;
          if (!child.hasAttribute('data-reveal-delay')) child.setAttribute('data-reveal-delay', String(ms));
        });
      });
      document.querySelectorAll('[data-reveal]').forEach(register);
    };

    root.classList.add('js-reveal');
    scan();

    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
      root.classList.remove('js-reveal');
    };
  }, []);

  return null;
}
