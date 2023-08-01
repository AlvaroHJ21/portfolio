'use client';
import { useState } from 'react';
import Multiselect from '@/components/input/Multiselect';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';

interface Props {
  categories: any[];
}

export default function Form({ categories }: Props) {
  const [selected, setSelected] = useState([]);

  const options = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return (
    <form>
      <div className="mb-4 form-control">
        <label htmlFor="" className="label">
          Nombre
        </label>
        <input type="text" className="input input-bordered" />
      </div>
      <div className="mb-4 form-control">
        <label htmlFor="" className="label">
          Descripción
        </label>
        <textarea className="textarea textarea-bordered"></textarea>
      </div>
      <div className="mb-4 form-control">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="" className="label">
            Imágenes
          </label>
          <button type="button" className="btn btn-sm btn-primary">
            <FaPlus />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <input type="text" className="flex-1 input input-bordered" placeholder="http: ...." />
          <button type="button" className="text-error">
            <AiOutlineClose />
          </button>
        </div>
      </div>

      <div className="mb-4 form-control">
        <label htmlFor="" className="label">
          Categorías
        </label>
        <Multiselect options={options} selected={selected} setSelected={setSelected} />
      </div>
      <div className="mb-4 form-control">
        <label htmlFor="" className="label">
          Tecnologías
        </label>
        <Multiselect options={options} selected={selected} setSelected={setSelected} />
      </div>
      <button className="btn btn-primary">Guardar</button>
    </form>
  );
}
