"use client";
import {
  LucideIcon,
  FilePlus,
  BookOpenCheck,
  FlaskConical,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// StepCard Component
interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-green-500/20 hover:shadow-green-500/30 hover:border-green-500/50 transition-all text-left"
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-lg">
        <Icon className="w-7 h-7 text-green-400" />
      </div>
      <h3 className="text-xl font-semibold text-white ml-4">{title}</h3>
    </div>
    <p className="text-gray-300 text-base leading-relaxed">{description}</p>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14 drop-shadow-lg"
        >
          Future-Ready <span className="text-green-400">Chemical Solutions</span>
        </motion.h2>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <StepCard
            icon={FilePlus}
            title="Submit Requirements"
            description="Share your chemical needs or custom formulation goals with us."
            delay={0.1}
          />
          <StepCard
            icon={BookOpenCheck}
            title="Expert Consultation"
            description="Get personalized guidance from our technical specialists."
            delay={0.2}
          />
          <StepCard
            icon={FlaskConical}
            title="R&D & Formulation"
            description="We develop and refine solutions in our state-of-the-art lab."
            delay={0.3}
          />
          <StepCard
            icon={ShieldCheck}
            title="Testing & Compliance"
            description="All solutions are quality-tested and meet industry standards."
            delay={0.4}
          />
          <StepCard
            icon={Truck}
            title="Delivery & Support"
            description="Receive on-time delivery and ongoing product assistance."
            delay={0.5}
          />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Link
            href="#contact" // Adjust this to your actual contact form route
            className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-medium hover:bg-green-600 transition-all"
          >
            <span className="mr-2">Request a Solution</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
