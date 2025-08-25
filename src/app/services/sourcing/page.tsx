export default function Page() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Material Sourcing & Bundling</h1>
      <p className="mt-3 text-neutral-300 max-w-[75ch]">
        Professional material procurement with coastal expertise. We curate and dropship quality materials 
        from wholesale partners directly to your project site — no inventory risk, maximum convenience.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Coastal-Ready Materials</h2>
        <p className="text-neutral-300 max-w-[75ch]">
          Our First Coast network includes suppliers who understand humid, salt-air environments. 
          Hurricane-rated windows, mold-resistant finishes, and salt-tolerant hardware that lasts.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">What We Source</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-neutral-200 mb-2">Interior Materials</h3>
            <ul className="list-disc pl-6 text-neutral-300 space-y-1 text-sm">
              <li>Humidity-resistant paints & primers</li>
              <li>Laminate, tile & luxury vinyl flooring</li>
              <li>Cabinets, countertops & hardware</li>
              <li>Lighting fixtures & ceiling fans</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-neutral-200 mb-2">Coastal Specialties</h3>
            <ul className="list-disc pl-6 text-neutral-300 space-y-1 text-sm">
              <li>Storm-rated windows & doors</li>
              <li>Salt-resistant exterior finishes</li>
              <li>Eco-friendly composites</li>
              <li>HVAC-rated materials</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Service Tiers</h2>
        <div className="space-y-4">
          <div className="p-4 border border-white/10 rounded-lg">
            <h3 className="font-medium text-[var(--brand-primary)]">Basic Bundles: $500–$3,000</h3>
            <p className="text-sm text-neutral-300 mt-1">
              Small material sets (5–20 items). 20% markup + $100 sourcing fee. 
              Basic tracking and standard delivery.
            </p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg">
            <h3 className="font-medium text-[var(--brand-primary)]">Standard Packages: $3,001–$15,000</h3>
            <p className="text-sm text-neutral-300 mt-1">
              Medium bundles with customization (20–100 items). 25% markup + $300 fee. 
              Includes insured shipping and delivery scheduling.
            </p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg">
            <h3 className="font-medium text-[var(--brand-primary)]">Premium Solutions: $15,001–$75,000+</h3>
            <p className="text-sm text-neutral-300 mt-1">
              Large, highly customized material packages. 30–40% markup + design fee. 
              Priority procurement, bulk discounts, and white-glove delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Why Choose Professional Sourcing?</h2>
        <div className="bg-white/5 rounded-lg border border-white/10 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-[var(--brand-primary)] mb-2">Wholesale Pricing</h4>
              <p className="text-neutral-400">Access to contractor rates not available to consumers</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--brand-primary)] mb-2">Quality Assurance</h4>
              <p className="text-neutral-400">Pre-vetted suppliers and materials inspection</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--brand-primary)] mb-2">Time Savings</h4>
              <p className="text-neutral-400">No shopping around — we handle coordination</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Perfect For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-neutral-200">DIY Homeowners</h4>
            <p className="text-neutral-400">Complete material kits delivered to your door</p>
          </div>
          <div>
            <h4 className="font-medium text-neutral-200">Property Investors</h4>
            <p className="text-neutral-400">Bulk orders for multi-unit projects</p>
          </div>
        </div>
      </section>
    </main>
  );
}


