import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../lib/data';

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 px-6 md:px-12 relative z-20 bg-[#F5F5F0] tech-grid-light">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-brand-black/10 pb-8">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-brand-black">Projetos Selecionados</h2>
          <span className="text-sm text-brand-black/40 font-mono mt-4 md:mt-0">2021 — 2024</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group cursor-default flex flex-col ${project.className}`}
            >

              {/* Image Container - Clean without mask */}
              <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-sm shadow-sm bg-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width="800"
                  height="450"
                  className="project-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-start gap-4">
                <div>
                  <h3 className="font-serif text-4xl md:text-5xl tracking-tight mb-2 bg-gradient-to-r from-brand-green to-[#6eeeb3] bg-clip-text text-transparent font-medium">
                    {project.title}
                  </h3>
                  <p className="text-base text-brand-black/60 font-light tracking-wide">{project.category}</p>
                </div>

                <div className="group/btn flex items-center gap-2 px-6 py-3 rounded-full border border-brand-green/30 text-brand-green font-medium text-sm transition-all duration-300 hover:bg-brand-green hover:text-white hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/20 cursor-pointer">
                  Ver projeto
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;