import Link from 'next/link';

import { BsArrowRightShort } from 'react-icons/bs';

import { ImageBlur } from '@/components/image';
import { CarouselProjects } from '@/components/carousel';
import { TagGroupTecnologies } from '@/components/tag';
import { Category, Project, Tecnology } from '@/interfaces';

interface Props {
  projects: Project[];
  categories: Category[];
}

export const ProjectsView = ({ categories, projects }: Props) => {
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
      <div className="max-w-[1200px] m-auto w-[90%]">
        <div className="py-20">
          <div data-aos="fade-down">
            <h2 className="mb-8 font-black text-center text-gray-600 uppercase text-32 dark:text-white">
              Mis <span className="text-main">proyectos</span>
            </h2>
          </div>
          {/* Project Top */}
          <div className="mb-20">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 mb-4 md:grid-cols-3">
              <Link
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
                <Link
                  href={`/projects/${project.id}`}
                  aria-label={`Ver proyecto ${project.name}`}
                  className="max-w-[100px] hover:text-primary underline text-20 flex items-center text-sm"
                >
                  Ver más
                  <BsArrowRightShort />
                </Link>
              </div>
            </div>
            <TagGroupTecnologies tecnologies={project.tecnologies as Tecnology[]} />
          </div>

          <div className="space-y-10">
            <CarouselProjects
              category={getCategoryById(2)!}
              projects={getProjectsByCategory(getCategoryById(2)!)}
              slidesPerView={3}
              reverseDirection={true}
            />
            <CarouselProjects
              category={getCategoryById(1)!}
              projects={getProjectsByCategory(getCategoryById(1)!)}
              slidesPerView={3}
            />
            <CarouselProjects
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
