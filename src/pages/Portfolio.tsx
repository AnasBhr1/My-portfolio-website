import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Manajob',
      description: 'A full-stack e-commerce to help the tailoring sector to have a digital platform to better manage their business', 
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
      technologies: ['Ruby', 'Javascript', 'PostgreSQL', ],
      githubUrl: 'https://github.com/AnasBhr1/rails-manajob',
      liveUrl: 'https://rails-manajob-c8d805ed6220.herokuapp.com/',
    },
    {
      title: 'I Task',
      description: 'A collaborative task management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
      technologies: ['Ruby on Rails', 'Javascript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/AnasBhr1/rails-iTask-me',
    },
    {
      title: 'Blogger App',
      description: 'A Blogger App with authentication and authorization',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80',
      technologies: ['React', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/AnasBhr1/BloggerAppBackend',
      liveUrl: 'https://blog-app-front-red.vercel.app/',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8 fade-in">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}