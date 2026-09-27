import { useState, type ChangeEvent, type FormEvent } from 'react';

import { ActionLink } from '../common/ActionLink';

interface ContactFormData {
  name: string;
  phone: string;
  requirement: string;
  message: string;
}

const initialForm: ContactFormData = {
  name: '',
  phone: '',
  requirement: '',
  message: '',
};

const fieldClasses =
  'bg-charcoal-2 border border-border-dark rounded-sm px-3.5 py-3 text-paper text-[0.92rem] placeholder:text-slate-mist-dim focus:outline-none focus:border-rust';

export function ContactForm() {
  const [form, setForm] =
    useState<ContactFormData>(initialForm);

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <div className="bg-charcoal rounded-md p-9">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[0.82rem] font-semibold text-paper">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className={fieldClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-[0.82rem] font-semibold text-paper">
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
            className={fieldClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="requirement" className="text-[0.82rem] font-semibold text-paper">
            Material Required
          </label>

          <select
            id="requirement"
            name="requirement"
            value={form.requirement}
            onChange={handleChange}
            required
            className={fieldClasses}
          >
            <option value="">
              Select material
            </option>

            <option value="TMT Steel & Rebar">
              TMT Steel & Rebar
            </option>

            <option value="Cement">
              Cement
            </option>

            <option value="Construction Sand">
              Construction Sand
            </option>

            <option value="Stone Chips & Aggregates">
              Stone Chips & Aggregates
            </option>

            <option value="Boulders">
              Boulders
            </option>

            <option value="Bricks">
              Bricks
            </option>

            <option value="Binding Wire">
              Binding Wire
            </option>

            <option value="Other">
              Other
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[0.82rem] font-semibold text-paper">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us what materials you need..."
            rows={5}
            className={fieldClasses}
          />
        </div>

        <button
          type="submit"
          className="mt-1 bg-rust text-paper border-none rounded-sm px-6 py-3.5 font-semibold text-[0.92rem] cursor-pointer transition-colors hover:bg-rust-dark"
        >
          Send Enquiry
        </button>

        {submitted && (
          <div className="mt-1.5 p-[18px] border border-border-dark rounded-sm bg-charcoal-2" role="status">
            <p className="text-paper text-[0.9rem] mb-2.5">
              Thank you! Your enquiry has been received.
            </p>

            <ActionLink
              kind="whatsapp"
              className="text-[0.88rem] font-semibold text-amber"
            >
              Continue on WhatsApp
            </ActionLink>
          </div>
        )}
      </form>
    </div>
  );
}
