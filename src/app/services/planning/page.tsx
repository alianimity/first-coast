"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Shield, Star, CheckCircle, DollarSign, FileText, Zap, Target } from "lucide-react";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { RelatedServices } from "../../../components/related-services";

export default function Page() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Project Planning" }
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
              <Lightbulb className="w-12 h-12 text-[var(--brand-primary)]" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                Project Planning & Consulting
              </h1>
              <p className="text-lg text-[var(--brand-primary)] font-medium mt-2">
                Strategic Design & Expert Guidance
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Comprehensive planning services that set your project up for success with detailed designs, accurate budgets, 
            and regulatory expertise. Plan smart before you build.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">$500-$20K+</div>
              <div className="text-sm text-neutral-300">Investment Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">1-4 Weeks</div>
              <div className="text-sm text-neutral-300">Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">100%</div>
              <div className="text-sm text-neutral-300">Accuracy</div>
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
                Plan for Success
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                We understand nationwide building challenges: local codes, permit requirements, material considerations, 
                and cost optimization. Our planning service ensures your project is set up for success from day one.
              </p>
              
              <div className="space-y-4">
                {[
                  "Custom 3D designs and visualizations",
                  "Accurate budget estimates and timelines", 
                  "Building code compliance guidance",
                  "Material specifications and sourcing"
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
                <Lightbulb className="w-24 h-24 text-neutral-300 opacity-50" />
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
              What We Deliver
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Comprehensive planning services designed to eliminate surprises and ensure project success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Design & Visualization",
                icon: FileText,
                items: ["Custom remodel designs", "3D renderings via CAD", "Material recommendations", "Layout optimization"]
              },
              {
                title: "Budget & Timeline", 
                icon: DollarSign,
                items: ["Detailed cost breakdowns", "Timeline planning", "Contingency planning", "ROI analysis"]
              },
              {
                title: "Compliance & Permits",
                icon: Shield,
                items: ["Building code guidance", "Permit requirements", "Regulatory compliance", "Inspection scheduling"]
              },
              {
                title: "Material Planning",
                icon: Target,
                items: ["Specifications", "Sourcing strategy", "Quality standards", "Delivery coordination"]
              },
              {
                title: "Project Strategy",
                icon: Zap,
                items: ["Milestone planning", "Risk assessment", "Contractor coordination", "Quality control"]
              },
              {
                title: "Documentation",
                icon: CheckCircle,
                items: ["Detailed plans", "Specifications", "Contracts", "Progress tracking"]
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

          <div className="mt-12 p-6 bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-5 h-5 text-[var(--brand-primary)]" />
              <h3 className="font-medium text-white">Why Plan First?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-white mb-2">Avoid Costly Mistakes</h4>
                <p className="text-neutral-300">Catch design flaws and code issues before construction begins</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Accurate Budgets</h4>
                <p className="text-neutral-300">Detailed cost breakdowns prevent surprise overruns</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Faster Execution</h4>
                <p className="text-neutral-300">Clear plans mean smoother project delivery</p>
              </div>
            </div>
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
              Clear, upfront pricing for expert planning services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                tier: "Basic Consultation",
                range: "$500–$1,500",
                description: "1–2 sessions with basic report and digital sketch. Perfect for simple projects and DIY planning.",
                example: "Single room renovation, basic layout planning, preliminary budget estimates."
              },
              {
                tier: "Standard Planning", 
                range: "$1,501–$5,000",
                description: "3–5 hours of detailed analysis with 3D renders and comprehensive budget breakdowns.",
                example: "Multi-room renovations, kitchen/bathroom remodels, permit coordination and detailed timelines."
              },
              {
                tier: "Premium Design",
                range: "$5,001–$20,000+", 
                description: "Ongoing support, full-home designs, retainer model with comprehensive project management.",
                example: "Whole-home renovations, commercial projects, ongoing consultation throughout construction."
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
              Planning services combined with execution receive 10–20% discounts. Add-ons: permit filing assistance (+$500), 
              sustainability audits (+15%), ongoing project management integration available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Ready to Plan Your Project?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Get expert planning and design services that set your project up for success. 
            Professional guidance from concept to completion.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
          >
            Start Planning Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices currentService="planning" />
    </main>
  );
}