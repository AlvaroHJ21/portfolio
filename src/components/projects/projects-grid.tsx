import { categories, tecnologies } from '@/data';
import { ProjectsCard } from './projects-card';
import { Project } from '@/interfaces';

interface Props {
  projects: Project[];
}

import React from 'react';
import { FadeDown } from '@/components/animation/fade-down';

export const Filters = () => {
  return (
    <div className="flex justify-end gap-2 mb-4">
      {/* Category */}
      <div>
        <label htmlFor="category" className="label">
          Categoría
        </label>
        <select name="category" id="category" className="p-4 outline-none dark:bg-background-light">
          <option value={-1}>Todos</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {/* Tecnology */}
      <div>
        <label htmlFor="tecnology" className="label">
          Tecnología
        </label>
        <select
          name="tecnology"
          id="tecnology"
          className="p-4 outline-none dark:bg-background-light"
        >
          <option value={-1}>Todos</option>
          {tecnologies.map((tecnology) => (
            <option value={tecnology.id} key={tecnology.id}>
              {tecnology.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export const ProjectsGrid = ({ projects }: Props) => {
  const filteredProjects = projects;
  return (
    <section id="projects" className="texture">
      <div className="max-w-[1200px] m-auto w-[90%]">
        <FadeDown>
          <h2 className="my-10 font-black text-center uppercase text-32">
            Mis <span className="text-primary">proyectos</span>
          </h2>
        </FadeDown>

        {/* Results */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => {
            if (idx === 0) {
              return (
                <div className="sm:col-span-2 sm:row-span-2" key={project.id}>
                  <ProjectsCard project={project} large />
                </div>
              );
            }
            return (
              <div key={project.id}>
                <ProjectsCard project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
