'use client';

import React, { useState } from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';

import { Project } from '@/interfaces';
import Link from 'next/link';

interface Props {
  projects: Project[];
}

export const TableProjects = ({ projects }: Props) => {
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

  return (
    <>
      <table className="table table-zebra">
        <thead className="">
          <tr>
            <th className="">Imagen</th>
            <th className="">Nombre</th>
            <th className="">Descripción</th>
            <th className="">Categorias</th>
            <th className="">Tecnologias</th>
            <th className="">Publicado</th>
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
              <td className="px-6 py-4">{subDescription(item.description ?? '')}</td>
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
              <td className="px-6 py-4">
                {item.published ? (
                  <span className="badge badge-success">Publicado</span>
                ) : (
                  <span className="badge badge-neutro whitespace-nowrap">No publicado</span>
                )}
              </td>
              <td className="flex items-center h-[100px] gap-4">
                <Link href={`/dashboard/projects/edit/${item.id}`} className="btn btn-info btn-sm">
                  <FaEdit />
                </Link>
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
    </>
  );
};
