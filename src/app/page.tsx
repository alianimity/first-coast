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

      {/* Statistics & Trust Signals Section */}
      <section className="py-24 bg-[var(--brand-primary)]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Trusted by Homeowners Nationwide
            </h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              Licensed, insured, and certified professionals delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-4xl lg:text-5xl font-light text-black mb-2">1,250+</div>
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

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Fully Licensed</h3>
              <p className="text-sm text-black/70">Licensed contractors in all 50 states with current certifications</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Fully Insured</h3>
              <p className="text-sm text-black/70">$2M+ liability coverage and workers&apos; compensation protection</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Certified Professionals</h3>
              <p className="text-sm text-black/70">EPA, OSHA, and manufacturer certified technicians</p>
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
