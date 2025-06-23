'use client';

import React from 'react';
import Image from 'next/image';

const OurJourney = () => (
<section className="flex flex-col md:flex-row items-center justify-between bg-white  py-25 px-30">
      {/* Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Our consulting agency provides consulting, ideas, and resources for people working to create social change.
          We bring the right people together to challenge established thinking and drive transformation.
          We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.
        </p>
        {/* <a href="#" className="text-blue-600 underline font-medium">read more</a> */}
      </div>

      {/* Image Section */}
      <div className="md:w-1/3">
        <Image
          src="/our-journey.jpg" // Replace with actual image path (e.g. /images/why-us.jpg)
          alt="Consulting session"
          width={600}
          height={500}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </section>
  );

export default OurJourney;