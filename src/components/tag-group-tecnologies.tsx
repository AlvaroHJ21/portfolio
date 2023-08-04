import { Tecnology } from '@prisma/client';
import React from 'react';

interface Props {
  tecnologies: Tecnology[];
}

export const TagGroupTecnologies = ({ tecnologies }: Props) => {
  return (
    <div className="flex gap-2">
      {tecnologies.map((tecnology) => {
        return (
          <span key={tecnology.id} className="h-8 badge badge-primary dark:badge-neutral whitespace-nowrap">
            {tecnology.image && (
              <img src={tecnology.image} alt={tecnology.name ?? ''} className="w-6 h-6 mr-2" />
            )}
            {tecnology.name}
          </span>
        );
      })}
    </div>
  );
};
