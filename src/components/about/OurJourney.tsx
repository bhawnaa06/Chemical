'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const OurJourney = () => (
  <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-900 to-black py-30 px-30 gap-10">
    
    {/* Text Section with Fade-Up Animation */}
    <motion.div
      className="md:w-1/2 mb-10 md:mb-0"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
      <p className="text-white mb-6 leading-relaxed">
        Our consulting agency provides consulting, ideas, and resources for people working to create social change.
        We bring the right people together to challenge established thinking and drive transformation.
        We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.
      </p>
    </motion.div>

    {/* Image Section with Fade-Up Animation */}
    <motion.div
      className="md:w-1/3"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      <Image
        src="/our-journey.jpg"
        alt="Consulting session"
        width={600}
        height={500}
        className="rounded-lg object-cover w-full h-full"
      />
    </motion.div>
  </section>
);

export default OurJourney;
