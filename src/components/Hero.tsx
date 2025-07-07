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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingParticle = ({ delay, size, color }: { delay: number; size: string; color: string }) => (
    <div
      className={`absolute ${size} ${color} rounded-full opacity-60 animate-particle-float`}
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing blobs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-morph"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 animate-morph"></div>
        <div className="absolute -bottom-8 left-20 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 animate-morph"></div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            size={`w-${Math.floor(Math.random() * 3) + 1} h-${Math.floor(Math.random() * 3) + 1}`}
            color={['bg-blue-400', 'bg-purple-400', 'bg-pink-400'][Math.floor(Math.random() * 3)]}
          />
        ))}

        {/* Floating Icons with enhanced animations */}
        <div className="absolute top-1/4 left-1/4 animate-float hover-expand cursor-pointer">
          <GraduationCap className="w-8 h-8 text-blue-400 opacity-60 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed hover-expand cursor-pointer">
          <Heart className="w-6 h-6 text-pink-400 opacity-60 hover:opacity-100 transition-opacity duration-300 animate-wave" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-bounce-slow hover-expand cursor-pointer">
          <Star className="w-5 h-5 text-purple-400 opacity-60 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute top-1/2 left-1/6 animate-float hover-expand cursor-pointer">
          <Code className="w-7 h-7 text-green-400 opacity-60 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-1/4 right-1/6 animate-particle-float hover-expand cursor-pointer">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-60 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute top-3/4 left-1/3 animate-bounce-slow hover-expand cursor-pointer">
          <Zap className="w-5 h-5 text-orange-400 opacity-60 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Interactive cursor follower */}
        <div
          className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Main Heading with enhanced animations */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block animate-slide-in-left">WebWeave</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x animate-slide-in-right animation-delay-300">
              Studio
            </span>
          </h1>

          {/* Animated Tagline */}
          <div className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed h-8">
            <span className="animate-typing">{typedText}</span>
          </div>

          {/* Fresh Student Message with enhanced styling */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 text-green-700 text-lg font-medium mb-8 hover-lift animate-scale-in animation-delay-500 cursor-pointer group">
            <Heart className="w-5 h-5 mr-2 text-red-500 animate-wave group-hover:scale-125 transition-transform duration-300" />
            <span className="animate-text-shimmer">Young • Hungry • Affordable • Dedicated</span>
          </div>

          {/* Description with staggered animation */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-700">
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
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover-lift transform transition-all duration-300 flex items-center magnetic-button animate-pulse-glow relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </button>
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg hover-lift transform transition-all duration-300 hover-glow"
            >
              See Our Services
            </button>
          </div>

          {/* Enhanced Stats with animations */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '2024', label: 'Started Our Journey', icon: '🚀' },
              { number: '100%', label: 'Passion & Dedication', icon: '❤️' },
              { number: '24/7', label: 'Learning & Growing', icon: '📚' },
              { number: '₹5K+', label: 'Starting From', icon: '💰' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 hover-lift cursor-pointer group ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 1200}ms` }}
              >
                <div className="text-4xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm mt-1 group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Floating achievement badges */}
          <div className="absolute top-20 right-10 animate-float hidden lg:block">
            <div className="bg-white rounded-full p-4 shadow-lg hover-lift cursor-pointer group">
              <div className="text-center">
                <div className="text-2xl group-hover:animate-bounce">🎓</div>
                <div className="text-xs text-gray-600 mt-1">Fresh Talent</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-32 left-10 animate-float-delayed hidden lg:block">
            <div className="bg-white rounded-full p-4 shadow-lg hover-lift cursor-pointer group">
              <div className="text-center">
                <div className="text-2xl group-hover:animate-bounce">⚡</div>
                <div className="text-xs text-gray-600 mt-1">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover-expand">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-blue-500 transition-colors duration-300">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2 animate-pulse"></div>
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center">Scroll</div>
      </div>
    </section>
  );
};

export default Hero;