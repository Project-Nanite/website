'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/docs', label: 'Docs' },
    { href: '/blog', label: 'Blog' },
    { href: '/download', label: 'Download' },
    { href: '/about', label: 'About' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={`fixed top-3 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 shadow-2xl backdrop-blur-lg' 
        : 'bg-white/80 shadow-xl backdrop-blur-md'
    } rounded-2xl border border-gray-200/50`}>
      <div className="px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-white text-xl animate-bee-buzz">🐝</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-300">
                Nanite
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">AI Development OS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'text-orange-600 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-md'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-orange-50/50'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.href) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            
            <div className="ml-6 flex items-center space-x-4">
              <Link 
                href="/waitlist" 
                className="relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🐝 Join Hive
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 border border-gray-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-200/50">
            <div className="pt-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-md'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-orange-50/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/waitlist"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-6 py-4 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🐝 Join Hive
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
