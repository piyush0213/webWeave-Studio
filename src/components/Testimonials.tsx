import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      content: 'WebWeave Studio transformed our outdated website into a modern, high-performing platform. The team\'s attention to detail and technical expertise exceeded our expectations. Our conversion rate increased by 150% within the first month!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, EcoLiving',
      company: 'EcoLiving',
      content: 'Working with WebWeave Studio was an absolute pleasure. They understood our vision perfectly and delivered a beautiful, sustainable e-commerce platform that reflects our brand values. The performance optimizations they implemented are incredible.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700 border border-gray-100 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-gray-400" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-5 h-5 text-yellow-400 fill-current transform hover:scale-125 transition-transform duration-300`}
                    style={{ animationDelay: `${index * 300 + starIndex * 100}ms` }}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg group-hover:scale-110 transform transition-all duration-300"
                  />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className={`text-sm font-medium bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 text-center shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Amazing Companies</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: '150+', label: 'Happy Clients' },
                { metric: '98%', label: 'Client Satisfaction' },
                { metric: '200+', label: 'Projects Delivered' },
                { metric: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 800}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-lg text-gray-600 mb-8">
                Join the growing list of satisfied clients who have transformed their digital presence with us.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                Become Our Next Success Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;