import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  GraduationCap,
  Heart,
} from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <GraduationCap className="w-8 h-8 text-blue-400 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Heart className="w-6 h-6 text-pink-400 opacity-60" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-bounce-slow">
          <Star className="w-5 h-5 text-purple-400 opacity-60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-600 text-sm font-medium mb-8 hover:scale-105 transform transition-all duration-300">
            <GraduationCap className="w-4 h-4 mr-2" />
            Fresh College Talent • Passionate Developers
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">WebWeave</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Studio
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Weaving Digital Dreams into Reality
          </p>

          {/* Fresh Student Message */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 text-green-700 text-lg font-medium mb-8 hover:scale-105 transform transition-all duration-300">
            <Heart className="w-5 h-5 mr-2 text-red-500" />
            Young • Hungry • Affordable • Dedicated
          </div>

          {/* Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            We're college undergrads with big dreams and fresh perspectives.
            What we lack in years, we make up for with passion, modern skills,
            and unbeatable prices. Let's grow together!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById('services');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              See Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '2024', label: 'Started Our Journey' },
              { number: '100%', label: 'Passion & Dedication' },
              { number: '24/7', label: 'Learning & Growing' },
              { number: '₹5K+', label: 'Starting From' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
