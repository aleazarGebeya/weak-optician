import React from "react";

const timelineEvents = [
  {
    year: "2013",
    title: "Company Founded",
    description: "CorpVantage was established with the mission to empower global businesses.",
  },
  {
    year: "2015",
    title: "First 100 Clients",
    description: "Reached a major milestone by partnering with 100 companies across multiple sectors.",
  },
  {
    year: "2017",
    title: "Expansion",
    description: "Launched new offices in Europe and Asia, expanding our global reach.",
  },
  {
    year: "2020",
    title: "Digital Pivot",
    description: "Adopted cutting-edge digital solutions to keep clients ahead during uncertain times.",
  },
  {
    year: "2022",
    title: "Awarded Industry Leader",
    description: "Recognized as a leader in business transformation consulting.",
  },
  {
    year: "2023",
    title: "10-year Anniversary",
    description: "Celebrated a decade of client success stories and impactful outcomes.",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-white/95">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-14">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-400/10 via-blue-900/60 to-blue-300/10 rounded sm:block hidden"></div>
          <ul className="relative space-y-8 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-auto sm:gap-x-6">
            {timelineEvents.map((event, idx) => (
              <li
                key={idx}
                className={`relative flex flex-col sm:flex-row sm:items-center sm:gap-10 ${idx % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
              >
                <div className="flex-shrink-0 sm:text-right sm:w-44 w-full mb-2 sm:mb-0">
                  <div className="font-semibold text-blue-700 text-xl mb-1">{event.year}</div>
                </div>
                <div className="bg-white/85 border border-blue-50 shadow-md rounded-xl px-5 py-5 sm:max-w-xl w-full z-20">
                  <div className="font-bold text-lg text-gray-800 mb-1">{event.title}</div>
                  <div className="text-gray-600">{event.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
