"use client";
import {
  LucideIcon,
  FlaskConical,
  Factory,
  ShieldCheck,
  TrendingUp,
  BookOpenCheck,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";

// FeatureCard Component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number; // For staggered animations
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-black/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-green-500/50 hover:border-green-500/80"
  >
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-lg">
        <Icon className="w-8 h-8 text-green-400 drop-shadow-glow" />
      </div>
      <h3 className="text-2xl font-semibold text-white ml-4">{title}</h3>
    </div>
    <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
  </motion.div>
);

export default function WhyUsenseonLabs() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-16 text-white drop-shadow-glow relative"
      >
        Future-Ready <span className="text-green-400">Chemical Managment System</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <FeatureCard
          icon={FlaskConical}
          title="Advanced Formulations"
          description="Cutting-edge chemical products tailored for evolving industrial needs."
          delay={0.1}
        />
        <FeatureCard
          icon={Factory}
          title="Industrial-Grade Quality"
          description="Reliable and scalable solutions for manufacturing and laboratory use."
          delay={0.2}
        />
        <FeatureCard
          icon={ShieldCheck}
          title="Safety & Compliance"
          description="Strict adherence to safety protocols and global industry standards."
          delay={0.3}
        />
        <FeatureCard
          icon={TrendingUp}
          title="Innovation-Driven"
          description="Constant R&D for next-gen chemical technologies and improvements."
          delay={0.4}
        />
        <FeatureCard
          icon={BookOpenCheck}
          title="Technical Documentation"
          description="Detailed MSDS, COA, and product guides to support your operations."
          delay={0.5}
        />
        <FeatureCard
          icon={Network}
          title="Global Reach"
          description="Serving clients across industries and geographies with trust."
          delay={0.6}
        />
      </div>
    </section>
  );
}
