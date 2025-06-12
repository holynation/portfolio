import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'john@example.com',
      href: 'mailto:john@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: darkMode ? 'hover:text-stone-300' : 'hover:text-stone-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: darkMode ? 'hover:text-amber-400' : 'hover:text-amber-700'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: darkMode ? 'hover:text-amber-400' : 'hover:text-amber-700'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-stone-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-stone-100' : 'text-stone-800'
          }`}>
            Get In <span className={`font-serif ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>Touch</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-stone-400' : 'text-stone-600'
          }`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-stone-100' : 'text-stone-800'
            }`}>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-stone-700' : 'bg-amber-100'
                  }`}>
                    <info.icon size={24} className={`${
                      darkMode ? 'text-amber-400' : 'text-amber-700'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${
                      darkMode ? 'text-stone-300' : 'text-stone-700'
                    }`}>
                      {info.label}
                    </h4>
                    {info.href === '#' ? (
                      <p className={`${
                        darkMode ? 'text-stone-100' : 'text-stone-800'
                      }`}>
                        {info.value}
                      </p>
                    ) : (
                      <a
                        href={info.href}
                        className={`transition-colors duration-200 ${
                          darkMode ? 'text-stone-100 hover:text-amber-400' : 'text-stone-800 hover:text-amber-700'
                        }`}
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className={`text-lg font-medium mb-4 ${
                darkMode ? 'text-stone-100' : 'text-stone-800'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                      darkMode 
                        ? 'bg-stone-700 text-stone-400 hover:bg-stone-600' 
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    } ${social.color} shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className={`p-8 rounded-xl ${
              darkMode 
                ? 'bg-stone-900 border border-stone-700' 
                : 'bg-stone-50 border border-stone-300'
            } shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-stone-100' : 'text-stone-800'
              }`}>
                Send Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-200 text-green-800">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-stone-300' : 'text-stone-700'
                    }`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-stone-800 border-stone-600 text-white placeholder-stone-400' 
                          : 'bg-white border-stone-400 text-stone-800 placeholder-stone-500'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-stone-300' : 'text-stone-700'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-stone-800 border-stone-600 text-white placeholder-stone-400' 
                          : 'bg-white border-stone-400 text-stone-800 placeholder-stone-500'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-stone-300' : 'text-stone-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-stone-800 border-stone-600 text-white placeholder-stone-400' 
                        : 'bg-white border-stone-400 text-stone-800 placeholder-stone-500'
                    }`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-stone-300' : 'text-stone-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none ${
                      darkMode 
                        ? 'bg-stone-800 border-stone-600 text-white placeholder-stone-400' 
                        : 'bg-white border-stone-400 text-stone-800 placeholder-stone-500'
                    }`}
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;