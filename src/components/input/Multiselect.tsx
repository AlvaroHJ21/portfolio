"use client"
import { MultiSelect, Option } from 'react-multi-select-component';
import './Multiselect.css';

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

interface Props {
  options: Option[],
  selected: Option[],
  setSelected: (e: any) => void
}

export default function Multiselect({ options, selected, setSelected }: Props) {

  return (
    <div className='my-multiselect'>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy='Select'
      />
    </div>
  )
}
