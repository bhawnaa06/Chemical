'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutHero = () => (
  <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4 text-center relative py-50 items-center justify-center">

     <motion.div
          className="md mb-10 md:mb-0"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Reimagining Laboratory Intelligence</h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto">
      From a college project to a government-backed deeptech startup, Usenseon Labs is transforming how laboratories manage reagents through AI, IoT, and automation.
    </p>
        </motion.div>
  </section>
);

export default AboutHero;