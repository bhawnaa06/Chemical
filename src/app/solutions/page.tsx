'use client';

import React, { useEffect, useState } from 'react';

const Solutions = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const fullText = 'COMING SOON';
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const endDate = new Date().getTime() + 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typed.length === fullText.length) return;
    const timeout = setTimeout(() => {
      setTyped(fullText.slice(0, typed.length + 1));
    }, 150);
    return () => clearTimeout(timeout);
  }, [typed]);

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-center">
      {/* Decorative Bubbles */}
      <div className="absolute top-10 left-10 flex space-x-4 opacity-20">
        <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
        <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-20 flex space-x-4 opacity-20">
        <div className="w-20 h-20 bg-gray-600 rounded-full"></div>
        <div className="w-14 h-14 bg-gray-700 rounded-full"></div>
      </div>

      {/* Main Content */}
      <h4 className="text-lg mb-4 text-gray-400">Something great is on the way</h4>
      <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-white tracking-widest">
        {typed}
        <span className="border-r-2 border-gray-300 animate-pulse ml-1"></span>
      </h1>

      {/* Countdown */}
      <div className="text-2xl flex gap-4 mb-10 text-gray-400">
        <div>{timeLeft.days}<span className="text-xs block">Days</span></div>
        <div>{timeLeft.hours}<span className="text-xs block">Hours</span></div>
        <div>{timeLeft.minutes}<span className="text-xs block">Minutes</span></div>
        <div>{timeLeft.seconds}<span className="text-xs block">Seconds</span></div>
      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-8 text-sm text-gray-400 animate-bounce">
        Scroll Down ↓
      </div>
    </div>
  );
};

export default Solutions;
