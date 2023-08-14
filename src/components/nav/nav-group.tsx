import React from 'react';
import { NavItem, type Item } from './nav-item';

interface Props {
  path: string;
  items: Item[];
}

export const NavGroup = ({ path, items }: Props) => {
  return (
    <>
      {items.map((item, index) => (
        <NavItem key={item.slug} path={path} item={item} />
      ))}
    </>
  );
};
