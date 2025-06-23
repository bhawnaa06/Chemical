'use client';

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>USENSEON LABS</strong>, we value your privacy and are committed to protecting any personal and business-related information you share with us. This Privacy Policy outlines how we collect, use, and protect your information when you use our website or interact with our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Personal details such as name, email, phone number, and company name when you fill out contact or inquiry forms.</li>
          <li>Technical data like IP address, browser type, and usage data collected via cookies and analytics tools.</li>
          <li>Order or product inquiry data for our chemical solutions or services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>To respond to your queries, quotations, or service requests.</li>
          <li>To improve the performance and functionality of our website.</li>
          <li>To send updates, product info, or technical documentation upon your request or consent.</li>
          <li>To ensure regulatory compliance and safety communication related to chemical products.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell your personal data. Information may be shared with:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Trusted partners and logistics providers for order fulfillment.</li>
          <li>Service providers (e.g., email, analytics) under strict confidentiality agreements.</li>
          <li>Government bodies or regulators when legally required, especially concerning chemical safety and transport regulations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Protection</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your data from unauthorized access, misuse, or disclosure. While we strive to safeguard your information, no method of electronic storage or transmission is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies & Analytics</h2>
        <p className="mb-4">
          Our website uses cookies and analytics tools to understand visitor behavior and improve user experience. You can control cookie settings via your browser preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Third-Party Links</h2>
        <p className="mb-4">
          Our site may contain links to third-party websites, including regulatory or safety portals. We are not responsible for the privacy practices or content of those sites.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Data Retention</h2>
        <p className="mb-4">
          We retain your personal data only as long as necessary for the purposes outlined in this policy, or to comply with legal, tax, or regulatory requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Your Rights</h2>
        <p className="mb-4">
          You have the right to request access, correction, or deletion of your personal data. To exercise your rights, please contact us using the information below.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Policy Updates</h2>
        <p className="mb-4">
          We may update this policy from time to time to reflect changes in our practices or legal obligations. Any changes will be posted on this page with the updated date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at:  
          <br />
          <span className="block mt-2 font-medium text-blue-600">info@usenseonlabs.com</span>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
