'use client';

import Link from 'next/link';

import { FaArrowRight } from 'react-icons/fa';

import { ProjectsCarousel } from './projects-carousel';
import { CustomLink, ImageBlur, TagGroupTecnologies, useCursor } from '@/components/ui';
import { Category, Project, Tecnology } from '@/interfaces';
import { FadeDown } from '@/components/animation/fade-down';

interface Props {
  projects: Project[];
  categories: Category[];
}

export const ProjectsListView = ({ categories, projects }: Props) => {
  const { setMouseConfig } = useCursor();

  const project = projects[0];

  const getCategoryById = (id: number) => {
    return categories.find((category) => category.id === id);
  };

  const getProjectsByCategory = (category: Category) => {
    return projects.filter((project) => {
      return project.categories.map((category) => category.id).includes(category.id ?? 0);
    });
  };
  return (
    <section id="projects" className="texture">
      <div className="container">
        <div className="py-20">
          <FadeDown>
            <h2 className="mb-8 font-black text-center text-gray-600 uppercase text-32 dark:text-white">
              Mis <span className="text-main">proyectos</span>
            </h2>
          </FadeDown>
          {/* Project Top */}
          <div className="mb-20">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 mb-4 md:grid-cols-3">
              <Link
                onMouseEnter={() =>
                  setMouseConfig({
                    variant: 'focus-content',
                    content: '[VER MÁS]',
                  })
                }
                onClick={() => setMouseConfig({ variant: 'default' })}
                onMouseLeave={() => setMouseConfig({ variant: 'default' })}
                href={`/projects/${project.id}`}
                aria-label={`Ver proyecto ${project.name}`}
                className="col-span-2 row-span-2 overflow-hidden rounded-lg"
              >
                <ImageBlur
                  src={project.images[0]}
                  alt={`Cover del proyecto ${project.name}`}
                  className="object-cover w-full h-full transition-transform hover:scale-110"
                  priority
                  width={800}
                  height={600}
                />
              </Link>
              <div className="col-span-2 row-span-2 md:col-span-1">
                <p className="text-gray-600 uppercase dark:text-gray-300">
                  {project.categories[0].name}
                </p>
                <h2 className="mb-4 text-3xl font-bold text-gray-600 dark:text-gray-300">
                  {project.name}
                </h2>
                <p className="mb-4">
                  {project.description?.length ?? 0 > 200
                    ? project.description?.slice(0, 200) + '...'
                    : project.description}
                </p>
                <CustomLink
                  href={`/projects/${project.id}`}
                  aria-label={`Ver proyecto ${project.name}`}
                  endIcon={<FaArrowRight size={14} />}
                >
                  Ver más
                </CustomLink>
              </div>
            </div>
            <TagGroupTecnologies tecnologies={project.tecnologies as Tecnology[]} />
          </div>

          <div className="space-y-6">
            <ProjectsCarousel
              category={getCategoryById(2)!}
              projects={getProjectsByCategory(getCategoryById(2)!)}
              slidesPerView={3}
              reverseDirection={true}
            />
            <ProjectsCarousel
              category={getCategoryById(1)!}
              projects={getProjectsByCategory(getCategoryById(1)!)}
              slidesPerView={3}
            />
            <ProjectsCarousel
              category={getCategoryById(3)!}
              projects={getProjectsByCategory(getCategoryById(3)!)}
              slidesPerView={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
