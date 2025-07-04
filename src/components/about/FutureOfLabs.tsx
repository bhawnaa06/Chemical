'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FutureOfLabs = () => (
  <section className="bg-black text-white py-16 px-6">
    
         <motion.div
              className="md mb-10 md:mb-0"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">The Future We&apos;re Building</h2>
      <p className="text-lg mb-4">
        Manual chemical tracking is outdated. Labs need intelligent systems that enable real-time visibility, predictive insights, and operational autonomy.
      </p>
      <p className="text-lg">
        Usenseon Labs delivers just that — a smart reagent infrastructure that ensures accuracy, efficiency, and readiness for the era of connected science.
      </p>
    </div>
    </motion.div>
  </section>
);

export default FutureOfLabs;