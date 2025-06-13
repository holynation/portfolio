import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Project Idea', href: '#project-idea' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'project-idea', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-stone-800/95 backdrop-blur-sm' : 'bg-stone-100/95 backdrop-blur-sm'
    } border-b ${darkMode ? 'border-stone-700' : 'border-stone-300'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className={`text-xl font-bold ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? darkMode
                        ? 'bg-amber-600 text-white'
                        : 'bg-amber-600 text-white'
                      : darkMode
                      ? 'text-stone-300 hover:text-white hover:bg-stone-700'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors duration-200 ${
                darkMode
                  ? 'text-stone-300 hover:text-white hover:bg-stone-700'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  darkMode
                    ? 'text-stone-300 hover:text-white hover:bg-stone-700'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
              darkMode ? 'bg-stone-800' : 'bg-stone-100'
            } border-t ${darkMode ? 'border-stone-700' : 'border-stone-300'}`}>
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? darkMode
                        ? 'bg-amber-600 text-white'
                        : 'bg-amber-600 text-white'
                      : darkMode
                      ? 'text-stone-300 hover:text-white hover:bg-stone-700'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;