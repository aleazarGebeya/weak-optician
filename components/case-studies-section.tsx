"use client";
import React, { useState } from "react";

const galleries = [
  {
    company: "BlueMax Logistics",
    description: "Improved workflow reduced delivery times by 36% after our technology overhaul.",
    beforeImg: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=350&h=220&fit=crop&auto=format",
    afterImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=350&h=220&fit=crop&auto=format",
  },
  {
    company: "Synergy Fintech",
    description: "Customer onboarding success rate doubled post-consultation and software integration.",
    beforeImg: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=350&h=220&fit=crop&auto=format",
    afterImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=350&h=220&fit=crop&auto=format",
  },
  {
    company: "Horizon Retail",
    description: "Profit margins climbed 27% after deploying our retail performance solution.",
    beforeImg: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=350&h=220&fit=crop&auto=format",
    afterImg: "https://images.unsplash.com/photo-1465101178521-c1a9136a3d41?w=350&h=220&fit=crop&auto=format",
  },
];

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="cases" className="py-24 bg-gradient-to-r from-slate-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Case Studies</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
          <div className="flex flex-col gap-0 md:w-1/3 mb-6 md:mb-0">
            {galleries.map((gallery, idx) => (
              <button
                key={gallery.company}
                className={`text-left py-3 px-4 mb-2 rounded-lg text-lg font-semibold hover:bg-blue-600/10 transition-all border-l-4 ${activeIndex === idx ? "bg-blue-50 border-blue-600 text-blue-800" : "border-transparent text-gray-700"}`}
                onClick={() => setActiveIndex(idx)}
                aria-pressed={activeIndex === idx}
              >
                {gallery.company}
                <p className="block text-xs text-slate-500 font-normal mt-1">{gallery.description}</p>
              </button>
            ))}
          </div>
          <div className="md:w-2/3 flex flex-col gap-3 items-center border border-blue-200 rounded-2xl bg-white shadow-xl p-8 relative">
            <div className="flex flex-col md:flex-row gap-5 items-center w-full">
              <div className="relative w-[350px] h-[220px]">
                <img src={galleries[activeIndex].beforeImg} alt="Before - " className="rounded-lg drop-shadow-md w-full h-full object-cover" loading="lazy" />
                <span className="absolute left-2 top-2 bg-blue-800 text-white font-bold px-3 py-1 text-xs rounded-lg shadow-lg">Before</span>
              </div>
              <span className="font-bold text-blue-700 text-lg mx-3">→</span>
              <div className="relative w-[350px] h-[220px]">
                <img src={galleries[activeIndex].afterImg} alt="After - " className="rounded-lg drop-shadow-md w-full h-full object-cover" loading="lazy" />
                <span className="absolute left-2 top-2 bg-green-700 text-white font-bold px-3 py-1 text-xs rounded-lg shadow-lg">After</span>
              </div>
            </div>
            <div className="text-center mt-4 text-slate-600 font-medium text-base max-w-md mx-auto">
              {galleries[activeIndex].description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
