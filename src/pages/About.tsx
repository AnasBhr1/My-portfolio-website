import { Code2, Brain, Rocket, Users, Award, Target, Zap, Heart } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Ruby', level: 90, color: 'from-red-500 to-red-600' },
    { name: 'React.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'SQL', level: 88, color: 'from-purple-500 to-violet-500' },
    { name: 'Figma', level: 75, color: 'from-pink-500 to-rose-500' },
    { name: 'Heroku', level: 82, color: 'from-indigo-500 to-purple-500' },
    { name: 'Git', level: 92, color: 'from-gray-500 to-gray-600' },
  ];

  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and scalable code that stands the test of time',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Finding elegant solutions to complex challenges through creative thinking',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Staying current with latest technologies and pushing boundaries',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in team environments and fostering growth',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality work that exceeds expectations',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on achieving objectives with precision and dedication',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed, efficiency, and exceptional user experiences',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely passionate about technology and creating meaningful impact',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side - Story */}
          <div className="fade-in space-y-8">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                My Journey
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm a <span className="text-purple-400 font-semibold">full-stack web developer</span> with a background in management, 
                  dedicated to crafting user-centric web applications that transform complex challenges into intuitive solutions.
                </p>
                <p>
                  My passion lies in merging <span className="text-cyan-400 font-semibold">creativity with problem-solving</span> to deliver 
                  impactful digital experiences. Beyond coding, I enjoy analyzing workflows, brainstorming innovative features, 
                  and engaging in competitive games of padel.
                </p>
                <p>
                  All of these activities fuel my drive to build <span className="text-emerald-400 font-semibold">purposeful and high-quality products</span> 
                  that make a real difference in people's lives.
                </p>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                "Great code is not just about making things work—it's about making them work beautifully, 
                efficiently, and sustainably. Every line of code is an opportunity to create something extraordinary."
              </p>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="slide-in space-y-8">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                Skills & Expertise
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values & Principles Grid */}
        <div className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Values & Principles</span>
            </h2>
            <p className="text-xl text-gray-400">The core principles that guide my work and decisions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="glass-card p-6 rounded-xl hover-lift group cursor-pointer slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="glass-card p-8 rounded-2xl hover-lift fade-in">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="gradient-text">Fun Facts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-400">Cups of Coffee</div>
              <div className="text-sm text-gray-500 mt-1">Fueling late-night coding sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-gray-400">Git Commits</div>
              <div className="text-sm text-gray-500 mt-1">Building and improving constantly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-gray-400">Learning Mindset</div>
              <div className="text-sm text-gray-500 mt-1">Always growing and evolving</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}