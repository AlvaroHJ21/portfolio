import { Metadata } from 'next';
import { headers } from 'next/headers';

import prisma from '@/lib/prisma';

import { Project, Category, ApiResponse } from '@/interfaces';
// import { ProjectsListView } from '@/components/projects';
import { ProjectsGrid } from '@/components/organisms/projects/projects-grid';
import http from '@/lib/http';

export const metadata: Metadata = {
  title: 'Proyectos | Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
};

// async function getProjects(): Promise<Project[]> {
//   const host = headers().get('host');
//   const { data } = await http.get<ApiResponse<Project[]>>(`http://${host}/api/projects`);
//   console.log('obteniendo proyectos...');
//   return data.data;
// }

export const revalidate = 360;

export default async function ProjectsPage() {
  // const categories = (await prisma.categories.findMany()) as Category[];

  // const projects = await getProjects();

  // console.log('obteniendo proyectos...');
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
