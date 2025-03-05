import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Hi, I'm <span className="text-purple-400">Anas Bouhrim</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="text-lg text-gray-300 mb-8">
            I'm a full-stack web developer focused on creating seamless, user-centered experiences. I enjoy turning complex ideas into simple, intuitive products that add real value. With a strong mix of creativity and problem-solving, I thrive on building solutions that make an impact.
            </p>
            <p className="text-lg text-gray-300 mb-8">
            I’m always exploring new ways to improve workflows, optimize performance, and bring meaningful projects to life. Whether it's on the frontend, backend, or somewhere in between, my goal is simple: build with purpose and deliver with quality.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500 hover:text-white transition-all hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/AnasBhr1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-bouhrim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:anasbhr1@hotmail.com"
                className="text-gray-400 hover:text-purple-400 transition-all hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="hidden lg:block slide-in">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}