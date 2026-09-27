import { Meta } from '../components/common/Meta';
import { PageHero } from '../components/common/PageHero';
import { LocalCta } from '../components/common/LocalCta';

export function About() {
  return (
    <>
      <Meta
        title="About Ramprasad Enterprises | Construction Materials"
        description="Learn about Ramprasad Enterprises and our construction material supply services."
      />

      <PageHero
        title="About Ramprasad Enterprises"
        description="A construction materials supplier focused on dependable products and service."
      />

      <section className="py-72px">
  <div className="w-full max-w-1180px mx-auto px-6 md:px-12">
    <div className="grid md:grid-cols-[380px_1fr] gap-10 md:gap-16 items-center">
      
      {/* Photo */}
      <div className="relative">
        <div className="aspect-[4/5] w-full max-w-380px overflow-hidden rounded-2xl bg-steel/10">
          <img
            src="/images/subash-bera.jpg" // TODO: replace with actual photo path
            alt="Subash Bera, Founder of Ramprasad Enterprises"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-steel/70 mb-3 block">
          Founder & Proprietor
        </span>

        <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[clamp(1.8rem,2.9vw,2.55rem)] mb-4">
          Subash Bera
        </h2>

        <p className="text-steel leading-relaxed max-w-62ch mb-4">
          {/* TODO: 1–2 sentence intro — who he is, how long he's been in the
          construction materials business, what drives him */}
          Subash Bera founded Ramprasad Enterprises to supply reliable,
          quality construction materials for residential and other
          construction requirements.
        </p>

        <p className="text-steel leading-relaxed max-w-62ch mb-6">
          {/* TODO: what the business offers, under his lead */}
          Under his leadership, the company provides materials including TMT
          steel, cement, sand, stone chips, aggregates, boulders, bricks,
          binding wire and other construction accessories — built on a
          reputation for trust and timely delivery.
        </p>

        {/* Optional highlight stats — fill in real numbers or remove */}
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="font-display font-bold text-2xl text-ink">XX+</p>
            <p className="text-steel text-sm">Years of Experience</p>
          </div>
          <div>
            <p className="font-display font-bold text-2xl text-ink">XXX+</p>
            <p className="text-steel text-sm">Projects Supplied</p>
          </div>
          <div>
            <p className="font-display font-bold text-2xl text-ink">X</p>
            <p className="text-steel text-sm">Material Categories</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <LocalCta
        title="Have a construction requirement?"
        description="Contact Ramprasad Enterprises to discuss the materials required for your project."
      />
    </>
  );
}
