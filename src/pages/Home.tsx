import { Github, Linkedin, Mail, ArrowRight, Sparkles, Code2, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [particles, setParticles] = useState<Array<{ id: number; size: number; delay: number; left: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 20,
      left: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-800 flex items-center relative overflow-hidden">
      {/* Animated Particles Background */}
      <div className="particle-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300 font-medium">Available for new projects</span>
            </div>

            {/* Main Heading with Gradient Text */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text typing-animation">Anas Bouhrim</span>
                <br />
                <span className="text-3xl sm:text-5xl text-gray-300">Full Stack Developer</span>
              </h1>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a <span className="text-purple-400 font-semibold">full-stack web developer</span> focused on creating 
                <span className="text-cyan-400 font-semibold"> seamless, user-centered experiences</span>. 
                I enjoy turning complex ideas into simple, intuitive products that add real value.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                With a strong mix of creativity and problem-solving, I thrive on building solutions that make an impact. 
                Whether it's frontend magic or backend wizardry, my goal is simple: 
                <span className="text-emerald-400 font-semibold"> build with purpose and deliver with quality</span>.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-wrap gap-6">
              <Link
                to="/portfolio"
                className="premium-button inline-flex items-center px-8 py-4 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <Code2 className="mr-3 h-5 w-5" />
                View My Work
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <Mail className="mr-3 h-5 w-5" />
                Get in Touch
              </Link>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-6 pt-8">
              <a
                href="https://github.com/AnasBhr1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/anas-bouhrim/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </div>
              </a>
              <a
                href="mailto:anasbhr1@hotmail.com"
                className="group relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </div>
              </a>
            </div>
          </div>

          {/* Enhanced Right Side with 3D Card Effect */}
          <div className="hidden lg:block slide-in">
            <div className="relative">
              {/* Floating Code Editor Mockup */}
              <div className="glass-card p-8 rounded-2xl shadow-2xl hover-lift float">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-700 rounded ml-4 px-3 py-1 text-xs text-gray-400">
                    portfolio.tsx
                  </div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-purple-400">const <span className="text-white">developer</span> = {'{'}</div>
                  <div className="ml-4 text-cyan-400">name: <span className="text-green-400">'Anas Bouhrim'</span>,</div>
                  <div className="ml-4 text-cyan-400">skills: <span className="text-yellow-400">['React', 'Node.js', 'Ruby']</span>,</div>
                  <div className="ml-4 text-cyan-400">passion: <span className="text-green-400">'Building Amazing Things'</span>,</div>
                  <div className="ml-4 text-cyan-400">coffee: <span className="text-red-400">true</span></div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl -z-10"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl opacity-20 rotate-12 float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-full opacity-30 float" style={{ animationDelay: '2s' }}></div>
              
              {/* Tech Icons */}
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2">
                <div className="glass-card p-3 rounded-xl float" style={{ animationDelay: '0.5s' }}>
                  <Rocket className="h-8 w-8 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}