import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Meta } from '../components/common/Meta';

const eyebrowClasses =
  "inline-flex items-center gap-2 text-rust mb-4 before:content-[''] before:w-3.5 before:h-px before:bg-rust";

export function NotFound() {
  return (
    <>
      <Meta
        title="Page not found | M/s Ramprasad Enterprises"
        description="The page you requested could not be found."
      />

      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12 min-h-[60vh] flex items-center py-20">
        <div>
          <div className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}>
            404 / Not found
          </div>

          <h1 className="font-display font-bold leading-none text-border text-[clamp(3.5rem,8vw,6rem)] mb-1">
            404
          </h1>

          <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[clamp(1.8rem,2.9vw,2.55rem)] mb-3.5">
            This page did not make it to site.
          </h2>

          <p className="text-steel mb-6">
            The address may have changed. The materials catalogue
            is still here.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2.5 mt-5 text-[0.92rem] font-semibold px-6 py-3.5 rounded-sm border border-transparent bg-rust text-paper shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_6px_16px_-8px_rgba(181,69,29,0.55)] transition-colors hover:bg-rust-dark"
          >
            Back to home
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
