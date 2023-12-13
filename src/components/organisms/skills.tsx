import { skills } from '@/data';
import { TecnologyItem } from '@/components/molecules';
import { FadeDown } from '@/components/animation/fade-down';

export default function Skills() {
  return (
    <section id="skills" className="">
      <div className="container min-h-[756px] py-20">
        <div className="">
          <FadeDown>
            <h2 className="mb-8 font-black text-center text-gray-600 uppercase text-32 dark:text-white">
              Mis <span className="text-main">habilidades</span>
            </h2>
          </FadeDown>

          <div className="grid gap-16 lg:gap-36 md:grid-cols-2">
            {skills.map((block) => {
              return (
                <div key={block.category}>
                  <h3 className="mb-6 text-2xl font-black text-gray-600 text-20 dark:text-white">
                    {block.category}
                  </h3>
                  <div className="grid grid-cols-4 gap-8 md:grid-cols-3 lg:grid-cols-4 place-items-center">
                    {block.items.map((item, index) => (
                      <TecnologyItem key={item.name} item={item} />
                    ))}
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
