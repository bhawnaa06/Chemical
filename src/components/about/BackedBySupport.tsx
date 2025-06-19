'use client';

import React from 'react';

const BackedBySupport = () => (
  <section className="bg-white text-gray-800 py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Backed by Support</h2>
      <p className="text-lg mb-8">
        We are supported by government innovation grants, leading academic institutions, and deeptech investors who believe in transforming laboratory infrastructure.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-2">Development Partner</h3>
          <p>Collaborating closely with us in R&D, validation, and prototyping efforts.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-2">Grant & Investment Supporters</h3>
          <p>Fueling innovation with early-stage funding and institutional credibility.</p>
        </div>
      </div>
    </div>
  </section>
);

export default BackedBySupport;