import networkLinks from '@/data/networkLinks';
import { Logo } from '@/components/ui/logo';
import { FadeUp } from '@/components/animation/fade-up';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-background">
      <div className="flex flex-col items-center gap-4 pt-16 pb-32">
        <FadeUp className="mb-8">
          <Logo />
        </FadeUp>
        <FadeUp>
          <div className="flex gap-8 mb-6 text-gray-600 dark:text-white">
            {networkLinks.map(({ name, url, icon }) => (
              <a key={name} href={url} className="btnIcon" target="_blank" aria-label={name}>
                {icon}
              </a>
            ))}
          </div>
        </FadeUp>
        <p className="text-gray-600 dark:text-gray-300"> &copy; 2023 Alvaro Huaysara Jauregui.</p>
      </div>
    </footer>
  );
};
