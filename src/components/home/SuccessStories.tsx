"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || ""; 

// TestimonialCard Component
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  avatar,
  delay,
}) => {
  const avatarUrl = avatar.startsWith("http") ? avatar : `${urlEndpoint}/${avatar}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-black/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-green-500/50 hover:border-green-500/80 backdrop-blur-md"
    >
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-500/20 mr-4 relative">
          <Image
            src={avatarUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed">{content}</p>
    </motion.div>
  );
};
const SuccessStories = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white drop-shadow-glow"
        >
          Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            name="AhenPink"
            role="Women Only Bike Taxi"
            content="Achieved a 50% increase in website traffic and a 35% rise in conversions."
            avatar="static-assets/AhenPink.png" 
            delay={0.1}
          />

          <TestimonialCard
            name="NSR."
            role="Influencer"
            content="Advocated for safer public spaces, impacting 120+ daily commuters through awareness campaigns."
            avatar="static-assets/NSR.jpg" 
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
