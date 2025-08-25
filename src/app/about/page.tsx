"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users, MapPin, CheckCircle, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-support)]/20 to-[var(--brand-primary)]/10" />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight"
          >
            Coastal Remodeling <span className="text-[var(--brand-primary)] font-medium">Excellence</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed"
          >
            We enhance homes nationwide through a proven hybrid approach: expert project planning, 
            reliable material sourcing, and hands-on cosmetic execution serving all 50 states.
          </motion.p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[var(--brand-support)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                To enhance homes nationwide through expert planning, strategic material sourcing, 
                and quality cosmetic execution—while making the remodeling process transparent, 
                efficient, and tailored to your specific regional needs.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Regional Expertise",
                    description: "Specialized knowledge of climate-appropriate materials and techniques for every region across America."
                  },
                  {
                    icon: Award,
                    title: "Quality Assurance", 
                    description: "Licensed, insured operations with comprehensive warranties and transparent pricing."
                  },
                  {
                    icon: Users,
                    title: "Client-Centric Approach",
                    description: "One coordinator from planning to completion, ensuring seamless communication and execution."
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
                      <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-neutral-300">{item.description}</p>
                    </div>
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
                <MapPin className="w-24 h-24 text-neutral-300 opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Experience the difference of working with remodeling specialists who understand your unique regional needs.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>


    </main>
  );
}


