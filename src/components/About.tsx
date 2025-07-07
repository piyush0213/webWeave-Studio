import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Users, Heart, Lightbulb, BookOpen, Coffee, Zap, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
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

  const features = [
    {
      icon: GraduationCap,
      title: 'Fresh Graduates',
      description: 'College undergrads with the latest knowledge in modern web technologies and trends.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-100 to-cyan-100'
    },
    {
      icon: Heart,
      title: 'Passionate Team',
      description: 'We pour our hearts into every project because your success is our stepping stone.',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-100 to-pink-100'
    },
    {
      icon: BookOpen,
      title: 'Always Learning',
      description: 'We stay updated with the latest technologies and best practices in web development.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-100 to-teal-100'
    },
    {
      icon: Coffee,
      title: 'Dedicated Workers',
      description: 'Late nights, early mornings - we work around the clock to deliver excellence.',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'from-orange-100 to-yellow-100'
    }
  ];

  const stats = [
    { icon: Zap, value: '50+', label: 'Projects Completed', color: 'text-blue-600' },
    { icon: Users, value: '30+', label: 'Happy Clients', color: 'text-green-600' },
    { icon: Target, value: '98%', label: 'Success Rate', color: 'text-purple-600' },
    { icon: Lightbulb, value: '24/7', label: 'Support', color: 'text-orange-600' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-100 rounded-full animate-float-delayed opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-100 rounded-full animate-bounce-slow opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-text-shimmer">WebWeave Studio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Young minds with fresh perspectives, ready to transform your digital presence with passion and dedication.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className={`transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              Fresh Talent, Big Dreams 
              <span className="ml-2 text-3xl animate-wave">🚀</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed hover:text-gray-700 transition-colors duration-300">
              We're a team of passionate college undergraduates who started WebWeave Studio with a simple belief: 
              great websites shouldn't cost a fortune. While we may be new to the industry, we bring fresh 
              perspectives, modern skills, and an unmatched hunger to prove ourselves.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed hover:text-gray-700 transition-colors duration-300">
              What sets us apart? We're not just building websites - we're building our future. Every project 
              is a chance for us to learn, grow, and showcase our potential. This means you get our absolute 
              best effort at prices that won't break your budget.
            </p>
            
            {/* Enhanced Why Choose Us Points */}
            <div className="space-y-4">
              {[
                { point: 'Latest Technologies', description: 'Fresh from college with cutting-edge skills', icon: '⚡' },
                { point: 'Affordable Pricing', description: 'Quality work at student-friendly rates', icon: '💰' },
                { point: 'Personal Attention', description: 'Your project gets our full focus and care', icon: '👥' },
                { point: 'Quick Turnaround', description: 'Eager to deliver and build our reputation', icon: '🚀' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="text-2xl group-hover:animate-bounce">{item.icon}</div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{item.point}:</span>
                    <span className="text-gray-600 ml-2 group-hover:text-gray-700 transition-colors duration-300">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Features Grid */}
          <div className={`transform transition-all duration-700 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-2 transition-all duration-500 border border-gray-100 cursor-pointer hover-tilt ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 150 + 700}ms` }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-125 transform transition-all duration-500 ${hoveredFeature === index ? 'animate-pulse-glow' : ''}`}>
                      <feature.icon className={`w-6 h-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className={`mb-16 transform transition-all duration-700 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-gray-100 hover-lift animate-scale-in`}
                style={{ animationDelay: `${index * 100 + 1000}ms` }}
              >
                <div className="mb-4">
                  <stat.icon className={`w-8 h-8 mx-auto ${stat.color} group-hover:scale-125 transition-transform duration-300`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Mission Statement */}
        <div className={`text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 transform transition-all duration-700 delay-900 hover-lift cursor-pointer group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Our Promise to You</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
            We may be young, but we're serious about your success. Every line of code we write, every design 
            we create, and every solution we deliver comes with our commitment to excellence and growth.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
            <Heart className="w-5 h-5 text-red-500 mr-2 animate-wave" />
            <span className="text-gray-700 font-medium">Built with passion, delivered with pride</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;