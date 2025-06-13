import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative ${
      darkMode ? 'bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900' : 'bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className={`w-32 h-32 rounded-full mx-auto mb-8 ${
              darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-amber-700 to-orange-700'
            } flex items-center justify-center text-white text-4xl font-bold shadow-2xl`}>
              <img src="/images/profile.jpg" alt="OA Image" className="rounded-full w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-stone-100' : 'text-stone-800'
          }`}>
            <span className="font-serif">Oluwaseun</span>{' '}
            <span className={`${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>Alatise</span>
          </h1>
          
          <p className={`inline-block px-3 py-1 mb-4 rounded-full text-sm font-medium ${
              darkMode ? 'bg-amber-700 text-stone-100' : 'bg-amber-600 text-white'
            }`}>
            Software Engineer & Cloud DevOps Specialist
          </p>
          
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto ${
            darkMode ? 'text-stone-400' : 'text-stone-600'
          }`}>
            Crafting scalable solutions and building robust cloud infrastructure. 
            Passionate about automation, innovation, and delivering exceptional user experiences.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/holynation/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode 
                  ? 'bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white' 
                  : 'bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 shadow-lg hover:shadow-xl'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/oluwaseun-alatise-008366139"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode 
                  ? 'bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white' 
                  : 'bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 shadow-lg hover:shadow-xl'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:oluwaseunalatise667@gmail.com"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode 
                  ? 'bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white' 
                  : 'bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 shadow-lg hover:shadow-xl'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </button>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? 'border-2 border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white'
                  : 'border-2 border-stone-400 text-stone-700 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className={`p-2 rounded-full ${
            darkMode ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-900'
          } transition-colors duration-300`}
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;