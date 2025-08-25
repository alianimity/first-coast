"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show on mobile screens
  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          {!isExpanded ? (
            /* Collapsed State */
            <div className="flex gap-3">
              <button
                onClick={() => setIsExpanded(true)}
                className="flex-1 bg-[var(--brand-primary)] text-black font-medium py-4 px-6 rounded-xl shadow-lg hover:bg-[var(--brand-primary)]/90 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Quote
              </button>
              
              <a
                href="tel:(848)236-9896"
                className="bg-[var(--brand-support)] text-white font-medium py-4 px-4 rounded-xl shadow-lg hover:bg-[var(--brand-support)]/90 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          ) : (
            /* Expanded State */
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--brand-support)] border border-[var(--brand-primary)]/20 rounded-xl shadow-lg p-4 backdrop-blur-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium">Quick Contact</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <a
                  href="/contact"
                  className="block w-full bg-[var(--brand-primary)] text-black font-medium py-3 px-4 rounded-lg text-center hover:bg-[var(--brand-primary)]/90 transition-colors"
                >
                  Get Detailed Quote
                </a>
                
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:(848)236-9896"
                    className="flex items-center gap-2 bg-black/20 text-white py-3 px-3 rounded-lg text-center hover:bg-black/30 transition-colors justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  
                  <a
                    href="mailto:hello@firstcoastremod.com"
                    className="flex items-center gap-2 bg-black/20 text-white py-3 px-3 rounded-lg text-center hover:bg-black/30 transition-colors justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Email
                  </a>
                </div>

                <p className="text-xs text-neutral-300 text-center">
                  Response within 24 hours • Nationwide service
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
