'use client';

import React from 'react';
import Image from 'next/image';

interface Student {
  name: string;
  image: string;
  university: string;
}

const students: Student[] = [
  {
    name: 'Sachi Kothari',
    image: '/images/students/student1.jpg',
    university: 'University of Leeds',
  },
  {
    name: 'Raj Navalakha',
    image: '/images/students/student2.jpg',
    university: 'University of Warwick',
  },
  {
    name: 'Sanskriti Dabhade',
    image: '/images/students/student3.jpg',
    university: 'Trinity College Dublin',
  },
  {
    name: 'George Yaldho',
    image: '/images/students/student4.jpg',
    university: 'University of Kent',
  },
  {
    name: 'Riya Agrawal',
    image: '/images/students/student5.jpg',
    university: 'University of Melbourne',
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Success Stories
        </h2>
        <div className="h-1 w-24 bg-[#fb5607] mx-auto mb-10 rounded-full" />

        <div className="flex flex-wrap justify-center gap-8">
          {students.map((student, index) => (
            <div
              key={index}
              className="w-40 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#5ce1e6]">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-md font-semibold text-[#fb5607]">{student.name}</h4>
              <p className="text-sm text-gray-600">{student.university}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
