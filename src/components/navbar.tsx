"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { name: "All Services", href: "/services" },
    { name: "Cosmetic Remodeling", href: "/services/cosmetic-remodeling" },
    { name: "Project Planning", href: "/services/planning" },
    { name: "Material Sourcing", href: "/services/sourcing" },
    { name: "Trade & Barter", href: "/services/trade" },
    { name: "Logistics Management", href: "/services/logistics" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[var(--brand-support)]/95 backdrop-blur-lg border-b border-[var(--brand-primary)]/20 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-white font-semibold text-lg lg:text-xl tracking-tight hover:text-[var(--brand-primary)] transition-colors"
          >
            <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">FC</span>
            </div>
            <span className="hidden sm:block">First Coast</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-white hover:text-[var(--brand-primary)] transition-colors font-medium text-sm lg:text-base group">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-primary)] group-hover:w-full transition-all duration-300" />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-56 bg-[var(--brand-support)]/95 backdrop-blur-lg border border-[var(--brand-primary)]/20 rounded-lg shadow-lg transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="py-2">
                  {serviceItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        index === 0 
                          ? 'text-[var(--brand-primary)] font-medium border-b border-[var(--brand-primary)]/20' 
                          : 'text-neutral-300 hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-[var(--brand-primary)] transition-colors font-medium text-sm lg:text-base relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-primary)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="/contact"
              className="px-4 py-2 lg:px-6 lg:py-3 bg-[var(--brand-primary)] text-black font-medium rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all hover:scale-105 text-sm lg:text-base"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-[var(--brand-primary)] transition-colors p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--brand-primary)]/20 bg-[var(--brand-support)]/95 backdrop-blur-lg"
          >
            <div className="py-4 space-y-2">
              {/* Services Section */}
              <div className="px-4">
                <h3 className="text-[var(--brand-primary)] font-medium text-sm uppercase tracking-wide mb-2">Services</h3>
                {serviceItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-2 py-2 text-neutral-300 hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10 transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              {/* Other Nav Items */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="px-4 pt-2">
                <a
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-[var(--brand-primary)] text-black font-medium rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
