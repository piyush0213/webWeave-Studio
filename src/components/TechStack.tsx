import React, { useEffect, useRef, useState } from 'react';

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      name: 'React',
      category: 'Frontend',
      description: 'Modern component-based UI library',
      color: 'from-cyan-400 to-blue-500',
      icon: '⚛️',
      level: 95
    },
    {
      name: 'Next.js',
      category: 'Framework',
      description: 'Full-stack React framework',
      color: 'from-gray-800 to-gray-900',
      icon: '▲',
      level: 90
    },
    {
      name: 'TypeScript',
      category: 'Language',
      description: 'Type-safe JavaScript',
      color: 'from-blue-600 to-blue-700',
      icon: 'TS',
      level: 88
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling',
      description: 'Utility-first CSS framework',
      color: 'from-teal-400 to-cyan-500',
      icon: '🎨',
      level: 92
    },
    {
      name: 'Node.js',
      category: 'Backend',
      description: 'JavaScript runtime environment',
      color: 'from-green-500 to-green-600',
      icon: '🟢',
      level: 85
    },
    {
      name: 'MongoDB',
      category: 'Database',
      description: 'NoSQL document database',
      color: 'from-green-600 to-green-700',
      icon: '🍃',
      level: 80
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      description: 'Advanced relational database',
      color: 'from-blue-700 to-indigo-800',
      icon: '🐘',
      level: 78
    },
    {
      name: 'AWS',
      category: 'Cloud',
      description: 'Cloud computing platform',
      color: 'from-orange-400 to-orange-500',
      icon: '☁️',
      level: 75
    },
    {
      name: 'Docker',
      category: 'DevOps',
      description: 'Containerization platform',
      color: 'from-blue-400 to-blue-600',
      icon: '🐳',
      level: 82
    },
    {
      name: 'Git',
      category: 'Version Control',
      description: 'Distributed version control',
      color: 'from-red-500 to-red-600',
      icon: '📦',
      level: 90
    },
    {
      name: 'Figma',
      category: 'Design',
      description: 'Collaborative design tool',
      color: 'from-purple-500 to-pink-500',
      icon: '🎭',
      level: 85
    },
    {
      name: 'Vercel',
      category: 'Deployment',
      description: 'Frontend deployment platform',
      color: 'from-gray-800 to-black',
      icon: '▲',
      level: 88
    }
  ];

  return (
    <section id="tech-stack" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-100 rounded-full animate-float-delayed opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-pink-100 rounded-full animate-bounce-slow opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-text-shimmer">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable, performant, and maintainable solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer hover-tilt ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Skill level indicator */}
              <div className="absolute top-2 right-2 text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                {tech.level}%
              </div>

              {/* Icon/Logo */}
              <div className="relative text-center mb-4">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-125 group-hover:rotate-12 transform transition-all duration-500 ${hoveredTech === index ? 'animate-pulse-glow' : ''}`}>
                  {tech.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur opacity-20 group-hover:opacity-50 transition-opacity duration-500`}></div>
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </h3>
                <span className={`inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r ${tech.color} text-white rounded-full mb-3 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                  {tech.category}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {tech.description}
                </p>

                {/* Skill progress bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-2 bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out ${hoveredTech === index ? 'animate-pulse' : ''}`}
                      style={{ 
                        width: isVisible ? `${tech.level}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Floating particles on hover */}
              {hoveredTech === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${tech.color} rounded-full animate-particle-float opacity-60`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <div className={`mt-16 text-center transform transition-all duration-700 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 hover-lift cursor-pointer group relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Always Learning, Always Evolving
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 group-hover:text-gray-700 transition-colors duration-300">
                Technology moves fast, and so do we. Our team continuously learns and adapts to new technologies 
                to ensure we're always delivering the most modern and efficient solutions for our clients.
              </p>
              
              {/* Enhanced feature badges */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'Performance', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
                  { name: 'Security', icon: '🔒', color: 'from-red-400 to-pink-500' },
                  { name: 'Scalability', icon: '📈', color: 'from-green-400 to-blue-500' },
                  { name: 'Maintainability', icon: '🔧', color: 'from-purple-400 to-indigo-500' },
                  { name: 'User Experience', icon: '❤️', color: 'from-pink-400 to-red-500' }
                ].map((feature, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-white rounded-full text-gray-700 shadow-md border border-gray-200 hover:shadow-lg hover:scale-110 transform transition-all duration-300 cursor-pointer group/badge animate-scale-in`}
                    style={{ animationDelay: `${index * 100 + 1000}ms` }}
                  >
                    <span className="mr-2 group-hover/badge:animate-bounce inline-block">{feature.icon}</span>
                    {feature.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;