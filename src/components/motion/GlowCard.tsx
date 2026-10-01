import {
  createElement,
  type ElementType,
  type PointerEvent,
  type ReactNode,
} from 'react';

interface GlowCardProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Card with a soft spotlight that follows the cursor (champagne in dark mode,
 * ember in light). Pure CSS variables, no re-renders. Does nothing on touch.
 */
export function GlowCard({ as = 'div', className = '', children }: GlowCardProps) {
  const onMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return createElement(
    as,
    { className: `glow-card relative ${className}`, onPointerMove: onMove },
    <>
      {children}
      <span aria-hidden="true" className="glow-card__spot" />
    </>,
  );
}
