'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-[#6c757d] sticky top-0 z-50 w-full shadow">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={60}
            height={50}
            className="object-contain"
            priority
          />
          <span className="text-xl font-bold text-[#495057] whitespace-nowrap">USENSEON LABS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#495057] transition-colors">Home</Link>
          {/* <Link href="/products" className="hover:text-[#495057] transition-colors">Products</Link> */}
          <Link href="/solutions" className="hover:text-[#495057] transition-colors">Solutions</Link>
          <Link href="/technology" className="hover:text-[#495057] transition-colors">Technology</Link>
          <Link href="/contact" className="hover:text-[#495057] transition-colors">Contact</Link>
          <Link href="/about" className="hover:text-[#495057] transition-colors">About</Link>
        </nav>

        <button className="md:hidden text-[#6c757d]" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 py-2 bg-white space-y-3 text-[#6c757d]">
          <Link href="/" className="block py-2 hover:text-[#495057] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/products" className="block py-2 hover:text-[#495057] transition-colors" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/solutions" className="block py-2 hover:text-[#495057] transition-colors" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link href="/technology" className="block py-2 hover:text-[#495057] transition-colors" onClick={() => setIsOpen(false)}>Technology</Link>
          <Link href="/contact" className="block py-2 hover:text-[#495057] transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/about" className="block py-2 hover:text-[#495057] transition-colors" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}
