import React from "react";

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-bl from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Insights & Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blog previews will be dynamically rendered here from Supabase */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-200">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop&auto=format" alt="Business blog post" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-6">
              <div className="text-xs font-semibold uppercase text-blue-700 mb-2">Strategy</div>
              <div className="font-bold text-lg text-gray-800 mb-2">Driving Growth in Uncertain Times</div>
              <p className="text-slate-600 text-sm mb-5">How to adapt and thrive with agile methodology and proactive planning for your business.</p>
              <a href="#" className="text-blue-700 font-medium hover:underline">Read more →</a>
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-200">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=200&fit=crop&auto=format" alt="Transformation insight" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-6">
              <div className="text-xs font-semibold uppercase text-blue-700 mb-2">Digital</div>
              <div className="font-bold text-lg text-gray-800 mb-2">Digital Transformation Essentials</div>
              <p className="text-slate-600 text-sm mb-5">Exploring key technologies and leadership requirements for successful change.</p>
              <a href="#" className="text-blue-700 font-medium hover:underline">Read more →</a>
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-200">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop&auto=format" alt="Culture blog" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-6">
              <div className="text-xs font-semibold uppercase text-blue-700 mb-2">Culture</div>
              <div className="font-bold text-lg text-gray-800 mb-2">Building High-Performance Teams</div>
              <p className="text-slate-600 text-sm mb-5">Proven strategies for nurturing talent and empowering human capital.</p>
              <a href="#" className="text-blue-700 font-medium hover:underline">Read more →</a>
            </div>
          </div>
        </div>
        {/* Blog search and interactivity to be implemented after database integration */}
      </div>
    </section>
  );
}
