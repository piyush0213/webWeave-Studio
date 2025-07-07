import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Star,
  GraduationCap,
  Heart,
  Code,
  Sparkles,
  Zap,
} from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Weaving Digital Dreams into Reality';

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const FloatingParticle = ({ delay, size, color }: { delay: number; size: string; color: string }) => (
    <div
      className={`absolute ${size} ${color} rounded-full opacity-40 animate-particle-float`}
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 sm:pt-16"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Smooth morphing blobs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
        <div className="absolute top-40 right-10 w-56 h-56 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000 animate-morph"></div>

        {/* Smooth floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.3}
            size={`w-${Math.floor(Math.random() * 2) + 2} h-${Math.floor(Math.random() * 2) + 2}`}
            color={['bg-blue-300', 'bg-purple-300', 'bg-pink-300', 'bg-cyan-300'][Math.floor(Math.random() * 4)]}
          />
        ))}

        {/* Enhanced Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float hover-expand cursor-pointer group">
          <div className="relative">
            <GraduationCap className="w-10 h-10 text-blue-500 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />
            <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-1/4 animate-float-delayed hover-expand cursor-pointer group">
          <div className="relative">
            <Heart className="w-8 h-8 text-pink-500 opacity-70 group-hover:opacity-100 transition-all duration-500 animate-wave group-hover:scale-125" />
            <div className="absolute inset-0 bg-pink-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/3 animate-bounce-slow hover-expand cursor-pointer group">
          <div className="relative">
            <Star className="w-7 h-7 text-purple-500 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />
            <div className="absolute inset-0 bg-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/6 animate-float hover-expand cursor-pointer group">
          <div className="relative">
            <Code className="w-9 h-9 text-green-500 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />
            <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/6 animate-particle-float hover-expand cursor-pointer group">
          <div className="relative">
            <Sparkles className="w-8 h-8 text-yellow-500 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />
            <div className="absolute inset-0 bg-yellow-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="absolute top-3/4 left-1/3 animate-bounce-slow hover-expand cursor-pointer group">
          <div className="relative">
            <Zap className="w-7 h-7 text-orange-500 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />
            <div className="absolute inset-0 bg-orange-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Enhanced Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block animate-slide-in-left hover:animate-text-shimmer transition-all duration-500">WebWeave</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x animate-slide-in-right animation-delay-300 hover:scale-105 transition-transform duration-500 cursor-pointer">
              Studio
            </span>
          </h1>

          {/* Smooth Animated Tagline */}
          <div className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed min-h-[2rem] flex items-center justify-center">
            <span className="animate-typing border-r-2 border-blue-500 pr-1">{typedText}</span>
          </div>

          {/* Enhanced Fresh Student Message */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 border-2 border-transparent bg-clip-padding text-green-700 text-lg font-medium mb-8 hover-lift animate-scale-in animation-delay-500 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            <Heart className="w-6 h-6 mr-3 text-red-500 animate-wave group-hover:scale-125 transition-transform duration-300 relative z-10" />
            <span className="animate-text-shimmer relative z-10 group-hover:text-blue-700 transition-colors duration-300">Young • Hungry • Affordable • Dedicated</span>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-700 hover:text-gray-600 transition-colors duration-300 leading-relaxed">
            We're college undergrads with big dreams and fresh perspectives.
            What we lack in years, we make up for with passion, modern skills,
            and unbeatable prices. Let's grow together!
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-1000">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover-lift transform transition-all duration-500 flex items-center magnetic-button animate-pulse-glow relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-white text-gray-700 px-10 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl hover-lift transform transition-all duration-500 hover-glow relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">See Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Enhanced Stats with smooth animations */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '2024', label: 'Started Our Journey', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
              { number: '100%', label: 'Passion & Dedication', icon: '❤️', color: 'from-red-500 to-pink-500' },
              { number: '24/7', label: 'Learning & Growing', icon: '📚', color: 'from-green-500 to-teal-500' },
              { number: '₹5K+', label: 'Starting From', icon: '💰', color: 'from-yellow-500 to-orange-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 hover-lift cursor-pointer group bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 1200}ms` }}
              >
                <div className="text-5xl mb-3 group-hover:animate-bounce transition-transform duration-300">{stat.icon}</div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm mt-2 group-hover:text-gray-700 transition-colors duration-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Floating achievement badges */}
          <div className="absolute top-20 right-10 animate-float hidden lg:block">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift cursor-pointer group border border-white/20">
              <div className="text-center">
                <div className="text-3xl group-hover:animate-bounce mb-2">🎓</div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-blue-600 transition-colors duration-300">Fresh Talent</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-32 left-10 animate-float-delayed hidden lg:block">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift cursor-pointer group border border-white/20">
              <div className="text-center">
                <div className="text-3xl group-hover:animate-bounce mb-2">⚡</div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-purple-600 transition-colors duration-300">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover-expand group">
        <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center hover:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:bg-white/80">
          <div className="w-1.5 h-4 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2 animate-pulse group-hover:animate-bounce"></div>
        </div>
        <div className="text-xs text-gray-400 mt-3 text-center font-medium group-hover:text-blue-500 transition-colors duration-300">Scroll Down</div>
      </div>
    </section>
  );
};

export default Hero;