import tecnologies from '@/data/tecnologies';

const listItems1 = tecnologies.map((item) => item.image);
const listItems2 = tecnologies.map((item) => item.image);

export const CarouselItem = ({ item }: any) => {
  return (
    <div className="flex items-center px-20 py-6 transition-transform bg-gray-300 rounded-lg group dark:bg-gray-800 hover:scale-125 hover:shadow-md">
      <img
        className="h-12 max-w-[120px] grayscale group-hover:grayscale-0"
        src={item}
        alt={`logo ${item}`}
      />
    </div>
  );
};

export const Carousel = () => {
  return (
    <section className="overflow-hidden bg-gray-50 dark:bg-background-light">
      <div className="py-8">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <div className={`flex flex-shrink-0 gap-4 animationLeft`}>
              {listItems1.map((item, index) => (
                <CarouselItem key={index} item={item} />
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <div className={`flex flex-shrink-0 gap-4 animationRight`}>
              {listItems2.map((item, index) => (
                <CarouselItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
