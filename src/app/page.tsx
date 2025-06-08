'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WaitlistPopup from '@/components/WaitlistPopup';
import { 
  Server, 
  Zap, 
  Bot, 
  Package, 
  Wrench, 
  Shield, 
  User, 
  UserCheck, 
  Brain,
  Code,
  Database,
  Cpu,
  Cloud,
  Terminal,
  Layers,
  Rocket,
  Monitor,
  BookOpen,
  BarChart3,
  TrendingUp,
  Timer,
  Gauge,
  PlayCircle,
  ChevronRight,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  GitBranch,
  FileText,
  Download,
  Activity
} from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const stats = [
    { label: 'Developers Waitlisted', value: '2.5K+', delay: 0 },
    { label: 'AI/ML Libraries', value: '100+', delay: 100 },
    { label: 'Boot to Code Time', value: '< 5min', delay: 200 },
    { label: 'System Stability', value: '99.9%', delay: 300 },
  ];



  const benchmarks = [
    {
      metric: 'Boot to Code',
      traditional: '15-30 min',
      nanite: '< 3 min',
      improvement: '85% faster',
      icon: Timer
    },
    {
      metric: 'Model Training Setup',
      traditional: '2-4 hours',
      nanite: '< 10 min',
      improvement: '95% faster',
      icon: Gauge
    },
    {
      metric: 'GPU Utilization',
      traditional: '60-70%',
      nanite: '95%+',
      improvement: '35% better',
      icon: Activity
    },
    {
      metric: 'Memory Efficiency',
      traditional: 'Standard',
      nanite: 'Optimized',
      improvement: '40% more efficient',
      icon: TrendingUp
    }
  ];

  const faqs = [
    {
      question: 'What makes Nanite different from other Linux distributions?',
      answer: 'Nanite is specifically designed for AI development with pre-configured GPU drivers, optimized kernels, and native LLM integration. Unlike general-purpose distros, every component is tuned for AI/ML workflows.'
    },
    {
      question: 'Can I run Nanite on my existing hardware?',
      answer: 'Nanite works on most modern x86_64 systems. For optimal AI performance, we recommend NVIDIA RTX 3060 or better, or AMD RX 6600 XT or better, with at least 16GB RAM.'
    },
    {
      question: 'Is Nanite free and open source?',
      answer: 'Yes! Nanite core is completely free and open source under MIT license. We also offer premium support and enterprise features for teams and organizations.'
    },
    {
      question: 'How do I migrate my existing AI projects to Nanite?',
      answer: 'Nanite includes migration tools and compatibility layers for popular frameworks. Most Python-based AI projects work out of the box with minimal configuration changes.'
    },
    {
      question: 'What level of AI/ML experience do I need?',
      answer: 'Nanite is designed for all skill levels. Beginners benefit from guided workflows and tutorials, while experts enjoy low-level access and customization options.'
    }
  ];

  // Set dynamic SEO metadata
  useEffect(() => {
    setIsVisible(true);
    
    // Update document title and meta description
    document.title = 'Nanite - Revolutionary AI Development OS';
    
    const existingDescription = document.querySelector('meta[name="description"]');
    if (existingDescription) {
      existingDescription.setAttribute('content', 'Experience the future of AI development with Nanite OS. Revolutionary tools, intelligent assistance, and streamlined workflows for next-generation artificial intelligence projects.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experience the future of AI development with Nanite OS. Revolutionary tools, intelligent assistance, and streamlined workflows for next-generation artificial intelligence projects.';
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

    updateOGMeta('og:title', 'Nanite - Revolutionary AI Development OS');
    updateOGMeta('og:description', 'Experience the future of AI development with Nanite OS. Revolutionary tools, intelligent assistance, and streamlined workflows for next-generation artificial intelligence projects.');
    updateOGMeta('og:type', 'website');
  }, []);

  const features = [
    {
      icon: Server,
      title: 'Debian Stability',
      description: 'Built on rock-solid Debian foundation with enterprise-grade reliability and security for production AI workloads.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Zap,
      title: 'GPU-Accelerated AI',
      description: 'Native CUDA and ROCm support with optimized drivers for NVIDIA and AMD GPUs, maximizing AI computing performance.',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      icon: Bot,
      title: 'LLM Interface',
      description: 'Direct integration with OpenAI, Anthropic, and local models through unified command-line and API interfaces.',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: Package,
      title: 'Pre-installed AI Stack',
      description: 'PyTorch, TensorFlow, Jupyter, Docker, and 100+ AI/ML libraries ready out-of-the-box with optimized configurations.',
      gradient: 'from-pink-400 to-purple-500'
    },
    {
      icon: Wrench,
      title: 'Developer-First Tools',
      description: 'VS Code, Vim, Emacs, Git, SSH, and modern development tools configured for AI/ML workflows.',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'End-to-end encryption, secure boot, and privacy-focused design keeping your AI models and data protected.',
      gradient: 'from-indigo-400 to-blue-500'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'AI Engineer at DeepMind',
      avatar: 'User',
      quote: 'Finally, an OS built for AI developers by AI developers. The pre-configured environment saved us weeks of setup time.'
    },
    {
      name: 'Jordan Kim',
      role: 'ML Researcher at Stanford',
      avatar: 'UserCheck',
      quote: 'Nanite\'s Debian foundation gives me the stability I need while the AI tools make prototyping incredibly fast.'
    },
    {
      name: 'Dr. Sarah Patel',
      role: 'Computer Vision Engineer',
      avatar: 'Brain',
      quote: 'The GPU acceleration and native LLM interfaces have revolutionized our computer vision pipeline. Simply amazing!'
    }
  ];

  // Helper function to render testimonial avatars
  const renderAvatar = (avatarName: string) => {
    const iconProps = { size: 40, className: "text-orange-500" };
    
    switch (avatarName) {
      case 'User':
        return <User {...iconProps} />;
      case 'UserCheck':
        return <UserCheck {...iconProps} />;
      case 'Brain':
        return <Brain {...iconProps} />;
      default:
        return <User {...iconProps} />;
    }
  };

  // Set dynamic SEO metadata
  useEffect(() => {
    setIsVisible(true);
    
    // Update document title and meta description
    document.title = 'Nanite - Revolutionary AI Development OS';
    
    const existingDescription = document.querySelector('meta[name="description"]');
    if (existingDescription) {
      existingDescription.setAttribute('content', 'Experience the future of AI development with Nanite OS. Revolutionary tools, intelligent assistance, and streamlined workflows for next-generation artificial intelligence projects.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experience the future of AI development with Nanite OS. Revolutionary tools, intelligent assistance, and streamlined workflows for next-generation artificial intelligence projects.';
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

    updateOGMeta('og:title', 'Nanite - Revolutionary AI Development OS');
    updateOGMeta('og:description', 'Experience the future of AI development with Nanite OS. Revolutionary tools, intelligent assistance, and streamlined workflows for next-generation artificial intelligence projects.');
    updateOGMeta('og:type', 'website');
  }, []);

  return (
    <div className="overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full animate-pulse" style={{animationDelay: '1000ms'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          
          {/* Hexagon Patterns */}
          <div className="absolute top-20 left-20 w-6 h-6 border-2 border-yellow-400/20 rotate-45 rounded-sm animate-float"></div>
          <div className="absolute top-40 right-40 w-4 h-4 border-2 border-orange-400/30 rotate-12 rounded-sm animate-float" style={{animationDelay: '500ms'}}></div>
          <div className="absolute bottom-40 left-40 w-8 h-8 border-2 border-amber-400/20 rotate-45 rounded-sm animate-float" style={{animationDelay: '1000ms'}}></div>
          
          {/* Additional floating particles */}
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-yellow-500/40 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-orange-500/40 rounded-full animate-bounce" style={{animationDelay: '800ms'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16 pt-24 max-w-7xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Status Badge */}
            <div className="mb-12">
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-800 dark:text-yellow-300 px-6 py-3 rounded-full border border-yellow-200 dark:border-yellow-700 animate-shimmer">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Currently in Beta • Join Early Access</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hero Content with Background Image */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 mb-16">
              
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left max-w-2xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                  <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent animate-gradient bg-300% hover:scale-105 transition-transform duration-300">
                    Nanite
                  </span>
                  <span className="block text-gray-700 dark:text-gray-300 text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
                    The AI-First OS for Engineers, Hackers, and Vibe Coders
                  </span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                  Run, build, and interact with AI models natively on a <span className="font-semibold text-yellow-600 dark:text-yellow-400">Debian-based OS</span> designed for productivity, autonomy, and creativity.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                  <button
                    onClick={() => setIsWaitlistOpen(true)}
                    className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Rocket className="w-5 h-5" />
                      Join Waitlist
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                   
                  
                   
                </div>
              </div>

              {/* Right Side - Hero Image */}
              <div className="flex-1 relative max-w-lg lg:max-w-xl">
                <div className="relative w-full">
                  {/* Floating Animation Container */}
                  <div className="relative animate-float">
                    <Image
                      src="/bg.png"
                      alt="Nanite - AI Development Platform"
                      width={700}
                      height={700}
                      className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    <div className="absolute top-1/4 -left-6 w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '700ms'}}></div>
                    <div className="absolute bottom-1/3 -right-8 w-4 h-4 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '1000ms'}}></div>
                  </div>

                  {/* Hexagon Pattern Background */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-yellow-400/30 rotate-45 rounded-lg animate-spin" style={{ animationDuration: '8s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-orange-400/20 rotate-12 rounded-lg animate-spin" style={{ animationDuration: '12s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-amber-400/10 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="absolute -bottom-8 -left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 border border-yellow-200 dark:border-yellow-800 shadow-xl animate-float" style={{animationDelay: '500ms'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Efficient & Organized</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 border border-orange-200 dark:border-orange-800 shadow-xl animate-float" style={{animationDelay: '1200ms'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">AI-Powered</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 border border-amber-200 dark:border-amber-800 shadow-xl animate-float" style={{animationDelay: '800ms'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Lightning Fast</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transform transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                  style={{ transitionDelay: `${stat.delay}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-black text-orange-600 dark:text-orange-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="text-center animate-bounce">
              <svg className="w-6 h-6 mx-auto text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Discover More</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
              Why Developers Choose
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> Nanite</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of power, simplicity, and innovation that's transforming how AI is built.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-12 h-12 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-r ${feature.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
              Loved by <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Developers</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what AI developers around the world are saying about Nanite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">{renderAvatar(testimonial.avatar)}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-orange-600 dark:text-orange-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported by Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Built with <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Industry Standards</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Powered by the most trusted frameworks and technologies in AI development
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {[
              { name: 'Debian', logo: '/icons/debian.png' },
              { name: 'PyTorch', logo: '/icons/pytorch.png' },
              { name: 'TensorFlow', logo: '/icons/tensorflow.png' },
              { name: 'Docker', logo: '/icons/docker.png' },
              { name: 'CUDA', icon: Cpu },
              { name: 'Jupyter', logo: '/icons/jupyter.png' }
            ].map((tech, index) => {
              const hasLogo = 'logo' in tech && tech.logo;
              const hasIcon = 'icon' in tech && tech.icon;
              
              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                    {hasLogo ? (
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                      />
                    ) : hasIcon ? (
                      <tech.icon className="w-10 h-10 text-orange-500" />
                    ) : null}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terminal Demo Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Experience the Power of <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Nanite</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how easy it is to perform complex AI tasks with simple commands
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Terminal Window */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border-b border-gray-300 dark:border-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-4">nanite-terminal</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs">zsh</span>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="bg-gray-900 dark:bg-black text-white font-mono text-sm p-6 min-h-96">
                <div className="space-y-4">
                  {/* Welcome Message */}
                  <div className="text-green-400">
                    <span className="text-gray-500">$</span> nanite --version
                  </div>
                  <div className="text-gray-300 pl-2">
                    Nanite v2.1.0 - AI Development Platform
                  </div>
                  
                  {/* Create Project */}
                  <div className="mt-6">
                    <div className="text-green-400">
                      <span className="text-gray-500">$</span> nanite create my-ai-project
                    </div>
                    <div className="text-gray-300 pl-2 mt-1">
                      <div className="text-yellow-400">✨ Creating new AI project...</div>
                      <div className="text-blue-400">📦 Setting up environment...</div>
                      <div className="text-green-400">✅ Project created successfully!</div>
                    </div>
                  </div>
                  
                  {/* Install Dependencies */}
                  <div className="mt-6">
                    <div className="text-green-400">
                      <span className="text-gray-500">$</span> cd my-ai-project && nanite install torch transformers
                    </div>
                    <div className="text-gray-300 pl-2 mt-1">
                      <div className="text-blue-400">🔄 Installing dependencies...</div>
                      <div className="text-gray-400">  ├── torch@2.1.0</div>
                      <div className="text-gray-400">  └── transformers@4.35.0</div>
                      <div className="text-green-400">✅ Dependencies installed in 12.3s</div>
                    </div>
                  </div>
                  
                  {/* Run Model */}
                  <div className="mt-6">
                    <div className="text-green-400">
                      <span className="text-gray-500">$</span> nanite run --model llama2 --prompt "Hello, AI!"
                    </div>
                    <div className="text-gray-300 pl-2 mt-1">
                      <div className="text-yellow-400">🚀 Loading model: llama2-7b...</div>
                      <div className="text-blue-400">💾 Memory usage: 6.2GB / 16GB</div>
                      <div className="text-purple-400">🔮 Generating response...</div>
                      <div className="text-white bg-gray-800 p-3 rounded mt-2">
                        Hello! I'm here to help you with your AI development needs. 
                        Nanite makes it incredibly easy to work with language models!
                      </div>
                      <div className="text-green-400 mt-1">✅ Response generated in 1.2s</div>
                    </div>
                  </div>
                  
                  {/* Deploy */}
                  <div className="mt-6">
                    <div className="text-green-400">
                      <span className="text-gray-500">$</span> nanite deploy --cloud
                    </div>
                    <div className="text-gray-300 pl-2 mt-1">
                      <div className="text-blue-400">☁️  Deploying to Nanite Cloud...</div>
                      <div className="text-yellow-400">📡 Setting up inference endpoint...</div>
                      <div className="text-green-400">✅ Deployed at: https://my-ai-project.nanite.app</div>
                    </div>
                  </div>
                  
                  {/* Cursor */}
                  <div className="flex items-center mt-4">
                    <span className="text-gray-500">$</span>
                    <div className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Terminal Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Zero Setup</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Start building AI applications instantly without complex environment configuration
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GPU Accelerated</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Automatic GPU optimization for training and inference with CUDA support
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">One-Click Deploy</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Deploy your models to production with a single command, no DevOps required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              See Nanite in <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-xl text-gray-300">
              Experience the power of AI-native development workflows
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 to-slate-800 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
              {/* Video Header */}
              <div className="flex items-center px-6 py-4 bg-gradient-to-r from-gray-700 to-slate-700 border-b border-gray-600">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-300 text-sm font-mono">nanite-demo.mp4</span>
                </div>
                <PlayCircle className="w-5 h-5 text-gray-400" />
              </div>
              
              {/* Video Content */}
              <div className="relative aspect-video bg-black">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="/bg.png"
                  preload="metadata"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <div className="text-center">
                      <PlayCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400">Video demo coming soon</p>
                    </div>
                  </div>
                </video>
                
                {/* Video Overlay for Demo Features */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-mono">Live Demo</span>
                  </div>
                </div>
                
                {/* Demo Features List */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                  <h4 className="text-sm font-semibold text-white mb-2">Featured in Demo:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      Zero-setup AI environment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      GPU-accelerated training
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      Native LLM integration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      One-click deployment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <PlayCircle className="w-5 h-5" />
                  Try Nanite Early Access
                  <ChevronRight className="w-4 h-4" />
                </button>
                 
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Performance Benchmarks Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Performance</span> That Speaks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real benchmarks from real AI development workflows
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benchmarks.map((benchmark, index) => (
              <div
                key={benchmark.metric}
                className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="mb-4">
                  <benchmark.icon className="w-12 h-12 text-orange-500 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{benchmark.metric}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Traditional:</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{benchmark.traditional}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Nanite:</span>
                    <span className="text-sm font-semibold text-orange-600">{benchmark.nanite}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                    <span className="inline-flex items-center gap-1 text-green-600 font-bold text-sm">
                      <TrendingUp className="w-4 h-4" />
                      {benchmark.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              * Benchmarks based on real-world AI development scenarios. Results may vary by hardware configuration.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about getting started with Nanite
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/docs"
              className="inline-flex items-center gap-3 text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
            >
              <BookOpen className="w-5 h-5" />
              View Full Documentation
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-8">
            Ready to Transform Your AI Development?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Join thousands of developers who are already building the future with Nanite. Get early access and be part of the revolution.
          </p>
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold px-12 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
          >
            <Rocket className="w-5 h-5" />
            Join Waitlist
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>
      
      {/* Waitlist Popup */}
      <WaitlistPopup 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
}
