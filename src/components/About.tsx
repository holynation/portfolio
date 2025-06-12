import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Target, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Award, label: 'Certifications', value: '8' },
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-stone-900' : 'bg-stone-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-stone-100' : 'text-stone-800'
          }`}>
            About <span className={`font-serif ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>Me</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-stone-400' : 'text-stone-600'
          }`}>
            Passionate about technology and driven by the desire to create meaningful solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-stone-300' : 'text-stone-700'
            }`}>
              With over 5 years of experience in software engineering and cloud infrastructure, I specialize in building scalable, 
              reliable systems that power modern applications. My journey began with a fascination for problem-solving, 
              which has evolved into a career dedicated to crafting elegant solutions for complex challenges.
            </p>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-stone-300' : 'text-stone-700'
            }`}>
              I thrive in collaborative environments where I can leverage my expertise in cloud platforms, automation, 
              and modern development practices to deliver exceptional results. My approach combines technical excellence 
              with a deep understanding of business objectives, ensuring that every solution I create adds real value.
            </p>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-stone-300' : 'text-stone-700'
            }`}>
              When I'm not coding or architecting cloud solutions, you'll find me exploring the latest technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community through blog posts and mentoring.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-stone-800 hover:bg-stone-700 border border-stone-700' 
                    : 'bg-white hover:bg-stone-100 border border-stone-300'
                } shadow-lg hover:shadow-xl`}
              >
                <stat.icon 
                  size={40} 
                  className={`mx-auto mb-4 ${
                    darkMode ? 'text-amber-400' : 'text-amber-700'
                  }`} 
                />
                <div className={`text-3xl font-bold mb-2 ${
                  darkMode ? 'text-stone-100' : 'text-stone-800'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-stone-400' : 'text-stone-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-8 rounded-xl ${
          darkMode 
            ? 'bg-gradient-to-r from-amber-900/50 to-orange-900/50 border border-stone-700' 
            : 'bg-gradient-to-r from-amber-100 to-orange-100 border border-stone-300'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            darkMode ? 'text-stone-100' : 'text-stone-800'
          }`}>
            My Philosophy
          </h3>
          <p className={`text-lg leading-relaxed ${
            darkMode ? 'text-stone-300' : 'text-stone-700'
          }`}>
            "Great software is not just about writing code—it's about understanding problems deeply, 
            designing thoughtful solutions, and creating systems that stand the test of time. 
            I believe in the power of continuous learning, collaboration, and the relentless pursuit of excellence."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;