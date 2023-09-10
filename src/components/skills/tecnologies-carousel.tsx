'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Tecnology } from '@/interfaces';

export const CarouselItem = ({ item }: { item: Tecnology }) => {
  return (
    // hover:scale-125 hover:shadow-md
    <div className="flex items-center px-20 py-6 transition-transform bg-gray-300 rounded-lg group dark:bg-gray-800 ">
      <div className="w-12 h-12 transition-transform group-hover:scale-150">
        <img
          className="h-full max-w-full max-h-full grayscale group-hover:grayscale-0"
          src={item.image}
          alt={`logo ${item.name}`}
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

interface Props {
  items: Tecnology[];
  direction: 'left' | 'right';
}

export const CarouselTecnologies = ({ items, direction }: Props) => {
  const tlRef = useRef<gsap.core.Timeline>();
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      tlRef.current = gsap.timeline({
        // paused: true,
        repeat: -1,
        defaults: {
          ease: 'none',
          duration: 80,
        },
      });

      const width = carouselRef.current?.scrollWidth || 0;
      const windowWidth = window.innerWidth;

      // console.log(width, windowWidth);

      if (direction == 'left') {
        tlRef.current.fromTo(
          carouselRef.current,
          {
            x: 0,
          },
          {
            x: -(width - windowWidth),
          }
        );
      } else {
        tlRef.current.fromTo(
          carouselRef.current,
          {
            x: -(width - windowWidth),
          },
          {
            x: 0,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-2 overflow-hidden">
      <div
        ref={carouselRef}
        className={`flex flex-shrink-0 gap-4`}
        onMouseOver={() => {
          tlRef.current?.pause();
        }}
        onMouseLeave={() => {
          tlRef.current?.play();
        }}
      >
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};
