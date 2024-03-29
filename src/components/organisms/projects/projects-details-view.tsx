import { FaArrowLeft } from 'react-icons/fa';

import { CustomLink } from '@/components/atoms';
import { ImageGrid, TagGroup, LinkViewDemo } from '@/components/molecules';
import { Project, Tecnology } from '@/interfaces';
import { FadeUp } from '@/components/animation/fade-up';

interface Props {
  project: Project;
}

export const ProjectsDetailsView = ({ project }: Props) => {
  const firstImage = project?.images[0];

  const length = project?.images?.length;

  const secondImage = length && length > 1 ? project?.images[1] : firstImage;

  const thirdImage = length && length > 2 ? project?.images[2] : firstImage;

  return (
    <section id="proyects" className="texture">
      <div className="container">
        <div className="py-10">
          <FadeUp>
            <div className="flex justify-between mb-4">
              <CustomLink href="/#projects" startIcon={<FaArrowLeft size={14} />}>
                Volver
              </CustomLink>
              <div className="flex items-center gap-2">
                {/* Demo */}
                {/* <a
                  href={project?.url}
                  target="_blank"
                  className="p-2 text-white border-2 rounded-full bg-main border-main"
                >
                  <TbExternalLink size={20} />
                </a> */}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 uppercase dark:text-gray-300">
                {project?.categories[0].name}
              </p>
              <h2 className="text-3xl font-bold text-gray-600 dark:text-gray-300">
                {project?.name}
              </h2>
            </div>

            <div className="relative">
              <ImageGrid
                firstImage={firstImage!}
                secondImage={secondImage!}
                thirdImage={thirdImage!}
              />

              {project.url && <LinkViewDemo url={project.url!} />}
            </div>
            <TagGroup tecnologies={project?.tecnologies as Tecnology[]} />
            <div
              className="mt-4 text-lg text-gray-600 project-description dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: project?.description ?? '' }}
            ></div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
