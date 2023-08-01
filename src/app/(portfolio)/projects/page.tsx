
export default async function ProjectsPage() {

  console.log("ejecutando en el server");

  const projects = [
    {
      id: 1,
      name: 'Proyecto God',
      description: 'Esta es una card de un proyecto god',
      images: ['https://alvarohuaysara.tech/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdthuporgb%2Fimage%2Fupload%2Fv1681274335%2Flarge_delivery_cover_ea5dd9d3e9.png&w=1920&q=75'],
      categories: [
        {
          id: 0,
          name: 'Página Web / Landing Page',
        },
      ],
      tecnologies: [
        {
          id: 1,
          img: {},
          name: 'React',
        },
        {
          id: 2,
          img: {},
          name: 'NextJS',
        },
      ],
    },
  ]

  // console.log(projects);

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
                  <p className='text-gray-600 uppercase dark:text-gray-300'>{project.categories[0].name}</p>
                  <h2 className="mb-4 text-3xl font-bold text-gray-600 dark:text-gray-300">{project.name}</h2>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <picture className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                      <img
                        src={project.images[0]}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </picture>
                    <picture className="col-span-1 overflow-hidden rounded-lg">
                      <img
                        src={project.images[0]}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </picture>
                    <picture className="col-span-1 overflow-hidden rounded-lg">
                      <img
                        src={project.images[0]}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </picture>
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
