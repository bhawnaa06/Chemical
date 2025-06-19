'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Destination {
  name: string;
  flag: string;
  image: string;
}

const destinations: Destination[] = [
  {
    name: "Luxembourg",
    flag: "/luxembourg.png",
    image: "/luxembourg.jpg",
  },
  {
    name: "Germany",
    flag: "/germany.png",
    image: "/germany.jpg",
  },
  {
    name: "Austria",
    flag: "/austria.png",
    image: "/austria.jpg",
  },
  {
    name: "Belgium",
    flag: "/Belgium.png",
    image: "/belgiumflag.jpg",
  },
  {
    name: "United Kingdom",
    flag: "/unitedKingdom.jpg",
    image: "/uk.jpg",
  },
  {
    name: "Ireland",
    flag: "/ireland.png",
    image: "/ireland.jpg",
  },
];

export default function StudyDestinationsSlider() {
  // Duplicate items for infinite effect
  const loopedDestinations = [...destinations, ...destinations];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f9fafb] text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            🌍 Where Will Your Study Dreams Take You?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in delay-200">
            From Luxembourg to Ireland, we guide you to the perfect destination for your future—academically and culturally.
          </p>
        </div>

        <div className="overflow-x-hidden scrollbar-hide">
          <div className="flex gap-8 w-max animate-infinite-scroll">
            {loopedDestinations.map((dest, index) => (
              <div
                key={index}
                className="relative min-w-[260px] h-[320px] rounded-2xl overflow-hidden shadow-xl group transform hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={index < 3}
                />

                <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px] group-hover:bg-black/15 transition-all duration-300" />

                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                    <Image
                      src={dest.flag}
                      alt={`${dest.name} Flag`}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white font-semibold text-sm drop-shadow">{dest.name}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <Link
                    href={`/study-destinations/${dest.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full"
                  >
                    <button className="w-full py-2 px-4 bg-[#fb5607] hover:bg-[#e65000] text-white font-semibold rounded-xl transition duration-300 shadow-md">
                      Explore {dest.name}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .animate-infinite-scroll {
          display: flex;
          animation: scroll-x 40s linear infinite;
        }

        @keyframes scroll-x {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .animate-fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s ease forwards;
        }

        .animate-fade-in.delay-200 {
          animation-delay: 0.2s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
