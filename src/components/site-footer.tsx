"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export function SiteFooter(): JSX.Element {
  return (
    <footer className="bg-black border-t border-[var(--brand-primary)]/20">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">FC</span>
              </div>
              <h3 className="text-xl font-semibold text-white">First Coast Home Remodeling</h3>
            </div>
            
            <p className="text-neutral-300 mb-8 max-w-md leading-relaxed">
              Expert coastal remodeling services across Florida's First Coast. From planning to execution, 
              we deliver professional-grade transformations with coastal expertise.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)]" />
                <span className="text-neutral-300">St. Johns County, FL</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--brand-primary)]" />
                <a href="tel:(904)555-0123" className="text-neutral-300 hover:text-[var(--brand-primary)] transition-colors">
                  (904) 555‑0123
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--brand-primary)]" />
                <a href="mailto:hello@firstcoasthrr.com" className="text-neutral-300 hover:text-[var(--brand-primary)] transition-colors">
                  hello@firstcoasthrr.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Cosmetic Remodeling", href: "/services/cosmetic-remodeling" },
                { name: "Project Planning", href: "/services/planning" },
                { name: "Material Sourcing", href: "/services/sourcing" },
                { name: "All Services", href: "/services" },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-neutral-300 hover:text-[var(--brand-primary)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Get Quote", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-neutral-300 hover:text-[var(--brand-primary)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="text-sm font-medium text-white mb-3">Legal</h5>
              <ul className="space-y-2">
                <li>
                  <a href="/terms" className="text-xs text-neutral-400 hover:text-neutral-300 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-xs text-neutral-400 hover:text-neutral-300 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--brand-primary)]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-400">
              © {new Date().getFullYear()} First Coast Home Remodeling & Repair, LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-neutral-400">Licensed & Insured in Florida</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-neutral-400">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


