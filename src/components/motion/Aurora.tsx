/**
 * Slow drifting colour glow for hero / CTA backgrounds.
 * Subtle in light mode, richer in dark. Decorative only (aria-hidden, no pointer events).
 */
export function Aurora({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`aurora pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span className="aurora__blob aurora__blob--a" />
      <span className="aurora__blob aurora__blob--b" />
      <span className="aurora__blob aurora__blob--c" />
    </div>
  );
}
