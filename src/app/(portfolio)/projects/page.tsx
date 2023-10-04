import { Metadata } from 'next';

import prisma from '@/lib/prisma';

import { Project, Category } from '@/interfaces';
// import { ProjectsListView } from '@/components/projects';
import { ProjectsGrid } from '@/components/projects/projects-grid';

export const metadata: Metadata = {
  title: 'Proyectos | Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
};

export default async function ProjectsPage() {
  // const categories = (await prisma.categories.findMany()) as Category[];

  const projects = (await prisma.projects.findMany({
    where: {
      published: true,
    },
    include: {
      categories: true,
      tecnologies: true,
    },
    orderBy: {
      priority: 'desc',
    },
  })) as Project[];

  return (
    <>
      {/* <ProjectsListView categories={categories} projects={projects} /> */}
      <ProjectsGrid projects={projects} />
    </>
  );
}
