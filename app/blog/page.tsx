import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Nanite',
  description: 'Read the latest news, articles, and insights from the Nanite team on our blog.',
  keywords: 'nanite, blog, news, articles, updates, insights',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900 overflow-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        
        {/* Hexagon Patterns */}
        <div className="absolute top-20 left-20 w-6 h-6 border-2 border-yellow-400/20 rotate-45 rounded-sm animate-float"></div>
        <div className="absolute top-40 right-40 w-4 h-4 border-2 border-orange-400/30 rotate-12 rounded-sm animate-float delay-500"></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 border-2 border-amber-400/20 rotate-45 rounded-sm animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 pt-32 max-w-7xl relative">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent animate-gradient bg-300%">
              Nanite Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest news, insights, and developments from the Nanite team.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center bg-gradient-to-r from-yellow-50/80 to-orange-50/80 rounded-3xl p-16 border border-yellow-200/50 backdrop-blur-sm relative overflow-hidden">
          {/* Hexagon Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-8 w-6 h-6 border border-yellow-400 rotate-45 rounded-sm"></div>
            <div className="absolute top-16 right-12 w-4 h-4 border border-orange-400 rotate-12 rounded-sm"></div>
            <div className="absolute bottom-8 left-16 w-8 h-8 border border-amber-400 rotate-45 rounded-sm"></div>
            <div className="absolute bottom-16 right-8 w-5 h-5 border border-yellow-500 rotate-12 rounded-sm"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-8xl mb-8 animate-float">📝</div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
              Blog Coming Soon!
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We&apos;re busy building the future of AI development. Our blog will feature insights, tutorials, 
              and updates from the Nanite team. Stay tuned for exciting content!
            </p>
            
            {/* Featured Topics Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "🧠", title: "AI Development Tips", description: "Best practices and tutorials" },
                { icon: "🚀", title: "Product Updates", description: "Latest Nanite features" },
                { icon: "🔧", title: "Technical Deep Dives", description: "Behind the scenes insights" }
              ].map((topic, index) => (
                <div key={index} className="bg-white/60 rounded-xl p-6 border border-gray-200/50">
                  <div className="text-3xl mb-3">{topic.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/waitlist" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                🐝 Join the Hive for Updates
              </a>
              <a 
                href="/about" 
                className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl border-2 border-yellow-300 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
