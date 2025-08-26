"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench, Shield, Clock, Star, CheckCircle, Calendar } from "lucide-react";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { RelatedServices } from "../../../components/related-services";

export default function Page() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Maintenance & Repair Services" }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-neutral-900 pt-20">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

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
              <Wrench className="w-12 h-12 text-[var(--brand-primary)]" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                Maintenance & Repair Services
              </h1>
              <p className="text-lg text-[var(--brand-primary)] font-medium mt-2">
                Keep Your Home in Perfect Condition Year-Round
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            From quick fixes to ongoing maintenance plans, we keep your home running smoothly. 
            Professional repairs and preventive maintenance that protect your investment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">$75-$2K+</div>
              <div className="text-sm text-neutral-300">Investment Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">Same Day</div>
              <div className="text-sm text-neutral-300">Emergency Response</div>
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
                Protect Your Investment
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                Regular maintenance prevents small issues from becoming expensive problems. Our comprehensive 
                maintenance and repair services keep your home looking beautiful and functioning perfectly, 
                protecting your investment for years to come.
              </p>
              
              <div className="space-y-4">
                {[
                  "Emergency and same-day service available",
                  "Preventive maintenance programs", 
                  "Seasonal preparation services",
                  "1-year warranty on all repair work"
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
              className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-2xl overflow-hidden relative border border-neutral-600"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-support)]/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Wrench className="w-24 h-24 text-neutral-300 opacity-50" />
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
              What&apos;s Included
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Comprehensive maintenance and repair services to keep your home in perfect condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quick Repairs",
                items: ["Caulking & sealing", "Paint touch-ups", "Hardware adjustments", "Minor drywall fixes"]
              },
              {
                title: "Emergency Services", 
                items: ["Leak repairs", "Broken fixtures", "Door/window issues", "Safety repairs"]
              },
              {
                title: "Seasonal Maintenance",
                items: ["Gutter cleaning", "Weatherproofing", "HVAC filter change", "Preventive inspections"]
              },
              {
                title: "Preventive Care",
                items: ["Regular inspections", "System maintenance", "Wear & tear prevention", "Early issue detection"]
              },
              {
                title: "Annual Plans",
                items: ["Scheduled visits", "Priority service", "Maintenance reminders", "Service discounts"]
              },
              {
                title: "Warranty Support",
                items: ["1-year repair warranty", "Follow-up service", "Quality guarantee", "Customer support"]
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
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                      <span className="text-sm text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-[var(--brand-support)]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Flexible Service Options
            </h2>
            <p className="text-lg text-neutral-300">
              From quick fixes to comprehensive maintenance plans
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                tier: "Minor Repairs",
                range: "$75–$300",
                description: "Quick fixes and touch-ups for common household issues. Perfect for small problems before they become big ones.",
                example: "Caulking refresh, paint touch-ups, loose handles, small drywall repairs, weatherstripping."
              },
              {
                tier: "Seasonal Maintenance",
                range: "$150–$500",
                description: "Preventive maintenance to protect your home through different seasons. Quarterly or bi-annual service options.",
                example: "Gutter cleaning, HVAC filter replacement, caulk inspection, weatherproofing, minor repairs."
              },
              {
                tier: "Emergency Repairs",
                range: "$100–$800",
                description: "Urgent repair services for unexpected issues. Same-day or next-day response for critical problems.",
                example: "Leak repairs, broken fixtures, door/window issues, emergency weatherproofing, safety repairs."
              },
              {
                tier: "Annual Maintenance Plans",
                range: "$200–$2,000/year",
                description: "Comprehensive yearly maintenance programs with scheduled visits and priority emergency service.",
                example: "Monthly inspections, seasonal prep, priority repairs, preventive maintenance, discounted services."
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
                  <strong>Includes:</strong> {tier.example}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[var(--brand-primary)]/10 rounded-2xl border border-[var(--brand-primary)]/20">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-[var(--brand-primary)]" />
              <h3 className="font-medium text-white">Annual Plans Available</h3>
            </div>
            <p className="text-neutral-300">
              Save 15–25% with annual maintenance plans. Includes priority emergency service, 
              seasonal reminders, scheduled visits, and complimentary minor touch-ups throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--brand-primary)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Keep Your Home in Perfect Condition
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Schedule maintenance services or get a quick repair done today. 
            Protect your investment with professional care.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
          >
            Schedule Service
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      <RelatedServices currentService="maintenance" />
    </main>
  );
}
