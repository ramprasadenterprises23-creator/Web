import type { ReactNode } from 'react';

import { ActionLink } from '../components/common/ActionLink';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />

      <ActionLink
        kind="whatsapp"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 bg-rust text-paper px-5 py-3.5 rounded-full text-[0.85rem] font-semibold shadow-[0_8px_24px_rgba(28,27,24,0.28)]"
      >
        WhatsApp
      </ActionLink>
    </div>
  );
}
