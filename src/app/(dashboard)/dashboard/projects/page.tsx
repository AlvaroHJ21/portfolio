import React from 'react';
import { Project } from '@prisma/client';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Link from 'next/link';


export default function ProjectPage() {
  const tableItems: Project[] = [
    {
      id: 1,
      name: 'Eccomerce god',
      description: 'Esta es la descripcion del proyecto ...',
      images: [''],
      url: '',
    },
  ];
  return (
    <section className="">
      <div className='flex justify-between'>
        <h1>Proyectos</h1>
        <Link href="/dashboard/projects/create" className='capitalize text-primary btn'><FaPlus />Agregar</Link>
      </div>
      <table className="table table-zebra">
        <thead className="">
          <tr>
            <th className="">Imagen</th>
            <th className="">Nombre</th>
            <th className="">Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap">{item.images[0]}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
              <td className="flex gap-4">
                <button className="btn btn-info btn-sm"><FaEdit /></button>
                <button className="btn btn-error btn-sm"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
