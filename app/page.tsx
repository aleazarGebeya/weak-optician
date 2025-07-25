"use client"
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
import { Footer } from "@/components/footer";

export function PageContent() {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-tr from-blue-950 via-blue-900/90 to-slate-800">
        <Navigation />
        <main className="relative bg-white/80 backdrop-blur-[2px] min-h-[88vh] pt-16">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TeamSection />
          <TestimonialsSection />
          <TimelineSection />
          <ComparisonSection />
          <CaseStudiesSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default PageContent;
