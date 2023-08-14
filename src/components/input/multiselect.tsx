'use client';
import { MultiSelect } from 'react-multi-select-component';
import './multiselect.css';

export interface Option {
  value: any;
  label: string;
  key?: string;
  disabled?: boolean;
}

interface Props {
  options: Option[];
  selected: Option[];
  setSelected: (e: any) => void;
}

export const Multiselect = ({ options, selected, setSelected }: Props) => {
  return (
    <div className="my-multiselect">
      <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy="Select" />
    </div>
  );
};
