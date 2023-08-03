import prisma from '@/lib/prisma';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    include: {
      categories: true,
      tecnologies: true,
    },
  });

  return (
    <section id="proyects" className="bg-gray-50 dark:bg-background-light">
      <div className="max-w-[1200px] m-auto w-[90%]">
        <div className="py-20">
          <div className="flex flex-col items-center gap-8">
            <div data-aos="fade-down">
              <h2 className="font-black text-gray-600 uppercase text-32 dark:text-white">
                Mis <span className="text-main">proyectos</span>
              </h2>
            </div>

            {projects.map((project) => {
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
                      <img src={project.images[0]} className="object-cover w-full h-full" alt="" />
                    </picture>
                    <picture className="col-span-1 overflow-hidden rounded-lg">
                      <img src={project.images[0]} className="object-cover w-full h-full" alt="" />
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
                              alt={tecnology.name}
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
