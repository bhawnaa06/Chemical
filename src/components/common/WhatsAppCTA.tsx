'use client';

import React from 'react';

const WhatsAppCTA = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/919672128525?text=Hi%2C%20I\'m%20interested%20in%20studying%20abroad%20and%20would%20like%20to%20know%20more.',
      '_blank'
    );
  };

  return (
    <div className="mt-20 text-center bg-[#fb5607] py-12 rounded-xl text-white">
      <h3 className="text-3xl font-bold mb-4">
        🚀 Ready to Start Your Study Abroad Journey?
      </h3>
      <p className="text-lg mb-6">
        Get expert guidance on WhatsApp — free counseling, university shortlisting, visa help & more.
      </p>
      <button
        onClick={handleWhatsAppClick}
        className="bg-white text-[#fb5607] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
      >
        Chat on WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppCTA;
