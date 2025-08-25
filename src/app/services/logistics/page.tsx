"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, CheckCircle, Calendar, Users, Target, Clock, Star, Shield, DollarSign } from "lucide-react";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { RelatedServices } from "../../../components/related-services";

export default function Page() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Logistics Management" }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-neutral-900 pt-20">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */>
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
              <Truck className="w-12 h-12 text-[var(--brand-primary)]" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                Logistics & Project Management
              </h1>
              <p className="text-lg text-[var(--brand-primary)] font-medium mt-2">
                Seamless Coordination & Execution
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            End-to-end project management ensuring every detail is coordinated, from material delivery to final walkthrough. 
            Your single point of contact for seamless project execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">$500-$30K+</div>
              <div className="text-sm text-neutral-300">Investment Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">Full Duration</div>
              <div className="text-sm text-neutral-300">Project Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">24/7</div>
              <div className="text-sm text-neutral-300">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[var(--brand-support)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
                Complete Project Coordination
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                Our logistics and project management service ensures every aspect of your remodeling project runs smoothly. 
                From initial scheduling to final inspections, we coordinate all moving parts so you can focus on your vision 
                while we handle the execution details.
              </p>
              
              <div className="space-y-4">
                {[
                  "Timeline coordination and scheduling",
                  "Subcontractor management and oversight", 
                  "Material delivery and inventory tracking",
                  "Quality control and progress monitoring"
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
                <Truck className="w-24 h-24 text-neutral-300 opacity-50" />
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
              Comprehensive Management
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Full-service project coordination covering every aspect of your remodeling project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Timeline Management",
                icon: Calendar,
                items: ["Project scheduling", "Milestone tracking", "Deadline coordination", "Buffer planning"]
              },
              {
                title: "Subcontractor Coordination", 
                icon: Users,
                items: ["Vendor selection", "Schedule coordination", "Quality oversight", "Performance monitoring"]
              },
              {
                title: "Material Logistics",
                icon: Truck,
                items: ["Delivery scheduling", "Inventory tracking", "Storage coordination", "Just-in-time delivery"]
              },
              {
                title: "Quality Control",
                icon: Target,
                items: ["Progress inspections", "Quality standards", "Issue resolution", "Final walkthrough"]
              },
              {
                title: "Communication Hub",
                icon: CheckCircle,
                items: ["Client updates", "Photo progress reports", "Issue escalation", "Change order management"]
              },
              {
                title: "Project Documentation",
                icon: Shield,
                items: ["Contract management", "Permit coordination", "Warranty tracking", "Compliance records"]
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
              <Clock className="w-5 h-5 text-[var(--brand-primary)]" />
              <h3 className="font-medium text-white">Proactive Management</h3>
            </div>
            <p className="text-sm text-neutral-300">
              Our project managers anticipate challenges before they become problems, keeping your project on schedule 
              and within budget through proactive communication and contingency planning.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-[var(--brand-support)]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-neutral-300">
              Choose the level of management support that fits your project needs
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                tier: "Basic Coordination",
                range: "$500–$2,000",
                description: "Essential logistics coordination for small projects. Includes delivery scheduling and basic oversight.",
                example: "Single room projects, small repairs, material delivery coordination."
              },
              {
                tier: "Standard Management", 
                range: "$2,001–$10,000",
                description: "Comprehensive project management for medium-sized renovations with multiple contractors.",
                example: "Kitchen/bathroom remodels, multi-room projects, subcontractor coordination."
              },
              {
                tier: "Premium Oversight",
                range: "$10,001–$30,000+", 
                description: "White-glove project management for large-scale renovations with complex logistics.",
                example: "Whole-home renovations, commercial projects, complex multi-phase construction."
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
              <h3 className="font-medium text-white">Integrated Services</h3>
            </div>
            <p className="text-neutral-300">
              Logistics management is included free with bundled services over $20,000. 
              Standalone management available for projects using other contractors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Need Project Management?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Let our experienced project managers handle the coordination while you focus on enjoying 
            the transformation of your space.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
          >
            Get Management Quote
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices currentService="logistics" />
    </main>
  );
}