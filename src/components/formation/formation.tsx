import clsx from 'clsx';

interface FormationItem {
  institucion: string;
  puesto: string;
  funciones?: string[];
  fecha: string;
  logo?: {
    src: string;
    width: number;
  };
}

const education: FormationItem[] = [
  {
    institucion: 'Universidad Nacional Mayor de San Marcos',
    puesto: 'Ingeniería de Sistemas',
    fecha: 'Mar 2018 - Dic 2022',
    logo: { src: '/logos/unmsm.svg', width: 80 },
  },
];

const work: FormationItem[] = [
  {
    institucion: 'PMBH',
    puesto: 'Desarrollador Web Fullstack',
    fecha: 'May 2023 - Actualidad',
    funciones: [
      'Diseño y desarrollo de páginas web informativas usando tecnologías frontend modernas como Astro, React y TailwindCSS. Mejorando la velocidad de desarrollo e incrementando el SEO de la web resultante.',
      'Apoyo técnico en el ciclo de desarrollo de los proyectos, desde el diseño inicial, wireframes, programación y el despliegue.',
      'Desarrollo de sistema de facturación utilizando la API de SUNAT. Logrando el desarrollo de un servicio REST para la creación de los XML que contienen la información de facturas, boletas, guías y notas enviadas a Sunat. Uso de las siguientes tecnologías: PHP, Codeigniter, MySQL, JQuery y Bootstrap.',
    ],
  },
  {
    institucion: 'Agiletech Perú',
    puesto: 'Desarrollador Web Full Stack y Móvil',
    fecha: 'Sep 2022 - May 2023',
    funciones: [
      'Diseño y desarrollo de aplicaciones web utilizando tecnologías frontend como React, Material UI y Redux. Logrando mejorar la experiencia de usuario y la velocidad de respuesta de la aplicación.',
      'Desarrollo de una API RESTful utilizando Node, Express y PostgreSQL',
      'Configuración y administración de sistemas de control de versiones Git para colaboración y gestión de código. Logrando la integración continua de los cambios en el código.',
      'Desarrollo de aplicaciones móviles multiplataforma utilizando Flutter.',
    ],
    logo: { src: '/logos/agiletech.png', width: 200 },
  },
];

export const Formation = () => {
  return (
    <section id="formation" className="">
      <div className="max-w-[1200px] w-[90%] m-auto py-20">
        <h2
          data-animation="fade-down"
          className="mb-8 font-black text-center text-gray-600 uppercase text-32 dark:text-white"
        >
          MI <span className="text-main">FORMACIÓN</span>
        </h2>
        <div className="flex flex-col gap-8 md:justify-between">
          {/* experiencia laboral */}
          <div className="">
            <h3 className="mb-4 font-bold text-main text-20">Experiencia Laboral</h3>
            <div className="space-y-12">
              {work.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>

          {/* educación */}
          <div>
            <h3 className="mb-4 font-bold text-main text-20">Educación</h3>
            <div className="space-y-12">
              {education.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Props {
  item: FormationItem;
}

export function Card({ item }: Props) {
  const { institucion, puesto, fecha } = item;
  return (
    <div data-animation="fade-up">
      <div className="flex flex-col justify-end gap-4 md:flex:row">
        <div className={clsx({ 'md:w-1/3': item.funciones, 'md:w-full': !item.funciones })}>
          <h4 className="font-bold uppercase">{puesto}</h4>
          <div className="flex gap-8">
            <p>{institucion}</p>
            {/* {item.logo && (
              <img
                src={item.logo.src}
                alt={item.institucion}
                width={item.logo.width}
                height={100}
              />
            )} */}
          </div>
          <span className="italic">{fecha}</span>
        </div>

        {item.funciones && <p>Funciones: </p>}
        <ul className="ml-6 list-disc">
          {item.funciones?.map((funcion, index) => {
            return (
              <li key={funcion} className="">
                {funcion}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
