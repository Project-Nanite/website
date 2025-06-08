// src/components/Footer.tsx
import { Github, BookOpen, FileText } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/nanite.png"
                  alt="Nanite Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Nanite</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Revolutionary AI Development OS. Built on Debian, optimized for AI/ML workflows, and designed for developers who demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/ask-ai" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Ask AI
                </a>
              </li>
              <li>
                <a href="http://docs.nanite.software/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center gap-1">
                  Documentation
                  <BookOpen className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/Project-Nanite/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center gap-1">
                  GitHub
                  <Github className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://dev.to/nanite" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center gap-1">
                  Blog
                  <FileText className="w-3 h-3" />
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Nanite. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a 
                href="https://github.com/Project-Nanite/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://dev.to/nanite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="Blog"
              >
                <FileText className="w-5 h-5" />
              </a>
              <a 
                href="http://docs.nanite.software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="Documentation"
              >
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
