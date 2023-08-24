import tecnologies from '@/data/tecnologies';

const listItems1 = tecnologies.map((item) => item.image);
const listItems2 = tecnologies.map((item) => item.image);

export const CarouselItem = ({ item }: any) => {
  return (
    // hover:scale-125 hover:shadow-md
    <div className="flex items-center px-20 py-6 transition-transform bg-gray-300 rounded-lg group dark:bg-gray-800 ">
      <div className="w-12 h-12 transition-transform group-hover:scale-150">
        <img
          className="h-full max-w-full max-h-full grayscale group-hover:grayscale-0"
          src={item}
          alt={`logo ${item}`}
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export const CarouselTecnologies = () => {
  return (
    <section className="overflow-hidden">
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
