import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-tr from-gray-950 via-blue-900 to-slate-900 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">
        <div className="text-white text-lg font-bold tracking-tight mb-3 md:mb-0">gebeya</div>
        <div className="text-slate-400">&copy; {new Date().getFullYear()} gebeya. All rights reserved.</div>
      </div>
    </footer>
  );
}
