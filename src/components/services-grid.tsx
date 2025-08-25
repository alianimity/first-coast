"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette, Lightbulb, Package, RefreshCw, Truck } from "lucide-react";

type Service = {
  title: string;
  blurb: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  stats: string;
};

const services: Service[] = [
  {
    title: "Cosmetic Remodeling & Repair",
    blurb: "Expert hands-on execution with coastal-grade materials and hurricane-resistant finishes.",
    href: "/services/cosmetic-remodeling",
    icon: Palette,
    stats: "$1K - $50K+"
  },
  {
    title: "Project Planning & Consulting", 
    blurb: "3D designs, budget optimization, and regulatory guidance for seamless project execution.",
    href: "/services/planning",
    icon: Lightbulb,
    stats: "$500 - $20K+"
  },
  {
    title: "Material Sourcing & Bundling",
    blurb: "Wholesale pricing on premium coastal materials with direct-to-site delivery.",
    href: "/services/sourcing",
    icon: Package,
    stats: "$500 - $75K+"
  },
  {
    title: "Trade & Barter Facilitation",
    blurb: "Sustainable material exchanges with professional valuations and logistics support.",
    href: "/services/trade",
    icon: RefreshCw,
    stats: "10-15% Commission"
  },
  {
    title: "Logistics & Project Management",
    blurb: "End-to-end coordination ensuring on-time delivery and quality control.",
    href: "/services/logistics", 
    icon: Truck,
    stats: "$500 - $30K+"
  },
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={service.href} service={service} index={index} />
      ))}
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.a
      href={service.href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group block bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-[var(--brand-primary)]/30"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-[var(--brand-primary)]/10 rounded-xl">
          <Icon className="w-6 h-6 text-[var(--brand-primary)]" />
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-[var(--brand-primary)]">{service.stats}</div>
          <div className="text-xs text-white/60">Investment Range</div>
        </div>
      </div>

      <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[var(--brand-primary)] transition-colors">
        {service.title}
      </h3>
      
      <p className="text-sm text-white/70 leading-relaxed mb-6">
        {service.blurb}
      </p>

      <div className="flex items-center text-sm font-medium text-[var(--brand-primary)] group-hover:gap-2 transition-all">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.a>
  );
}


