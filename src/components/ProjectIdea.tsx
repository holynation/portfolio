import React from 'react';

interface ProjectIdeaProps {
  darkMode: boolean;
}

const ProjectIdea: React.FC<ProjectIdeaProps> = ({ darkMode }) => {

    const content = {
        title: "The Future of Skills Intelligence: Bridging Talent and Opportunity",
        pitch: "This project reimagines how emerging talent navigates careers by building a data-driven platform that maps individual skills to real-time job market needs. By aligning learning pathways with employer demand—especially in cloud and tech roles—it reduces underemployment and makes career growth more accessible, transparent, and personalized."
    }
  return (
    <section id="project-idea" className={`py-20 ${
      darkMode ? 'bg-stone-900' : 'bg-stone-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
          darkMode ? 'text-stone-100' : 'text-stone-800'
        }`}>
          {content.title}
        </h2>
        <p className={`text-xl max-w-3xl mx-auto ${
          darkMode ? 'text-stone-400' : 'text-stone-600'
        }`}>
          {content.pitch}
        </p>
      </div>
    </section>
  );
};

export default ProjectIdea;