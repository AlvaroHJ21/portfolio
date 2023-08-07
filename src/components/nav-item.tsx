import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import clsx from 'clsx';

export interface Item {
  text: string;
  slug?: string;
}

interface Props {
  path: string;
  item: Item;
}

export const NavItem = ({ path, item }: Props) => {
  const segment = useSelectedLayoutSegment();

  const href = path + '/' + item.slug;

  const active = segment === item.slug || (segment == null && item.slug == '');

  // console.log({ slug: item.slug, active });

  // console.log(href);

  return (
    <Link
      href={href}
      className={clsx(
        'px-4 py-2 transition-all border-b-2  hover:text-main dark:hover:text-[#95AAF4]',
        {
          'border-b-main text-main dark:text-[#95AAF4]': active,
          'border-b-transparent text-black dark:text-white': !active,
        }
      )}
      aria-label={item.text}
    >
      {item.text}
    </Link>
  );
};
