import React from 'react';
import Form from './Form';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function CreateCategoryPage() {
  return (
    <section className="">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/categories">
          <FaArrowLeft />
        </Link>
        <h1 className="text-2xl">Nueva categoría</h1>
      </div>
      <div className="shadow-xl card bg-base-100">
        <div className="card-body">
          <Form />
        </div>
      </div>
    </section>
  );
}
