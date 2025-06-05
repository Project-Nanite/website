// filepath: /workspaces/website/app/download/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download Nanite - AI Development Linux Distribution',
  description: 'Download Nanite ISO images - the revolutionary Linux distribution for AI development. Choose from Desktop, Server, or Pro editions.',
  keywords: 'nanite, download, linux distribution, ai development, iso, machine learning, pytorch, tensorflow',
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 opacity-30 rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-indigo-200 opacity-40 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-slate-200 opacity-25 -rotate-12 animate-pulse"></div>
        
        <div className="absolute top-60 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-gradient-to-br from-indigo-200 to-slate-200 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-br from-slate-200 to-blue-200 rounded-full opacity-25 animate-bounce"></div>
        
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-300 to-slate-300 rounded-full opacity-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 pt-32">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              Download Center
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 bg-clip-text text-transparent leading-tight">
              Download Nanite
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of AI development on Linux. 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold"> Our ISOs are being meticulously engineered and will be available soon.</span>
            </p>
          </div>

          {/* Available ISOs Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Available ISOs</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Choose from different editions optimized for your AI development needs.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Nanite Desktop */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </div>
                <div className="absolute top-4 left-4 text-3xl">💻</div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Nanite Desktop</h3>
                <p className="text-gray-600 mb-6">
                  Full desktop environment with AI-optimized tools, perfect for getting started with machine learning development.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> GNOME Desktop Environment
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Pre-installed ML IDEs
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Optimized GPU drivers
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Jupyter Lab ready
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <span className="text-gray-600">Size: </span>
                  <span className="font-semibold text-gray-800">~4.5 GB</span>
                </div>
                
                <button className="w-full bg-gray-300 text-gray-500 font-semibold px-6 py-3 rounded-full cursor-not-allowed transition-all duration-300" disabled>
                  Coming Soon
                </button>
              </div>

              {/* Nanite Server */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-200 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </div>
                <div className="absolute top-4 left-4 text-3xl">🖥️</div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Nanite Server</h3>
                <p className="text-gray-600 mb-6">
                  Minimal server installation optimized for headless AI training and deployment at scale.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Minimal base system
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Docker pre-configured
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Remote access ready
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Auto-scaling support
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <span className="text-gray-600">Size: </span>
                  <span className="font-semibold text-gray-800">~2.8 GB</span>
                </div>
                
                <button className="w-full bg-gray-300 text-gray-500 font-semibold px-6 py-3 rounded-full cursor-not-allowed transition-all duration-300" disabled>
                  Coming Soon
                </button>
              </div>

              {/* Nanite Pro */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-slate-300 p-8 relative overflow-hidden ring-2 ring-slate-400">
                <div className="absolute top-4 right-4 bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </div>
                <div className="absolute top-4 left-4 text-3xl">⚡</div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Nanite Pro</h3>
                <p className="text-gray-600 mb-6">
                  Enterprise-grade distribution with complete toolchain and advanced features for AI teams.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Complete AI toolchain
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Team collaboration tools
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Enterprise security
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> Priority support
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <span className="text-gray-600">Size: </span>
                  <span className="font-semibold text-gray-800">~6.2 GB</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-slate-400 to-blue-400 hover:from-slate-500 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-full cursor-not-allowed transition-all duration-300" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">System Requirements</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Nanite is optimized to run on modern hardware. Here are the recommended specifications.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Minimum Requirements */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚡</span>
                  <h3 className="text-2xl font-bold text-gray-800">Minimum Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-800">CPU</span>
                    <span className="text-gray-600">64-bit dual-core processor</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-800">RAM</span>
                    <span className="text-gray-600">8 GB</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-800">Storage</span>
                    <span className="text-gray-600">25 GB available space</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-800">GPU</span>
                    <span className="text-gray-600">Any modern GPU (integrated OK)</span>
                  </div>
                </div>
              </div>

              {/* Recommended for AI/ML */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-indigo-300 p-8 ring-2 ring-indigo-400">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🚀</span>
                  <h3 className="text-2xl font-bold text-gray-800">Recommended for AI/ML</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-800">CPU</span>
                    <span className="text-gray-600">Intel i7/AMD Ryzen 7 or better</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-800">RAM</span>
                    <span className="text-gray-600">32 GB or more</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-800">Storage</span>
                    <span className="text-gray-600">1 TB SSD (NVMe preferred)</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-800">GPU</span>
                    <span className="text-gray-600">NVIDIA RTX 3070 or better</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Be First to Download */}
          <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-amber-100 rounded-3xl shadow-xl border border-yellow-200 p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-4xl animate-bounce">🐝</div>
            <div className="absolute bottom-4 left-4 text-3xl animate-pulse">🍯</div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Be First to Download</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our waitlist to get notified the moment Nanite ISOs become available for download.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link 
                href="/waitlist"
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Join Waitlist 🐝
              </Link>
              <Link 
                href="/docs"
                className="px-8 py-3 border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 font-semibold rounded-full transition-all duration-300"
              >
                Read installation guide →
              </Link>
            </div>
            
            <p className="text-gray-500">
              Expected release: Q2 2025
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
}
