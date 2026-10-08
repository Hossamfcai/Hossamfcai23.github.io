import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { projectsData } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Architected with intent. Built to scale."
          subtitle="Real-world applications demonstrating state management, decoupled API layers, and strict type safety."
          badge="Verified Codebases"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
