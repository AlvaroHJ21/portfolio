import prisma from '@/lib/prisma';
import { projects as PrismaProject } from '@prisma/client';
import { Project } from '@/interfaces';
import { ProjectView } from '@/containers/projects/project-view';

export async function generateStaticParams() {
  const projects = (await prisma.projects.findMany({})) as PrismaProject[];

  return projects.map((project) => {
    return {
      id: project.id.toString(),
    };
  });
}

async function getProject(id: string) {
  const project = await prisma.projects.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      categories: true,
      tecnologies: true,
    },
  });

  return project as Project;
}

interface Props {
  params: {
    id: string;
  };
}

export default async function ProyectPage({ params }: Props) {
  const project = await getProject(params.id);

  return <ProjectView project={project} />;
}
