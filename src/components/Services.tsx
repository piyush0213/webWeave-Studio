import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Search, Layers, Globe } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      price: 'Starting ₹8,000'
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'Complete web applications with robust backend systems and seamless integrations.',
      features: ['Node.js & Express', 'Database Design', 'API Development', 'Cloud Deployment'],
      color: 'from-purple-500 to-pink-500',
      price: 'Starting ₹15,000'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings with technical SEO and performance optimizations.',
      features: ['Technical SEO', 'Page Speed', 'Schema Markup', 'Analytics Setup'],
      color: 'from-green-500 to-teal-500',
      price: 'Starting ₹5,000'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with exceptional user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-orange-500 to-red-500',
      price: 'Starting ₹6,000'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Scalable web applications tailored to your business needs and workflows.',
      features: ['Custom Development', 'Third-party Integrations', 'Admin Dashboards', 'User Authentication'],
      color: 'from-indigo-500 to-purple-500',
      price: 'Starting ₹12,000'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Professional web development services at student-friendly prices. Quality work that doesn't break the bank.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              💰 Affordable rates • 🚀 Modern solutions • ❤️ Personal attention
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Price Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${service.color} text-white text-xs font-bold rounded-full`}>
                {service.price}
              </div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transform transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transform transition-transform duration-300`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-12 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-xs">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life at an affordable price.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">₹5,000+</div>
                <div className="text-sm text-gray-500">Starting Price</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">7-14</div>
                <div className="text-sm text-gray-500">Days Delivery</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
            <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;