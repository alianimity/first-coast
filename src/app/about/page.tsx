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

      {/* Company Story */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Our Story & Leadership
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Founded with a vision to revolutionize home remodeling through smart risk management and nationwide excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-light text-white mb-4">15+ Years of Excellence</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  First Coast Home Remodeling and Repair, LLC was built on the foundation of combining 
                  expert project planning with hands-on execution, while prioritizing safety and risk 
                  management. Our hybrid approach allows us to deliver exceptional results nationwide.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Starting in Florida&apos;s First Coast region, we&apos;ve expanded our expertise to serve all 50 states, 
                  bringing regional knowledge and coastal expertise to homes across America.
                </p>
              </div>

              <div className="bg-[var(--brand-support)] p-6 rounded-xl">
                <h4 className="text-lg font-medium text-white mb-3">Leadership Team</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-[var(--brand-primary)] font-medium">Founder & Managing Director</div>
                    <div className="text-sm text-neutral-300">15+ years in remodeling and project management</div>
                    <div className="text-sm text-neutral-300">Licensed contractor across multiple states</div>
                  </div>
                  <div>
                    <div className="text-[var(--brand-primary)] font-medium">Operations Team</div>
                    <div className="text-sm text-neutral-300">Certified professionals with EPA, OSHA, and manufacturer credentials</div>
                    <div className="text-sm text-neutral-300">Background-checked and fully insured technicians</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-[var(--brand-primary)] p-6 rounded-xl text-black">
                <h4 className="text-xl font-medium mb-4">By the Numbers</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1,250+</div>
                    <div className="text-sm opacity-80">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">50</div>
                    <div className="text-sm opacity-80">States Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm opacity-80">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$2M+</div>
                    <div className="text-sm opacity-80">Insurance Coverage</div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                <h4 className="text-lg font-medium text-white mb-3">Certifications & Licenses</h4>
                <div className="space-y-2 text-sm text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--brand-primary)]" />
                    <span>Licensed Contractor - All 50 States</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--brand-primary)]" />
                    <span>EPA Certified - Lead-Safe Work Practices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--brand-primary)]" />
                    <span>OSHA Safety Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--brand-primary)]" />
                    <span>Manufacturer Certified Technicians</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[var(--brand-support)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Our Mission & Core Values
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              To enhance homes nationwide through expert planning, strategic material sourcing, 
              and quality cosmetic execution—while making the remodeling process transparent, 
              efficient, and tailored to your specific regional needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Regional Expertise",
                description: "Specialized knowledge of climate-appropriate materials and techniques for every region across America, from coastal humidity to mountain climates."
              },
              {
                icon: Award,
                title: "Quality Assurance", 
                description: "Licensed, insured operations with comprehensive warranties, transparent pricing, and rigorous quality control standards."
              },
              {
                icon: Users,
                title: "Client-Centric Approach",
                description: "One dedicated coordinator from planning to completion, ensuring seamless communication, timely updates, and personalized service."
              },
              {
                icon: CheckCircle,
                title: "Safety First",
                description: "Comprehensive risk management through proper licensing, insurance, safety protocols, and strategic outsourcing of high-risk work."
              },
              {
                icon: Star,
                title: "Sustainable Practices",
                description: "Eco-friendly materials, waste reduction, energy-efficient solutions, and trade & barter programs to minimize environmental impact."
              },
              {
                icon: MapPin,
                title: "Community Focus",
                description: "Supporting local suppliers, contributing to community growth, and building lasting relationships in the neighborhoods we serve."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/20 p-6 rounded-xl border border-white/10"
              >
                <div className="w-12 h-12 p-3 bg-[var(--brand-primary)]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{item.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management & Operational Excellence */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
                Smart Risk Management
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                Our hybrid approach prioritizes safety and quality while delivering exceptional results. 
                We focus on cosmetic and low-risk remodeling services, strategically outsourcing complex 
                work to licensed specialists when needed.
              </p>
              
              <div className="space-y-6">
                <div className="bg-[var(--brand-support)] p-6 rounded-xl">
                  <h3 className="text-lg font-medium text-white mb-3">What We Handle In-House</h3>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>Interior painting and finishing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>Flooring installation (laminate, vinyl, tile)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>Cabinet refacing and hardware installation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>Fixture installation and minor carpentry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>Project planning and material sourcing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                  <h3 className="text-lg font-medium text-white mb-3">When We Partner with Specialists</h3>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>Electrical work (licensed electricians)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>Plumbing installations (certified plumbers)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>Structural modifications (structural engineers)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>Roofing and major exterior work</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[var(--brand-primary)]" />
                      <span>HVAC and major appliance installation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="bg-[var(--brand-primary)] p-6 rounded-xl text-black">
                  <h3 className="text-xl font-medium mb-4">Comprehensive Protection</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium mb-1">Insurance Coverage</div>
                      <div className="text-sm opacity-80">$2M+ general liability plus full workers&apos; compensation</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Licensing & Bonding</div>
                      <div className="text-sm opacity-80">Licensed contractors with optional surety bonding available</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Quality Warranties</div>
                      <div className="text-sm opacity-80">1-year workmanship warranty on all completed projects</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Clear Contracts</div>
                      <div className="text-sm opacity-80">Attorney-drafted agreements with defined scope and protections</div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                  <h3 className="text-lg font-medium text-white mb-4">Why This Approach Works</h3>
                  <div className="space-y-3 text-sm text-neutral-300">
                    <p>
                      <strong className="text-white">Lower Risk:</strong> By focusing on cosmetic work and partnering 
                      with specialists for complex tasks, we minimize liability while maintaining quality.
                    </p>
                    <p>
                      <strong className="text-white">Better Results:</strong> Each aspect of your project is handled 
                      by experts in that specific field, ensuring superior outcomes.
                    </p>
                    <p>
                      <strong className="text-white">Cost Efficiency:</strong> Our hybrid model reduces overhead 
                      while providing comprehensive project management and coordination.
                    </p>
                    <p>
                      <strong className="text-white">Peace of Mind:</strong> Extensive insurance, clear contracts, 
                      and proven systems protect both your project and investment.
                    </p>
                  </div>
                </div>
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


