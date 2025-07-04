'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
// import { motion } from 'framer-motion';


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ type-safe custom easing curve
    },
  }),
};

const teamMembers = [
  {
    name: 'Harshit Luthra',
    role: 'Senior App Developer',
    description:
      'Harshit Luthra brings valuable industry expertise and strategic insight, playing a key role in shaping our foundation and driving our vision forward.',
    image: '/Harshit Luthra.jpg',
    social: [<FaFacebook key="f" />, <FaInstagram key="i" />, <FaTwitter key="t" />],
  },
  {
    name: 'Sarah Khan',
    role: 'UI Designer',
    description:
      'Sarah crafts intuitive and elegant user interfaces that enhance user experience across all platforms.',
    image: '/rangan.jpg',
    social: [<FaFacebook key="f" />, <FaInstagram key="i" />, <FaTwitter key="t" />],
  },
  {
    name: 'Sarah Khan',
    role: 'UI Designer',
    description:
      'Sarah crafts intuitive and elegant user interfaces that enhance user experience across all platforms.',
    image: '/aditya.jpg',
    social: [<FaFacebook key="f" />, <FaInstagram key="i" />, <FaTwitter key="t" />],
  },
  {
    name: 'Ayesha Roy',
    role: 'Backend Engineer',
    description:
      'Ayesha develops scalable backend APIs, ensuring reliable data flow and system stability.',
    image: '/rangan.jpg',
    social: [<FaFacebook key="f" />, <FaInstagram key="i" />, <FaTwitter key="t" />],
  },
];

const OurTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-30 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center group w-full sm:w-auto"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
               <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className={`transition-all duration-500 ${
                  isHovered ? 'rounded-full w-[180px] h-[180px]' : 'rounded-full w-[140px] h-[140px]'
                } overflow-hidden shadow-lg bg-white`}
              >
              <div
                className={`transition-all duration-500 ${
                  isHovered ? 'rounded-full w-[180px] h-[180px]' : 'rounded-full w-[140px] h-[140px]'
                } overflow-hidden shadow-lg bg-white `}
              >
                   
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full "
                />
            
              </div>
    </motion.div>
              {/* Detail Box (responsive position) */}
              {isHovered && (
                <div
                  className={`
                    absolute z-10
                    bg-white text-black p-5 rounded-xl shadow-xl w-[260px] hover:shadow-2xl transition-shadow border border-green-500/50
                    animate-slide-right
                    text-left
                    hidden sm:block
                    left-[110%] top-1/2 -translate-y-1/2
                  `}
                >
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-green-600 text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-gray-700 mb-3">{member.description}</p>
                  <div className="flex gap-3 text-green-600 text-lg">
                    {member.social.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile Detail Below Image */}
              <div className="sm:hidden mt-4 bg-white text-black p-4 rounded-lg shadow-md w-[90%]">
                <h3 className="text-base font-bold">{member.name}</h3>
                <p className="text-green-600 text-sm">{member.role}</p>
                <p className="text-sm text-gray-700 mt-2">{member.description}</p>
                <div className="flex gap-3 mt-3 text-green-600 text-lg">
                  {member.social.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;