import React from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TimelineSection } from "@/components/timeline-section";
import { ComparisonSection } from "@/components/comparison-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-tr from-gray-950 via-blue-900 to-slate-900 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">
        <div className="text-white text-lg font-bold tracking-tight mb-3 md:mb-0">CorpVantage</div>
        <div className="text-slate-400">&copy; {new Date().getFullYear()} CorpVantage. All rights reserved.</div>
      </div>
    </footer>
  );
}
