import prisma from '@/lib/prisma';

// import axios from 'axios';
import { CarouselProjects } from '../../../components/carousel-projects';
import Link from 'next/link';
import { TagGroupTecnologies } from '@/components/tag-group-tecnologies';

export default async function ProjectsPage() {
  const categories = await prisma.category.findMany();

  const projects = await prisma.project.findMany({
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
  });

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
                  className="grid grid-cols-3 grid-rows-2 gap-4 mb-4"
                >
                  <picture className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                    <img src={project.images[0]} className="object-cover w-full h-full" alt="" />
                  </picture>
                  <picture className="col-span-1 overflow-hidden rounded-lg">
                    <img
                      src={project.images.length > 1 ? project.images[1] : project.images[0]}
                      className="object-cover w-full h-full"
                      alt=""
                    />
                  </picture>
                  <picture className="col-span-1 overflow-hidden rounded-lg">
                    <img
                      src={project.images.length > 2 ? project.images[2] : project.images[0]}
                      className="object-cover w-full h-full"
                      alt=""
                    />
                  </picture>
                </Link>
                <TagGroupTecnologies tecnologies={project.tecnologies} />
              </div>
            </div>

            {categories?.map((category) => {
              const pro = projects.filter((project) => {
                return project.categories.map((category) => category.id).includes(category.id);
              });

              if (pro.length === 0) return null;

              return <CarouselProjects key={category.id} category={category} projects={pro} />;
            })}

            {/* <CarouselProjects category={{ id: 1, name: 'Web' }} projects={projects ?? []} />
            <CarouselProjects category={{ id: 1, name: 'Web' }} projects={projects ?? []} /> */}

            {/* {projects.map((project) => {
              return (
                <div data-aos="fade-up" key={project.id}>
                  <p className="text-gray-600 uppercase dark:text-gray-300">
                    {project.categories[0].name}
                  </p>
                  <h2 className="mb-4 text-3xl font-bold text-gray-600 dark:text-gray-300">
                    {project.name}
                  </h2>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4 mb-4">
                    <picture className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                      <img src={project.images[0]} className="object-cover w-full h-full" alt="" />
                    </picture>
                    <picture className="col-span-1 overflow-hidden rounded-lg">
                      <img
                        src={project.images.length > 1 ? project.images[1] : project.images[0]}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </picture>
                    <picture className="col-span-1 overflow-hidden rounded-lg">
                      <img
                        src={project.images.length > 2 ? project.images[2] : project.images[0]}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="flex gap-2">
                    {project.tecnologies.map((tecnology) => {
                      return (
                        <span
                          key={tecnology.id}
                          className="h-8 badge badge-neutral whitespace-nowrap"
                        >
                          {tecnology.image && (
                            <img
                              src={tecnology.image}
                              alt={tecnology.name ?? ''}
                              className="w-6 h-6 mr-2"
                            />
                          )}
                          {tecnology.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </section>
  );
}
