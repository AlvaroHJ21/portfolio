'use client';

import { useMemo } from 'react';
import { tecnologies } from '@/data';

import { FadeDown } from '@/components/animation/fade-down';
import { ProjectsCard } from './projects-card';
import { FilterTecnologies } from './tecnology-filter';
import { useTecnologyFilter } from './tecnology-filter/useTecnologyFilter';
import type { Project } from '@/interfaces';

interface Props {
  projects: Project[];
}

export const ProjectsGrid = ({ projects }: Props) => {
  const { selectTecnology, selectedTecnologies, unselectTecnology, unselectAllTecnologies } =
    useTecnologyFilter();

  const filteredProjects = useMemo(() => {
    if (selectedTecnologies.length === 0) {
      return projects;
    }
    return projects.filter((project) => {
      
      const match = project.tecnologies.some((tecnology) => {
        return selectedTecnologies
          .map((tec) => tec.name.toLowerCase())
          .includes(tecnology.name.toLowerCase());
      });

      // console.log({
      //   selected: selectedTecnologies.map((tec) => tec.name.toLowerCase()),
      //   project: project.tecnologies.map((tec) => tec.name.toLowerCase()),
      //   match,
      // });

      return match;
    });
  }, [projects, selectedTecnologies]);

  return (
    <section id="projects" className="texture">
      <div className="container">
        <FadeDown>
          <h2 className="my-10 font-black text-center uppercase text-32">
            Mis <span className="text-primary">proyectos</span>
          </h2>
        </FadeDown>

        <div className="flex justify-end mb-4">
          <FilterTecnologies
            tecnologies={tecnologies}
            selectTecnology={selectTecnology}
            selectedTecnologies={selectedTecnologies}
            unselectTecnology={unselectTecnology}
            unselectAllTecnologies={unselectAllTecnologies}
          />
        </div>

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
