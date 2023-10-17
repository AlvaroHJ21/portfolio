import { skills } from '@/data';
import { TecnologyItem } from './tecnology-item';
import { FadeDown } from '@/components/animation/fade-down';

export const Skills = () => {
  return (
    <section id="skills" className="">
      <div className="max-w-[1200px] w-[90%] m-auto min-h-[756px] py-20">
        <div className="flex flex-col items-center justify-center gap-8 md:justify-start item-center">
          <FadeDown>
            <h2 className="font-black text-gray-600 uppercase text-32 dark:text-white">
              Mis <span className="text-main">habilidades</span>
            </h2>
          </FadeDown>

          <div className="grid gap-24 md:grid-cols-2">
            {skills.map((block) => {
              return (
                <div key={block.category}>
                  <h3 className="mb-4 text-2xl font-black text-gray-600 text-20 dark:text-white">
                    {block.category}
                  </h3>
                  <div className="grid grid-cols-4 gap-8">
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
};
