"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette, Lightbulb, Package, RefreshCw, Truck, CheckCircle, Clock, DollarSign } from "lucide-react";

const services = [
  {
    id: "cosmetic-remodeling",
    title: "Cosmetic Remodeling & Repair",
    subtitle: "Transform Spaces with Expert Craftsmanship",
    description: "From fresh paint to stunning backsplashes, we handle all cosmetic improvements with coastal-grade materials designed for Florida's unique environment.",
    href: "/services/cosmetic-remodeling",
    icon: Palette,
    priceRange: "$1,000 - $50,000+",
    timeline: "1-8 weeks",
    features: ["Painting & wall treatments", "Flooring installation", "Fixture upgrades", "Trim & molding", "Backsplash & tile work", "Drywall repair"],
    image: "/services/cosmetic-hero.jpg"
  },
  {
    id: "planning",
    title: "Project Planning & Consulting", 
    subtitle: "Strategic Design & Expert Guidance",
    description: "Comprehensive planning services that set your project up for success with detailed designs, accurate budgets, and regulatory expertise.",
    href: "/services/planning",
    icon: Lightbulb,
    priceRange: "$500 - $20,000+",
    timeline: "1-4 weeks",
    features: ["3D design & visualization", "Budget optimization", "Permit coordination", "Timeline planning", "Feasibility studies", "Material specifications"],
    image: "/services/planning-hero.jpg"
  },
  {
    id: "sourcing",
    title: "Material Sourcing & Bundling",
    subtitle: "Premium Materials, Wholesale Pricing",
    description: "Access to our extensive network of coastal suppliers for hurricane-rated, humidity-resistant materials at contractor pricing.",
    href: "/services/sourcing",
    icon: Package,
    priceRange: "$500 - $75,000+",
    timeline: "1-3 weeks",
    features: ["Wholesale pricing", "Quality assurance", "Coastal specialists", "Direct delivery", "Inventory management", "Warranty support"],
    image: "/services/sourcing-hero.jpg"
  },
  {
    id: "trade",
    title: "Trade & Barter Facilitation",
    subtitle: "Sustainable Material Exchanges",
    description: "Professional valuations and logistics for material exchanges, helping reduce waste while maximizing your project budget.",
    href: "/services/trade",
    icon: RefreshCw,
    priceRange: "10-15% Commission",
    timeline: "Ongoing",
    features: ["Professional valuations", "Exchange facilitation", "Logistics coordination", "Waste reduction", "Cost optimization", "Environmental impact"],
    image: "/services/trade-hero.jpg"
  },
  {
    id: "logistics",
    title: "Logistics & Project Management",
    subtitle: "Seamless Coordination & Execution",
    description: "End-to-end project management ensuring every detail is coordinated, from material delivery to final walkthrough.",
    href: "/services/logistics", 
    icon: Truck,
    priceRange: "$500 - $30,000+",
    timeline: "Project duration",
    features: ["Timeline coordination", "Subcontractor management", "Quality control", "Progress tracking", "Communication hub", "Final walkthrough"],
    image: "/services/logistics-hero.jpg"
  }
];

export default function ServicesIndex() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-support)]/20 to-[var(--brand-primary)]/10" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
          >
            Complete <span className="text-[var(--brand-primary)] font-medium">Coastal</span> Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-neutral-200 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            From initial planning to final execution, we provide comprehensive remodeling services designed specifically for Florida's First Coast environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-2">5</div>
              <div className="text-sm text-neutral-300 uppercase tracking-wide">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-2">500+</div>
              <div className="text-sm text-neutral-300 uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-2">98%</div>
              <div className="text-sm text-neutral-300 uppercase tracking-wide">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[var(--brand-support)]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Our Services
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Each service is designed to work independently or as part of a comprehensive remodeling solution
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--brand-primary)]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a customized plan that brings your coastal remodeling dreams to life.
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

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        isEven ? '' : 'lg:grid-flow-col-dense'
      }`}
    >
      {/* Content */}
      <div className={isEven ? '' : 'lg:col-start-2'}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-[var(--brand-primary)]/10 rounded-2xl">
            <Icon className="w-8 h-8 text-[var(--brand-primary)]" />
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-light text-white mb-2">
              {service.title}
            </h3>
            <p className="text-lg text-[var(--brand-primary)] font-medium">
              {service.subtitle}
            </p>
          </div>
        </div>

        <p className="text-lg text-neutral-300 leading-relaxed mb-8">
          {service.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <DollarSign className="w-5 h-5 text-[var(--brand-primary)]" />
            <div>
              <div className="text-sm font-medium text-white">{service.priceRange}</div>
              <div className="text-xs text-neutral-400">Investment Range</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[var(--brand-primary)]" />
            <div>
              <div className="text-sm font-medium text-white">{service.timeline}</div>
              <div className="text-xs text-neutral-400">Typical Timeline</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[var(--brand-primary)]" />
            <div>
              <div className="text-sm font-medium text-white">Guaranteed</div>
              <div className="text-xs text-neutral-400">Quality Work</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {service.features.map((feature, featureIndex) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
              <span className="text-sm text-neutral-300">{feature}</span>
            </div>
          ))}
        </div>

        <motion.a
          href={service.href}
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-lg font-medium text-[var(--brand-primary)] hover:gap-3 transition-all"
        >
          Learn More About This Service
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Visual */}
      <div className={`${isEven ? '' : 'lg:col-start-1'} relative`}>
        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-support)]/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-24 h-24 text-neutral-300 opacity-50" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}


