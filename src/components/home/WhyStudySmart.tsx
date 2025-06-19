'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const cardData = [
  {
    title: "6000+ Students",
    description: "Guided thousands of students to top universities worldwide.",
    image: "/students.png",
    icon: "🎓",
  },
  {
    title: "5+ Countries",
    description: "Admissions across Germany, UK, Ireland, Austria & more.",
    image: "/countries.png",
    icon: "🌍",
  },
  {
    title: "5 Major Cities",
    description: "Presence in Delhi, Pune, Mumbai, Nashik & Hyderabad.",
    image: "/cities.png",
    icon: "🏙️",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export default function WhyStudySmart() {
  return (
    <section className="bg-gradient-to-b from-[#fff7ed] to-white py-20 px-6 md:px-20 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading & Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Why Choose <span className="text-[#fb5607]">ALL UNI ADMITS?</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-4"
          >
            We&apos;re here to give wings to your global education dreams.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base text-gray-600 max-w-3xl mx-auto"
          >
            More than consultants, we are your partners in success—providing personalized guidance, expert preparation, and trusted support for your study abroad journey.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Soft glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#fefae0] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />

              {/* Icon */}
              <div className="text-5xl mb-4 animate-pulse-slow text-[#fb5607]">
                {card.icon}
              </div>

              {/* Image */}
              <div className="w-full h-40 relative mb-6 rounded-lg overflow-hidden border">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#fb5607] to-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-base text-gray-700 mb-6 max-w-xl mx-auto">
            We proudly serve from Delhi, Pune, Mumbai, Nashik & Hyderabad—guiding 6000+ students to top institutions in 12+ countries.
          </p>
          <Link href="/contact">
            <button className="bg-[#fb5607] hover:bg-[#e04e06] text-white font-semibold py-3 px-6 rounded-full shadow-md text-base transition-all duration-300 hover:scale-105">
              🚀 Start Your Journey
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 6s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  );
}
