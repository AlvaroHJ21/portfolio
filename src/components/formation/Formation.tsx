interface FormationItem {
  institucion: string;
  puesto: string;
  fecha: string;
}

const education: FormationItem[] = [
  {
    institucion: 'Universidad Nacional Mayor de San Marcos',
    puesto: 'Ingeniería de Sistemas',
    fecha: 'Mar 2018 - Dic 2022',
  },
];

const work: FormationItem[] = [
  {
    institucion: 'Grupo Agiletech Perú',
    puesto: 'Desarrollador Web Full Stack y Móvil',
    fecha: 'Sep 2022 - Actualidad',
  },
];

export default function Formation() {
  return (
    <section id="formation" className="bg-gray-50 dark:bg-background-light">
      <div className="max-w-[1200px] w-[90%] m-auto py-20">
        <h2
          data-aos="fade-down"
          className="mb-8 font-black text-center text-gray-600 uppercase text-32 dark:text-white"
        >
          MI <span className="text-main">FORMACIÓN</span>
        </h2>
        <div className="flex flex-col gap-8 lg:flex-row md:justify-between">
          {/* experiencia laboral */}
          <div className="lg:max-w-lg md:flex-1">
            <h3 className="font-bold text-main text-32">Experiencia Laboral</h3>
            {work.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>

          {/* educación */}
          <div className="lg:max-w-lg md:flex-1 ">
            <h3 className="font-bold text-main text-32">Educación</h3>
            <div>
              {education.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Props {
  item: FormationItem;
}

export function Card({ item }: Props) {
  const { institucion, puesto, fecha } = item;
  return (
    <div data-aos="fade-up" className="flex flex-col gap-4 py-4">
      <h4 className="uppercase">{institucion}</h4>
      <div className="flex justify-between text-gray-400">
        <p>{puesto}</p> <span>{fecha}</span>
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
    </div>
  );
}
