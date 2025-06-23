'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const countries = [
    'Luxembourg',
    'Germany',
    'Austria',
    'Belgium',
    'United Kingdom',
    'Ireland',
  ];

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Image src="/logo.png" alt="ALL UNI ADMITS Logo" width={130} height={70} />
            {/* <span className="text-xl font-bold text-orange-500 whitespace-nowrap">ALL UNI ADMITS</span> */}
          </div>
          <p className="text-sm">
            Trusted overseas education consultancy helping students with counseling, test prep, admissions & visas for 14+ years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-3 text-[#495057]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#495057] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#495057] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#495057] transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#495057] transition">Contact</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-[#495057] transition">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#495057] transition">Privacy Policy</Link></li>
            
          </ul>
        </div>

        {/* Study Destinations */}
        <div>
          <h4 className="text-md font-semibold mb-3 text-[#495057]">Study Destinations</h4>
          <ul className="space-y-2 text-sm">
            {countries.map((country, index) => (
              <li key={index}>
                <Link
                  href={`/study-destinations/${country.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#495057] transition"
                >
                  {country}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-md font-semibold mb-3 text-[#495057]">Contact</h4>
            <p className="text-sm">📍 Pune | Delhi | Mumbai | Nashik</p>
            <p className="text-sm mt-2">📞 +91 96506 80072</p>
            <p className="text-sm">📧 info@studysmart.co.in</p>
          </div>

          <div className="flex gap-4 mt-6 justify-start sm:justify-start md:justify-end">
            <a href="https://www.instagram.com/studysmartindia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#E1306C]">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@studysmartindia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#FF0000]">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/study-smart/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#0077B5]">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Study Smart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
