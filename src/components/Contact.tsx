import React, { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree (replace with your Formspree endpoint)
      const response = await fetch('https://formspree.io/f/mzzgajny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New inquiry from ${formData.name} - WebWeave Studio`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', service: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact.piyushprajapati@gmail.com',
      subtitle: 'Response within 24 hours',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 7009405072',
      subtitle: 'Available 9AM-9PM IST',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const services = [
    'Frontend Development',
    'Full-Stack Development',
    'UI/UX Design',
    'SEO Optimization',
    'Web Applications',
    'Consulting',
    'Other',
  ];

  const socialLinks = [
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-600',
    },
    { icon: Github, name: 'GitHub', url: '#', color: 'hover:text-gray-800' },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '#',
      color: 'hover:text-pink-500',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? We're excited to hear about
              your project and show you what fresh talent can achieve!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div
              className={`transform transition-all duration-700 delay-200 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-8 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transform transition-all duration-300 shadow-lg`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-700 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-500 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 border border-gray-100 group text-gray-600 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Why Choose Us?
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Fresh perspective & modern skills
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Affordable pricing for quality work
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Personal attention to every project
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Quick turnaround time
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              className={`transform transition-all duration-700 delay-400 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-8 opacity-0'
              }`}
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Start Your Project
                  </h3>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-700 font-medium">
                      🎉 Message sent successfully! We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-700 font-medium">
                      ❌ Something went wrong. Please try again or email us
                      directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your project, goals, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          className={`mt-20 transform transition-all duration-700 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Most projects take 1-3 weeks depending on complexity. We work fast because we're eager to build our portfolio!",
              },
              {
                question: 'Why are your prices so affordable?',
                answer:
                  "We're college students building our reputation. We offer competitive rates while delivering professional quality work.",
              },
              {
                question: 'Do you offer revisions?',
                answer:
                  "Absolutely! We include 2-3 rounds of revisions to ensure you're completely satisfied with the final result.",
              },
              {
                question: 'Can you work with tight budgets?',
                answer:
                  'Yes! We understand budget constraints and can work with you to find a solution that fits your needs and budget.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
