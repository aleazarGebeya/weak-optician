import React from "react";

const testimonials = [
  {
    name: "Morgan Lee",
    position: "COO, VentureX",
    message: "CorpVantage truly transformed our approach. Their attention to detail and strategic perspective drove measurable results.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=56&h=56&fit=facearea&facepad=3&auto=format"
  },
  {
    name: "Juliette Park",
    position: "CEO, FinoTech",
    message: "Professional, knowledgeable, and innovative – CorpVantage was instrumental in our recent digital pivot.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=facearea&facepad=3&auto=format"
  },
  {
    name: "Lucas Müller",
    position: "CTO, Kinetica",
    message: "Seamless collaboration, ingenious solutions – the team at CorpVantage exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1519340333755-c8c6c3c8e680?w=56&h=56&fit=facearea&facepad=3&auto=format"
  },
  {
    name: "Samira DeLuca",
    position: "Managing Partner, Elevate Partners",
    message: "Their expertise made the difference. Our processes became smarter, faster, and more resilient.",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=56&h=56&fit=facearea&facepad=3&auto=format"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-2xl shadow-xl p-7 flex flex-col items-center max-w-xs hover:shadow-2xl transition-shadow duration-200"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full mb-3 object-cover shadow-md"
                loading="lazy"
              />
              <div className="text-lg italic text-slate-700 mb-2">“{testimonial.message}”</div>
              <div className="text-blue-800 font-semibold">{testimonial.name}</div>
              <div className="text-xs text-gray-500">{testimonial.position}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
