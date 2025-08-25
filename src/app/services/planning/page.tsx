export default function Page() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Project Planning & Consulting</h1>
      <p className="mt-3 text-neutral-300 max-w-[75ch]">
        Expert advisory services that set your project up for success. From custom designs and 3D renderings 
        to budget estimates and regulatory guidance, we help you plan smart before you build.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Coastal Planning Expertise</h2>
        <p className="text-neutral-300 max-w-[75ch]">
          We understand Florida's unique challenges: flood zones, hurricane building codes, historic preservation 
          requirements in St. Augustine, and the salt-air considerations for coastal properties.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">What We Deliver</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-neutral-200 mb-2">Design & Visualization</h3>
            <ul className="list-disc pl-6 text-neutral-300 space-y-1 text-sm">
              <li>Custom remodel designs</li>
              <li>3D renderings via Home Designer/CAD</li>
              <li>Material recommendations</li>
              <li>Layout optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-neutral-200 mb-2">Compliance & Logistics</h3>
            <ul className="list-disc pl-6 text-neutral-300 space-y-1 text-sm">
              <li>Florida building code guidance</li>
              <li>Historic district compliance</li>
              <li>Permit requirements assessment</li>
              <li>Timeline & milestone planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Service Tiers</h2>
        <div className="space-y-4">
          <div className="p-4 border border-white/10 rounded-lg">
            <h3 className="font-medium text-[var(--brand-primary)]">Basic Consultation: $500–$1,500</h3>
            <p className="text-sm text-neutral-300 mt-1">
              1–2 sessions with basic report and digital sketch. Includes 1-hour virtual consultation 
              and preliminary budget estimate.
            </p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg">
            <h3 className="font-medium text-[var(--brand-primary)]">Standard Planning: $1,501–$5,000</h3>
            <p className="text-sm text-neutral-300 mt-1">
              3–5 hours of detailed analysis with 3D renders and comprehensive budget breakdowns. 
              Includes site visit and follow-up support.
            </p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg">
            <h3 className="font-medium text-[var(--brand-primary)]">Premium Design: $5,001–$20,000+</h3>
            <p className="text-sm text-neutral-300 mt-1">
              Ongoing support, full-home designs, retainer model. Add-ons: permit filing assistance (+$500), 
              sustainability audits (+15%).
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Why Plan First?</h2>
        <div className="bg-white/5 rounded-lg border border-white/10 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-[var(--brand-primary)] mb-2">Avoid Costly Mistakes</h4>
              <p className="text-neutral-400">Catch design flaws and code issues before construction begins</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--brand-primary)] mb-2">Accurate Budgets</h4>
              <p className="text-neutral-400">Detailed cost breakdowns prevent surprise overruns</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--brand-primary)] mb-2">Faster Execution</h4>
              <p className="text-neutral-400">Clear plans mean smoother project delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Perfect For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-neutral-200">DIY Homeowners</h4>
            <p className="text-neutral-400">Get professional plans to execute yourself</p>
          </div>
          <div>
            <h4 className="font-medium text-neutral-200">Property Developers</h4>
            <p className="text-neutral-400">Detailed bids and plans for client proposals</p>
          </div>
        </div>
      </section>
    </main>
  );
}


