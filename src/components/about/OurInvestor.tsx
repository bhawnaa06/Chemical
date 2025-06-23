"use client";
import { useState } from "react";
import Image from "next/image";

// ✅ Step 1: Define the type
type Investor = {
  name: string;
  title: string;
  image: string;
  description: string;
  twitter: string;
};

// ✅ Step 2: Add your investors data here
const investors: Investor[] = [
  {
    name: "Pierre Lipton",
    title: "Chief Creative Officer",
    image: "/rangan.jpg", // 🧠 image must be in the /public folder
    description:
      "Pierre led a 125-person creative team at AKQA’s San Francisco office, working with brands like Google, Visa, Xbox. Previously worked with BBDO, Fallon and TBWA.",
    twitter: "https://twitter.com/pierrelipton",
  },
  {
    name: "Sarah Hofstetter",
    title: "Chief Executive Officer",
    image: "/rangan.jpg",
    description:
      "Sarah is an accomplished executive with a passion for innovation and leadership, previously serving at major advertising firms.",
    twitter: "https://twitter.com/sarahhof",
  },
   {
    name: "Sarah Hofstetter",
    title: "Chief Executive Officer",
    image: "/rangan.jpg",
    description:
      "Sarah is an accomplished executive with a passion for innovation and leadership, previously serving at major advertising firms.",
    twitter: "https://twitter.com/sarahhof",
  },
   {
    name: "Sarah Hofstetter",
    title: "Chief Executive Officer",
    image: "/rangan.jpg",
    description:
      "Sarah is an accomplished executive with a passion for innovation and leadership, previously serving at major advertising firms.",
    twitter: "https://twitter.com/sarahhof",
  },
  // 🔁 Add more entries as needed
];

export default function OurInvestor() {
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);

  return (
    <div className="py-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-4">Our Investors</h2>
      <p className="text-center max-w-xl mx-auto mb-10 text-gray-600">
        We are backed by an experienced team who are passionate about innovation and leadership.
      </p>

      {/* Investor Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {investors.map((investor, idx) => (
          <div
            key={idx}
            className="text-center cursor-pointer"
            onClick={() => setSelectedInvestor(investor)}
          >
            <div className="relative w-fit mx-auto">
              <Image
                src={investor.image}
                alt={investor.name}
                width={120}
                height={120}
                className="rounded-full mx-auto object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white text-black rounded-full p-1 shadow">
                →
              </div>
            </div>
            <p className="font-semibold mt-2">{investor.name}</p>
            <p className="text-sm text-gray-500">{investor.title}</p>
          </div>
        ))}
      </div>

      {/* Modal for selected investor */}
      {selectedInvestor && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setSelectedInvestor(null)}
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <Image
                src={selectedInvestor.image}
                alt={selectedInvestor.name}
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">{selectedInvestor.name}</h3>
                <p className="text-gray-500 mb-4">{selectedInvestor.title}</p>
                <p className="text-sm text-gray-700 overflow-y-auto max-h-60">
                  {selectedInvestor.description}
                </p>
                <a
                  href={selectedInvestor.twitter}
                  target="_blank"
                  className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
                >
                  Follow on Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}