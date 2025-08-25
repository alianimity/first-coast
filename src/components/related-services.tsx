"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette, Users, Package, Repeat, Award } from "lucide-react";

interface RelatedServicesProps {
  currentService: string;
  className?: string;
}

const allServices = [
  {
    id: "cosmetic-remodeling",
    name: "Cosmetic Remodeling",
    href: "/services/cosmetic-remodeling",
    icon: Palette,
    description: "Transform your space with expert craftsmanship",
    price: "$1K - $50K+"
  },
  {
    id: "planning",
    name: "Project Planning",
    href: "/services/planning",
    icon: Users,
    description: "Expert consultation and detailed project design",
    price: "$500 - $20K"
  },
  {
    id: "sourcing",
    name: "Material Sourcing",
    href: "/services/sourcing",
    icon: Package,
    description: "Quality materials at wholesale prices",
    price: "$500 - $75K"
  },
  {
    id: "trade",
    name: "Trade & Barter",
    href: "/services/trade",
    description: "Exchange surplus materials for cost savings",
    icon: Repeat,
    price: "10-15% Commission"
  },
  {
    id: "logistics",
    name: "Logistics Management",
    href: "/services/logistics",
    icon: Award,
    description: "Complete project coordination and oversight",
    price: "$500 - $30K"
  }
];

export function RelatedServices({ currentService, className = "" }: RelatedServicesProps) {
  // Get related services (exclude current service)
  const relatedServices = allServices.filter(service => service.id !== currentService).slice(0, 3);

  if (relatedServices.length === 0) return null;

  return (
    <section className={`py-16 bg-neutral-900 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4">
            Related Services
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Combine services for a complete remodeling solution and save with our bundle discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {relatedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={service.href}
                className="block bg-[var(--brand-support)] border border-[var(--brand-primary)]/20 rounded-xl p-6 hover:border-[var(--brand-primary)]/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--brand-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-primary)]/20 transition-colors">
                    <service.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-white mb-1 group-hover:text-[var(--brand-primary)] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-neutral-300 mb-2">{service.description}</p>
                    <div className="text-xs text-[var(--brand-primary)] font-medium">
                      Starting at {service.price}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[var(--brand-primary)] group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bundle Discount CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-[var(--brand-primary)] p-6 sm:p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-medium text-black mb-3">
              Bundle Services & Save
            </h3>
            <p className="text-black/80 mb-4">
              Combine multiple services and save 10-20% with our comprehensive project packages
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors"
            >
              Get Custom Bundle Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
