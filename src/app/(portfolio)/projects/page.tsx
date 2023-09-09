import { Metadata } from 'next';

import prisma from '@/lib/prisma';

import { Project, Category } from '@/interfaces';
import { ProjectsView } from '@/containers/projects';

export const metadata: Metadata = {
  title: 'Proyectos | Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
};

export default async function ProjectsPage() {
  const categories = (await prisma.categories.findMany()) as Category[];

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

  return <ProjectsView categories={categories} projects={projects} />;
}
