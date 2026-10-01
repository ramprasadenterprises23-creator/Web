import { useEffect } from 'react';
import { initSmoothScroll } from '../../lib/smoothScroll';

/** Mount once, near the root. Renders nothing. */
export function SmoothScroll() {
  useEffect(() => initSmoothScroll(), []);
  return null;
}
