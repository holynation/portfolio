import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-stone-900 border-t border-stone-800' : 'bg-stone-50 border-t border-stone-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className={`text-2xl font-bold mb-4 ${
            darkMode ? 'text-stone-100' : 'text-stone-800'
          }`}>
            John <span className={darkMode ? 'text-amber-400' : 'text-amber-700'}>Doe</span>
          </div>
          
          <p className={`mb-6 ${
            darkMode ? 'text-stone-400' : 'text-stone-600'
          }`}>
            Software Engineer & Cloud DevOps Specialist
          </p>

          <div className="flex items-center justify-center mb-6">
            <span className={`text-sm ${
              darkMode ? 'text-stone-400' : 'text-stone-600'
            }`}>
              Made with
            </span>
            <Heart 
              size={16} 
              className={`mx-2 ${
                darkMode ? 'text-red-400' : 'text-red-500'
              }`} 
              fill="currentColor"
            />
            <span className={`text-sm ${
              darkMode ? 'text-stone-400' : 'text-stone-600'
            }`}>
              and lots of coffee
            </span>
          </div>

          <div className={`text-sm ${
            darkMode ? 'text-stone-500' : 'text-stone-500'
          }`}>
            © {currentYear} John Doe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;