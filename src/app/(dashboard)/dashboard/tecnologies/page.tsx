'use client';

import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';
import { useTecnologies } from '@/hooks/useTecnologies';

export default function TecnologiesPage() {
  const { tecnologies } = useTecnologies();
  return (
    <div>
      <table className="table">
        <thead className="">
          <tr>
            <th className="">Logo</th>
            <th className="">Nombre</th>
            <th className="text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tecnologies?.map((item) => (
            <tr key={item.id}>
              <th className="">
                <img src={item.image} alt={item.name} width={40} />
              </th>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="flex justify-end gap-4">
                <button className="btn btn-info btn-sm">
                  <FaEdit />
                </button>
                <button className="btn btn-error btn-sm">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
