import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center gradient-navy-radial overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-noise" />
      <div className="container-lg relative text-center py-32">
        {/* Large 404 */}
        <p className="font-mono text-[120px] sm:text-[180px] font-bold text-white/5 leading-none select-none">
          404
        </p>
        <div className="-mt-20 sm:-mt-28">
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Signal not found
          </h1>
          <p className="mt-4 text-lg text-gray-400 font-body max-w-md mx-auto">
            Our 51 data sources couldn&apos;t locate this page. It may have been
            moved, renamed, or never existed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" size="lg">
              Back to homepage
            </Button>
            <Button href="/demo" variant="outline_white" size="lg">
              Book a demo
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Link
              href="/features"
              className="text-sm text-gray-400 hover:text-white transition-colors font-body"
            >
              Features
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/pricing"
              className="text-sm text-gray-400 hover:text-white transition-colors font-body"
            >
              Pricing
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/contact"
              className="text-sm text-gray-400 hover:text-white transition-colors font-body"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
