import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white/95 relative">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">About Us</h2>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-2/3 space-y-7 text-lg text-slate-600">
            <p>
              <span className="font-semibold text-blue-800">gebeya</span> is a forward-thinking consultancy dedicated to propelling organizations to new heights. With decades of combined expertise, our team delivers actionable insights, robust digital solutions, and personalized strategies tailored to each client's vision.
            </p>
            <p>
              Our philosophy centers on collaboration, integrity, and measurable impact. We don't just offer services – we immerse ourselves in your journey, building relationships that last.
            </p>
            <p>
              Our track record speaks for itself: from startups to global enterprises, gebeya has empowered businesses to innovate, scale, and lead in their industries.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col items-center gap-6">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=420&h=330&fit=crop&auto=format"
              alt="Corporate culture"
              className="rounded-xl shadow-md w-[320px] h-[220px] object-cover"
              width={320}
              height={220}
              loading="lazy"
              style={{objectFit:'cover'}}
              priority={false}
              unoptimized={false}
            />
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=420&h=330&fit=crop&auto=format"
              alt="Teamwork"
              className="rounded-xl shadow-md w-[320px] h-[220px] object-cover"
              width={320}
              height={220}
              loading="lazy"
              style={{objectFit:'cover'}}
              priority={false}
              unoptimized={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
