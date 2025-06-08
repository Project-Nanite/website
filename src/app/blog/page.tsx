'use client';

import { useState, useEffect } from 'react';

// Static blog post data with full content
const posts = [
  {
    id: 'understanding-nanite-deep-dive',
    title: 'Understanding Nanite: A Deep Dive',
    date: '2025-01-15',
    excerpt: 'An in-depth look at the architecture and capabilities of Nanite OS for AI developers.',
    category: 'Technology',
    readTime: '8 min read',
    author: 'Dr. Sarah Chen',
    gradient: 'from-yellow-400 to-orange-500',
    content: `Nanite represents a fundamental shift in how we approach AI development environments. Built from the ground up with artificial intelligence in mind, it provides developers with an unprecedented level of integration between their tools, workflows, and the underlying system.

At its heart, Nanite is built on a modified Debian 12 base, providing the stability and security that enterprise developers demand. However, what sets it apart is the deep integration of AI-specific optimizations throughout the entire stack.

Key Features:
• Intelligent Resource Management: Automatically optimizes CPU, GPU, and memory allocation based on your current AI workloads
• Native GPU Support: Pre-configured CUDA and ROCm drivers with automatic detection and setup
• AI-First Package Management: Streamlined installation and management of ML libraries and frameworks
• Integrated Development Environment: Purpose-built IDE with AI-powered code completion and debugging

Our benchmarks show significant performance improvements across common AI development tasks:
• Model training: Up to 40% faster than traditional setups
• Data preprocessing: 60% reduction in pipeline setup time
• Deployment: 80% faster containerization and deployment workflows

Ready to experience the future of AI development? Download Nanite today and join thousands of developers who are already transforming their AI workflows.`
  },
  {
    id: 'optimizing-ai-workflows',
    title: 'Optimizing Your AI Workflows with Nanite',
    date: '2025-01-12',
    excerpt: 'Discover how Nanite can help you streamline your AI development process and improve productivity.',
    category: 'Development',
    readTime: '6 min read',
    author: 'Michael Rodriguez',
    gradient: 'from-orange-400 to-red-500',
    content: `Efficiency is the cornerstone of successful AI development. With Nanite, we've reimagined the entire development stack to eliminate friction and maximize your productive hours.

The traditional AI development workflow involves juggling multiple tools, managing complex dependencies, and constantly switching contexts between different environments. Nanite changes all of that by providing a unified, intelligent platform that anticipates your needs.

Workflow Optimizations:
• Automated Environment Setup: One-click creation of project-specific AI environments
• Intelligent Dependency Management: Automatic resolution of library conflicts and version compatibility
• Seamless GPU Switching: Hot-swap between different GPU configurations without system restarts
• Integrated Monitoring: Real-time performance metrics and resource utilization tracking

Case Study Results:
Our beta users report an average productivity increase of 300% when switching to Nanite. Tasks that previously took hours now complete in minutes, thanks to our intelligent automation and optimization algorithms.

The secret lies in Nanite's deep understanding of AI development patterns. By learning from millions of development sessions, our system can predict what you need before you even know you need it.`
  },
  {
    id: 'future-of-ai-development',
    title: 'The Future of AI Development: Trends and Predictions',
    date: '2025-01-10',
    excerpt: 'Exploring the evolving landscape of AI development and how Nanite is positioned for the future.',
    category: 'Insights',
    readTime: '10 min read',
    author: 'Dr. Emily Watson',
    gradient: 'from-red-400 to-pink-500',
    content: `The AI development landscape is evolving at an unprecedented pace. As we look toward the future, several key trends are emerging that will shape how we build, deploy, and maintain artificial intelligence systems.

Emerging Trends:
• AI-Native Operating Systems: The rise of specialized OS designed specifically for AI workloads
• Democratization of AI Development: Tools that make AI accessible to developers without deep ML expertise
• Edge AI Revolution: Moving computation closer to data sources for reduced latency and improved privacy
• Collaborative AI Development: Team-based workflows that leverage collective intelligence

Nanite is uniquely positioned to lead these trends. Our AI-native architecture provides the foundation for next-generation development workflows, while our intuitive interface makes advanced AI techniques accessible to developers of all skill levels.

The convergence of these trends points to a future where AI development is as straightforward as traditional software development, but with the power to create truly intelligent systems that can adapt, learn, and evolve.

At Nanite, we're not just building an operating system – we're crafting the foundation for the next decade of AI innovation.`
  },
  {
    id: 'getting-started-nanite',
    title: 'Getting Started with Nanite: A Beginner\'s Guide',
    date: '2025-01-08',
    excerpt: 'New to Nanite? This comprehensive guide will walk you through your first steps.',
    category: 'Tutorial',
    readTime: '12 min read',
    author: 'Alex Thompson',
    gradient: 'from-pink-400 to-purple-500',
    content: `Welcome to Nanite! This guide will help you get up and running with your new AI development environment in just a few minutes.

Installation Process:
1. Download the Nanite ISO from our official website
2. Create a bootable USB drive using your preferred tool
3. Boot from the USB and follow the installation wizard
4. Complete the initial AI environment setup

First Steps:
Once installed, Nanite will automatically detect your hardware configuration and optimize settings for AI development. The first boot includes:
• GPU driver installation and optimization
• Python environment setup with popular ML libraries
• IDE configuration with AI-powered features
• Sample projects to get you started

Your First AI Project:
We've included several template projects to help you get started:
• Image Classification with PyTorch
• Natural Language Processing with Transformers
• Time Series Analysis with TensorFlow
• Computer Vision with OpenCV

Each template includes comprehensive documentation, sample datasets, and pre-configured environments that work out of the box.

The Nanite difference becomes apparent immediately – what traditionally takes hours of environment setup and dependency management happens automatically in the background.`
  },
  {
    id: 'ai-model-deployment-nanite',
    title: 'Deploying AI Models at Scale with Nanite',
    date: '2025-01-05',
    excerpt: 'Learn how to deploy and scale your AI models efficiently using Nanite\'s deployment tools.',
    category: 'DevOps',
    readTime: '9 min read',
    author: 'Lisa Park',
    gradient: 'from-purple-400 to-indigo-500',
    content: `Deploying AI models to production has traditionally been one of the most challenging aspects of the ML lifecycle. Nanite transforms this process with built-in deployment tools and cloud-native architecture.

Deployment Features:
• One-Click Containerization: Automatic Docker container generation with optimized runtime environments
• Auto-Scaling Infrastructure: Dynamic resource allocation based on model inference demand
• Multi-Cloud Support: Deploy to AWS, Google Cloud, Azure, or on-premises infrastructure
• Performance Monitoring: Real-time metrics and automated performance optimization

The deployment process in Nanite is designed around simplicity and reliability:
1. Train and validate your model in the Nanite development environment
2. Use the built-in deployment wizard to configure your production settings
3. Deploy with a single command to your chosen infrastructure
4. Monitor and optimize using Nanite's integrated dashboard

Advanced Features:
• A/B Testing: Built-in support for model version comparison and gradual rollouts
• Automated Rollbacks: Instant reversion to previous model versions if performance degrades
• Edge Deployment: Optimized packaging for edge devices and IoT applications
• Model Versioning: Complete lineage tracking from training data to production models

With Nanite, the gap between model development and production deployment virtually disappears.`
  },
  {
    id: 'collaborative-ai-development',
    title: 'Collaborative AI Development: Best Practices',
    date: '2025-01-03',
    excerpt: 'Maximize team productivity with Nanite\'s collaborative features and development best practices.',
    category: 'Collaboration',
    readTime: '7 min read',
    author: 'David Kim',
    gradient: 'from-indigo-400 to-blue-500',
    content: `AI development is increasingly becoming a team sport. Nanite provides powerful collaboration features that enable teams to work together seamlessly while maintaining individual productivity.

Collaboration Features:
• Shared Environments: Team members can instantly share and replicate development environments
• Real-time Code Collaboration: Live editing and debugging sessions with team members
• Experiment Tracking: Centralized tracking of all team experiments and results
• Resource Sharing: Efficient sharing of compute resources and datasets across the team

Best Practices for Team AI Development:
• Establish clear data and model versioning strategies
• Implement consistent coding standards and documentation practices
• Use Nanite's built-in experiment tracking to avoid duplicate work
• Leverage shared environments for onboarding new team members

Team Workflow Optimization:
Nanite's collaborative features are designed to enhance team productivity without introducing complexity. Features like environment snapshots, shared experiment logs, and integrated communication tools help teams stay synchronized and productive.

The result is a development experience where team members can focus on solving AI problems rather than managing collaboration overhead. Whether you're a startup with a small team or an enterprise with distributed AI teams, Nanite scales to meet your collaboration needs.`
  }
];

