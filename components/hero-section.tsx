import React from "react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-950 to-gray-900 relative overflow-hidden flex flex-col items-center text-center">
      <div className="z-10 relative flex flex-col items-center max-w-4xl px-4 gap-6">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-2xl">
          Elevate Your Business
        </h1>
        <h2 className="text-blue-200 text-2xl md:text-3xl font-medium mb-5 drop-shadow-lg">
          Premier Solutions for Tomorrow's Leaders
        </h2>
        <p className="text-slate-300 max-w-xl mb-8 text-lg md:text-2xl">
          CorpVantage empowers modern enterprises with innovative strategies, expert teams, and transformational technology, driving growth and excellence across industries.
        </p>
        <a
          href="#services"
          className="inline-block rounded-lg px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xl font-semibold shadow-xl backdrop-blur-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Explore Our Services
        </a>
      </div>
      <svg className="absolute inset-x-0 bottom-0 w-full h-40 text-blue-900/50" viewBox="0 0 1440 320"><path fill="currentColor" fillOpacity="1" d="M0,64L34.3,69.3C68.6,75,137,85,206,74.7C274.3,64,343,32,411,48C480,64,549,128,617,133.3C685.7,139,754,85,823,80C891.4,75,960,117,1029,128C1097.1,139,1166,117,1234,90.7C1302.9,64,1371,32,1406,16L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </section>
  );
}
