'use client';

import React from 'react';

const OurVision = () => (
  <section className="bg-gray-100 text-gray-900 py-16 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
      <p className="text-lg mb-4">
        We&apos;re building more than just devices — we&apos;re crafting the infrastructure for tomorrow&apos;s AI-powered, autonomous labs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Scalable</h3>
          <p>Deployable across multiple lab environments, from R&D to production facilities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Smart</h3>
          <p>AI-driven analytics that optimize inventory, usage patterns, and lab performance.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
          <p>Reduces waste, prevents stock-outs, and promotes responsible lab practices.</p>
        </div>
      </div>
    </div>
  </section>
);

export default OurVision;