'use client';
import { MultiSelect } from 'react-multi-select-component';
import './styles.css';

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

export default function Multiselect({ options, selected, setSelected }: Props) {
  return (
    <div className="my-multiselect">
      <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy="Select" />
    </div>
  );
}
