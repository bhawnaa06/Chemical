"use client";
import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Brown",
    title: "CEO & Founder",
    image: "/rangan.jpg",
  },
  {
    name: "Johnson",
    title: "Senior Developer",
    image: "/rangan.jpg",
  },
  {
    name: "John Doe",
    title: "UI/UX Designer",
    image: "/rangan.jpg",
  },
  {
    name: "John Doe",
    title: "UI/UX Designer",
    image: "/rangan.jpg",
  },
];

export default function OurDeveloperTeam() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Developer</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center bg-white rounded-full shadow-lg transition-all duration-500 overflow-hidden h-24 cursor-pointer group ${
              hoveredIndex === index ? "w-80 px-4" : "w-24 px-0"
            }`}
          >
            <div className="min-w-24 w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Details appear only on hover */}
            <div
              className={`ml-4 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}