'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Rocket, 
  Zap, 
  Monitor, 
  Globe, 
  Brain, 
  BarChart3, 
  Shield,
  Wrench,
  Book,
  Lightbulb,
  Users,
  Headphones
} from 'lucide-react';

const documentationSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Rocket,
    items: [
      { title: 'Installation Guide', href: '/docs/installation', description: 'Step-by-step guide to install Nanite OS on your system.' },
      { title: 'Quick Start Tutorial', href: '/docs/quick-start', description: 'Get up and running with your first AI project in minutes.' },
      { title: 'System Requirements', href: '/docs/requirements', description: 'Hardware and software requirements for optimal performance.' },
      { title: 'First Project Setup', href: '/docs/first-project', description: 'Create your first AI development project with Nanite.' }
    ]
  },
  {
    id: 'core-features',
    title: 'Core Features',
    icon: Zap,
    items: [
      { title: 'AI Development Environment', href: '/docs/ai-environment', description: 'Comprehensive overview of the AI development environment.' },
      { title: 'Intelligent Code Assistant', href: '/docs/code-assistant', description: 'Learn to use AI-powered code completion and debugging.' },
      { title: 'ML Pipeline Integration', href: '/docs/ml-pipeline', description: 'End-to-end machine learning pipeline documentation.' },
      { title: 'Cloud Integration', href: '/docs/cloud-integration', description: 'Connect and deploy to major cloud providers.' }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    icon: Monitor,
    items: [
      { title: 'Project Management', href: '/docs/project-management', description: 'Organize and manage your AI development projects.' },
      { title: 'Debugging Tools', href: '/docs/debugging', description: 'Advanced debugging techniques for AI applications.' },
      { title: 'Performance Optimization', href: '/docs/performance', description: 'Optimize your AI models and applications for production.' },
      { title: 'Testing Framework', href: '/docs/testing', description: 'Comprehensive testing strategies for AI applications.' }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: Globe,
    items: [
      { title: 'Production Deployment', href: '/docs/deployment', description: 'Deploy your AI applications to production environments.' },
      { title: 'Scaling Guidelines', href: '/docs/scaling', description: 'Scale your AI applications for high availability.' },
      { title: 'Monitoring & Analytics', href: '/docs/monitoring', description: 'Monitor and analyze your deployed AI applications.' },
      { title: 'Security Best Practices', href: '/docs/security', description: 'Secure your AI applications and data.' }
    ]
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    icon: Brain,
    items: [
      { title: 'Team Workflows', href: '/docs/team-workflows', description: 'Collaborate effectively with your development team.' },
      { title: 'Version Control', href: '/docs/version-control', description: 'Manage code and model versions with integrated tools.' },
      { title: 'Sharing & Permissions', href: '/docs/sharing', description: 'Share projects and manage team permissions.' },
      { title: 'Code Reviews', href: '/docs/code-reviews', description: 'Conduct thorough code reviews for AI projects.' }
    ]
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    icon: BarChart3,
    items: [
      { title: 'Core API', href: '/docs/core-api', description: 'Complete reference for Nanite Core API.' },
      { title: 'AI Models API', href: '/docs/ai-models-api', description: 'API documentation for AI model management.' },
      { title: 'Data Processing API', href: '/docs/data-api', description: 'APIs for data processing and transformation.' },
      { title: 'Deployment API', href: '/docs/deployment-api', description: 'Automate deployments with our REST API.' }
    ]
  }
];

const quickLinks = [
  { title: 'Installation Guide', href: '/docs/installation', icon: Wrench },
  { title: 'Quick Start', href: '/docs/quick-start', icon: Zap },
  { title: 'API Reference', href: '/docs/api', icon: Book },
  { title: 'Examples', href: '/docs/examples', icon: Lightbulb },
  { title: 'Community', href: '/docs/community', icon: Users },
  { title: 'Support', href: '/docs/support', icon: Headphones }
];

export default function DocsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    // Update document title and meta description
    document.title = 'Nanite Documentation - Complete Developer Guide';
    
    const existingDescription = document.querySelector('meta[name="description"]');
    if (existingDescription) {
      existingDescription.setAttribute('content', 'Comprehensive documentation for Nanite OS. Learn how to build, deploy, and scale AI applications with our complete developer guide, API reference, and tutorials.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Comprehensive documentation for Nanite OS. Learn how to build, deploy, and scale AI applications with our complete developer guide, API reference, and tutorials.';
      document.head.appendChild(meta);
    }

    // Update Open Graph meta tags
    const updateOGMeta = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    updateOGMeta('og:title', 'Nanite Documentation - Complete Developer Guide');
    updateOGMeta('og:description', 'Comprehensive documentation for Nanite OS. Learn how to build, deploy, and scale AI applications with our complete developer guide, API reference, and tutorials.');
    updateOGMeta('og:type', 'website');
  }, []);

  const filteredSections = searchQuery
    ? documentationSections.map(section => ({
        ...section,
        items: section.items.filter(
          item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.items.length > 0)
    : documentationSections;

  return (
    <div className="pt-[50px] min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full border border-yellow-200 dark:border-yellow-800">
            <Book className="w-6 h-6 mr-3 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
              Complete Developer Guide
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-yellow-600 to-orange-600 dark:from-white dark:via-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
            Documentation
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Everything you need to know about building, deploying, and scaling AI applications with Nanite OS. From getting started to advanced deployment strategies.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {quickLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 transform text-center"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                <link.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                {link.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {filteredSections.map((section, sectionIndex) => (
            <div
              key={section.id}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${400 + sectionIndex * 100}ms`
              }}
            >
              <div className="flex items-center mb-8">
                <div className="mr-4">
                  <section.icon className="w-10 h-10 text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 transform"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {searchQuery && filteredSections.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-4">
              <Monitor className="w-16 h-16 text-gray-400 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or browse our categories above.
            </p>
          </div>
        )}

        {/* Need Help Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Help?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find what you're looking for? Our community and support team are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/community"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 font-semibold"
              >
                Join Community
              </Link>
              <Link
                href="/docs/support"
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}