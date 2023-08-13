import Link from 'next/link';
import React from 'react';

export const Logo = () => {
  return (
    <div className="">
      <Link
        href="/"
        className="left-0 py-2 text-black text-20 dark:text-white"
        aria-label="Ir a Inicio"
      >
        <span className="font-bold text-main text-[1.8rem]">{'>_'}</span>
        Alvaro<span className="font-black ">HJ</span>
      </Link>
    </div>
  );
};
