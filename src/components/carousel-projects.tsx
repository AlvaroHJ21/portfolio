'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Project, Category } from '@prisma/client';
import Link from 'next/link';

interface Props {
  category: Category;
  projects: Project[];
}

export const CarouselProjects = ({ category, projects }: Props) => {
  return (
    <div className="w-full max-w-full mb-2 overflow-hidden">
      <h2 className="mb-6 text-2xl font-bold text-gray-600 dark:text-gray-300">{category?.name}</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        // breakpoints={{
        //   240: {
        //     slidesPerView: 1,
        //   },
        //   565: {
        //     slidesPerView: 2,
        //   },
        // }}
        pagination={{ clickable: true }}
      >
        {projects.map((item) => {
          const { id, images, name } = item;
          return (
            <SwiperSlide className="" key={id}>
              <Link href={`/projects/${item.id}`} className="flex flex-col">
                <img
                  src={images[0]}
                  alt={name ?? ''}
                  className="self-start w-auto rounded-md"
                  width={200}
                  height={200}
                />
                <div className="mt-3 mb-6 text-center">
                  <p className="text-background dark:text-white text-20">{name}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
