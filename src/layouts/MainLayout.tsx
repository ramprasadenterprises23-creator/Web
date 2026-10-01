import type { ReactNode } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

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

      {/* Desktop / tablet: floating WhatsApp button */}
      <ActionLink
        kind="whatsapp"
        aria-label="Chat with us on WhatsApp"
        data-no-print
        className="fixed right-5 bottom-5 z-50 hidden sm:inline-flex items-center gap-2 bg-rust text-primary-foreground px-5 py-3.5 rounded-full text-[0.85rem] font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-rust-dark"
      >
        <MessageCircle size={16} aria-hidden="true" />
        WhatsApp
      </ActionLink>

      {/* Mobile: one-tap Call / WhatsApp bar (most local leads come from phones) */}
      <div
        data-no-print
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border-dark bg-border-dark sm:hidden pb-[env(safe-area-inset-bottom)]"
      >
        <ActionLink
          kind="call"
          className="flex items-center justify-center gap-2 bg-charcoal py-3.5 text-[0.9rem] font-semibold text-cream"
        >
          <Phone size={16} className="text-amber" aria-hidden="true" />
          Call
        </ActionLink>
        <ActionLink
          kind="whatsapp"
          className="flex items-center justify-center gap-2 bg-rust py-3.5 text-[0.9rem] font-semibold text-primary-foreground"
        >
          <MessageCircle size={16} aria-hidden="true" />
          WhatsApp
        </ActionLink>
      </div>
    </div>
  );
}
