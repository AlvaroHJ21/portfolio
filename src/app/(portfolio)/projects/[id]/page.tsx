import React from 'react';

import { TbExternalLink } from 'react-icons/tb';

import prisma from '@/lib/prisma';
import { Tecnology } from '@/interfaces';
import { TagGroupTecnologies } from '@/components/tag-group-tecnologies';
import { ImageGrid } from '@/components/image-grid';

interface Props {
  params: {
    id: string;
  };
}

export default async function ProyectPage({ params }: Props) {
  const project = await prisma.project.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      categories: true,
      tecnologies: true,
    },
  });

  const firstImage = project?.images[0];

  const length = project?.images?.length;

  const secondImage = length && length > 1 ? project?.images[1] : firstImage;

  const thirdImage = length && length > 2 ? project?.images[2] : firstImage;

  // console.log({ firstImage, secondImage, thirdImage });

  return (
    <section id="proyects" className="">
      <div className="max-w-[1200px] m-auto w-[90%]">
        <div className="py-20">
          <div data-aos="fade-up">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-gray-600 uppercase dark:text-gray-300">
                  {project?.categories[0].name}
                </p>
                <h2 className="text-3xl font-bold text-gray-600 dark:text-gray-300">
                  {project?.name}
                </h2>
              </div>
              <div>
                {project?.url && (
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
                )}
              </div>
            </div>

            <ImageGrid
              firstImage={firstImage!}
              secondImage={secondImage!}
              thirdImage={thirdImage!}
            />
            {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-4 md:grid-cols-3">
              <picture className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                <Image
                  src={firstImage!}
                  className="object-cover w-full h-full transition-transform cursor-pointer hover:scale-110"
                  alt=""
                  width={600}
                  height={400}
                />
              </picture>
              <picture className="col-span-1 overflow-hidden rounded-lg">
                <Image
                  src={secondImage!}
                  className="object-cover w-full h-full transition-transform cursor-pointer hover:scale-110"
                  alt=""
                  width={300}
                  height={200}
                />
              </picture>
              <picture className="col-span-1 overflow-hidden rounded-lg">
                <Image
                  src={thirdImage!}
                  className="object-cover w-full h-full transition-transform cursor-pointer hover:scale-110"
                  alt=""
                  width={300}
                  height={200}
                />
              </picture>
            </div> */}
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
}
