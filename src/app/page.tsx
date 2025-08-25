import { Hero } from "../components/hero";
import { ServicesGrid } from "../components/services-grid";
import { ProcessSection } from "../components/process-section";
import { QuoteForm } from "../components/quote-form";
import { Reviews } from "../components/reviews";
import { FAQ } from "../components/faq";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      
      {/* Services Overview */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Complete Remodeling Solutions
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              From planning to execution, we handle every aspect of your remodeling project nationwide
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      <ProcessSection />

      {/* Statistics Section */}
      <section className="py-24 bg-[var(--brand-primary)]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-light text-black mb-2">500+</div>
              <div className="text-sm text-black/80 uppercase tracking-wide">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-light text-black mb-2">98%</div>
              <div className="text-sm text-black/80 uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-light text-black mb-2">15+</div>
              <div className="text-sm text-black/80 uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-light text-black mb-2">24/7</div>
              <div className="text-sm text-black/80 uppercase tracking-wide">Project Support</div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <FAQ />

      {/* Quote Section */}
      <section id="quote" className="py-24 bg-[var(--brand-support)]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Start Your Project
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Tell us about your vision and location. We&apos;ll create a detailed plan and provide transparent pricing for your remodeling project, wherever you are.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
