import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { ActionLink } from '../common/ActionLink';
import { BUSINESS_NAME, whatsappUrl } from '../../lib/contact';

interface ContactFormData {
  name: string;
  phone: string;
  requirement: string;
  message: string;
  /** honeypot: real visitors never see or fill this */
  website: string;
}

type Errors = Partial<Record<'name' | 'phone' | 'requirement', string>>;
type Status = 'idle' | 'submitting' | 'sent' | 'error';

const MATERIALS = [
  'TMT Steel & Rebar',
  'Cement',
  'Construction Sand',
  'Stone Chips & Aggregates',
  'Boulders',
  'Bricks',
  'Binding Wire',
  'Roofing & Construction Accessories',
  'Other',
];

const initialForm: ContactFormData = {
  name: '',
  phone: '',
  requirement: '',
  message: '',
  website: '',
};

/**
 * Optional: set VITE_FORM_ENDPOINT (e.g. a Formspree / Getform / your own API URL)
 * to also store every enquiry. Without it the form opens WhatsApp with the enquiry
 * pre-filled, so a lead is never silently lost.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

// [always-dark surface] -> color-scheme:dark keeps the native <select> list readable in light mode too
const fieldClasses =
  '[color-scheme:dark] w-full bg-charcoal-2 border border-border-dark rounded-sm px-3.5 py-3 text-cream text-[0.92rem] placeholder:text-slate-mist-dim transition-colors focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/30 aria-[invalid=true]:border-destructive';

/** Accepts 98765 43210, +91 98765-43210, 0987…, returns 10 digits or null. */
function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '');
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

function validate(form: ContactFormData): Errors {
  const errors: Errors = {};
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!normalisePhone(form.phone))
    errors.phone = 'Enter a valid 10-digit mobile number.';
  if (!form.requirement) errors.requirement = 'Please choose a material.';
  return errors;
}

function buildMessage(form: ContactFormData, phone: string) {
  return [
    `Hello ${BUSINESS_NAME}, I would like to enquire.`,
    '',
    `Name: ${form.name.trim()}`,
    `Phone: ${phone}`,
    `Material: ${form.requirement}`,
    form.message.trim() ? `Details: ${form.message.trim()}` : '',
  ]
    .filter((line, i, arr) => line !== '' || arr[i - 1] !== '')
    .join('\n');
}

export function ContactForm() {
  const [params] = useSearchParams();
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  // Product page links here with ?product=…&type=…&size=…&qty=… → prefill the enquiry
  useEffect(() => {
    const product = params.get('product');
    if (!product) return;

    const details = [
      params.get('type') && `Type: ${params.get('type')}`,
      params.get('size') && `Size: ${params.get('size')}`,
      params.get('qty') && `Quantity: ${params.get('qty')}`,
    ].filter(Boolean);

    setForm((current) => ({
      ...current,
      requirement: MATERIALS.includes(product) ? product : current.requirement || 'Other',
      message:
        current.message ||
        `I am interested in ${product}${details.length ? ` (${details.join(', ')})` : ''}.`,
    }));
  }, [params]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    // Bots fill hidden fields; pretend success and drop it.
    if (form.website) {
      setStatus('sent');
      return;
    }

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    const phone = normalisePhone(form.phone) as string;
    const message = buildMessage(form, phone);

    if (!FORM_ENDPOINT) {
      // No backend configured: hand the enquiry to WhatsApp so it actually reaches the shop.
      window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
      setStatus('sent');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone,
          requirement: form.requirement,
          message: form.message.trim(),
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus('sent');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  }

  const fieldError = (key: keyof Errors) =>
    errors[key] ? (
      <p id={`${key}-error`} className="text-[0.8rem] text-destructive" role="alert">
        {errors[key]}
      </p>
    ) : null;

  const describedBy = (key: keyof Errors) =>
    errors[key] ? `${key}-error` : undefined;

  return (
    <div className="bg-charcoal rounded-md p-6 sm:p-9 border border-border-dark">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[0.82rem] font-semibold text-cream">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={describedBy('name')}
            required
            className={fieldClasses}
          />
          {fieldError('name')}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-[0.82rem] font-semibold text-cream">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy('phone')}
            required
            className={fieldClasses}
          />
          {fieldError('phone')}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="requirement" className="text-[0.82rem] font-semibold text-cream">
            Material required
          </label>
          <select
            id="requirement"
            name="requirement"
            value={form.requirement}
            onChange={handleChange}
            aria-invalid={!!errors.requirement}
            aria-describedby={describedBy('requirement')}
            required
            className={fieldClasses}
          >
            <option value="">Select material</option>
            {MATERIALS.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
          {fieldError('requirement')}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[0.82rem] font-semibold text-cream">
            Message <span className="font-normal text-slate-mist-dim">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Quantity, delivery location, brand preference…"
            rows={5}
            maxLength={1000}
            className={fieldClasses}
          />
        </div>

        {/* honeypot, hidden from people and assistive tech */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-1 bg-rust text-primary-foreground border-none rounded-sm px-6 py-3.5 font-semibold text-[0.92rem] cursor-pointer transition-colors hover:bg-rust-dark btn-shine disabled:cursor-wait disabled:opacity-70"
        >
          {status === 'submitting'
            ? 'Sending…'
            : FORM_ENDPOINT
              ? 'Send enquiry'
              : 'Send enquiry on WhatsApp'}
        </button>

        <div aria-live="polite">
          {status === 'sent' && (
            <div
              className="mt-1.5 p-[18px] border border-border-dark rounded-sm bg-charcoal-2"
              role="status"
            >
              <p className="text-cream text-[0.9rem] mb-2.5">
                {FORM_ENDPOINT
                  ? 'Thank you! Your enquiry has been received. We will call you back soon.'
                  : 'WhatsApp should have opened with your enquiry. Press send there and we will reply soon.'}
              </p>
              <ActionLink
                kind="whatsapp"
                className="text-[0.88rem] font-semibold text-amber"
              >
                Open WhatsApp again
              </ActionLink>
            </div>
          )}

          {status === 'error' && (
            <div
              className="mt-1.5 p-[18px] border border-destructive/50 rounded-sm bg-charcoal-2"
              role="alert"
            >
              <p className="text-cream text-[0.9rem] mb-2.5">
                Sorry, we could not send that. Your details are still here, so you can try
                again, or reach us directly:
              </p>
              <div className="flex flex-wrap gap-4 text-[0.88rem] font-semibold text-amber">
                <ActionLink kind="call">Call us</ActionLink>
                <ActionLink kind="whatsapp">WhatsApp us</ActionLink>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
