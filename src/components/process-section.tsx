"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding Your Vision",
    description: "We start with an in-depth consultation to understand your goals, style preferences, and budget. Our coastal expertise ensures we address Florida-specific considerations from day one.",
    features: ["Free consultation", "3D visualization", "Coastal material expertise", "Budget estimation"]
  },
  {
    number: "02", 
    title: "Plan",
    subtitle: "Detailed Design & Strategy",
    description: "Our planning experts create comprehensive designs, material specifications, and project timelines. Every detail is considered, from hurricane codes to historic preservation requirements.",
    features: ["Custom designs", "Material selection", "Permit coordination", "Timeline planning"]
  },
  {
    number: "03",
    title: "Source",
    subtitle: "Premium Materials, Wholesale Pricing",
    description: "We leverage our network of coastal suppliers to procure hurricane-rated, humidity-resistant materials at contractor pricing. Everything ships directly to your project site.",
    features: ["Wholesale pricing", "Quality assurance", "Direct delivery", "Coastal specialists"]
  },
  {
    number: "04",
    title: "Execute",
    subtitle: "Expert Hands-On Craftsmanship", 
    description: "Our vetted teams handle cosmetic execution while licensed subcontractors manage specialized trades. Every project includes milestone updates and photo documentation.",
    features: ["Licensed professionals", "Progress tracking", "Quality control", "Photo updates"]
  },
  {
    number: "05",
    title: "Deliver",
    subtitle: "Seamless Project Completion",
    description: "Final walkthrough, warranty activation, and comprehensive handover. We ensure every detail meets our coastal standards with ongoing support and touch-up services.",
    features: ["Final walkthrough", "1-year warranty", "Touch-up service", "Ongoing support"]
  }
];

export function ProcessSection(): JSX.Element {
  return (
    <section className="py-24 bg-[var(--brand-support)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6"
          >
            Our Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto"
          >
            From vision to reality, we guide you through every step of your coastal remodeling journey
          </motion.p>
        </div>

        <div className="space-y-32">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: typeof processSteps[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
        isEven ? '' : 'lg:grid-flow-col-dense'
      }`}
    >
      {/* Content */}
      <div className={isEven ? '' : 'lg:col-start-2'}>
        <div className="flex items-center gap-6 mb-6">
          <div className="text-6xl sm:text-7xl font-light text-[var(--brand-primary)] opacity-60">
            {step.number}
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-light text-white mb-2">
              {step.title}
            </h3>
            <p className="text-lg text-[var(--brand-primary)] font-medium">
              {step.subtitle}
            </p>
          </div>
        </div>
        
        <p className="text-lg text-neutral-300 leading-relaxed mb-8">
          {step.description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {step.features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 + featureIndex * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
              <span className="text-sm text-neutral-300">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className={`${isEven ? '' : 'lg:col-start-1'} relative`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-support)]/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl sm:text-9xl font-light text-neutral-300 opacity-50">
              {step.number}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
