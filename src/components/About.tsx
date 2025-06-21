import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Users, Heart, Lightbulb, BookOpen, Coffee } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: GraduationCap,
      title: 'Fresh Graduates',
      description: 'College undergrads with the latest knowledge in modern web technologies and trends.'
    },
    {
      icon: Heart,
      title: 'Passionate Team',
      description: 'We pour our hearts into every project because your success is our stepping stone.'
    },
    {
      icon: BookOpen,
      title: 'Always Learning',
      description: 'We stay updated with the latest technologies and best practices in web development.'
    },
    {
      icon: Coffee,
      title: 'Dedicated Workers',
      description: 'Late nights, early mornings - we work around the clock to deliver excellence.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WebWeave Studio</span>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Fresh Talent, Big Dreams 🚀
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're a team of passionate college undergraduates who started WebWeave Studio with a simple belief: 
              great websites shouldn't cost a fortune. While we may be new to the industry, we bring fresh 
              perspectives, modern skills, and an unmatched hunger to prove ourselves.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              What sets us apart? We're not just building websites - we're building our future. Every project 
              is a chance for us to learn, grow, and showcase our potential. This means you get our absolute 
              best effort at prices that won't break your budget.
            </p>
            
            {/* Why Choose Us Points */}
            <div className="space-y-4">
              {[
                { point: 'Latest Technologies', description: 'Fresh from college with cutting-edge skills' },
                { point: 'Affordable Pricing', description: 'Quality work at student-friendly rates' },
                { point: 'Personal Attention', description: 'Your project gets our full focus and care' },
                { point: 'Quick Turnaround', description: 'Eager to deliver and build our reputation' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">{item.point}:</span>
                    <span className="text-gray-600 ml-2">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className={`transform transition-all duration-700 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 150 + 600}ms` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transform transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 transform transition-all duration-700 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Promise to You</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            We may be young, but we're serious about your success. Every line of code we write, every design 
            we create, and every solution we deliver comes with our commitment to excellence and growth.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md">
            <Heart className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-gray-700 font-medium">Built with passion, delivered with pride</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;