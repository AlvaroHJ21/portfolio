'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

import { useProjects } from '@/hooks/useProjects';

export default function ProjectPage() {
  const { projects, isLoading } = useProjects();

  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const onViewImages = (images: string[]) => {
    setCurrentImages(images);
    const dialog = document.getElementById('image_modal') as HTMLDialogElement;
    dialog.showModal();
  };

  const subDescription = (description: string) => {
    if (description.length <= 80) return description;
    return description.substring(0, 80).concat(' ...');
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p>Loading..</p>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="">
      <div className="flex justify-between">
        <h1>Proyectos</h1>
        <Link href="/dashboard/projects/create" className="capitalize text-primary btn">
          <FaPlus />
          Agregar
        </Link>
      </div>
      <table className="table table-zebra">
        <thead className="">
          <tr>
            <th className="">Imagen</th>
            <th className="">Nombre</th>
            <th className="">Descripción</th>
            <th className="">Categorias</th>
            <th className="">Tecnologias</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((item, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  height={100}
                  className="h-[100px] min-w-[100px] cursor-pointer rounded-md"
                  onClick={() => onViewImages(item.images)}
                />
              </td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{subDescription(item.description)}</td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  {item.categories.map((category) => (
                    <span key={category.id} className="badge badge-neutral whitespace-nowrap">
                      {category.name}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  {item.tecnologies.map((tecnology) => (
                    <span key={tecnology.id} className="badge badge-primary">
                      {tecnology.name}
                    </span>
                  ))}
                </div>
              </td>
              <td className="flex items-center h-[100px] gap-4">
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

      {/* Modal Image */}
      <dialog id="image_modal" className="modal">
        <form method="dialog" className="max-w-4xl modal-box">
          {currentImages.map((image, idx) => (
            <img
              key={idx}
              src={image}
              className="object-cover w-full h-full rounded-md cursor-pointer"
              alt="entry"
            />
          ))}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
}
