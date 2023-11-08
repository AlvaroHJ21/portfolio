import { useMemo } from 'react';
import { cn } from '@/lib/util';
import { BsFilter } from 'react-icons/bs';
import { Dropdown } from '@/components/ui';
import type { Tecnology } from '@/interfaces';

interface Props {
  tecnologies: Tecnology[];
  selectedTecnologies: Tecnology[];
  selectTecnology(tecnology: Tecnology): void;
  unselectTecnology(id: number): void;
  unselectAllTecnologies(): void;
}
export const FilterTecnologies = (props: Props) => {
  const {
    tecnologies,
    selectedTecnologies,
    selectTecnology,
    unselectTecnology,
    unselectAllTecnologies,
  } = props;

  const selectedAll = useMemo(() => selectedTecnologies.length === 0, [selectedTecnologies]);

  return (
    <div className="relative">
      <Dropdown icon={<BsFilter />} className="w-screen max-w-sm">
        <div className="absolute right-0 z-20 flex flex-row flex-wrap gap-2 p-4 bg-background-light">
          <div
            onClick={unselectAllTecnologies}
            className={cn(selectedAll ? 'badge-main' : 'badge-base')}
          >
            All
          </div>
          {tecnologies.map((tecnology) => {
            const isSelected = selectedTecnologies.some((t) => t.id === tecnology.id);
            return (
              <div
                key={tecnology.id}
                onClick={() =>
                  isSelected ? unselectTecnology(tecnology.id) : selectTecnology(tecnology)
                }
                className={cn(isSelected ? 'badge-main' : 'badge-base')}
              >
                {tecnology.name}
              </div>
            );
          })}
        </div>
      </Dropdown>
      {!selectedAll && (
        <div className="absolute left-0 right-0 w-2 h-2 m-auto rounded-full -bottom-3 bg-primary"></div>
      )}
    </div>
  );
};
