'use client';
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 p-10 rounded-lg shadow-xl">
        
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-2 rounded-full">
                📍
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold">Address</h3>
                <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-2 rounded-full">
                📞
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold">Phone</h3>
                <p>+91 966771233</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-2 rounded-full">
                ✉️
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold">Email</h3>
                <p>USENSEONLABS@temporary-mail.net</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white text-black p-8 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-6">Send Message</h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <textarea
              placeholder="Type your Message..."
              rows={4}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;