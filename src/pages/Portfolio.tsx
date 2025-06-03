import { ExternalLink, Github, Star, Clock, Users, Code } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Manajob',
      description: 'A comprehensive full-stack e-commerce platform designed to revolutionize the tailoring sector by providing digital tools for better business management, customer engagement, and operational efficiency.',
      longDescription: 'Manajob is a sophisticated e-commerce solution that bridges the gap between traditional tailoring businesses and modern digital commerce. Built with Ruby on Rails and enhanced with JavaScript, it features user authentication, order management, inventory tracking, and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
      technologies: ['Ruby on Rails', 'JavaScript', 'PostgreSQL', 'Heroku', 'Bootstrap'],
      githubUrl: 'https://github.com/AnasBhr1/rails-manajob',
      liveUrl: 'https://rails-manajob-c8d805ed6220.herokuapp.com/',
      category: 'fullstack',
      featured: true,
      stats: { users: '500+', uptime: '99.9%', performance: 'A+' }
    },
    {
      title: 'I Task',
      description: 'A sophisticated collaborative task management platform with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      longDescription: 'I Task transforms team productivity with intuitive task management, real-time collaboration, and powerful analytics. Built with modern web technologies, it provides seamless user experience across all devices.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
      technologies: ['Ruby on Rails', 'JavaScript', 'Tailwind CSS', 'WebSocket', 'Redis'],
      githubUrl: 'https://github.com/AnasBhr1/rails-iTask-me',
      category: 'fullstack',
      featured: false,
      stats: { tasks: '10k+', teams: '50+', efficiency: '+40%' }
    },
    {
      title: 'Blogger App',
      description: 'A modern, feature-rich blogging platform with advanced authentication, authorization, and content management capabilities.',
      longDescription: 'A full-featured blogging application that empowers writers with rich text editing, media management, SEO optimization, and comprehensive analytics. Built with React and Express.js for optimal performance.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80',
      technologies: ['React', 'Express.js', 'MongoDB', 'Node.js', 'JWT'],
      githubUrl: 'https://github.com/AnasBhr1/BloggerAppBackend',
      liveUrl: 'https://blog-app-front-red.vercel.app/',
      category: 'frontend',
      featured: true,
      stats: { posts: '1k+', views: '50k+', engagement: '+85%' }
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions and creative implementations across various technologies
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 slide-up">
          <div className="glass-card p-2 rounded-2xl">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                    filter === category.id
                      ? 'text-white bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    filter === category.id ? 'bg-white/20' : 'bg-gray-700'
                  }`}>
                    {category.count}
                  </span>
                  {filter === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-md opacity-50 -z-10"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      <Star className="h-3 w-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-cyan-600 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-xs text-gray-400">4.9</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Stats */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700/50">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-purple-400">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-700/50 text-gray-300 rounded-xl hover:bg-gray-600/50 hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-sm font-medium shadow-lg shadow-purple-500/25"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 fade-in">
          <div className="glass-card p-12 rounded-2xl hover-lift">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <a
              href="/contact"
              className="premium-button inline-flex items-center px-8 py-4 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Code className="mr-3 h-5 w-5" />
              Let's Work Together
              <ExternalLink className="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}