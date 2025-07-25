import React from "react";

const comparisonRows = [
  {
    feature: "Custom Strategy",
    corpVantage: true,
    competitors: false,
  },
  {
    feature: "Proven Track Record",
    corpVantage: true,
    competitors: true,
  },
  {
    feature: "Next-Gen Digital Solutions",
    corpVantage: true,
    competitors: false,
  },
  {
    feature: "Dedicated Account Team",
    corpVantage: true,
    competitors: false,
  },
  {
    feature: "Transparent Pricing",
    corpVantage: true,
    competitors: false,
  },
  {
    feature: "24/7 Support",
    corpVantage: true,
    competitors: false,
  },
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Why Choose CorpVantage?</h2>
        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl">
          <table className="min-w-full divide-y divide-slate-200">
            <thead>
              <tr className="bg-blue-50">
                <th className="px-6 py-4 text-left font-bold text-blue-900 text-lg">Feature</th>
                <th className="px-6 py-4 text-center font-bold text-blue-900 text-lg">CorpVantage</th>
                <th className="px-6 py-4 text-center font-bold text-blue-900 text-lg">Competitors</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="even:bg-blue-50/30">
                  <td className="px-6 py-4 font-medium text-gray-700">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {row.corpVantage ? <span className="text-green-600 text-2xl">✓</span> : <span className="text-gray-300 text-2xl">—</span>}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.competitors ? <span className="text-green-600 text-2xl">✓</span> : <span className="text-gray-300 text-2xl">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
