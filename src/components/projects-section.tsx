"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: string;
  timeline: string;
  investment: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    id: "historic-kitchen",
    title: "Historic District Kitchen",
    subtitle: "Preserving Character, Enhancing Function",
    location: "St. Augustine Historic District",
    category: "Kitchen Renovation",
    timeline: "6 weeks",
    investment: "$45,000",
    beforeImage: "/projects/kitchen-before.jpg",
    afterImage: "/projects/kitchen-after.jpg",
    description: "Complete kitchen transformation respecting historic character while introducing modern functionality and coastal-appropriate materials.",
    highlights: ["Historic preservation compliance", "Hurricane-rated appliances", "Custom millwork", "Period-appropriate finishes"]
  },
  {
    id: "coastal-bath",
    title: "Coastal Master Suite",
    subtitle: "Luxury Meets Durability",
    location: "Ponte Vedra Beach",
    category: "Master Bathroom",
    timeline: "4 weeks", 
    investment: "$32,000",
    beforeImage: "/projects/bath-before.jpg",
    afterImage: "/projects/bath-after.jpg",
    description: "Spa-like master bathroom designed for coastal living with humidity-resistant materials and storm-ready fixtures.",
    highlights: ["Mold-resistant materials", "Smart ventilation", "Heated floors", "Ocean-view optimization"]
  },
  {
    id: "rental-refresh",
    title: "Vacation Rental Refresh",
    subtitle: "Investment Property Transformation",
    location: "St. Johns County",
    category: "Multi-Room Renovation",
    timeline: "3 weeks",
    investment: "$28,000",
    beforeImage: "/projects/rental-before.jpg", 
    afterImage: "/projects/rental-after.jpg",
    description: "Complete refresh of vacation rental property to maximize booking appeal and durability for high-turnover use.",
    highlights: ["Durable finishes", "Quick turnaround", "ROI optimization", "Booking photography"]
  },
  {
    id: "storm-ready",
    title: "Storm-Ready Upgrade",
    subtitle: "Hurricane Preparedness Meets Style",
    location: "Jacksonville South",
    category: "Exterior & Interior",
    timeline: "8 weeks",
    investment: "$65,000",
    beforeImage: "/projects/storm-before.jpg",
    afterImage: "/projects/storm-after.jpg", 
    description: "Comprehensive upgrade focusing on hurricane resistance while maintaining aesthetic appeal and property value.",
    highlights: ["Impact windows", "Storm doors", "Reinforced exterior", "Interior refresh"]
  }
];

export function ProjectsSection(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 bg-[var(--brand-support)]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6"
            >
              Recent Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto"
            >
              Discover how we've transformed homes across the First Coast with our signature coastal expertise
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}

function ProjectCard({ project, index, onClick }: { 
  project: Project; 
  index: number;
  onClick: () => void;
}) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        
        {/* Before/After Images */}
        <div className="relative w-full h-full">
          <Image
            src={project.beforeImage}
            alt={`${project.title} before`}
            fill
            className={`object-cover transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
            style={{ objectPosition: 'center' }}
          />
          <Image
            src={project.afterImage}
            alt={`${project.title} after`}
            fill
            className={`object-cover transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Before/After Toggle */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onMouseEnter={() => setShowAfter(true)}
            onMouseLeave={() => setShowAfter(false)}
            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/30 hover:bg-white/30 transition-all"
          >
            {showAfter ? 'After' : 'Before'}
          </button>
        </div>

        {/* Project Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-[var(--brand-primary)] text-black text-xs font-medium rounded">
              {project.category}
            </span>
            <span className="text-xs text-white/80">{project.timeline}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-medium mb-1 group-hover:text-[var(--brand-primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-white/80">{project.location}</p>
        </div>
      </div>

      <div className="px-2">
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-500">
            Investment: <span className="font-medium text-neutral-900">{project.investment}</span>
          </div>
          <span className="text-[var(--brand-primary)] text-sm font-medium group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-3xl font-light text-neutral-900 mb-2">{project.title}</h3>
              <p className="text-lg text-[var(--brand-primary)]">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Before</h4>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image src={project.beforeImage} alt="Before" width={400} height={300} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">After</h4>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image src={project.afterImage} alt="After" width={400} height={300} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Location</h4>
              <p className="text-neutral-900">{project.location}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Timeline</h4>
              <p className="text-neutral-900">{project.timeline}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Investment</h4>
              <p className="text-neutral-900">{project.investment}</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-medium text-neutral-900 mb-3">Project Highlights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                  <span className="text-neutral-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-neutral-600 leading-relaxed">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}


