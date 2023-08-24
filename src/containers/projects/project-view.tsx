import { ImageGrid } from '@/components/image/image-grid';
import { TagGroupTecnologies } from '@/components/tag';
import { Project, Tecnology } from '@/interfaces';
import { BsChevronLeft } from 'react-icons/bs';
import { TbExternalLink } from 'react-icons/tb';
import Link from 'next/link';

interface Props {
  project: Project;
}

export const ProjectView = ({ project }: Props) => {
  const firstImage = project?.images[0];

  const length = project?.images?.length;

  const secondImage = length && length > 1 ? project?.images[1] : firstImage;

  const thirdImage = length && length > 2 ? project?.images[2] : firstImage;

  return (
    <section id="proyects" className="texture">
      <div className="max-w-[1200px] m-auto w-[90%]">
        <div className="py-10">
          <div data-aos="fade-up">
            <div className="flex justify-between mb-4">
              <Link
                href="/#projects"
                className="p-2 text-white border-2 rounded-full bg-main border-main"
              >
                <BsChevronLeft size={20} />
              </Link>
              <div className="flex items-center gap-2">
                {/* Demo */}
                <a
                  href={project?.url}
                  target="_blank"
                  className="p-2 text-white border-2 rounded-full bg-main border-main"
                >
                  <TbExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className='mb-4'>
              <p className="text-gray-600 uppercase dark:text-gray-300">
                {project?.categories[0].name}
              </p>
              <h2 className="text-3xl font-bold text-gray-600 dark:text-gray-300">
                {project?.name}
              </h2>
            </div>

            <ImageGrid
              firstImage={firstImage!}
              secondImage={secondImage!}
              thirdImage={thirdImage!}
            />
            <TagGroupTecnologies tecnologies={project?.tecnologies as Tecnology[]} />
            <div>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {project?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
