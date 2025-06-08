'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Developer',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for individual developers getting started with AI development',
    features: [
      'Access to Nanite OS community edition',
      'Basic AI development tools',
      'Community support',
      'Up to 3 projects',
      'Standard deployment options',
      'Basic monitoring & analytics'
    ],
    cta: 'Get Started Free',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'per month',
    description: 'For professional developers and small teams building production AI applications',
    features: [
      'Everything in Developer plan',
      'Advanced AI development tools',
      'Priority support',
      'Unlimited projects',
      'Advanced deployment & scaling',
      'Comprehensive monitoring',
      'Team collaboration features',
      'Custom integrations'
    ],
    cta: 'Start Free Trial',
    popular: true,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations with complex AI development needs',
    features: [
      'Everything in Professional plan',
      'Enterprise-grade security',
      'Dedicated support team',
      'Custom SLA agreements',
      'On-premise deployment options',
      'Advanced compliance features',
      'Custom training & onboarding',
      'White-label solutions'
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-purple-500 to-pink-500'
  }
];

const benefits = [
  {
    icon: '🚀',
    title: 'Faster Development',
    description: 'Build AI applications 10x faster with our intelligent development environment'
  },
  {
    icon: '🤖',
    title: 'AI-Powered Tools',
    description: 'Leverage cutting-edge AI tools for code generation, debugging, and optimization'
  },
  {
    icon: '☁️',
    title: 'Cloud-Native',
    description: 'Deploy anywhere with built-in cloud integration and scaling capabilities'
  },
  {
    icon: '👥',
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team using real-time collaboration features'
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption'
  },
  {
    icon: '📈',
    title: 'Performance Analytics',
    description: 'Monitor and optimize your AI applications with detailed performance insights'
  }
];

export default function JoinPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Professional');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: 'Professional'
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Update document title and meta description
    document.title = 'Join Nanite - Start Building AI Applications Today';
    
    const updateMetaTag = (name: string, content: string, property?: string) => {
      let meta = document.querySelector(`meta[${property ? 'property' : 'name'}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('description', 'Join thousands of developers building the future of AI with Nanite OS. Choose from flexible pricing plans and start your AI development journey today.');
    updateMetaTag('keywords', 'Nanite, join, signup, AI development, pricing, plans, registration');
    updateMetaTag('og:title', 'Join Nanite - Start Building AI Applications Today', 'property');
    updateMetaTag('og:description', 'Join thousands of developers building the future of AI with Nanite OS. Choose from flexible pricing plans and start your AI development journey today.', 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Join Nanite - Start Building AI Applications Today');
    updateMetaTag('twitter:description', 'Join thousands of developers building the future of AI with Nanite OS. Choose from flexible pricing plans and start your AI development journey today.');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Redirect to appropriate signup flow based on selected plan
  };

  return (
    <div className="pt-[50px] min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full border border-yellow-200 dark:border-yellow-800">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
              Join 10,000+ Developers
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-yellow-600 to-orange-600 dark:from-white dark:via-yellow-400 dark:to-orange-400 bg-clip-text text-transparent leading-tight">
            Start Building the <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Future of AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of developers who are already building breakthrough AI applications with Nanite OS. 
            Choose the plan that's right for you and start your journey today.
          </p>
        </div>

        {/* Benefits Section */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Nanite?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${400 + index * 100}ms`
                }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Choose Your <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
            Flexible pricing for every stage of your AI development journey
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 transform ${
                  plan.popular
                    ? 'border-yellow-300 dark:border-yellow-600 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 shadow-2xl'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-yellow-300 dark:hover:border-yellow-600'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${600 + index * 200}ms`
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 transform ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg'
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Signup Form */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get you set up in minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="plan" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Selected Plan
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                >
                  {pricingPlans.map((plan) => (
                    <option key={plan.name} value={plan.name}>
                      {plan.name} - {plan.price} {plan.period}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg"
              >
                Start Your Journey
              </button>

              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                By signing up, you agree to our{' '}
                <Link href="/terms" className="text-orange-600 hover:text-orange-700 underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-orange-600 hover:text-orange-700 underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 mb-2">10,000+</div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">Active Developers</div>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">Uptime SLA</div>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">AI Models Deployed</div>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}