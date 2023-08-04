import React from 'react';

import { TbExternalLink } from 'react-icons/tb';

import { TagGroupTecnologies } from '@/components/tag-group-tecnologies';
import prisma from '@/lib/prisma';

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
    <section id="proyects" className="bg-gray-50 dark:bg-background-light">
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
                  <a href={project?.url} target="_blank" className="btn btn-primary">
                    Demo
                    <TbExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 mb-4">
              <picture className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                <img src={firstImage} className="object-cover w-full h-full" alt="" />
              </picture>
              <picture className="col-span-1 overflow-hidden rounded-lg">
                <img src={secondImage} className="object-cover w-full h-full" alt="" />
              </picture>
              <picture className="col-span-1 overflow-hidden rounded-lg">
                <img src={thirdImage} className="object-cover w-full h-full" alt="" />
              </picture>
            </div>
            <TagGroupTecnologies tecnologies={project?.tecnologies ?? []} />
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
