import React from 'react';
import Link from 'next/link';

import { FaBook, FaHome, FaUser } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import clsx from 'clsx';

import { ButtonMode } from '@/components/button';

export const NavbarBottom = () => {
  const iconSize = 16;
  const links = [
    {
      href: '/',
      label: 'Home',
      icon: <FaHome size={iconSize} />,
    },
    {
      href: '/projects',
      label: 'Portfolio',
      icon: <FaBook size={iconSize} />,
    },
    {
      href: '/about-me',
      label: 'About',
      icon: <FaUser size={iconSize} />,
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: <MdMail size={iconSize} />,
    },
  ];

  return (
    <nav className="fixed left-0 right-0 z-10 m-auto bottom-6 w-fit">
      <ul className="flex gap-4 px-6 py-2 bg-gray-300 rounded-full dark:bg-background bg-opacity-40 dark:bg-opacity-40 backdrop-blur-md dark:backdrop-blur-md">
        {links.map((link) => {
          const active = false;
          return (
            <li
              key={link.label}
              className={clsx('w-12 h-12 overflow-hidden rounded-full  transition-colors', {
                'bg-primary text-black': active,
                'text-gray-600 hover:bg-white hover:bg-opacity-50 dark:hover:bg-background dark:hover:bg-opacity-25 dark:text-gray-300':
                  !active,
              })}
            >
              <Link
                href={link.href}
                className="grid w-full h-full rounded-full place-content-center"
                aria-label={'Ir a ' + link.label}
              >
                {link.icon}
              </Link>
            </li>
          );
        })}
        <li className="grid place-content-center">
          <ButtonMode iconSize={iconSize} />
        </li>
      </ul>
    </nav>
  );
};
