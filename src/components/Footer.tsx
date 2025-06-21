import React from 'react';
import {
  Code2,
  Mail,
  Phone,
  ArrowUp,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Services: [
      'Frontend Development',
      'Full-Stack Development',
      'UI/UX Design',
      'SEO Optimization',
      'Web Applications',
    ],
    Company: ['About Us', 'Our Story', 'Why Choose Us', 'Contact', 'FAQ'],
    Resources: [
      'Portfolio',
      'Blog',
      'Privacy Policy',
      'Terms of Service',
      'Support',
    ],
  };

  const socialLinks = [
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:bg-blue-400' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:bg-blue-600' },
    { icon: Github, name: 'GitHub', url: '#', color: 'hover:bg-gray-700' },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '#',
      color: 'hover:bg-pink-500',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Code2 className="h-8 w-8 text-blue-400" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur opacity-20"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  WebWeave Studio
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Young, passionate college students weaving digital dreams into
                reality. Fresh talent, modern skills, affordable prices.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-sm">
                    contact.piyushprajapati@gmail.com
                  </span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-sm">+91 7009405072</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-6 text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-300">
                  Get updates on our latest projects and web development tips
                  from fresh college minds!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 WebWeave Studio. Made with ❤️ by college students in
                India.
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group text-gray-400 hover:text-white ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
