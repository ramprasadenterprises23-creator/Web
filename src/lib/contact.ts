/**
 * Single source of truth for business details.
 * Used by buttons, the contact form, the footer and the JSON-LD schema,
 * so the name / address / phone are always identical everywhere (good for local SEO).
 */
export const BUSINESS_NAME = 'M/s Ramprasad Enterprises';

/** 10-digit Indian mobile number, no country code. */
export const PHONE_NUMBER = '7327855715';

/**
 * WhatsApp needs the country code (wa.me/91XXXXXXXXXX).
 * The old value "727855715" had only 9 digits and no country code, so wa.me links failed.
 * ⚠️ Confirm this is the number that is actually on WhatsApp.
 */
export const WHATSAPP_NUMBER = `91${PHONE_NUMBER}`;

export const PHONE_E164 = `+91${PHONE_NUMBER}`;
export const PHONE_DISPLAY = `+91 ${PHONE_NUMBER.slice(0, 5)} ${PHONE_NUMBER.slice(5)}`;

export const ADDRESS = {
  street: 'Pradyutnagar, Dosinga',
  locality: 'Dhamara, Bhadrak',
  region: 'Odisha',
  postalCode: '756171',
  country: 'IN',
  oneLine: 'Pradyutnagar, Dosinga, Dhamara, Bhadrak, Odisha 756171',
};

export const GEO = { latitude: 20.811977, longitude: 86.9459455 };

export const MAPS_URL =
  'https://www.google.com/maps/place/M%2Fs+RAMPRASAD+ENTERPRISES/@20.811977,86.9459455,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1b77ecf4e8b789:0xd2ebcc03cba08e33!8m2!3d20.811977!4d86.9459455!16s%2Fg%2F11w9h3pdkc';

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${GEO.latitude},${GEO.longitude}`;

/** Keyless embed, works in an <iframe> without an API key. */
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${GEO.latitude},${GEO.longitude}&z=16&output=embed`;

export const ENQUIRY_TEXT =
  'Hello M/s Ramprasad Enterprises, I would like to enquire about construction materials.';

export function whatsappUrl(message: string = ENQUIRY_TEXT) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
