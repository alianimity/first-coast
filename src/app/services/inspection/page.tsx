"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Shield, Clock, Star, CheckCircle, FileText } from "lucide-react";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { RelatedServices } from "../../../components/related-services";

export default function Page() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Home Inspection & Assessment" }
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
              <Search className="w-12 h-12 text-[var(--brand-primary)]" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                Home Inspection & Assessment
              </h1>
              <p className="text-lg text-[var(--brand-primary)] font-medium mt-2">
                Professional Property Evaluations & Pre-Renovation Insights
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Make informed decisions with professional property assessments. From basic room evaluations to comprehensive 
            pre-renovation inspections, we provide detailed insights to guide your project planning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">$50-$800</div>
              <div className="text-sm text-neutral-300">Investment Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">1-3 Days</div>
              <div className="text-sm text-neutral-300">Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">Detailed Report</div>
              <div className="text-sm text-neutral-300">Comprehensive</div>
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
                Professional Property Insights
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                Our comprehensive inspections provide the detailed insights you need to make informed decisions. 
                From basic room evaluations to complete pre-renovation assessments, we deliver professional 
                documentation that protects your investment.
              </p>
              
              <div className="space-y-4">
                {[
                  "Detailed structural assessments",
                  "Comprehensive photo documentation", 
                  "Professional issue identification",
                  "Written recommendations and reports"
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
                <Search className="w-24 h-24 text-neutral-300 opacity-50" />
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
              Comprehensive inspection services designed to provide complete property insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Assessment",
                items: ["Foundation inspection", "Wall integrity check", "Roof system evaluation", "Framing analysis"]
              },
              {
                title: "Systems Evaluation", 
                items: ["HVAC overview", "Electrical assessment", "Plumbing review", "Insulation check"]
              },
              {
                title: "Safety & Compliance",
                items: ["Code compliance check", "Safety hazard identification", "Environmental concerns", "Accessibility review"]
              },
              {
                title: "Documentation",
                items: ["Comprehensive photo report", "Written findings summary", "Priority issue ranking", "Recommendation list"]
              },
              {
                title: "Pre-Renovation Focus",
                items: ["Renovation feasibility", "Potential challenges", "Budget impact analysis", "Timeline considerations"]
              },
              {
                title: "Follow-up Support",
                items: ["Report clarification", "Contractor referrals", "Priority planning", "Cost estimation guidance"]
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
              Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-300">
              Clear, upfront pricing for professional inspection services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                tier: "Basic Room Assessment",
                range: "$50–$150",
                description: "Single room evaluation for specific concerns. Includes visual inspection and basic findings report.",
                example: "Bathroom moisture assessment, bedroom ceiling evaluation, kitchen layout review."
              },
              {
                tier: "Standard Property Inspection",
                range: "$300–$500",
                description: "Comprehensive home inspection covering major systems and structural elements. Full photo documentation included.",
                example: "Complete home evaluation, HVAC assessment, electrical overview, foundation inspection."
              },
              {
                tier: "Specialized Assessment",
                range: "$150–$300",
                description: "Focused inspection for specific issues or systems. Energy efficiency, moisture, or safety evaluations.",
                example: "Energy audit, moisture inspection, pre-purchase evaluation, renovation feasibility study."
              },
              {
                tier: "Pre-Renovation Assessment",
                range: "$200–$800",
                description: "Detailed evaluation before major renovations. Includes recommendations and planning insights.",
                example: "Kitchen renovation prep, bathroom remodel planning, addition feasibility, structural modifications."
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
              <FileText className="w-5 h-5 text-[var(--brand-primary)]" />
              <h3 className="font-medium text-white">Detailed Reports</h3>
            </div>
            <p className="text-neutral-300">
              All inspections include comprehensive photo documentation and detailed written reports. 
              Add-ons: repair cost estimates (+$100), contractor referrals, and priority re-inspections after repairs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--brand-primary)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Get Professional Property Insights
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Schedule a comprehensive inspection and make informed decisions about your property. 
            Professional assessments that save time and money.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
          >
            Schedule Inspection
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      <RelatedServices currentService="inspection" />
    </main>
  );
}
