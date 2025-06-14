import React from 'react';

interface ProjectIdeaProps {
  darkMode: boolean;
}

const ProjectIdea: React.FC<ProjectIdeaProps> = ({ darkMode }) => {

  return (
    <section id="project-idea" className={`py-5 ${
      darkMode ? 'bg-stone-900' : 'bg-stone-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
          darkMode ? 'text-stone-100' : 'text-stone-800'
          }`}>
          CloudFlow
        </h2>
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
          darkMode ? 'text-stone-100' : 'text-stone-600'
          }`}>
          The Future of Skills Intelligence: Bridging Talent and Opportunity
        </h2>
        <p className={`text-xl max-w-3xl mx-auto ${
          darkMode ? 'text-stone-400' : 'text-stone-600'
        }`}>
          CloudFlow is a data-driven career platform that intelligently matches individual skills to real-time job market needs.
          By aligning personalized learning paths with in-demand cloud and tech roles,
          it transforms how emerging <br /> talent grows—making career development more targeted,
          transparent, and future ready.
        </p>
      </div>
    </section>
  );
};

export default ProjectIdea;