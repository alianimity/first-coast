"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Hero(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23242426'%3E%3Crect width='100%25' height='100%25'/%3E%3C/svg%3E"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-support)]/20 to-[var(--brand-primary)]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.9] mb-8">
            <span className="block">Coastal Remodeling</span>
            <span className="block text-[var(--brand-primary)] font-medium">Reimagined</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
            Expert cosmetic renovations across Florida's First Coast. From St. Augustine's historic charm 
            to Ponte Vedra's coastal elegance — we bring professional-grade transformations to your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="px-8 py-4 text-lg font-medium shadow-lg" asChild>
              <a href="/contact">Get Started</a>
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10" asChild>
              <a href="/services">Our Services</a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-2">500+</div>
              <div className="text-sm text-neutral-300 uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-2">4.9★</div>
              <div className="text-sm text-neutral-300 uppercase tracking-wide">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-2">50+</div>
              <div className="text-sm text-neutral-300 uppercase tracking-wide">Cities Served</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-wider mb-3">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


