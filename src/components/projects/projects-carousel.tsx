'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Category, Project } from '@/interfaces';
import { ProjectsCarouselItem } from './projects-carousel-item';

interface Props {
  category: Category;
  slidesPerView?: number;
  reverseDirection?: boolean;
  projects: Project[];
}

export const ProjectsCarousel = ({
  category,
  projects,
  slidesPerView = 2,
  reverseDirection = false,
}: Props) => {
  const imageSize: {
    [key: number]: {
      w: number;
      h: number;
    };
  } = {
    1: {
      w: 500,
      h: 500,
    },
    2: {
      w: 600,
      h: 600,
    },
    3: {
      w: 400,
      h: 400,
    },
  };

  return (
    <div className="w-full max-w-full">
      <h2 className="mb-6 overflow-auto text-2xl text-gray-600 dark:text-gray-300">
        {category?.name}
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
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
        // pagination={{ clickable: true }}
      >
        {projects.map((item) => {
          return (
            <SwiperSlide className="" key={item.id}>
              <ProjectsCarouselItem
                item={item}
                imageWidth={imageSize[slidesPerView].w}
                imageHeight={imageSize[slidesPerView].h}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
