import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

import { scrollToTop } from '../../lib/smoothScroll';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      data-no-print
      tabIndex={visible ? 0 : -1}
      onClick={() => scrollToTop(false)}
      className={`fixed right-4 sm:right-5 bottom-[76px] sm:bottom-[84px] z-50 grid h-11 w-11 place-items-center rounded-full border border-border-dark bg-charcoal text-cream shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-[opacity,transform,border-color,color] duration-300 hover:-translate-y-0.5 hover:border-amber hover:text-amber cursor-pointer ${
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'
      }`}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
