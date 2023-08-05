'use client';

import Link from 'next/link';

import { FaPlus } from 'react-icons/fa';

import { useProjects } from '@/hooks/useProjects';
import { TableProjects } from '@/components/table-projects';

export default function ProjectPage() {
  const { projects, isLoading } = useProjects();

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
        <Link
          href="/dashboard/projects/create"
          className="capitalize text-primary btn"
          aria-label="Agregar proyecto"
        >
          <FaPlus />
          Agregar
        </Link>
      </div>
      <TableProjects projects={projects ?? []} />
    </section>
  );
}
