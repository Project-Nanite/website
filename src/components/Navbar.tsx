'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

interface NavbarProps {
  onWaitlistOpen?: () => void;
}

interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

const Navbar = ({ onWaitlistOpen }: NavbarProps) => {
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
    { href: '/about', label: 'About' },
    { href: 'https://dev.to/nanite', label: 'Blog', external: true },
    { href: 'http://docs.nanite.software/', label: 'Docs', external: true },
    { href: '/ask-ai', label: 'Ask AI' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={`fixed top-3 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 shadow-2xl backdrop-blur-lg' 
        : 'bg-white/80 dark:bg-gray-900/80 shadow-xl backdrop-blur-md'
    } rounded-2xl border border-gray-200/50 dark:border-gray-700/50`}>
      <div className="px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl overflow-hidden">
                <Image
                  src="/nanite.png"
                  alt="Nanite Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-300">
                Nanite
              </span>
             </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isExternalLink = item.external;
              const linkProps = isExternalLink 
                ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: item.href };
              
              const LinkComponent = isExternalLink ? 'a' : Link;
              
              return (
                <LinkComponent
                  key={item.href}
                  {...linkProps}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${
                    !isExternalLink && isActive(item.href)
                      ? 'text-orange-600 dark:text-orange-400 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-orange-50/50 dark:hover:from-yellow-900/20 dark:hover:to-orange-900/20'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {!isExternalLink && isActive(item.href) && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </LinkComponent>
              );
            })}
            
            <div className="ml-6 flex items-center space-x-4">
              <DarkModeToggle />
              <button 
                onClick={() => onWaitlistOpen?.()}
                className="relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Join Waitlist
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 dark:hover:from-yellow-900/20 dark:hover:to-orange-900/20 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="pt-6 space-y-3">
              {navItems.map((item) => {
                const isExternalLink = item.external;
                const linkProps = isExternalLink 
                  ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                  : { href: item.href };
                
                const LinkComponent = isExternalLink ? 'a' : Link;
                
                return (
                  <LinkComponent
                    key={item.href}
                    {...linkProps}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      !isExternalLink && isActive(item.href)
                        ? 'text-orange-600 dark:text-orange-400 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-orange-50/50 dark:hover:from-yellow-900/20 dark:hover:to-orange-900/20'
                    }`}
                  >
                    {item.label}
                  </LinkComponent>
                );
              })}
              <button 
                onClick={() => {
                  onWaitlistOpen?.();
                  setIsOpen(false);
                }}
                className="block w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-6 py-4 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Join Waitlist
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
 

export default Navbar;
