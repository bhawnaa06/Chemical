'use client';

import React from 'react';
import {
  GraduationCap,
  Globe,
  FileText,
  BookOpen,
  HelpCircle,
  Wallet,
  ClipboardList,
  Airplay,
  Home,
  Shield,
  Send,
  CheckCircle,
} from 'lucide-react';

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const services: Service[] = [
  {
    title: 'Comprehensive Education Counselling',
    icon: <GraduationCap className="w-7 h-7 text-white" />,
    description:
      'We help you choose the right academic path aligned with your goals, turning study abroad dreams into focused career journeys.',
  },
  {
    title: 'Profiling & Career Guidance',
    icon: <ClipboardList className="w-7 h-7 text-white" />,
    description:
      'Your skills, background, and ambition are mapped to shape a strong academic profile for admissions and scholarships.',
  },
  {
    title: 'Country, University & Course Selection',
    icon: <Globe className="w-7 h-7 text-white" />,
    description:
      'We match your interests with the ideal country, university, and course for maximum academic and career benefit.',
  },
  {
    title: 'Applications & Admission Process',
    icon: <FileText className="w-7 h-7 text-white" />,
    description:
      'Our experts handle SOPs, LORs, and application documentation so you can focus on preparing for your new journey.',
  },
  {
    title: 'Test Preparation',
    icon: <BookOpen className="w-7 h-7 text-white" />,
    description:
      'From IELTS to GRE, we coach you to ace your exams and improve your eligibility for top universities.',
  },
  {
    title: 'Interview Preparations',
    icon: <HelpCircle className="w-7 h-7 text-white" />,
    description:
      'Mock interviews and tips to help you confidently face admission or visa interviews with clarity and success.',
  },
  {
    title: 'Scholarship Assistance',
    icon: <Wallet className="w-7 h-7 text-white" />,
    description:
      'We guide you to discover and apply for scholarships that make studying abroad more affordable.',
  },
  {
    title: 'Loan Assistance',
    icon: <Shield className="w-7 h-7 text-white" />,
    description:
      'With our partner banks and loan experts, you can fund your education with minimum stress and paperwork.',
  },
  {
    title: 'Visa Documentation',
    icon: <FileText className="w-7 h-7 text-white" />,
    description:
      'Our visa success rate is high because we ensure every document is perfect and every step is clear.',
  },
  {
    title: 'Pre Departure Services',
    icon: <Airplay className="w-7 h-7 text-white" />,
    description:
      'Learn what to pack, how to adapt, and everything else you need before boarding your flight.',
  },
  {
    title: 'Accommodation',
    icon: <Home className="w-7 h-7 text-white" />,
    description:
      'On-campus or off-campus—get reliable housing options before you even land.',
  },
  {
    title: 'Essential Services',
    icon: <Send className="w-7 h-7 text-white" />,
    description:
      'SIM cards, health insurance, forex—get it all done right from home.',
  },
  {
    title: 'Post Departure Services',
    icon: <CheckCircle className="w-7 h-7 text-white" />,
    description:
      'Need help overseas? We offer support even after you land, from emergencies to settling in.',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#fefae0] py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          ✨ Services for Study Abroad
        </h2>
        <div className="h-1 w-20 bg-[#fb5607] mx-auto mb-12 rounded-full" />
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#fb5607] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="bg-[#5ce1e6] p-3 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#fb5607] mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
