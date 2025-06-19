'use client';

import React from 'react';
import Image from 'next/image';

interface Course {
  title: string;
  image: string;
  description: string;
}

const courses: Course[] = [
  {
    title: 'Data Science',
    image: '/data-science.jpg',
    description:
      'Master the art of turning data into strategic insights. Prepare for a high-demand global career in AI, analytics, or data engineering.',
  },
  {
    title: 'Artificial Intelligence',
    image: '/artificial-intelligence.jpg',
    description:
      'Learn to design smart systems and apply machine learning to real-world challenges. Ideal for future tech leaders and innovators.',
  },
  {
    title: 'Financial Technology',
    image: '/fintech.jpg',
    description:
      'Explore blockchain, digital payments, and the future of finance. FinTech is revolutionizing how the world manages money.',
  },
  {
    title: 'Business & Management',
    image: '/business.jpg',
    description:
      'Develop leadership, strategy, and operations expertise. Graduate ready to lead global teams and grow powerful organizations.',
  },
];

const PopularCourses = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
          Popular Courses to Study Abroad
        </h2>
        <div className="h-1 w-24 bg-[#fb5607] mx-auto mb-12 rounded-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#fb5607] mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
