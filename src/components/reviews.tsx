type Review = {
  name: string;
  city: string;
  content: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "Sarah L.",
    city: "St. Augustine",
    content:
      "Responsive, transparent, and the cosmetic updates look incredible. Loved the communication.",
    rating: 5,
  },
  {
    name: "Mark R.",
    city: "Ponte Vedra Beach",
    content:
      "Great planning support and sourcing. Project finished on time despite weather.",
    rating: 5,
  },
  {
    name: "David M.",
    city: "Jacksonville South",
    content:
      "Fast turnover paint and logistics for 4 units. Easy to work with.",
    rating: 5,
  },
  {
    name: "Emily K.",
    city: "St. Johns",
    content:
      "Clear pricing, tidy crew, and quality finishes. Would hire again.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="w-full max-w-[1280px] mx-auto py-8 sm:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-[var(--brand-primary)]">
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className="mt-3 text-sm text-neutral-300">“{r.content}”</blockquote>
            <figcaption className="mt-3 text-sm text-neutral-400">
              {r.name} • {r.city}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}


