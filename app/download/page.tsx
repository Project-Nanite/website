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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Download Nanite
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get ready to experience the future of AI development on Linux. Our ISOs are being carefully crafted and will be available soon.
          </p>
        </div>

        {/* Available ISOs Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Available ISOs</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Choose from different editions optimized for your AI development needs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Nanite Desktop */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 relative">
              <div className="absolute top-4 right-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Nanite Desktop</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Full desktop environment with GUI tools, perfect for getting started with AI development.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> GNOME Desktop Environment
                  </li>
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Pre-installed ML IDEs
                  </li>
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> GPU drivers included
                  </li>
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Jupyter Lab ready
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <span className="text-gray-600 dark:text-gray-400">Size: </span>
                <span className="font-semibold">~4.5 GB</span>
              </div>
              
              <button className="w-full bg-gray-400 text-white font-semibold px-6 py-3 rounded-lg cursor-not-allowed" disabled>
                Download Soon
              </button>
            </div>

            {/* Nanite Server */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 relative">
              <div className="absolute top-4 right-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Nanite Server</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Minimal server installation optimized for headless AI training and deployment.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Minimal base system
                  </li>
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Docker pre-configured
                  </li>
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Remote access ready
                  </li>
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Auto-scaling support
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <span className="text-gray-600 dark:text-gray-400">Size: </span>
                <span className="font-semibold">~2.8 GB</span>
              </div>
              
              <button className="w-full bg-gray-400 text-white font-semibold px-6 py-3 rounded-lg cursor-not-allowed" disabled>
                Download Soon
              </button>
            </div>

            {/* Nanite Pro */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-indigo-200 dark:border-indigo-700 p-8 relative ring-2 ring-indigo-500 dark:ring-indigo-400">
              <div className="absolute top-4 right-4 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Nanite Pro</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Everything included - desktop, server tools, and enterprise features for teams.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Complete toolchain
                  </li>
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Team collaboration tools
                  </li>
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Enhanced security
                  </li>
                  <li className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span> Priority support
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <span className="text-gray-600 dark:text-gray-400">Size: </span>
                <span className="font-semibold">~6.2 GB</span>
              </div>
              
              <button className="w-full bg-gray-400 text-white font-semibold px-6 py-3 rounded-lg cursor-not-allowed" disabled>
                Download Soon
              </button>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">System Requirements</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Nanite is optimized to run on modern hardware. Here are the recommended specifications.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Minimum Requirements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold mb-6">Minimum Requirements</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">CPU</span>
                  <span className="text-gray-600 dark:text-gray-400">64-bit dual-core processor</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">RAM</span>
                  <span className="text-gray-600 dark:text-gray-400">8 GB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">Storage</span>
                  <span className="text-gray-600 dark:text-gray-400">25 GB available space</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">GPU</span>
                  <span className="text-gray-600 dark:text-gray-400">Any modern GPU (integrated OK)</span>
                </div>
              </div>
            </div>

            {/* Recommended for AI/ML */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-indigo-200 dark:border-indigo-700 p-8 ring-2 ring-indigo-500 dark:ring-indigo-400">
              <h3 className="text-2xl font-bold mb-6">Recommended for AI/ML</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">CPU</span>
                  <span className="text-gray-600 dark:text-gray-400">Intel i7/AMD Ryzen 7 or better</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">RAM</span>
                  <span className="text-gray-600 dark:text-gray-400">32 GB or more</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">Storage</span>
                  <span className="text-gray-600 dark:text-gray-400">1 TB SSD (NVMe preferred)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">GPU</span>
                  <span className="text-gray-600 dark:text-gray-400">NVIDIA RTX 3070 or better</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Be First to Download */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Be First to Download</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our waitlist to get notified the moment Nanite ISOs become available for download.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link 
              href="/waitlist"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join Waitlist
            </Link>
            <Link 
              href="/docs"
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg transition-colors"
            >
              Read installation guide →
            </Link>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400">
            Expected release: Q2 2025
          </p>
        </div>
      </div>
    </div>
  );
}
