"use client";

import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav className={`py-4 ${className}`} aria-label="Breadcrumb">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home Link */}
          <li>
            <a
              href="/"
              className="flex items-center text-neutral-400 hover:text-[var(--brand-primary)] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </a>
          </li>

          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-neutral-500 mx-2" />
              {item.href && index < items.length - 1 ? (
                <a
                  href={item.href}
                  className="text-neutral-400 hover:text-[var(--brand-primary)] transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-white font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
