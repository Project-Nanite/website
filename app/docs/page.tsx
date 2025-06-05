import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Docs - Nanite',
  description: 'Explore the documentation for Nanite and learn how to use our innovative solutions.',
  keywords: 'nanite, docs, documentation, help, support, guide',
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating hexagons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200 opacity-30 rotate-12 animate-bounce" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-orange-200 opacity-40 rotate-45 animate-pulse" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-amber-200 opacity-25 -rotate-12 animate-bounce" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1s'}}></div>
        
        {/* Floating circles */}
        <div className="absolute top-60 right-1/3 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-25 animate-bounce"></div>
        
        {/* Gradient blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-300 to-amber-300 rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 pt-32">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              <span>🐝</span>
              Documentation Hub
              <span>🍯</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent leading-tight">
              Nanite Docs
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about Nanite AI Linux Distribution. 
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent font-semibold"> Documentation buzzing with knowledge!</span>
            </p>
          </div>

          {/* Coming Soon Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-yellow-200 p-12 mb-12 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-6xl animate-spin-slow">🐝</div>
              <div className="absolute bottom-4 left-4 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🍯</div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Documentation Coming Soon! 🚧
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive documentation is currently being crafted with the same care and attention as our Linux distribution. 
                We're creating detailed guides, tutorials, and references to help you make the most of Nanite.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                  <div className="text-3xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Getting Started</h3>
                  <p className="text-gray-600">Installation guides, first steps, and basic configuration</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                  <div className="text-3xl mb-4">⚙️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Config</h3>
                  <p className="text-gray-600">Deep dives into AI frameworks and system optimization</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                  <div className="text-3xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">API Reference</h3>
                  <p className="text-gray-600">Complete reference for tools and integrations</p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Tutorials</h3>
                  <p className="text-gray-600">Step-by-step guides for common AI/ML workflows</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-amber-100 rounded-3xl shadow-lg border border-yellow-200 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Get Notified When Docs Launch! 🎉
              </h3>
              <p className="text-gray-600 mb-6">
                Be the first to access our comprehensive documentation when it's ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/waitlist"
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Join the Waitlist 🐝
                </a>
                <a 
                  href="/blog"
                  className="px-8 py-3 border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 font-semibold rounded-full transition-all duration-300"
                >
                  Read Blog Updates →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
