const faqs = [
  {
    q: "Do you handle permits and licensed trades?",
    a: "We focus on cosmetic work that keeps liability low. When permits or specialized trades (electrical, plumbing, structural) are needed, we coordinate licensed Florida subcontractors and pass through permit fees. All jobs over $2,500 require permits per St. Johns County Building Services.",
  },
  {
    q: "What areas do you serve?",
    a: "Primarily St. Johns County including St. Augustine, Ponte Vedra Beach, and surrounding First Coast communities. We also serve Jacksonville South and can discuss projects in nearby Duval and Nassau counties.",
  },
  {
    q: "How does your pricing work?",
    a: "Transparent three-tier pricing (Basic/Standard/Premium) with clear inclusions and exclusions. Labor rates range from $50-$100/hour plus material markups of 20-40%. Bundled services offer 10-20% savings. All quotes include site visit fees and permit costs.",
  },
  {
    q: "What's the typical project timeline?",
    a: "Small jobs: 1–2 weeks. Medium projects: 2–6 weeks. Large cosmetic remodels: 1–3 months. We build weather buffers into Florida schedules and provide milestone updates with photos throughout the project.",
  },
  {
    q: "What makes you different from other contractors?",
    a: "Our hybrid model combines planning, sourcing, and hands-on execution with coastal expertise. We specialize in humidity-resistant, salt-air appropriate materials and understand First Coast challenges like historic preservation and hurricane building codes.",
  },
  {
    q: "Do you offer warranties and guarantees?",
    a: "Yes! We provide 1-year workmanship warranties on all hands-on projects, free touch-ups within 30 days, and satisfaction guarantees. Our materials come with manufacturer warranties that we help coordinate.",
  },
  {
    q: "Can you help with storm-resistant upgrades?",
    a: "Absolutely. We specialize in hurricane-rated materials, mold-resistant finishes, and storm-durable fixtures designed for Florida's coastal environment. We can also advise on PACE financing for energy-efficient upgrades.",
  },
  {
    q: "What about historic homes in St. Augustine?",
    a: "We have experience with historic district compliance and preservation requirements. Our planning service includes guidance on approved materials and processes to maintain historic character while improving functionality.",
  },
];

export function FAQ(): JSX.Element {
  return (
    <section className="w-full max-w-[1280px] mx-auto py-8 sm:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">FAQs</h2>
      <div className="divide-y divide-white/10 border border-white/10 rounded-lg overflow-hidden">
        {faqs.map((f) => (
          <details key={f.q} className="group bg-white/[0.03] open:bg-white/[0.05]">
            <summary className="cursor-pointer list-none flex items-center justify-between px-4 py-3">
              <span className="font-medium">{f.q}</span>
              <span className="transition-transform group-open:rotate-90">›</span>
            </summary>
            <div className="px-4 pb-4 text-neutral-300 text-sm">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}


