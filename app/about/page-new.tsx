import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Nanite',
  description: 'Learn about Nanite, the revolutionary AI-focused Linux distribution designed for machine learning and artificial intelligence development.',
  keywords: 'nanite, about, ai, machine learning, linux distribution, artificial intelligence, development',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & Lead Developer',
      bio: 'Former Google AI researcher with 10+ years in distributed systems and machine learning infrastructure.'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'AI Systems Architect',
      bio: 'Ex-Tesla Autopilot engineer specializing in real-time AI processing and optimization frameworks.'
    },
    {
      name: 'Marcus Thompson',
      role: 'Kernel Engineer',
      bio: 'Linux kernel contributor for 8+ years, focusing on GPU scheduling and memory management for ML workloads.'
    }
  ];

  const values = [
    {
      icon: '🔬',
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in AI development environments.'
    },
    {
      icon: '🌍',
      title: 'Open Source',
      description: 'Everything we build is open, transparent, and accessible to the global community.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Every component is optimized for speed, efficiency, and seamless AI workflows.'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Built by developers, for developers, with community feedback at the core.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating hexagons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200 opacity-30 rotate-12 animate-bounce" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-orange-200 opacity-40 rotate-45 animate-pulse" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-amber-200 opacity-25 -rotate-12 animate-bounce" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1s'}}></div>
        
        {/* Floating circles */}
        <div className="absolute top-60 right-1/3 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-25 animate-float" style={{animationDelay: '3s'}}></div>
        
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
              About Nanite
              <span>🍯</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent leading-tight">
              The Future is AI-Native
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Nanite is the world's first Linux distribution designed from the ground up for 
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent font-semibold"> artificial intelligence and machine learning development.</span>
            </p>
          </div>

          {/* Mission Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-yellow-200 p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-4xl animate-spin-slow">🐝</div>
              <div className="absolute bottom-4 left-4 text-3xl animate-bounce">🚀</div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
                We believe that artificial intelligence development should be effortless, not exhausting. 
                Traditional Linux distributions weren't built for the unique demands of AI workflows - 
                from GPU orchestration to massive dataset handling, from model training to deployment at scale.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Zero Setup Time</h3>
                  <p className="text-gray-600">Boot and start coding immediately</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Optimized Performance</h3>
                  <p className="text-gray-600">Custom kernel and GPU acceleration</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                  <div className="text-3xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">AI-First Design</h3>
                  <p className="text-gray-600">Built specifically for ML workflows</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Vision</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-200 p-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We envision a world where AI developers can focus entirely on innovation, not infrastructure. 
                Where setting up a machine learning environment takes seconds, not hours. Where performance 
                bottlenecks are eliminated before they impact your workflow.
              </p>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 border border-yellow-200">
                <p className="text-lg text-gray-700 italic">
                  "Nanite isn't just another Linux distribution - it's a paradigm shift towards 
                  AI-native computing that unlocks human potential in artificial intelligence."
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-orange-600 text-center mb-4 font-semibold">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border border-yellow-200 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-yellow-100 via-orange-100 to-amber-100 rounded-3xl p-12 border border-yellow-200 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-5xl animate-bounce">🐝</div>
            <div className="absolute bottom-4 left-4 text-4xl animate-pulse">🍯</div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Join the AI Revolution</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to experience the future of AI development? Join thousands of developers 
              already waiting for Nanite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/waitlist"
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Join the Waitlist 🐝
              </a>
              <a 
                href="/download"
                className="px-8 py-3 border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 font-semibold rounded-full transition-all duration-300"
              >
                View Downloads →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
