import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Search, Layers, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
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

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Beautiful, responsive interfaces built with modern frameworks like React, Vue, and Angular.',
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'Modern CSS'],
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting ₹8,000',
      popular: false
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'Complete web applications with robust backend systems and seamless integrations.',
      features: ['Node.js & Express', 'Database Design', 'API Development', 'Cloud Deployment'],
      color: 'from-purple-500 to-pink-500',
      price: 'Starting ₹15,000',
      popular: true
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings with technical SEO and performance optimizations.',
      features: ['Technical SEO', 'Page Speed', 'Schema Markup', 'Analytics Setup'],
      color: 'from-green-500 to-teal-500',
      price: 'Starting ₹5,000',
      popular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with exceptional user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-orange-500 to-red-500',
      price: 'Starting ₹6,000',
      popular: false
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Scalable web applications tailored to your business needs and workflows.',
      features: ['Custom Development', 'Third-party Integrations', 'Admin Dashboards', 'User Authentication'],
      color: 'from-indigo-500 to-purple-500',
      price: 'Starting ₹12,000',
      popular: false
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 bg-blue-200 rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-purple-200 rounded-full animate-float-delayed opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-200 rounded-full animate-bounce-slow opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-text-shimmer">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Professional web development services at student-friendly prices. Quality work that doesn't break the bank.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover-expand cursor-pointer animate-scale-in animation-delay-300">
              💰 Affordable rates • 🚀 Modern solutions • ❤️ Personal attention
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer hover-tilt ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } ${service.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  POPULAR
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Price Badge */}
              <div className={`absolute top-4 ${service.popular ? 'left-4' : 'right-4'} px-3 py-1 bg-gradient-to-r ${service.color} text-white text-xs font-bold rounded-full transform group-hover:scale-110 transition-transform duration-300`}>
                {service.price}
              </div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transform transition-all duration-500 shadow-lg ${hoveredService === index ? 'animate-pulse-glow' : ''}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Enhanced Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-all duration-300 animate-slide-in-left`}
                      style={{ animationDelay: `${featureIndex * 100 + index * 150 + 300}ms` }}
                    >
                      <CheckCircle className={`w-4 h-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent mr-3 group-hover:scale-125 transform transition-transform duration-300`} />
                      <span className="group-hover:translate-x-1 transform transition-transform duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center group/btn magnetic-button`}>
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>

                {/* Hover Arrow */}
                <div className={`absolute top-4 right-12 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${service.popular ? 'right-20' : ''}`}>
                  <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-lg animate-bounce`}>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover-lift cursor-pointer group relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto group-hover:text-gray-700 transition-colors duration-300">
                Let's discuss your project and see how we can help bring your vision to life at an affordable price.
              </p>
              
              {/* Enhanced stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
                {[
                  { value: '₹5,000+', label: 'Starting Price', icon: '💰', color: 'text-green-600' },
                  { value: '7-14', label: 'Days Delivery', icon: '⚡', color: 'text-blue-600' },
                  { value: '100%', label: 'Satisfaction', icon: '🎯', color: 'text-purple-600' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group/stat">
                    <div className="text-2xl mb-1 group-hover/stat:animate-bounce">{stat.icon}</div>
                    <div className={`text-3xl font-bold ${stat.color} mb-1 group-hover/stat:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 group-hover/stat:text-gray-700 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 magnetic-button animate-pulse-glow">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;