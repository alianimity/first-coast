"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Shield, Clock, Star, CheckCircle, DollarSign, Truck, Globe, Award } from "lucide-react";

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
              <Package className="w-12 h-12 text-[var(--brand-primary)]" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                Material Sourcing & Bundling
              </h1>
              <p className="text-lg text-[var(--brand-primary)] font-medium mt-2">
                Premium Materials, Wholesale Pricing
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Access to our extensive network of suppliers for high-quality, durable materials at contractor pricing. 
            Direct delivery to your project site with no inventory risk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">$500-$75K+</div>
              <div className="text-sm text-neutral-300">Investment Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">1-3 Weeks</div>
              <div className="text-sm text-neutral-300">Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">20-40%</div>
              <div className="text-sm text-neutral-300">Cost Savings</div>
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
                Professional Procurement
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                Our sourcing service connects you with a nationwide network of quality suppliers, offering contractor-grade 
                materials at wholesale pricing. We handle procurement, quality checks, and direct delivery, eliminating 
                the hassle and markup of retail purchasing.
              </p>
              
              <div className="space-y-4">
                {[
                  "Wholesale pricing access",
                  "Quality assurance and inspections", 
                  "Direct delivery coordination",
                  "No inventory holding required"
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
              className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-support)]/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Package className="w-24 h-24 text-neutral-300 opacity-50" />
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
              What We Source
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Comprehensive material procurement across all categories with quality guarantees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Building Materials",
                icon: Package,
                items: ["Lumber & framing", "Drywall & insulation", "Roofing materials", "Structural components"]
              },
              {
                title: "Flooring Solutions", 
                icon: Globe,
                items: ["Hardwood & engineered", "Tile & stone", "Luxury vinyl & laminate", "Carpet & padding"]
              },
              {
                title: "Kitchen & Bath",
                icon: Award,
                items: ["Cabinets & vanities", "Countertops", "Appliances", "Plumbing fixtures"]
              },
              {
                title: "Finishes & Hardware",
                icon: Star,
                items: ["Paints & stains", "Trim & molding", "Hardware & fasteners", "Lighting fixtures"]
              },
              {
                title: "Exterior Materials",
                icon: Shield,
                items: ["Siding & cladding", "Windows & doors", "Decking materials", "Outdoor fixtures"]
              },
              {
                title: "Specialty Items",
                icon: CheckCircle,
                items: ["Custom millwork", "Architectural elements", "Green/sustainable options", "Smart home components"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--brand-support)] border border-[var(--brand-primary)]/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 p-2 bg-[var(--brand-primary)]/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-lg font-medium text-white">{service.title}</h3>
                </div>
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
              <Truck className="w-5 h-5 text-[var(--brand-primary)]" />
              <h3 className="font-medium text-white">Direct Delivery</h3>
            </div>
            <p className="text-sm text-neutral-300">
              All materials ship directly from suppliers to your project site, eliminating storage needs and reducing 
              handling costs while ensuring faster project timelines.
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
              Clear markup structure with significant savings over retail pricing
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                tier: "Basic Sourcing",
                range: "$500–$3,000",
                description: "Small material bundles with 20% markup. Includes basic sourcing and delivery coordination.",
                example: "Single room materials, small hardware orders, basic fixture packages.",
                markup: "20% + $100 fee"
              },
              {
                tier: "Standard Sourcing", 
                range: "$3,001–$15,000",
                description: "Medium bundles with customization and enhanced services at 25% markup.",
                example: "Kitchen renovation materials, bathroom remodel packages, flooring for multiple rooms.",
                markup: "25% + $300 fee"
              },
              {
                tier: "Premium Sourcing",
                range: "$15,001–$75,000+", 
                description: "Large-scale procurement with full customization and project management integration.",
                example: "Whole-home materials, commercial projects, luxury finishes and custom components.",
                markup: "30-40% + $1K-$5K fee"
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
                <p className="text-sm text-neutral-400 mb-2">
                  <strong>Example:</strong> {tier.example}
                </p>
                <p className="text-sm text-[var(--brand-primary)]">
                  <strong>Pricing:</strong> {tier.markup}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[var(--brand-primary)]/10 rounded-2xl border border-[var(--brand-primary)]/20">
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-5 h-5 text-[var(--brand-primary)]" />
              <h3 className="font-medium text-white">Volume Discounts</h3>
            </div>
            <p className="text-neutral-300">
              Projects over $20,000 receive bundled service discounts (10-15% off total). 
              B2B clients get additional volume pricing for multi-unit or repeat projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Ready to Source Your Materials?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Get access to wholesale pricing and professional procurement services. 
            Let us handle the sourcing while you focus on your project.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
          >
            Get Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  );
}