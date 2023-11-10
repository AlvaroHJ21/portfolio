'use client';
import Link from 'next/link';

import { useCursor } from '@/contexts/cursor';
import { ImageBlur } from '@/components/atoms';
import { TagGroup } from '@/components/molecules';
import { Project } from '@/interfaces';

export const ProjectsCarouselItem = ({
  item,
  imageWidth,
  imageHeight,
}: {
  item: Project;
  imageWidth: number;
  imageHeight: number;
}) => {
  const { images, name } = item;
  const { setMouseConfig } = useCursor();

  const handleMouseEnterImage = () => {
    setMouseConfig({
      variant: 'focus-content',
      content: '[ VER MÁS ]',
    });
  };

  const handleMouseLeaveImage = () => {
    setMouseConfig({
      variant: 'default',
    });
  };

  // const handleMouseEnter = () => {
  //   const tl = gsap.timeline();
  //   tl.set([titleRef.current, tecnologiesRef.current], {
  //     yPercent: 100,
  //   });
  //   tl.to(titleRef.current, {
  //     yPercent: 0,
  //     duration: 0.2,
  //   });
  //   tl.to(tecnologiesRef.current, {
  //     yPercent: 0,
  //     duration: 0.2,
  //   });
  // };
  // const handleMouseLeave = () => {
  //   const tl = gsap.timeline();
  //   tl.set([titleRef.current, tecnologiesRef.current], {
  //     yPercent: 0,
  //   });
  //   tl.to(titleRef.current, {
  //     yPercent: -100,
  //     duration: 0.2,
  //   });
  //   tl.to(tecnologiesRef.current, {
  //     yPercent: -100,
  //     duration: 0.2,
  //   });
  // };

  return (
    <div
    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/projects/${item.id}`}
        className="flex flex-col my-4 overflow-hidden"
        aria-label={`Ver proyecto ${name}`}
        onClick={() => setMouseConfig({ variant: 'default' })}
      >
        <picture
          onMouseEnter={handleMouseEnterImage}
          onMouseLeave={handleMouseLeaveImage}
          className="overflow-hidden rounded-md aspect-[4/3]"
        >
          <ImageBlur
            src={images[0]}
            alt={name ?? 'imagen'}
            className="self-start block w-full h-full transition-transform hover:scale-110"
            width={imageWidth}
            height={imageHeight}
            priority
          />
        </picture>
      </Link>
      <div className="flex flex-col items-center gap-2 py-3">
        <div className="relative overflow-hidden">
          <p className="relative text-background dark:text-white text-20">{name}</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="relative">
            <TagGroup tecnologies={item.tecnologies} />
          </div>
        </div>
      </div>
      <div className="h-4"></div>
    </div>
  );
};
