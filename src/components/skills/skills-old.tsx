import { skills, tecnologies } from '@/data';
import { Skill } from '@/interfaces';
import { CarouselTecnologies } from '.';

const SkillBlock = ({ skill }: { skill: Skill }) => {
  return (
    <div className="w-full">
      <h3 className="mb-4 font-black text-center text-gray-600 text-20 dark:text-white">
        {skill.category}
      </h3>
      <div className="flex flex-col gap-2">
        {skill.items.map((skill, index) => (
          <div data-aos="fade-up" data-aos-offset="80" className="flex justify-between" key={index}>
            <p className="text-black dark:text-white">{skill.name}</p>
            <div className="flex gap-2">
              {[...Array(skill.rating)].map((i, index) => (
                <div
                  key={index}
                  className="w-4 h-4 border-2 rounded-full bg-main border-main"
                ></div>
              ))}
              {[...Array(6 - skill.rating)].map((i, index) => (
                <div
                  key={index}
                  className="w-4 h-4 bg-transparent border-2 rounded-full border-main"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SkillsOld = () => {
  return (
    <section id="skills" className="">
      <div className="max-w-[1200px] w-[90%] m-auto min-h-[756px] py-20">
        <div className="flex flex-col items-center justify-center gap-8 md:justify-start item-center">
          <div data-aos="fade-down">
            <h2 className="font-black text-gray-600 uppercase text-32 dark:text-white">
              Mis <span className="text-main">habilidades</span>
            </h2>
          </div>

          <div className="flex flex-col w-full gap-8 md:grid md:grid-cols-2">
            {skills.map((skill, index) => (
              <SkillBlock key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
      <CarouselTecnologies items={tecnologies} direction="left" />
      <CarouselTecnologies items={tecnologies} direction="right" />
    </section>
  );
};
