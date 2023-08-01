import {
  bootstrapLogo,
  CSSLogo,
  dockerLogo,
  expressLogo,
  HTMLLogo,
  javascriptLogo,
  mongoDBLogo,
  nextjsLogo,
  nextUILogo,
  nodeJSLogo,
  reactLogo,
  sassLogo,
  tailwindLogo,
  vueLogo,
  angularLogo,
  laravelLogo,
  figmaLogo,
  firebaseLogo,
  flutterLogo,
  gitLogo,
  githubLogo,
  mysqlLogo,
  phpLogo,
  postgresLogo,
  reduxLogo,
  strapiLogo,
} from '@/assets';

const listItems1 = [
  bootstrapLogo,
  CSSLogo,
  HTMLLogo,
  javascriptLogo,
  nextjsLogo,
  nextUILogo,
  reactLogo,
  reduxLogo,
  vueLogo,
  angularLogo,
  sassLogo,
  tailwindLogo,
  vueLogo,
  laravelLogo,
  figmaLogo,
  flutterLogo,
  bootstrapLogo,
  CSSLogo,
  HTMLLogo,
  javascriptLogo,
  nextjsLogo,
  nextUILogo,
  reactLogo,
  reduxLogo,
  vueLogo,
  angularLogo,
  sassLogo,
  tailwindLogo,
  vueLogo,
  laravelLogo,
  figmaLogo,
  flutterLogo,
];
const listItems2 = [
  nodeJSLogo,
  expressLogo,
  mongoDBLogo,
  postgresLogo,
  mysqlLogo,
  firebaseLogo,
  dockerLogo,
  gitLogo,
  githubLogo,
  phpLogo,
  strapiLogo,
  expressLogo,
  mongoDBLogo,
  postgresLogo,
  firebaseLogo,
  nodeJSLogo,
  expressLogo,
  mongoDBLogo,
  postgresLogo,
  mysqlLogo,
  firebaseLogo,
  dockerLogo,
  gitLogo,
  githubLogo,
  phpLogo,
  strapiLogo,
  expressLogo,
  mongoDBLogo,
  postgresLogo,
  firebaseLogo,
];

export const CarouselItem = ({ item }: any) => {
  return (
    <div className="flex items-center px-20 py-6 transition-transform bg-gray-300 rounded-lg group dark:bg-gray-800 hover:scale-125 hover:shadow-2xl">
      <img
        className="h-12 max-w-[120px] grayscale group-hover:grayscale-0"
        src={item}
        alt={`logo ${item}`}
      />
    </div>
  );
};

export default function Carousel() {
  return (
    <section className="overflow-hidden">
      <div className="py-4">
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
}
