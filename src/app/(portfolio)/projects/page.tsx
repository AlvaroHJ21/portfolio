import prisma from '@/lib/prisma';

// import axios from 'axios';
import { CarouselProjects } from '../../../components/carousel-projects';
import Link from 'next/link';
import { TagGroupTecnologies } from '@/components/tag-group-tecnologies';
import { Project, Tecnology, Category } from '@/interfaces';

export default async function ProjectsPage() {
  const categories = (await prisma.category.findMany()) as Category[];

  const projects = (await prisma.project.findMany({
    where: {
      published: true,
    },
    include: {
      categories: true,
      tecnologies: true,
    },
    orderBy: {
      priority: 'desc',
    },
  })) as Project[];

  // try {
  //   const resp = await fetch('http://localhost:3000/api/projects', {
  //     cache: 'no-store',
  //   });
  //   const data = await resp.json();

  //   console.log(data);
  // } catch (error) {
  //   console.log('error', error);
  // }

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
    <section id="proyects" className="bg-gray-50 dark:bg-background-light">
      <div className="max-w-[1200px] m-auto w-[90%]">
        <div className="py-20">
          <div className="">
            <div data-aos="fade-down">
              <h2 className="mb-8 font-black text-center text-gray-600 uppercase text-32 dark:text-white">
                Mis <span className="text-main">proyectos</span>
              </h2>
            </div>
            {/* Project Top */}
            <div data-aos="fade-up">
              <div className="mb-10">
                <p className="text-gray-600 uppercase dark:text-gray-300">
                  {project.categories[0].name}
                </p>
                <h2 className="mb-4 text-3xl font-bold text-gray-600 dark:text-gray-300">
                  {project.name}
                </h2>
                <Link
                  href={`/projects/${project.id}`}
                  className="grid grid-cols-2 grid-rows-2 gap-4 mb-4 md:grid-cols-3"
                >
                  <picture className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                    <img
                      src={project.images[0]}
                      className="object-cover w-full h-full transition-transform hover:scale-110"
                      alt=""
                    />
                  </picture>
                  <picture className="col-span-1 overflow-hidden rounded-lg">
                    <img
                      src={project.images.length > 1 ? project.images[1] : project.images[0]}
                      className="object-cover w-full h-full transition-transform hover:scale-110"
                      alt=""
                    />
                  </picture>
                  <picture className="col-span-1 overflow-hidden rounded-lg">
                    <img
                      src={project.images.length > 2 ? project.images[2] : project.images[0]}
                      className="object-cover w-full h-full transition-transform hover:scale-110"
                      alt=""
                    />
                  </picture>
                </Link>
                <TagGroupTecnologies tecnologies={project.tecnologies as Tecnology[]} />
              </div>
            </div>

            <div className="space-y-8">
              <CarouselProjects
                category={getCategoryById(1)!}
                projects={getProjectsByCategory(getCategoryById(1)!)}
                slidesPerView={3}
              />
              <CarouselProjects
                category={getCategoryById(2)!}
                projects={getProjectsByCategory(getCategoryById(2)!)}
                slidesPerView={2}
                reverseDirection={true}
              />
              <CarouselProjects
                category={getCategoryById(3)!}
                projects={getProjectsByCategory(getCategoryById(3)!)}
                slidesPerView={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
