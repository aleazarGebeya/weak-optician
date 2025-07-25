import React from "react";

const teamMembers = [
  {
    name: "Jamie Chen",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=260&h=260&fit=facearea&facepad=3&auto=format",
    bio: "Leadership visionary with a decade of experience helping companies scale and innovate."
  },
  {
    name: "Elijah Garcia",
    position: "Head of Transformation",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=260&h=260&fit=facearea&facepad=3&auto=format",
    bio: "Expert in digital transformation and agile operations for enterprises and startups alike."
  },
  {
    name: "Priya Singh",
    position: "Director of Strategy",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=260&h=260&fit=facearea&facepad=3&auto=format",
    bio: "Trusted consultant specializing in organizational growth and sustainable impact."
  },
  {
    name: "Oliver Mwangi",
    position: "Lead Consultant",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=260&h=260&fit=facearea&facepad=3&auto=format",
    bio: "Driven by passion for people and process, enabling teams to reach their peak potential."
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-gradient-to-r from-white via-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-2xl shadow-xl py-8 px-4 border border-slate-100 group hover:border-blue-300 transition-all">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full mb-4 w-32 h-32 object-cover shadow-lg group-hover:scale-[1.08] transition-transform duration-200"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <div className="text-blue-700 text-sm font-bold mb-2 uppercase">{member.position}</div>
              <p className="text-slate-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
