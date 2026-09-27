import type { AnchorHTMLAttributes, ReactNode } from 'react';

import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  ENQUIRY_TEXT,
} from '../../lib/contact';

interface ActionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  kind: 'call' | 'whatsapp' | 'enquiry';
  children: ReactNode;
}

function getHref(kind: ActionLinkProps['kind']) {
  switch (kind) {
    case 'call':
      return `tel:${PHONE_NUMBER}`;

    case 'whatsapp':
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        ENQUIRY_TEXT,
      )}`;

    case 'enquiry':
      return 'https://www.google.com/maps/dir//M%2Fs+RAMPRASAD+ENTERPRISES,+Pradyuatnagar,+Dosinga,+Pradyutanagar,+Odisha+756171/@22.0430336,88.064,6148m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3a1b77ecf4e8b789:0xd2ebcc03cba08e33!2m2!1d86.9459455!2d20.811977?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D';

    default:
      return '#';
  }
}

export function ActionLink({
  kind,
  children,
  ...props
}: ActionLinkProps) {
  return (
    <a
      href={getHref(kind)}
      {...props}
    >
      {children}
    </a>
  );
}