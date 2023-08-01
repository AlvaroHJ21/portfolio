'use client';
import React, { useState } from 'react';
import useWSR, { Fetcher } from 'swr';

import Swal from 'sweetalert2';

import { Category } from '@/interfaces/Category';
import { ApiResponse } from '@/interfaces/ApiResponse';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

const fetcher: Fetcher<ApiResponse<Category[]>, string> = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export default function CategoriesPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [name, setName] = useState('');

  const { data, error, isLoading, mutate } = useWSR('/api/categories', fetcher);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p>Loading..</p>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: 'Espere por favor!',
        html: '<span class="loading loading-spinner loading-lg"></span>',
        showConfirmButton: false,
      });

      const resp = await fetch('/api/categories', {
        method: 'POST',
        body: JSON.stringify({ name }),
      });
      const data = await resp.json();

      console.log(data);

      Swal.fire('Agregado!', '', 'success');

      mutate();
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = () => {
    setName('');
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: '¿Está seguro que quiere eliminar este registro?',
      showCancelButton: true,
      icon: 'question',
    });

    if (result.isConfirmed) {
      try {
        Swal.fire({
          title: 'Espere por favor!',
          html: '<span class="loading loading-spinner loading-lg"></span>',
          showConfirmButton: false,
        });

        const resp = await fetch(`/api/categories/${id}`, {
          method: 'DELETE',
        });
        const data = await resp.json();

        console.log(data);

        Swal.fire('Eliminado!', '', 'success');

        mutate();
      } catch (error) {
        Swal.fire('Algo succedio mal', '', 'error');
        console.log(error);
      }
    }
  };

  return (
    <section className="">
      <div className="flex justify-between">
        <h1 className="text-2xl">Categorias</h1>
        <button onClick={() => setIsCreating(true)} className="capitalize text-primary btn">
          <FaPlus />
          Agregar
        </button>
      </div>
      {isCreating && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4 form-control">
            <label htmlFor="" className="label">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button className="capitalize btn btn-primary btn-sm">Guardar</button>
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="capitalize btn btn-neutral btn-sm"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
      <table className="table">
        <thead className="">
          <tr>
            <th className="">N°</th>
            <th className="">Nombre</th>
            <th className="text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item) => (
            <tr key={item.id}>
              <th className="">{item.id}</th>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="flex justify-end gap-4">
                <button className="btn btn-info btn-sm">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(item.id!)} className="btn btn-error btn-sm">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
