'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 14, suffix: '+', label: 'Years of Experience' },
  { value: 6000, suffix: '+', label: 'Students Placed' },
  { value: 98, suffix: '%', label: 'Visa Success Rate' },
  { value: 80000, suffix: '+', label: 'Hours Counseling' },
  { value: 7, suffix: '+ Million', label: 'USD Scholarships Won' },
  { value: 1200, suffix: '+', label: 'Students in QS Top Universities' },
];

export default function WhySmartSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-[#fefae0] py-20 px-4 md:px-20" ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 leading-tight">
          🚀 We Focus On <span className="text-[#fb5607]">Your Success</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center border border-gray-100"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-[#fb5607] mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={8}            // Slow for all
                    delay={i * 0.3}         // Optional: staggered effect
                    decimals={0}            // Ensures consistent visual speed
                    suffix={stat.suffix}
                    separator=","
                  />
                ) : (
                  '0'
                )}
              </p>
              <p className="text-sm md:text-base text-gray-700 font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
