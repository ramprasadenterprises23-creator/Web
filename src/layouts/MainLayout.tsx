import type { ReactNode } from 'react';
import { MessageCircle} from 'lucide-react';

import { ActionLink } from '../components/common/ActionLink';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { BackToTop } from '../components/motion/BackToTop';
import { RevealObserver } from '../components/motion/RevealObserver';
import { ScrollProgress } from '../components/motion/ScrollProgress';
import { SmoothScroll } from '../components/motion/SmoothScroll';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Keyboard / screen-reader users can jump past the navigation */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-rust focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SmoothScroll />
      <RevealObserver />
      <ScrollProgress />

      <Header />

      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>

      <Footer />

            <BackToTop />

      {/* Floating WhatsApp button (all screen sizes) */}
      <ActionLink
        kind="whatsapp"
        aria-label="Chat with us on WhatsApp"
        data-no-print
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 bg-rust text-primary-foreground px-5 py-3.5 rounded-full text-[0.85rem] font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-rust-dark"
      >
        <MessageCircle size={16} aria-hidden="true" />
        WhatsApp
      </ActionLink>
    </div>
  );
}