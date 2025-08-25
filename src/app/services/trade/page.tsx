"use client";

import { motion } from "framer-motion";
import { ArrowRight, RefreshCw, Shield, Clock, Star, CheckCircle, DollarSign, Recycle, TreePine, TrendingUp } from "lucide-react";

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
              <RefreshCw className="w-12 h-12 text-[var(--brand-primary)]" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                Trade & Barter Facilitation
              </h1>
              <p className="text-lg text-[var(--brand-primary)] font-medium mt-2">
                Sustainable Material Exchanges
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Professional valuations and logistics for material exchanges, helping reduce waste while maximizing your project budget. 
            Turn surplus materials into valuable resources for your next renovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">10-15%</div>
              <div className="text-sm text-neutral-300">Commission Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">Ongoing</div>
              <div className="text-sm text-neutral-300">Service Availability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">100%</div>
              <div className="text-sm text-neutral-300">Waste Reduction</div>
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
                Smart Material Exchange
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                Our trade and barter service connects you with a network of homeowners, contractors, and suppliers 
                to exchange surplus materials. We handle valuations, negotiations, and logistics, turning your unused 
                materials into valuable resources for your next project.
              </p>
              
              <div className="space-y-4">
                {[
                  "Professional material valuations",
                  "Extensive exchange network", 
                  "Logistics coordination and delivery",
                  "Environmental impact reduction"
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
                <RefreshCw className="w-24 h-24 text-neutral-300 opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Commission-Based Pricing
            </h2>
            <p className="text-lg text-neutral-300">
              You only pay when we successfully complete a trade
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                tier: "Basic Trades",
                range: "10% Commission",
                description: "Small material exchanges valued under $10,000. Includes basic valuation and coordination.",
                example: "Trading old cabinets for flooring materials, exchanging surplus tile for paint supplies.",
                color: "bg-neutral-50 border-neutral-200"
              },
              {
                tier: "Standard Exchanges", 
                range: "12% Commission",
                description: "Medium value trades between $10,000-$50,000 with enhanced services.",
                example: "Kitchen appliance trade for bathroom fixtures, bulk material exchanges between contractors.",
                color: "bg-blue-50 border-blue-200"
              },
              {
                tier: "Premium Trades",
                range: "15% Commission", 
                description: "High-value exchanges over $50,000 with full-service support.",
                example: "Complete room exchanges, specialty material trades, multi-party exchanges.",
                color: "bg-[var(--brand-primary)]/10 border-[var(--brand-primary)]/30"
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

          <div className="mt-8 p-6 bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Recycle className="w-5 h-5 text-[var(--brand-primary)]" />
              <h3 className="font-medium text-white">Environmental Impact</h3>
            </div>
            <p className="text-sm text-neutral-300">
              Our trade and barter service diverts thousands of pounds of construction materials from landfills annually, 
              supporting sustainable building practices and reducing environmental impact while saving you money.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Turn Surplus into Savings
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Start your material exchange today. Get a professional valuation and discover 
            how much your surplus materials are worth in trade value.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
          >
            Get Trade Valuation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  );
}