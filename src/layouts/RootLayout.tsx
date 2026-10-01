import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { scrollToElement, scrollToTop } from '../lib/smoothScroll';

export default function RootLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // In-page anchors (#faq) glide there; new pages start at the top instantly.
    if (hash) {
      scrollToElement(hash);
      return;
    }
    scrollToTop(true);
  }, [pathname, hash]);

  // key remounts the page so the soft fade replays on every navigation
  return (
    <div key={pathname} className="page-enter">
      <Outlet />
    </div>
  );
}
