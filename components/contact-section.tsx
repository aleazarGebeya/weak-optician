import React from "react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-bl from-blue-950 via-slate-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-200 text-center">Contact Us</h2>
        <form className="space-y-7 max-w-2xl mx-auto flex flex-col">
          <div className="flex flex-col md:flex-row gap-7">
            <div className="flex-1">
              <label htmlFor="name" className="block text-blue-100 font-semibold mb-2">Full Name</label>
              <input type="text" id="name" name="name" className="w-full rounded-xl px-4 py-3 border border-blue-700/30 bg-blue-950/20 text-white placeholder:text-blue-200/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Your Name" required />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-blue-100 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full rounded-xl px-4 py-3 border border-blue-700/30 bg-blue-950/20 text-white placeholder:text-blue-200/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="your@email.com" required />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-blue-100 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows={5} className="w-full rounded-xl px-4 py-3 border border-blue-700/30 bg-blue-950/20 text-white placeholder:text-blue-200/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 shadow-xl font-bold text-white hover:bg-blue-600/80 focus:ring-2 focus:ring-blue-200 focus:outline-none">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
