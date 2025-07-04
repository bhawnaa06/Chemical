'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      setStatus('Message sent!');
      const whatsappNumber = '918252448370'; // your WhatsApp number (without +)
      const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');

      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus('Failed to send.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 p-10 rounded-lg shadow-xl">
        
        {/* Left Side */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-2 rounded-full">📍</div>
              <div>
                <h3 className="text-cyan-400 font-semibold">Address</h3>
                <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-2 rounded-full">📞</div>
              <div>
                <h3 className="text-cyan-400 font-semibold">Phone</h3>
                <p>+91 966771233</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-2 rounded-full">✉️</div>
              <div>
                <h3 className="text-cyan-400 font-semibold">Email</h3>
                <p>usenseonlabs@temporary-mail.net</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white text-black p-8 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-6">Send Message</h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              required
            />
            <textarea
              name="message"
              placeholder="Type your Message..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              required
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition"
            >
              Send
            </button>
            <p className="text-sm mt-2">{status}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
