'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    useCase: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
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
          
          {/* Gradient blobs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-300 to-amber-300 rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto mb-6 animate-bounce" />
                <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Welcome Aboard! 🎉
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  You&apos;re now part of an exclusive community of {Math.floor(Math.random() * 500) + 2500}+ AI developers 
                  waiting for the future of development environments.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-200 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">What happens next? 🐝</h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      You&apos;ll receive a confirmation email with your waitlist position
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      Get exclusive updates on development progress and beta releases
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      Early access to Nanite when we launch (expected Q2 2025)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                  Back to Home
                </Link>
                <Link 
                  href="/download" 
                  className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full border-2 border-yellow-400 hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  View Downloads 🍯
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

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
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
                <span>🐝</span>
                Join the Revolution
                <span>🍯</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                Join the Hive
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Be among the first to experience the future of AI development. 
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent font-semibold"> Join 2,500+ developers already buzzing with excitement!</span>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Get Early Access 🚀</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-gray-900"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-gray-900"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-gray-900"
                      >
                        <option value="">Select your role</option>
                        <option value="ml-engineer">ML Engineer</option>
                        <option value="data-scientist">Data Scientist</option>
                        <option value="ai-researcher">AI Researcher</option>
                        <option value="software-engineer">Software Engineer</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-gray-900"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                      What will you use Nanite for?
                    </label>
                    <textarea
                      id="useCase"
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-gray-900"
                      placeholder="Tell us about your AI/ML projects..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Joining the Hive...
                      </div>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Join the Waitlist 🐝
                      </span>
                    )}
                  </button>
                </form>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 shadow-lg border border-yellow-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🎯 Why Join Early?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">First access to Nanite when it launches</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Exclusive beta testing opportunities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Direct feedback channel to our team</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Community access and networking</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 shadow-lg border border-orange-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🏆 Community Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">2,500+</div>
                      <div className="text-sm text-gray-600">Developers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">50+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">Q2 2025</div>
                      <div className="text-sm text-gray-600">Launch Date</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">100%</div>
                      <div className="text-sm text-gray-600">Free & Open</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl p-8 shadow-lg border border-amber-200 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-3xl animate-bounce">🐝</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">💡 Latest Updates</h3>
                  <p className="text-gray-700 mb-4">
                    We're making incredible progress on Nanite! Our AI-optimized kernel is showing 
                    40% better performance for ML workloads compared to standard distributions.
                  </p>
                  <Link 
                    href="/blog" 
                    className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center gap-1"
                  >
                    Read more updates →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
