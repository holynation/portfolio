import React from 'react';
import { Code, Cloud, Database, Settings, GitBranch, Shield } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Go', level: 80 },
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 92 },
        { name: 'Azure', level: 88 },
        { name: 'Google Cloud', level: 85 },
        { name: 'Kubernetes', level: 90 },
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'Redis', level: 85 },
        { name: 'DynamoDB', level: 82 },
      ]
    },
    {
      icon: Settings,
      title: 'DevOps Tools',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Terraform', level: 90 },
        { name: 'Jenkins', level: 88 },
        { name: 'Ansible', level: 85 },
      ]
    },
    {
      icon: GitBranch,
      title: 'Frameworks',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'Node.js', level: 92 },
        { name: 'Django', level: 88 },
        { name: 'Spring Boot', level: 85 },
      ]
    },
    {
      icon: Shield,
      title: 'Security & Monitoring',
      skills: [
        { name: 'OAuth/JWT', level: 90 },
        { name: 'Prometheus', level: 88 },
        { name: 'Grafana', level: 86 },
        { name: 'ELK Stack', level: 84 },
      ]
    },
  ];

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-stone-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-stone-100' : 'text-stone-800'
          }`}>
            Skills & <span className={`font-serif ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>Expertise</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-stone-400' : 'text-stone-600'
          }`}>
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-stone-900 border border-stone-700 hover:border-stone-600' 
                  : 'bg-stone-50 border border-stone-300 hover:border-stone-400'
              } shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center mb-6">
                <category.icon 
                  size={32} 
                  className={`mr-3 ${
                    darkMode ? 'text-amber-400' : 'text-amber-700'
                  }`} 
                />
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-stone-100' : 'text-stone-800'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${
                        darkMode ? 'text-stone-300' : 'text-stone-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        darkMode ? 'text-stone-400' : 'text-stone-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      darkMode ? 'bg-stone-700' : 'bg-stone-300'
                    }`}>
                      <div
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-flex items-center px-6 py-3 rounded-lg ${
            darkMode 
              ? 'bg-gradient-to-r from-amber-900/50 to-orange-900/50 border border-stone-700' 
              : 'bg-gradient-to-r from-amber-100 to-orange-100 border border-stone-300'
          }`}>
            <span className={`text-lg font-medium ${
              darkMode ? 'text-stone-300' : 'text-stone-700'
            }`}>
              Always learning, always growing 🚀
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;