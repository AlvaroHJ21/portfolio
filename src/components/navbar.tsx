'use client';

import { useState } from 'react';
import Link from 'next/link';

import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import clsx from 'clsx';

import { ButtonMode } from '@/components/ui/button/button-mode';
import { NavGroup } from '@/components/nav-group';
import navLinks from '@/data/navLinks';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full text-white backdrop-blur">
        <div className="max-w-[1200px] flex justify-between w-[90%] m-auto item-center">
          {/* Icono */}
          <div className="min-h-[64px] flex items-center justify-end">
            <Link
              href="/"
              className="left-0 py-2 text-black text-20 dark:text-white"
              aria-label="Ir a Inicio"
            >
              <span className="font-bold text-main text-[1.8rem]">{'>_'}</span>
              Alvaro<span className="font-black ">HJ</span>
            </Link>
          </div>

          {/* Menú item */}
          <div className="md:hidden min-h-[64px] flex items-center">
            {isOpen ? (
              <AiOutlineClose
                onClick={handleClickMenu}
                className="p-2 cursor-pointer text-main dark:text-white"
                size={44}
              />
            ) : (
              <HiOutlineMenuAlt3
                onClick={handleClickMenu}
                className="p-2 cursor-pointer text-main dark:text-white"
                size={44}
              />
            )}
          </div>

          {/* Links */}
          <nav className="hidden text-right md:flex md:items-center">
            <NavGroup path="" items={navLinks} />
            <div className="ml-4">
              <ButtonMode />
            </div>
          </nav>
        </div>
      </nav>

      {/* Menu hamburguesa */}
      <div
        onClick={() => setIsOpen(false)}
        className={clsx(
          'fixed top-0 z-40 bg-black h-screen md:hidden backdrop-blur-sm transition-opacity bg-opacity-60',
          {
            'w-full': isOpen,
            'w-0': !isOpen,
          }
        )}
      >
        <div
          className={clsx(
            'absolute right-0 flex  flex-col items-center justify-center gap-2 h-full top-0  transition-all',
            {
              'w-full': isOpen,
              'w-0 overflow-hidden': !isOpen,
            }
          )}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              className="px-4 py-2 font-bold text-center text-white rounded-full text-20 hover:bg-main"
              href={'/' + link.slug}
            >
              {link.text}
            </a>
          ))}
          <div className="p-2">
            <ButtonMode iconSize={32} />
          </div>
        </div>
      </div>
    </>
  );
};
