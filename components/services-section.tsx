import React from "react";

const services = [
  {
    icon: "management",
    title: "Business Strategy",
    description: "Comprehensive market analysis, tailored growth plans, and competitive positioning for your company.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=260&fit=crop&auto=format"
  },
  {
    icon: "coding",
    title: "Digital Transformation",
    description: "Seamless integration of next-gen tech, cloud migration, and automation to future-proof your business.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=260&fit=crop&auto=format"
  },
  {
    icon: "users",
    title: "Human Capital Consulting",
    description: "Leadership development, talent acquisition, and workplace culture optimization for high-performing teams.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=400&h=260&fit=crop&auto=format"
  },
  {
    icon: "settings",
    title: "Operational Excellence",
    description: "Workflow optimization, agile transformation, and performance tracking for efficient scaling.",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=400&h=260&fit=crop&auto=format"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-r from-slate-50 via-blue-50 to-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-center font-extrabold text-gray-900 mb-14">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-200 py-8 px-6 flex flex-col items-center relative overflow-hidden group border border-blue-100/70"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-[100px] h-[65px] object-cover mb-6 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
              <div className="text-blue-800 mb-3">
                <span className="inline-block bg-blue-50 border text-blue-800 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-tight mb-2">
                  {service.title}
                </span>
              </div>
              <p className="text-md text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
