import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'EcoCommerce Platform',
      description: 'A sustainable e-commerce platform built with React and Node.js, featuring advanced filtering, real-time inventory, and integrated payment processing.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'E-commerce',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'TaskFlow Dashboard',
      description: 'A comprehensive project management dashboard with team collaboration features, real-time updates, and advanced analytics.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'SaaS',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'FitTracker Mobile App',
      description: 'A progressive web app for fitness tracking with offline capabilities, data visualization, and social sharing features.',
      image: 'https://images.pexels.com/photos/669584/pexels-photo-669584.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'PWA', 'Firebase', 'Chart.js', 'Workbox'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'PWA',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent work and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-700 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}>
                  {project.category}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transform transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transform transition-all duration-300"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="group/btn w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to See More?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              These are just a few examples of our work. We've helped dozens of businesses create 
              amazing digital experiences. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                View Full Portfolio
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;