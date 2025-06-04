'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const terminalLines = [
    "$ nanite-setup --initialize",
    "🔧 Initializing AI development environment...",
    "✅ CUDA 12.0 drivers installed",
    "✅ PyTorch 2.1 configured",
    "✅ TensorFlow 2.14 ready",
    "✅ Jupyter Lab extensions loaded",
    "✅ Docker containers optimized",
    "🚀 Nanite is ready for AI development!",
    "$ python train_model.py",
    "🧠 Training neural network...",
    "📊 Epoch 1/100 - Loss: 0.234",
    "📊 Epoch 2/100 - Loss: 0.187",
    "🎯 Model training complete!"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % terminalLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 text-gray-900 dark:text-white overflow-hidden relative">
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

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-6 lg:px-8 py-16 pt-24 max-w-7xl">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold mb-8 border border-green-200 dark:border-green-800 shadow-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              Coming Soon • Join 2.5K+ Developers
            </div>

            {/* Hero Content with 3D Bee Asset */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 mb-16">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left max-w-2xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                  <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent animate-gradient bg-300% hover:scale-105 transition-transform duration-300">
                    The Future
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300 mt-4">
                    of AI Development
                  </span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                  <span className="font-semibold text-yellow-600 dark:text-yellow-400">Nanite</span> is the revolutionary Linux distribution designed exclusively for
                  AI engineers. As efficient and powerful as nature's finest worker - the bee.
                </p>

                {/* Email Signup Form */}
                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto lg:mx-0 mb-12">
                  <div className="flex gap-3 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2"
                    >
                      Get Access <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                  {isSubscribed && (
                    <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl border border-green-200 dark:border-green-800 animate-fade-in">
                      🎉 Welcome to the hive! We'll notify you when Nanite launches.
                    </div>
                  )}
                </form>
              </div>

              {/* Right Side - 3D Bee Asset */}
              <div className="flex-1 relative max-w-lg">
                <div className="relative w-full">
                  {/* Floating Animation Container */}
                  <div className="relative animate-float">
                    <Image
                      src="/bg.png"
                      alt="Nanite - AI Development as efficient as a bee"
                      width={600}
                      height={600}
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                    
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute top-1/4 -left-6 w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-700"></div>
                    <div className="absolute bottom-1/3 -right-8 w-4 h-4 bg-amber-400 rounded-full animate-bounce delay-1000"></div>
                  </div>

                  {/* Hexagon Pattern Background */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-yellow-400/30 rotate-45 rounded-lg animate-spin" style={{ animationDuration: '8s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-orange-400/20 rotate-12 rounded-lg animate-spin" style={{ animationDuration: '12s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-amber-400/10 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Bee-themed Feature Highlights */}
                <div className="absolute -bottom-8 -left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 border border-yellow-200 dark:border-yellow-800 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Efficient & Organized</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 border border-orange-200 dark:border-orange-800 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Collaborative</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce mt-16">
              <ArrowDownIcon className="w-6 h-6 mx-auto text-gray-400 dark:text-gray-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { number: "2.5K+", label: "Developers in the Hive", icon: "🐝", color: "from-blue-500 to-cyan-500" },
                { number: "50+", label: "AI Tools Pre-installed", icon: "🛠️", color: "from-indigo-500 to-purple-500" },
                { number: "Zero", label: "Setup Time Required", icon: "⚡", color: "from-yellow-500 to-orange-500" }
              ].map((stat, index) => (
                <div key={index} className="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 ${stat.color}`}></div>
                  <div className="relative text-center">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 200}ms` }}>{stat.icon}</div>
                    <div className={`text-6xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                What Makes Nanite Special?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                We're building the ultimate Linux distribution for AI engineers. Here's what makes us different:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧠",
                  title: "AI-First Environment",
                  description: "Like a bee's perfect hexagonal cells, every component is precisely organized. Python 3.11, CUDA 12.0, PyTorch, TensorFlow, and 50+ ML libraries pre-installed and optimized.",
                  gradient: "from-purple-500 to-pink-500",
                  features: ["PyTorch 2.1", "TensorFlow 2.14", "CUDA 12.0", "Python 3.11"]
                },
                {
                  icon: "⚡",
                  title: "Zero Setup Required", 
                  description: "Swift as a bee's flight to nectar. Boot up and start coding immediately. No dependency hell, no version conflicts, no hours of frustrating setup.",
                  gradient: "from-yellow-500 to-orange-500",
                  features: ["Instant Boot", "Pre-configured", "No Dependencies", "Ready to Code"]
                },
                {
                  icon: "🚀",
                  title: "Performance Optimized",
                  description: "Efficient like nature's finest worker. Custom kernel optimizations, memory management tweaks, and GPU acceleration ready out of the box.",
                  gradient: "from-green-500 to-cyan-500", 
                  features: ["Custom Kernel", "GPU Ready", "Memory Optimized", "High Performance"]
                }
              ].map((feature, index) => (
                <div key={index} className="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3`}></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className={`relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 rounded-3xl shadow-2xl border border-gray-700/50 p-8 overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-400/30">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  In Development
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-gray-400 text-sm font-mono">nanite-os-builder v1.0</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Live Terminal Output */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  Live Build Process
                </h3>
                
                <div className="bg-black/50 rounded-xl p-6 font-mono text-sm border border-gray-700/50 backdrop-blur-sm">
                  <div className="space-y-2 h-64 overflow-hidden">
                    {terminalLines.slice(0, Math.min(currentLine + 1, terminalLines.length)).map((line, index) => (
                      <div 
                        key={index} 
                        className={`transition-all duration-500 ${
                          index === currentLine ? 'text-green-400 animate-pulse' : 
                          line.includes('✅') ? 'text-green-400' :
                          line.includes('🔧') || line.includes('🧠') ? 'text-blue-400' :
                          line.includes('📊') ? 'text-yellow-400' :
                          line.includes('🎯') ? 'text-purple-400' :
                          'text-gray-300'
                        } ${index <= currentLine ? 'opacity-100' : 'opacity-0'}`}
                      >
                        {line}
                      </div>
                    ))}
                    <div className="text-green-400 animate-pulse">_</div>
                  </div>
                </div>
              </div>

              {/* Build Statistics */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Build Progress</h3>
                
                <div className="space-y-4">
                  {[
                    { label: "CUDA Drivers", progress: 100, color: "bg-green-400" },
                    { label: "PyTorch Integration", progress: 100, color: "bg-green-400" },
                    { label: "TensorFlow Setup", progress: 95, color: "bg-blue-400" },
                    { label: "Jupyter Extensions", progress: 78, color: "bg-yellow-400" },
                    { label: "Docker Optimization", progress: 85, color: "bg-purple-400" },
                    { label: "System Tuning", progress: 67, color: "bg-orange-400" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{item.label}</span>
                        <span className="text-gray-400 text-sm">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-300 font-bold text-lg">Overall Progress</span>
                    <span className="text-white font-bold text-xl">73%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full transition-all duration-2000 ease-out"
                      style={{ width: "73%" }}
                    ></div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    🚀 Expected completion: <span className="text-yellow-400 font-semibold">Q2 2024</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-yellow-50/80 to-orange-50/80 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-12 border border-yellow-200/50 dark:border-yellow-800/50 backdrop-blur-sm relative overflow-hidden">
              {/* Hexagon Pattern Background */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-4 left-8 w-6 h-6 border border-yellow-400 rotate-45 rounded-sm"></div>
                <div className="absolute top-16 right-12 w-4 h-4 border border-orange-400 rotate-12 rounded-sm"></div>
                <div className="absolute bottom-8 left-16 w-8 h-8 border border-amber-400 rotate-45 rounded-sm"></div>
                <div className="absolute bottom-16 right-8 w-5 h-5 border border-yellow-500 rotate-12 rounded-sm"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                  🐝 Ready to Join the Hive?
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of AI engineers who are buzzing with excitement for the future of development environments. 
                  Work smarter, not harder - just like nature intended.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/waitlist" 
                    className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-12 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform flex items-center gap-3 text-lg"
                  >
                    🐝 Join the Hive
                    <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <Link 
                    href="/download" 
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold px-12 py-4 rounded-2xl border-2 border-yellow-300 dark:border-yellow-600 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform text-lg"
                  >
                    View Downloads
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
