"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
          <a 
            href="/" 
            className="flex items-center space-x-2 text-white font-semibold text-lg lg:text-xl tracking-tight hover:text-[var(--brand-primary)] transition-colors"
          >
            <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">FC</span>
            </div>
            <span className="hidden sm:block">First Coast</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
            <div className="py-4 space-y-4">
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
              <div className="px-4">
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
