'use client';

import React from 'react';
import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: 'Kuhoo', logo: '/images/partners/kuhoo.png' },
  { name: 'Amber Student', logo: '/images/partners/amber.png' },
  { name: 'HDFC Credila', logo: '/images/partners/hdfc.png' },
  { name: 'State Bank of India', logo: '/images/partners/sbi.png' },
  { name: 'University of Oxford', logo: '/images/partners/university-oxford.png' },
  { name: 'University of Toronto', logo: '/images/partners/university-toronto.png' },
  // Add more as needed
];

const PartnersSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Partners & Associates
        </h2>
        <div className="h-1 w-24 bg-[#fb5607] mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-2">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-700">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
