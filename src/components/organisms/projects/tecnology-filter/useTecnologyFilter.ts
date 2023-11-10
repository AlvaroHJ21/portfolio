import { useState } from 'react';
import type { Tecnology } from '@/interfaces';

export const useTecnologyFilter = () => {
  const [selectedTecnologies, setSelectedTecnologies] = useState<Tecnology[]>([]);

  function selectTecnology(tecnology: Tecnology) {
    setSelectedTecnologies([...selectedTecnologies, tecnology]);
  }
  function unselectTecnology(id: number) {
    setSelectedTecnologies(selectedTecnologies.filter((tecnology) => tecnology.id !== id));
  }
  function unselectAllTecnologies() {
    setSelectedTecnologies([]);
  }
  return { selectedTecnologies, selectTecnology, unselectTecnology, unselectAllTecnologies };
};
