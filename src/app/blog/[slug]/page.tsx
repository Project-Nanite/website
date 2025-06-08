'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  'understanding-nanite-deep-dive': {
    title: 'Understanding Nanite: A Deep Dive',
    date: '2025-01-15',
    excerpt: 'An in-depth look at the architecture and capabilities of Nanite OS for AI developers.',
    category: 'Technology',
    readTime: '8 min read',
    author: 'Dr. Sarah Chen',
    gradient: 'from-yellow-400 to-orange-500',
    content: `
      <h2>Introduction</h2>
      <p>Nanite represents a fundamental shift in how we approach AI development environments. Built from the ground up with artificial intelligence in mind, it provides developers with an unprecedented level of integration between their tools, workflows, and the underlying system.</p>
      
      <h2>Core Architecture</h2>
      <p>At its heart, Nanite is built on a modified Debian 12 base, providing the stability and security that enterprise developers demand. However, what sets it apart is the deep integration of AI-specific optimizations throughout the entire stack.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Intelligent Resource Management:</strong> Automatically optimizes CPU, GPU, and memory allocation based on your current AI workloads</li>
        <li><strong>Native GPU Support:</strong> Pre-configured CUDA and ROCm drivers with automatic detection and setup</li>
        <li><strong>AI-First Package Management:</strong> Streamlined installation and management of ML libraries and frameworks</li>
        <li><strong>Integrated Development Environment:</strong> Purpose-built IDE with AI-powered code completion and debugging</li>
      </ul>
      
      <h2>Performance Benefits</h2>
      <p>Our benchmarks show significant performance improvements across common AI development tasks:</p>
      <ul>
        <li>Model training: Up to 40% faster than traditional setups</li>
        <li>Data preprocessing: 60% reduction in pipeline setup time</li>
        <li>Deployment: 80% faster containerization and deployment workflows</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Ready to experience the future of AI development? Download Nanite today and join thousands of developers who are already transforming their AI workflows.</p>
    `
  },
  'optimizing-ai-workflows': {
    title: 'Optimizing Your AI Workflows with Nanite',
    date: '2025-01-12',
    excerpt: 'Discover how Nanite can help you streamline your AI development process and improve productivity.',
    category: 'Development',
    readTime: '6 min read',
    author: 'Michael Rodriguez',
    gradient: 'from-orange-400 to-red-500',
    content: `
      <h2>The Challenge of AI Development</h2>
      <p>Modern AI development involves complex workflows that span data collection, preprocessing, model training, evaluation, and deployment. Traditional development environments often fall short of providing the integrated experience needed for efficient AI workflows.</p>
      
      <h2>Nanite's Approach</h2>
      <p>Nanite addresses these challenges by providing a unified environment that understands AI workflows at a fundamental level. From the moment you boot up, every component is optimized for machine learning tasks.</p>
      
      <h3>Workflow Optimization Features</h3>
      <ul>
        <li><strong>Intelligent Project Templates:</strong> Pre-configured project structures for common AI use cases</li>
        <li><strong>Automated Environment Management:</strong> Automatic handling of dependencies and virtual environments</li>
        <li><strong>Integrated Data Pipeline Tools:</strong> Built-in tools for data ingestion, cleaning, and preprocessing</li>
        <li><strong>One-Click Deployment:</strong> Seamless transition from development to production</li>
      </ul>
      
      <h2>Real-World Impact</h2>
      <p>Companies using Nanite report significant improvements in their AI development cycles, with some teams achieving 300% productivity gains through reduced setup time and streamlined workflows.</p>
    `
  },
  'future-of-ai-development': {
    title: 'The Future of AI Development: Trends and Predictions',
    date: '2025-01-10',
    excerpt: 'Exploring the evolving landscape of AI development and how Nanite is poised to lead the way.',
    category: 'Insights',
    readTime: '10 min read',
    author: 'Dr. Emily Watson',
    gradient: 'from-red-400 to-pink-500',
    content: `
      <h2>The Current State of AI Development</h2>
      <p>As we enter 2025, AI development has reached an inflection point. The tools and methodologies that served us well in the early days of machine learning are struggling to keep pace with the complexity and scale of modern AI systems.</p>
      
      <h2>Emerging Trends</h2>
      <h3>1. AI-Native Operating Systems</h3>
      <p>The future belongs to operating systems that understand AI workloads natively. This means built-in support for GPU clusters, automated resource scaling, and intelligent workload distribution.</p>
      
      <h3>2. Collaborative AI Development</h3>
      <p>Teams are increasingly distributed, and AI development tools must support real-time collaboration on complex models and datasets.</p>
      
      <h3>3. Edge AI Integration</h3>
      <p>As AI moves closer to the edge, development environments must support seamless testing and deployment across diverse hardware configurations.</p>
      
      <h2>Nanite's Vision</h2>
      <p>Nanite is positioned at the forefront of these trends, providing a platform that not only addresses current challenges but anticipates future needs in AI development.</p>
    `
  },
  'getting-started-nanite': {
    title: 'Getting Started with Nanite: A Beginner\'s Guide',
    date: '2025-01-08',
    excerpt: 'New to Nanite? This comprehensive guide will walk you through everything you need to know.',
    category: 'Tutorial',
    readTime: '12 min read',
    author: 'Alex Thompson',
    gradient: 'from-pink-400 to-purple-500',
    content: `
      <h2>Welcome to Nanite</h2>
      <p>Starting your journey with Nanite is easier than you might think. This guide will walk you through the installation process and help you create your first AI project.</p>
      
      <h2>System Requirements</h2>
      <ul>
        <li>64-bit x86 processor (Intel or AMD)</li>
        <li>Minimum 8GB RAM (16GB+ recommended)</li>
        <li>NVIDIA or AMD graphics card (optional but recommended)</li>
        <li>50GB+ free disk space</li>
      </ul>
      
      <h2>Installation Process</h2>
      <h3>Step 1: Download Nanite</h3>
      <p>Visit our downloads page and select the appropriate version for your hardware configuration.</p>
      
      <h3>Step 2: Create Installation Media</h3>
      <p>Use tools like Rufus (Windows) or dd (Linux/macOS) to create a bootable USB drive.</p>
      
      <h3>Step 3: Boot and Install</h3>
      <p>Boot from your USB drive and follow the guided installation process. Nanite will automatically detect and configure your hardware.</p>
      
      <h2>Your First Project</h2>
      <p>Once installed, Nanite provides project templates for common AI tasks. Start with the "Image Classification" template to get familiar with the environment.</p>
      
      <h2>Next Steps</h2>
      <p>Explore the built-in tutorials, join our community forum, and start building amazing AI applications with Nanite!</p>
    `
  },
  'ai-model-deployment-nanite': {
    title: 'Deploying AI Models at Scale with Nanite',
    date: '2025-01-05',
    excerpt: 'Learn how to deploy and scale your AI models effectively using Nanite\'s built-in deployment tools.',
    category: 'DevOps',
    readTime: '9 min read',
    author: 'Jennifer Park',
    gradient: 'from-purple-400 to-blue-500',
    content: `
      <h2>The Deployment Challenge</h2>
      <p>Deploying AI models in production environments presents unique challenges: resource management, scaling, monitoring, and maintaining model performance over time.</p>
      
      <h2>Nanite's Deployment Pipeline</h2>
      <p>Nanite simplifies the deployment process with integrated tools that handle containerization, orchestration, and monitoring out of the box.</p>
      
      <h3>Key Deployment Features</h3>
      <ul>
        <li><strong>Automated Containerization:</strong> One-click Docker container generation</li>
        <li><strong>Kubernetes Integration:</strong> Native support for Kubernetes orchestration</li>
        <li><strong>Performance Monitoring:</strong> Real-time model performance tracking</li>
        <li><strong>A/B Testing:</strong> Built-in tools for model version comparison</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Follow these guidelines for successful AI model deployment:</p>
      <ol>
        <li>Use Nanite's built-in testing framework before deployment</li>
        <li>Implement proper logging and monitoring</li>
        <li>Plan for model versioning and rollback strategies</li>
        <li>Monitor resource usage and scale accordingly</li>
      </ol>
    `
  }
};

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const [isVisible, setIsVisible] = useState(false);
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/5 dark:to-orange-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Article Header */}
            <div className="text-center mb-12">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${post.gradient} mb-6`}>
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-a:text-orange-600 dark:prose-a:text-orange-400 hover:prose-a:text-orange-700 dark:hover:prose-a:text-orange-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Call to Action */}
            <div className={`mt-12 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Experience Nanite?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join thousands of developers who are already transforming their AI workflows.
                </p>
                <Link 
                  href="/join"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Join the Waitlist
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}