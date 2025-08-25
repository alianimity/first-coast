"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle, Star, Users, Wrench } from "lucide-react";
import { QuoteForm } from "../../components/quote-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-support)]/20 to-[var(--brand-primary)]/10" />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight"
          >
            Let's Start Your <span className="text-[var(--brand-primary)] font-medium">Project</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your home? Get a detailed quote and expert consultation 
            from our nationwide remodeling specialists.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-[var(--brand-support)]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-light text-white mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "(848) 236-9896",
                    subtitle: "Mon-Fri 8AM-6PM, Sat 9AM-4PM"
                  },
                  {
                    icon: Mail,
                    title: "Email Us", 
                    content: "hello@firstcoastremod.com",
                    subtitle: "We respond within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Service Areas",
                    content: "Nationwide Coverage",
                    subtitle: "All 50 states across the United States"
                  },
                  {
                    icon: Clock,
                    title: "Response Time",
                    content: "24 Hours or Less",
                    subtitle: "Emergency consultations available"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 p-3 bg-[var(--brand-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                      <p className="text-white mb-1">{item.content}</p>
                      <p className="text-sm text-neutral-300">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-[var(--brand-primary)]/10 rounded-2xl border border-[var(--brand-primary)]/20">
                <h3 className="font-medium text-white mb-3">Why Choose Our Quote Process?</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full" />
                    Detailed on-site evaluation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full" />
                    Regional-specific material recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full" />
                    Transparent, itemized pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full" />
                    No hidden fees or surprises
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-3">
              <div className="bg-[var(--brand-support)] rounded-2xl p-8 border border-[var(--brand-primary)]/20">
                <h2 className="text-2xl font-light text-white mb-2">
                  Get Your Project Quote
                </h2>
                <p className="text-neutral-300 mb-8">
                  Tell us about your vision and we'll create a detailed plan with transparent pricing.
                </p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Capabilities Overview */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Complete Service Capabilities
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              From initial planning to final execution, we handle every aspect of your remodeling project 
              with expertise, efficiency, and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Project Planning & Consulting",
                capabilities: [
                  "3D Design & Renderings",
                  "Budget Development",
                  "Timeline Planning",
                  "Feasibility Studies",
                  "Permit Assistance"
                ]
              },
              {
                icon: Wrench,
                title: "Hands-On Remodeling",
                capabilities: [
                  "Interior Painting & Finishing",
                  "Flooring Installation",
                  "Cabinet Refacing",
                  "Fixture Installation",
                  "Minor Carpentry Work"
                ]
              },
              {
                icon: Shield,
                title: "Material Sourcing & Logistics",
                capabilities: [
                  "Wholesale Material Access",
                  "Quality Control",
                  "Direct-to-Site Delivery",
                  "Inventory Management",
                  "Cost Optimization"
                ]
              },
              {
                icon: CheckCircle,
                title: "Trade & Barter Facilitation",
                capabilities: [
                  "Material Exchange Programs",
                  "Surplus Material Trading",
                  "Cost-Saving Solutions",
                  "Sustainable Practices",
                  "Eco-Friendly Options"
                ]
              },
              {
                icon: Award,
                title: "Project Management",
                capabilities: [
                  "Timeline Coordination",
                  "Subcontractor Management",
                  "Quality Oversight",
                  "Progress Reporting",
                  "Client Communication"
                ]
              },
              {
                icon: Star,
                title: "Specialized Services",
                capabilities: [
                  "Storm-Resistant Upgrades",
                  "Energy Efficiency Improvements",
                  "Accessibility Modifications",
                  "Historic Home Restoration",
                  "Emergency Repairs"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--brand-support)] p-6 rounded-xl border border-[var(--brand-primary)]/20"
              >
                <div className="w-12 h-12 bg-[var(--brand-primary)]/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center gap-2 text-sm text-neutral-300">
                      <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full flex-shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-[var(--brand-support)] p-6 rounded-xl border border-[var(--brand-primary)]/20 max-w-4xl mx-auto">
              <h3 className="text-xl font-medium text-white mb-4">Project Size & Scope</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-primary)] mb-2">$500+</div>
                  <div className="text-sm text-neutral-300">Minimum Project Size</div>
                  <div className="text-xs text-neutral-400">Consultations & small repairs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-primary)] mb-2">$5K - $50K</div>
                  <div className="text-sm text-neutral-300">Typical Project Range</div>
                  <div className="text-xs text-neutral-400">Full room remodels</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-primary)] mb-2">$100K+</div>
                  <div className="text-sm text-neutral-300">Large-Scale Projects</div>
                  <div className="text-xs text-neutral-400">Multi-room & whole home</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Questions Before You Start?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Not ready for a quote yet? We're happy to discuss your ideas and answer any questions 
            about remodeling, materials, or our process.
          </p>
          <motion.a
            href="tel:(848)236-9896"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
          >
            Call Us Today
            <Phone className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  );
}


