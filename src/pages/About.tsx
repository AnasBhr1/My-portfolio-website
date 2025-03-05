import { Code2, Brain, Rocket, Users } from 'lucide-react';

export default function About() {
  const skills = [
    'Ruby',
    'React.js',
    'Node.js',
    'Python',
    'SQL',
    'Figma',
    'Heroku',
    'Git',
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in">
            <h1 className="text-3xl font-bold text-white mb-6">About Me</h1>
            <p className="text-lg text-gray-300 mb-6">
            I'm a full-stack web developer with a background in management, dedicated to crafting user-centric web applications that transform complex challenges into intuitive solutions. My passion lies in merging creativity with problem-solving to deliver impactful digital experiences. Beyond coding, I enjoy analyzing workflows, brainstorming innovative features, and engaging in competitive games of padel, all of which fuel my drive to build purposeful and high-quality products.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-gray-800 rounded-lg transition-transform hover:scale-105">
                <Code2 className="h-8 w-8 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Clean Code</h3>
                <p className="text-gray-300">Writing maintainable, efficient code</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg transition-transform hover:scale-105">
                <Brain className="h-8 w-8 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Problem Solving</h3>
                <p className="text-gray-300">Finding elegant solutions to complex challenges</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg transition-transform hover:scale-105">
                <Rocket className="h-8 w-8 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Innovation</h3>
                <p className="text-gray-300">Staying current with latest technologies</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg transition-transform hover:scale-105">
                <Users className="h-8 w-8 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Collaboration</h3>
                <p className="text-gray-300">Working effectively in team environments</p>
              </div>
            </div>
          </div>
          <div className="slide-in">
            <h2 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 font-medium text-center transition-transform hover:scale-105 hover:bg-gray-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}