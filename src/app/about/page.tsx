'use client';

import { useState, useEffect } from 'react';
import { 
  Rocket, 
  Eye, 
  Calendar, 
  Users, 
  Server, 
  Zap, 
  Settings, 
  Container, 
  Code, 
  Palette, 
  Microscope, 
  Shield, 
  Waves,
  User,
  UserCheck,
  Brain,
  Cog,
  Globe
} from 'lucide-react';

const milestones = [
  {
    year: '2023',
    title: 'Vision Born',
    description: 'Concept of AI-native operating system emerged from developer frustrations'
  },
  {
    year: '2024',
    title: 'Core Development',
    description: 'Built foundational architecture and AI integration framework'
  },
  {
    year: '2025',
    title: 'Beta Release',
    description: 'Limited beta testing with select AI development communities'
  },
  {
    year: '2025+',
    title: 'Global Launch',
    description: 'Public release and ecosystem expansion worldwide'
  }
];

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former Google AI researcher with 10+ years in machine learning infrastructure',
    icon: 'User',
    color: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Sarah Kim',
    role: 'CTO',
    bio: 'Ex-NVIDIA engineer specializing in GPU optimization and system architecture',
    icon: 'Brain',
    color: 'from-green-500 to-teal-500'
  },
  {
    name: 'Marcus Rivera',
    role: 'Head of Design',
    bio: 'Design systems expert who previously led UX at major tech companies',
    icon: 'Palette',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Dr. Elena Vasquez',
    role: 'AI Research Lead',
    bio: 'PhD in Computer Science with focus on human-computer interaction in AI',
    icon: 'Microscope',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'James Mitchell',
    role: 'DevOps Engineer',
    bio: 'Kubernetes and cloud infrastructure specialist ensuring system reliability',
    icon: 'Cog',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Priya Patel',
    role: 'Community Manager',
    bio: 'Building and nurturing our global community of AI developers and enthusiasts',
    icon: 'Globe',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Helper function to render team member icons
  const renderIcon = (iconName: string) => {
    const iconProps = { size: 48, className: "text-orange-500 mb-6 transform group-hover:scale-110 transition-transform duration-300" };
    
    switch (iconName) {
      case 'User':
        return <User {...iconProps} />;
      case 'Brain':
        return <Brain {...iconProps} />;
      case 'Palette':
        return <Palette {...iconProps} />;
      case 'Microscope':
        return <Microscope {...iconProps} />;
      case 'Cog':
        return <Cog {...iconProps} />;
      case 'Globe':
        return <Globe {...iconProps} />;
      default:
        return <User {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/5 dark:to-orange-500/5"></div>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className={`text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              About <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Nanite</span>
            </h1>
            <p className={`text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Revolutionizing AI development through intelligent operating systems that understand your workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="mb-6">
                <Rocket className="w-12 h-12 text-orange-500" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Nanite bridges the gap between idea and implementation, turning your computer into a supercharged AI workstation where creativity meets cutting-edge technology.
              </p>
            </div>

            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="mb-6">
                <Eye className="w-12 h-12 text-orange-500" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                A world where AI development is as intuitive as writing code. Where the barrier between human creativity and artificial intelligence disappears, enabling a new generation of builders to create transformative solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We envision Nanite as the foundation for the next wave of AI innovation - empowering developers to focus on solving problems rather than managing infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Built on <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Solid Foundations</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nanite combines the stability of Debian with cutting-edge AI optimizations for enterprise-grade reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Core Architecture */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Core Architecture</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Server,
                    title: 'Debian 12 Base',
                    description: 'Rock-solid foundation with LTS support and enterprise security'
                  },
                  {
                    icon: Zap,
                    title: 'GPU Optimization',
                    description: 'Native CUDA/ROCm drivers with automatic detection and setup'
                  },
                  {
                    icon: Settings,
                    title: 'Custom Kernel',
                    description: 'Optimized Linux kernel for AI workloads and memory management'
                  },
                  {
                    icon: Container,
                    title: 'Container Ready',
                    description: 'Docker and Podman pre-configured for ML pipeline deployment'
                  }
                ].map((feature, index) => (
                  <div key={feature.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Target Users */}
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Built For</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Code,
                    title: 'AI Engineers',
                    description: 'Production-ready environment for deploying ML models at scale'
                  },
                  {
                    icon: Zap,
                    title: 'Hackers',
                    description: 'Low-level access and customization without breaking core functionality'
                  },
                  {
                    icon: Palette,
                    title: 'Vibe Coders',
                    description: 'Creative developers exploring AI art, music, and experimental projects'
                  },
                  {
                    icon: Microscope,
                    title: 'Researchers',
                    description: 'Academic and industry researchers needing reproducible environments'
                  }
                ].map((user, index) => (
                  <div key={user.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-300">
                    <user.icon className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{user.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{user.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Philosophy */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Security & <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Philosophy</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800 shadow-lg">
                <div className="mb-4">
                  <Shield className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Privacy First</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Your AI models and data stay on your machine. No telemetry, no cloud dependencies, no vendor lock-in. 
                  Your creativity and intellectual property remain yours.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 dark:border-orange-800 shadow-lg">
                <div className="mb-4">
                  <Waves className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Flow State</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Designed to minimize friction and maximize flow. From boot to breakthrough, 
                  every component works harmoniously to keep you in the zone.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "Nanite isn't just another Linux distribution - it's a paradigm shift towards 
                AI-native computing that respects your autonomy while unleashing your potential."
              </p>
              <div className="text-center mt-4">
                <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">- The Nanite Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The brilliant minds building the future of AI development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`group bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    {renderIcon(member.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-r ${member.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
