import React from "react";
import Link from "next/link";

export default function WhySmartSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-16">Join Our Community</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Business Card */}
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-10 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-2xl font-semibold mb-6">For Businesses</h3>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Access to verified influencers
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Campaign management tools
              </li>
              <li className="flex items-center">
                <span className="text-purpgreenle-600 mr-2">✓</span>
                Detailed analytics & reporting
              </li>
            </ul>
            <Link
              href="https://app.networtyideas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition"
            >
              Start as Business
            </Link>
          </div>

          {/* Influencer Card */}
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-10 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="text-2xl font-semibold mb-6">For Influencers</h3>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Find brand collaborations
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Get matched with ideal brands
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Secure payment system
              </li>
            </ul>
            <Link
              href="https://app.networtyideas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border-2 border-green-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-600 hover:border-green-700 transition"
            >
              Join as Influencer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};