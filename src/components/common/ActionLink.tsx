import type { AnchorHTMLAttributes, ReactNode } from 'react';

import {
  DIRECTIONS_URL,
  ENQUIRY_TEXT,
  PHONE_E164,
  whatsappUrl,
} from '../../lib/contact';

type ActionKind = 'call' | 'whatsapp' | 'directions' | 'enquiry';

interface ActionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** `enquiry` is kept as an alias of `directions` for older call sites. */
  kind: ActionKind;
  /** Pre-filled WhatsApp text (whatsapp only). */
  message?: string;
  children: ReactNode;
}

function getHref(kind: ActionKind, message?: string) {
  switch (kind) {
    case 'call':
      return `tel:${PHONE_E164}`;
    case 'whatsapp':
      return whatsappUrl(message ?? ENQUIRY_TEXT);
    case 'directions':
    case 'enquiry':
      return DIRECTIONS_URL;
    default:
      return '#';
  }
}

/** Fires an analytics event if GA4 / GTM is installed; harmless otherwise. */
function track(kind: ActionKind) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  w.gtag?.('event', `click_${kind}`, { event_category: 'lead' });
  w.dataLayer?.push({ event: `click_${kind}` });
}

export function ActionLink({
  kind,
  message,
  children,
  onClick,
  ...props
}: ActionLinkProps) {
  const external = kind !== 'call';

  return (
    <a
      href={getHref(kind, message)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={(event) => {
        track(kind);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
