import React, { useState } from 'react';
import { ExternalLink, Github, X, Calendar, Users, Code } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  date: string;
  team: string;
  features: string[];
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Cloud Infrastructure Automation',
      description: 'Automated AWS infrastructure deployment using Terraform and CI/CD pipelines.',
      longDescription: 'A comprehensive cloud infrastructure automation solution that streamlines the deployment and management of AWS resources. This project implements Infrastructure as Code (IaC) principles using Terraform, with automated CI/CD pipelines for seamless deployments.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'Python'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'DevOps',
      date: '2024',
      team: 'Solo Project',
      features: [
        'Automated infrastructure provisioning',
        'Multi-environment support',
        'Cost optimization monitoring',
        'Security compliance automation',
        'Disaster recovery implementation'
      ]
    },
    {
      id: 2,
      title: 'Microservices E-commerce Platform',
      description: 'Scalable e-commerce platform built with microservices architecture and containerized deployment.',
      longDescription: 'A modern e-commerce platform designed with microservices architecture, featuring independent services for user management, product catalog, order processing, and payment handling. Built for scalability and high availability.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'Kubernetes'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Full Stack',
      date: '2023',
      team: '4 Developers',
      features: [
        'Microservices architecture',
        'Real-time inventory management',
        'Payment gateway integration',
        'Advanced search and filtering',
        'Admin dashboard with analytics'
      ]
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights and predictive analytics.',
      longDescription: 'An intelligent analytics dashboard that leverages machine learning algorithms to provide real-time insights and predictive analytics. Features automated report generation and anomaly detection.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'React', 'TensorFlow', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Data Science',
      date: '2023',
      team: '3 Developers',
      features: [
        'Real-time data visualization',
        'Machine learning predictions',
        'Automated anomaly detection',
        'Custom dashboard builder',
        'Export and scheduling features'
      ]
    },
    {
      id: 4,
      title: 'DevOps Monitoring Suite',
      description: 'Comprehensive monitoring and alerting system for containerized applications.',
      longDescription: 'A complete monitoring solution designed for containerized environments, providing comprehensive observability through metrics, logs, and traces. Includes intelligent alerting and automated incident response.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Prometheus', 'Grafana', 'Kubernetes', 'Go', 'ELK Stack'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'DevOps',
      date: '2024',
      team: '2 Developers',
      features: [
        'Multi-cluster monitoring',
        'Custom alerting rules',
        'Automated incident response',
        'Performance optimization insights',
        'Compliance reporting'
      ]
    },
    {
      id: 5,
      title: 'Serverless Task Management API',
      description: 'High-performance task management API built with serverless architecture on AWS.',
      longDescription: 'A robust task management API leveraging AWS serverless services for maximum scalability and cost efficiency. Features real-time notifications and advanced task scheduling capabilities.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'TypeScript', 'CDK'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Backend',
      date: '2023',
      team: 'Solo Project',
      features: [
        'Serverless architecture',
        'Real-time notifications',
        'Advanced task scheduling',
        'Team collaboration features',
        'Mobile-responsive design'
      ]
    },
    {
      id: 6,
      title: 'React Component Library',
      description: 'Comprehensive design system and component library for modern React applications.',
      longDescription: 'A well-documented, accessible React component library that implements a complete design system. Features TypeScript support, comprehensive testing, and Storybook documentation.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Frontend',
      date: '2024',
      team: 'Solo Project',
      features: [
        'Comprehensive component library',
        'TypeScript support',
        'Accessibility compliance',
        'Storybook documentation',
        'Automated testing suite'
      ]
    }
  ];

  const categories = ['All', 'DevOps', 'Full Stack', 'Frontend', 'Backend', 'Data Science'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="projects" className={`py-20 ${
        darkMode ? 'bg-stone-900' : 'bg-stone-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-stone-100' : 'text-stone-800'
            }`}>
              Featured <span className={`font-serif ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>Projects</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto mb-8 ${
              darkMode ? 'text-stone-400' : 'text-stone-600'
            }`}>
              A showcase of my recent work, demonstrating expertise across different technologies and domains.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-amber-600 text-white shadow-lg'
                      : darkMode
                      ? 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
                      : 'bg-stone-200 text-stone-700 hover:bg-stone-300 hover:text-stone-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  darkMode 
                    ? 'bg-stone-800 border border-stone-700 hover:border-stone-600' 
                    : 'bg-white border border-stone-300 hover:border-stone-400'
                } shadow-lg hover:shadow-xl`}
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-amber-600 text-white' : 'bg-amber-200 text-amber-800'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-stone-100' : 'text-stone-800'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${
                    darkMode ? 'text-stone-400' : 'text-stone-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded text-xs ${
                          darkMode ? 'bg-stone-700 text-stone-300' : 'bg-stone-200 text-stone-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-2 py-1 rounded text-xs ${
                        darkMode ? 'bg-stone-700 text-stone-300' : 'bg-stone-200 text-stone-700'
                      }`}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                        darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-700 hover:text-amber-800'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                        darkMode ? 'text-stone-400 hover:text-stone-300' : 'text-stone-600 hover:text-stone-700'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
            darkMode ? 'bg-stone-900' : 'bg-white'
          }`}>
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h3 className={`text-3xl font-bold ${
                  darkMode ? 'text-stone-100' : 'text-stone-800'
                }`}>
                  {selectedProject.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-amber-600 text-white' : 'bg-amber-200 text-amber-800'
                }`}>
                  {selectedProject.category}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar size={20} className={`mr-2 ${
                    darkMode ? 'text-stone-400' : 'text-stone-600'
                  }`} />
                  <span className={`${
                    darkMode ? 'text-stone-300' : 'text-stone-700'
                  }`}>
                    {selectedProject.date}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className={`mr-2 ${
                    darkMode ? 'text-stone-400' : 'text-stone-600'
                  }`} />
                  <span className={`${
                    darkMode ? 'text-stone-300' : 'text-stone-700'
                  }`}>
                    {selectedProject.team}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center font-medium transition-colors duration-200 ${
                      darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-700 hover:text-amber-800'
                    }`}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center font-medium transition-colors duration-200 ${
                      darkMode ? 'text-stone-400 hover:text-stone-300' : 'text-stone-600 hover:text-stone-700'
                    }`}
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>

              <p className={`text-lg mb-6 ${
                darkMode ? 'text-stone-300' : 'text-stone-700'
              }`}>
                {selectedProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className={`text-xl font-bold mb-3 flex items-center ${
                  darkMode ? 'text-stone-100' : 'text-stone-800'
                }`}>
                  <Code size={20} className="mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className={`flex items-start ${
                      darkMode ? 'text-stone-300' : 'text-stone-700'
                    }`}>
                      <span className={`mr-2 mt-1 ${
                        darkMode ? 'text-amber-400' : 'text-amber-700'
                      }`}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-stone-100' : 'text-stone-800'
                }`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded ${
                        darkMode ? 'bg-stone-800 text-stone-300' : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;