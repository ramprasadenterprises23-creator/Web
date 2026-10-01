import Lenis from 'lenis';

/**
 * Smooth (inertial) scrolling for mouse wheels and trackpads.
 * - Touch devices keep native scrolling (it is already smooth and feels right).
 * - Disabled automatically for visitors who prefer reduced motion.
 * - Every other file talks to it only through the helpers below, so it is safe
 *   to call them even when Lenis is not running.
 */
let lenis: Lenis | null = null;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initSmoothScroll(): () => void {
  if (typeof window === 'undefined' || prefersReducedMotion()) return () => {};

  const instance = new Lenis({
    lerp: 0.085,          // lower = floatier, higher = snappier
    wheelMultiplier: 1,
    smoothWheel: true,
  });
  lenis = instance;

  let frame = 0;
  const loop = (time: number) => {
    instance.raf(time);
    frame = requestAnimationFrame(loop);
  };
  frame = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(frame);
    instance.destroy();
    if (lenis === instance) lenis = null;
  };
}

/** Jump instantly (used on route changes). */
export function scrollToTop(immediate = true) {
  if (lenis) {
    lenis.scrollTo(0, { immediate });
    return;
  }
  window.scrollTo({ top: 0, left: 0, behavior: immediate ? ('instant' as ScrollBehavior) : 'smooth' });
}

export function scrollToY(y: number) {
  if (lenis) lenis.scrollTo(y, { duration: 1.1 });
  else window.scrollTo({ top: y, behavior: 'smooth' });
}

export function scrollToElement(target: Element | string, offset = -96) {
  if (lenis) lenis.scrollTo(target as HTMLElement | string, { offset, duration: 1.1 });
  else (typeof target === 'string' ? document.querySelector(target) : target)?.scrollIntoView({ behavior: 'smooth' });
}

/** Freeze / release scrolling (mobile menu, modals). */
export function lockScroll(locked: boolean) {
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
