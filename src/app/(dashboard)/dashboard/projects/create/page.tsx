import prisma from '@/lib/prisma';
import Form from './Form';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default async function CreateProjectPage() {
  const categories = await prisma.category.findMany();

  return (
    <section className="">
      <div className='flex items-center gap-4'>
        <Link href="/dashboard/projects">
          <FaArrowLeft />
        </Link>
        <h1 className="text-2xl">Nuevo projecto</h1>
      </div>
      <div className="shadow-xl card bg-base-100">
        <div className="card-body">
          <Form categories={categories} />
        </div>
      </div>
    </section>
  );
}
