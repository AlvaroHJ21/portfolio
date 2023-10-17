import { FadeUp } from '@/components/animation/fade-up';
import { FadeDown } from '@/components/animation/fade-down';

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
        <FadeDown>
          <h2 className="mb-10 font-black text-center text-gray-600 uppercase text-32 dark:text-white">
            MI <span className="text-main">FORMACIÓN</span>
          </h2>
        </FadeDown>
        <div className="">
          {/* experiencia laboral */}
          <section className="flex flex-col gap-10 mb-20 lg:flex-row">
            <h3 className="mb-4 font-bold uppercase text-20 w-[15rem]">Experiencia</h3>
            <div className="flex-1 space-y-12">
              {work.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </section>

          {/* educación */}
          <section className="flex flex-col gap-10 lg:flex-row">
            <h3 className="mb-4 font-bold uppercase text-20 w-[15rem]">Educación</h3>
            <div className="flex-1 space-y-12">
              {education.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </section>
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
    <FadeUp>
      <div className="flex flex-col justify-end gap-4 md:flex:row">
        <div className="flex flex-wrap justify-between">
          <h4 className="font-bold">{puesto}</h4>
          <span className="text-sm text-gray-400">{fecha}</span>
        </div>
        <div className="flex gap-8">
          <p className="font-semibold text-primary">{institucion}</p>
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
    </FadeUp>
  );
}
