'use client';

import React from 'react';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';
// import { motion } from 'framer-motion';


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};
// import './FlipCard.css'; // Import custom CSS

const BackedBySupport = () => (
  <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Backed by Support</h2>
      <p className="text-lg mb-8">
        We are supported by government innovation grants, leading academic institutions, and deeptech investors who believe in transforming laboratory infrastructure.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Development Partner */}
       
        <div className="bg-gray-50 p-6 rounded-lg shadow w-full md:w-1/2 rounded-xl text-black shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
          <h3 className="text-xl font-semibold mb-2">Development Partner</h3>
          <p className="mb-4">Collaborating closely with us in R&D, validation, and prototyping efforts.</p>
           <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-gray-50 p-6 rounded-xl shadow-lg w-full hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80"
        >
          <div className="flex gap-4 justify-center">
            {/* Card 1 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front relative rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
                  <Image src="/aditya.jpg" alt="Partner 1" fill className="rounded object-cover" />
                </div>
                <div className="flip-card-back rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
                  <p className="text-sm">University R&D Division — specialized in AI prototyping.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front relative rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
                  <Image src="/aditya.jpg" alt="Partner 2" fill className="rounded object-cover" />
                </div>
                <div className="flip-card-back rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
                  <p className="text-sm">DeepTech Labs — development and sensor testing partner.</p>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>

        {/* Grant & Investment Supporters */}

         
        <div className="bg-gray-50 p-6 rounded-lg shadow w-full md:w-1/2 rounded-xl text-black shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
          <h3 className="text-xl font-semibold mb-2">Grant & Investment Supporters</h3>
          <p className="mb-4">Fueling innovation with early-stage funding and institutional credibility.</p>
  <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-gray-50 p-6 rounded-xl shadow-lg w-full  hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80"
        >
          <div className="flex gap-4 justify-center">
            {/* Card 1 */}
            <div className="flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front relative rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
                  <Image src="/rangan.jpg" alt="Investor 1" fill className="rounded object-cover" />
                </div>
                <div className="flip-card-back rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
                  <p className="text-sm">National Innovation Fund — Seed Grant awarded in 2024.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front relative rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
                  <Image src="/rangan.jpg" alt="Investor 2" fill className="rounded object-cover" />
                </div>
                <div className="flip-card-back rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-green-500/80">
                  <p className="text-sm">TechAngels VC — Series A investors with AI portfolio.</p>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  </section>
);

export default BackedBySupport;