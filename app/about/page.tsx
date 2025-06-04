import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Nanite - Revolutionizing AI Development',
  description: 'Learn about Nanite\'s mission to revolutionize AI development on Linux. Meet our team and discover our vision for the future.',
  keywords: 'nanite, about us, ai development, linux, machine learning, team, mission, vision',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            About Nanite
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We're building the future of AI development on Linux, one innovation at a time.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                At Nanite, we believe that AI development shouldn't be hindered by complex setup processes, 
                dependency conflicts, or performance bottlenecks. Our mission is to create the most advanced, 
                user-friendly Linux distribution specifically designed for artificial intelligence and machine learning.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We're eliminating the barriers that prevent brilliant minds from focusing on what matters most: 
                building the future of AI.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl p-8 border border-indigo-200/50 dark:border-indigo-800/50">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Zero Setup Time</h3>
                    <p className="text-gray-600 dark:text-gray-400">Boot and start coding immediately</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Optimized Performance</h3>
                    <p className="text-gray-600 dark:text-gray-400">Custom kernel and GPU acceleration</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI-First Design</h3>
                    <p className="text-gray-600 dark:text-gray-400">Built specifically for ML workflows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Our Vision</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              We envision a world where AI developers can focus entirely on innovation rather than infrastructure. 
              Nanite represents our commitment to democratizing AI development by providing enterprise-grade tools 
              and environments to every developer, researcher, and student.
            </p>
            <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl p-8 border border-indigo-200/50 dark:border-indigo-800/50">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                "By 2025, we aim to power over 100,000 AI projects worldwide, from groundbreaking research 
                in university labs to production systems in Fortune 500 companies."
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & CEO",
                bio: "Former Google AI researcher with 10+ years in ML infrastructure",
                avatar: "👨‍💻",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "Sarah Rodriguez",
                role: "CTO",
                bio: "Linux kernel expert and former Red Hat engineer",
                avatar: "👩‍💻",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                name: "Marcus Johnson",
                role: "Head of AI Research",
                bio: "PhD in Computer Science, published 50+ ML papers",
                avatar: "🧑‍🔬",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${member.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto`}>
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className={`text-center font-semibold mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🚀", title: "Innovation", description: "Pushing the boundaries of what's possible" },
              { icon: "🤝", title: "Community", description: "Building together with our users" },
              { icon: "🔒", title: "Security", description: "Enterprise-grade security by design" },
              { icon: "🌱", title: "Sustainability", description: "Environmentally conscious development" }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-3xl p-12 border border-indigo-200/50 dark:border-indigo-800/50">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Be part of the revolution in AI development. Join thousands of developers who are shaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/waitlist" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Join the Waitlist
            </Link>
            <Link 
              href="/docs" 
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
