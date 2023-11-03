'use client';

import { Project } from '@/interfaces';
import { ImageBlur, TagGroupTecnologies, useCursor } from '../ui';
import Link from 'next/link';
import clsx from 'clsx';
import { FadeUp } from '@/components/animation/fade-up';

interface Props {
  project: Project;
  large?: boolean;
}

export const ProjectsCard = ({ project, large = false }: Props) => {
  const { images, name, categories, tecnologies, description } = project;
  const { setMouseConfig } = useCursor();
  return (
    <FadeUp className="relative z-10 flex flex-col h-full p-4 rounded-lg dark:border-gray-600 bg-primary dark:bg-background dark:bg-opacity-25 bg-opacity-10 backdrop-blur-sm">
      <Link
        href={`/projects/${project.id}`}
        onMouseOver={() => setMouseConfig({ variant: 'focus-content', content: '[ VER MÁS ]' })}
        onMouseLeave={() => setMouseConfig({ variant: 'default' })}
        className={clsx('relative overflow-hidden rounded-lg', {
          'flex-1': large,
          'aspect-[4/3]': !large,
        })}
      >
        <span className="absolute z-10 px-2 py-1 text-xs text-white rounded-full bg-primary top-2 right-2">
          {categories[0].name}
        </span>
        <ImageBlur
          src={images[0]}
          alt={name ?? ''}
          className="block object-cover w-full h-full transition-transform hover:scale-105"
          width={large ? 800 : 400}
          height={large ? 600 : 400}
        />
      </Link>
      <h3 className="my-2 text-xl">{name}</h3>
      {large && <p className="hidden mb-4 md:auto md:line-clamp-3">{description}</p>}
      <div className="h-14">
        <TagGroupTecnologies tecnologies={tecnologies} sm />
      </div>
    </FadeUp>
  );
};