export default function BlogListPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const togglePost = (postId: string) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Update document title and meta description
    document.title = 'Nanite Blog - AI Development Insights & Tutorials';
    
    const existingDescription = document.querySelector('meta[name="description"]');
    if (existingDescription) {
      existingDescription.setAttribute('content', 'Read the latest articles, tutorials, and insights on AI development, Nanite OS features, and industry trends from our expert team.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read the latest articles, tutorials, and insights on AI development, Nanite OS features, and industry trends from our expert team.';
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

    updateOGMeta('og:title', 'Nanite Blog - AI Development Insights & Tutorials');
    updateOGMeta('og:description', 'Read the latest articles, tutorials, and insights on AI development, Nanite OS features, and industry trends from our expert team.');
    updateOGMeta('og:type', 'website');
  }, []);

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
            <span className="text-2xl mr-3">📚</span>
            <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
              Latest Insights & Tutorials
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-yellow-600 to-orange-600 dark:from-white dark:via-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
            Nanite Blog
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest in AI development, get insights from our team, and learn how to maximize your productivity with Nanite OS.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${300 + index * 100}ms`
              }}
            >
              <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${post.gradient} text-white`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Expandable Content */}
                {expandedPost === post.id && (
                  <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-orange-500">
                    <div className="prose dark:prose-invert max-w-none">
                      {post.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => togglePost(post.id)}
                    className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold transition-colors duration-300 group"
                  >
                    {expandedPost === post.id ? 'Show Less' : 'Read More'}
                    <svg className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedPost === post.id ? 'rotate-180' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {expandedPost === post.id ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get the latest AI development insights and Nanite updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
