'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Rangan Raj Ghosh',
    role: 'Founder & Lead innovator of Usenseon Labs.',
    description:
      'Rangan blends deep knowledge in microbiology with embedded systems and IoT to build AI-powered reagent tracking systems for smart labs.',
    image: '/rangan.jpg',
  },
  {
    name: 'Aditya',
    role: 'Strategic Partner from ANH Engineering.',
    description:
      'Aditya brings design, prototyping, and validation expertise—helping Usenseon Labs streamline product development.',
    image: '/aditya.jpg',
  },
];

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`relative transition-all duration-500 overflow-hidden rounded-xl cursor-pointer w-full md:h-[400px] ${
              activeIndex === index
                ? 'md:flex-[3] md:scale-105'
                : activeIndex === null
                ? 'md:flex-1'
                : 'md:flex-[0] md:opacity-0 md:pointer-events-none'
            }`}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center px-4 text-center transition-opacity duration-500 ${
                activeIndex === index || activeIndex === null ? 'opacity-100' : 'opacity-0'
              } md:opacity-${activeIndex === index ? '100' : '0'}`}
            >
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-sm italic">{member.role}</p>
              <p className="text-sm mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
