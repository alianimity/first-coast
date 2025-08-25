"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette, Shield, Clock, Star, CheckCircle, DollarSign } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-support)]/20 to-[var(--brand-primary)]/10" />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="p-4 bg-[var(--brand-primary)]/10 rounded-2xl">
              <Palette className="w-12 h-12 text-[var(--brand-primary)]" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                Cosmetic Remodeling & Repair
              </h1>
              <p className="text-lg text-[var(--brand-primary)] font-medium mt-2">
                Transform Spaces with Expert Craftsmanship
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Expert hands-on execution with coastal-grade materials designed for Florida's unique environment. 
            From fresh paint to stunning backsplashes, we transform spaces with precision and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">$1K-$50K+</div>
              <div className="text-sm text-neutral-300">Investment Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">1-8 Weeks</div>
              <div className="text-sm text-neutral-300">Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">1 Year</div>
              <div className="text-sm text-neutral-300">Warranty</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[var(--brand-support)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
                Our Coastal Expertise
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                We specialize in materials and techniques that thrive in Florida's humid, salt-air environment. 
                Every choice we make is informed by coastal conditions, ensuring your investment stands the test of time.
              </p>
              
              <div className="space-y-4">
                {[
                  "Mold-resistant paints and finishes",
                  "Humidity-proof flooring solutions", 
                  "Storm-durable fixtures and hardware",
                  "Salt-air resistant materials"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--brand-primary)]" />
                    <span className="text-neutral-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-support)]/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Palette className="w-24 h-24 text-neutral-300 opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              What's Included
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Comprehensive cosmetic remodeling services designed for coastal durability and aesthetic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Painting & Finishes",
                items: ["Interior & exterior painting", "Mold-resistant primer", "Custom color matching", "Texture applications"]
              },
              {
                title: "Flooring Solutions", 
                items: ["Luxury vinyl & laminate", "Tile installation", "Coastal-grade adhesives", "Moisture barriers"]
              },
              {
                title: "Fixture Upgrades",
                items: ["Lighting replacements", "Ceiling fans", "Plumbing fixtures", "Cabinet hardware"]
              },
              {
                title: "Cabinet Services",
                items: ["Cabinet refacing", "Door & drawer replacement", "Hardware upgrades", "Custom painting"]
              },
              {
                title: "Tile & Backsplash",
                items: ["Kitchen backsplashes", "Bathroom surrounds", "Accent walls", "Grout & sealing"]
              },
              {
                title: "Finishing Details",
                items: ["Trim & molding", "Drywall repair", "Site preparation", "Complete cleanup"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--brand-support)] border border-[var(--brand-primary)]/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-medium text-white mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                      <span className="text-sm text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-[var(--brand-primary)]" />
              <h3 className="font-medium text-white">Important Safety Notice</h3>
            </div>
            <p className="text-sm text-neutral-300">
              High-risk elements like electrical wiring, plumbing rerouting, or structural changes 
              are outsourced to licensed subcontractors with our oversight and coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-[var(--brand-support)]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-300">
              Clear, upfront pricing with coastal-grade materials included
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                tier: "Basic Tier",
                range: "$1,000–$5,000",
                description: "Single-room painting, fixture swaps, minor repairs. Includes labor at $50–$75/hour plus materials.",
                example: "One bedroom + bathroom paint refresh, new light fixtures, minor drywall touch-ups."
              },
              {
                tier: "Standard Tier", 
                range: "$5,000–$15,000",
                description: "Multi-room improvements with quality materials and comprehensive scope.",
                example: "Kitchen cabinet refacing, backsplash tile, new flooring in main areas, comprehensive paint package."
              },
              {
                tier: "Premium Tier",
                range: "$15,000–$50,000+", 
                description: "Whole-home cosmetic renovations with luxury finishes and designer touches.",
                example: "Complete interior painting, premium flooring throughout, custom trim work, designer fixtures, multiple bathroom updates."
              }
            ].map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-[var(--brand-primary)]/20 bg-[var(--brand-support)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-white">{tier.tier}</h3>
                  <div className="text-2xl font-bold text-[var(--brand-primary)]">{tier.range}</div>
                </div>
                <p className="text-neutral-300 mb-3">{tier.description}</p>
                <p className="text-sm text-neutral-400">
                  <strong>Example:</strong> {tier.example}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[var(--brand-primary)]/10 rounded-2xl border border-[var(--brand-primary)]/20">
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-5 h-5 text-[var(--brand-primary)]" />
              <h3 className="font-medium text-white">Bundled Savings</h3>
            </div>
            <p className="text-neutral-300">
              Multi-room projects receive 10–15% discounts. All pricing includes coastal-grade materials 
              and comprehensive cleanup with 1-year workmanship warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Our Process
            </h2>
            <p className="text-lg text-neutral-300">
              From initial consultation to final walkthrough, we ensure every detail is perfect
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Site Assessment & Quote",
                description: "On-site evaluation, material recommendations, detailed proposal with coastal considerations.",
                timeline: "2–3 days"
              },
              {
                step: "2", 
                title: "Material Procurement",
                description: "Order coastal-appropriate materials, coordinate delivery schedules, prepare site logistics.",
                timeline: "3–7 days"
              },
              {
                step: "3",
                title: "Execution & Updates", 
                description: "Daily progress photos, milestone check-ins, quality control, continuous communication.",
                timeline: "1–6 weeks"
              },
              {
                step: "4",
                title: "Final Walkthrough",
                description: "Quality inspection, touch-ups, warranty activation, maintenance guidelines and documentation.",
                timeline: "1 day"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] text-black text-lg font-medium flex items-center justify-center flex-shrink-0">
                  {process.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-xl font-medium text-white">{process.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <Clock className="w-4 h-4" />
                      {process.timeline}
                    </div>
                  </div>
                  <p className="text-neutral-300">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Get a detailed quote for your cosmetic remodeling project. We'll assess your space, 
            recommend coastal-appropriate materials, and provide transparent pricing.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
          >
            Get Your Quote Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  );
}


