import React from "react";

export function Navigation() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-gradient-to-r from-gray-900/90 to-slate-700/80 shadow-xl fixed z-40 top-0 left-0 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span className="text-white text-2xl font-extrabold tracking-tighter">
          gebeya
        </span>
      </div>
      <ul className="flex items-center gap-6 text-white font-medium text-lg">
        <li><a href="#about" className="hover:text-blue-300 transition-colors">About</a></li>
        <li><a href="#services" className="hover:text-blue-300 transition-colors">Services</a></li>
        <li><a href="#team" className="hover:text-blue-300 transition-colors">Team</a></li>
        <li><a href="#testimonials" className="hover:text-blue-300 transition-colors">Testimonials</a></li>
        <li><a href="#timeline" className="hover:text-blue-300 transition-colors">Timeline</a></li>
        <li><a href="#cases" className="hover:text-blue-300 transition-colors">Case Studies</a></li>
        <li><a href="#blog" className="hover:text-blue-300 transition-colors">Blog</a></li>
        <li><a href="#contact" className="hover:text-blue-400 bg-white/10 py-1 px-3 rounded-full border border-white/20 ml-2">Contact</a></li>
      </ul>
    </nav>
  );
}
