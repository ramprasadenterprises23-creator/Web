import { useState } from 'react';

const faqs = [
  {
    question: 'What construction materials do you supply?',
    answer:
      'We supply TMT steel, cement, sand, stone chips and aggregates, boulders, bricks, binding wire and other construction materials.',
  },
  {
    question: 'Which TMT steel brands are available?',
    answer:
      'We provide options such as Tata Tiscon, Jindal Steel and SAIL, subject to current availability.',
  },
  {
    question: 'Can I enquire about material availability?',
    answer:
      'Yes. You can contact us by phone or WhatsApp to discuss your material requirements and availability.',
  },
  {
    question: 'Do you supply materials for house construction?',
    answer:
      'Yes. Our materials are suitable for residential and other construction requirements.',
  },
  {
    question: 'How can I contact Ramprasad Enterprises?',
    answer:
      'You can call us or send your enquiry through WhatsApp from the website.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFaq(index: number) {
    setOpenIndex((current) =>
      current === index ? null : index,
    );
  }

  return (
    <section className="py-[72px] border-t border-border">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
        <div className="max-w-[60ch] mb-10">
          <p className="font-mono text-[0.78rem] text-rust mb-2.5">FAQ</p>
          <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[clamp(1.8rem,2.9vw,2.55rem)] mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-steel leading-relaxed">
            Common questions about our construction materials
            and enquiries.
          </p>
        </div>

        <div className="max-w-[760px] mt-2 border-t border-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-border"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-5 bg-transparent border-none text-left py-[22px] px-1 font-display font-bold text-[1rem] text-ink cursor-pointer"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-rust text-xl leading-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-1 pb-6">
                    <p className="text-[0.95rem] max-w-[70ch] text-steel leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
