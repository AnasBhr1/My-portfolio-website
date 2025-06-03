import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Reset form or show success message
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'anasbhr1@hotmail.com',
      description: 'Send me an email anytime',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+212 655141631',
      description: 'Call me during business hours',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Casablanca, Morocco',
      description: 'Available for remote work worldwide',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'Quick response guaranteed',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'E-commerce',
    'API Development',
    'Database Design',
    'UI/UX Design',
    'Consulting',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into reality? I'm here to help bring your vision to life with cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <MessageCircle className="h-8 w-8 text-purple-400 mr-3" />
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                Let's create something amazing together!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="glass-card p-6 rounded-xl hover-lift group slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          {info.title}
                        </h3>
                        <p className="text-purple-300 font-medium">{info.value}</p>
                        <p className="text-gray-400 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability Status */}
            <div className="glass-card p-6 rounded-xl slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for new projects</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently accepting new clients and exciting opportunities. Let's discuss your project!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 slide-in">
            <div className="glass-card p-8 lg:p-12 rounded-2xl hover-lift">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Budget Range (Optional)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['< $5k', '$5k - $10k', '$10k - $25k', '$25k+'].map((range) => (
                      <label key={range} className="relative">
                        <input
                          type="radio"
                          name="budget"
                          value={range}
                          className="sr-only peer"
                        />
                        <div className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-center text-sm text-gray-400 cursor-pointer peer-checked:border-purple-500 peer-checked:bg-purple-500/20 peer-checked:text-purple-300 hover:border-gray-600 transition-all duration-300">
                          {range}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Project Timeline (Optional)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {['ASAP', '1-3 months', '3+ months'].map((timeline) => (
                      <label key={timeline} className="relative">
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline}
                          className="sr-only peer"
                        />
                        <div className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-center text-sm text-gray-400 cursor-pointer peer-checked:border-cyan-500 peer-checked:bg-cyan-500/20 peer-checked:text-cyan-300 hover:border-gray-600 transition-all duration-300">
                          {timeline}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full premium-button flex justify-center items-center px-8 py-4 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-3 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-purple-400" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-cyan-400" />
                    <span>Available worldwide</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-emerald-400" />
                    <span>Free consultation call</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-orange-400" />
                    <span>Multiple communication channels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-400">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most web applications take 4-12 weeks from concept to deployment. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones. I use modern communication tools to ensure seamless collaboration regardless of location."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in modern web technologies including React, Node.js, Ruby on Rails, Python, and various databases. I choose the best tech stack based on your project requirements."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! I offer various support packages including bug fixes, feature updates, performance optimization, and technical maintenance to keep your application running smoothly."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-bold text-white mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 fade-in">
          <div className="glass-card p-12 rounded-2xl hover-lift">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let your great ideas remain just ideas. Let's transform them into powerful digital solutions that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:anasbhr1@hotmail.com"
                className="premium-button inline-flex items-center px-8 py-4 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-3 h-5 w-5" />
                Email Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/anas-bouhrim/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}