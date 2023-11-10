import React from 'react';
import { Tecnology } from '@/interfaces';
import clsx from 'clsx';

interface Props {
  sm?: boolean;
  tecnologies: Tecnology[];
}

export default function TagGroupTecnologies(props: Props) {
  const { tecnologies, sm = false } = props;
  return (
    <div className="flex flex-wrap gap-2">
      {tecnologies.map((tecnology) => {
        return (
          <span
            key={tecnology.id}
            className={clsx('badge badge-ghost dark:badge-neutral whitespace-nowrap', {
              'h-6': sm,
              'h-8': !sm,
            })}
          >
            {tecnology.image && (
              <img
                src={tecnology.image}
                alt={tecnology.name ?? ''}
                className={clsx('mr-2', {
                  'w-4 h-4': sm,
                  'w-6 h-6': !sm,
                })}
                width={sm ? 16 : 24}
                height={sm ? 16 : 24}
              />
            )}
            {tecnology.name}
          </span>
        );
      })}
    </div>
  );
}