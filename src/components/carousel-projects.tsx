'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Link from 'next/link';
import { TagGroupTecnologies } from './tag-group-tecnologies';
import { Category, Project } from '@/interfaces';

interface Props {
  category: Category;
  slidesPerView?: number;
  reverseDirection?: boolean;
  projects: Project[];
}

export const CarouselProjects = ({
  category,
  projects,
  slidesPerView = 2,
  reverseDirection = false,
}: Props) => {
  return (
    <div className="w-full max-w-full">
      <h2 className="mb-6 overflow-auto text-2xl text-gray-600 dark:text-gray-300">
        {category?.name}
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        // slidesPerView={slidesPerView}
        loop={true}
        autoplay={{
          delay: 3000,
          reverseDirection: reverseDirection,
        }}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
          565: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: slidesPerView,
          },
        }}
        pagination={{ clickable: true }}
      >
        {projects.map((item) => {
          const { id, images, name } = item;
          return (
            <SwiperSlide className="" key={id}>
              <Link
                href={`/projects/${item.id}`}
                className="flex flex-col my-4 overflow-hidden rounded-md shadow-sm"
                aria-label={`Ver proyecto ${name}`}
              >
                <picture className="overflow-hidden">
                  <Image
                    src={images[0]}
                    alt={name ?? ''}
                    className="self-start block w-auto transition-transform hover:scale-110"
                    width={600}
                    height={400}
                  />
                </picture>
                <div className="flex flex-col items-center gap-2 py-3">
                  <p className="text-background dark:text-white text-20">{name}</p>
                  <TagGroupTecnologies tecnologies={item.tecnologies} sm />
                </div>
              </Link>
              <div className="h-4"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
