'use client';
import { FadeUp } from '@/components/animation/fade-up';
import { useCursor } from '@/contexts/cursor';

export default function TecnologyItem({ item }: { item: { logo: string; name: string } }) {
  const { setMouseConfig } = useCursor();
  return (
    <FadeUp
      onMouseOver={() =>
        setMouseConfig({ variant: 'focus-content', content: item.name.toUpperCase() })
      }
      onMouseOut={() => setMouseConfig({ variant: 'default' })}
      className="grid w-20 h-20 bg-white bg-opacity-50 rounded-full dark:bg-primary dark:bg-opacity-25 place-content-center"
    >
      <div className="flex items-center justify-center w-10 h-10">
        <img
          src={item.logo}
          alt={item.name}
          className="max-w-full max-h-full"
          width={40}
          height={40}
        />
      </div>
    </FadeUp>
  );
}
