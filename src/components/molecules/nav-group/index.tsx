import React from 'react';
import NavGroupItem, { type Item } from './item';

interface Props {
  path: string;
  items: Item[];
}

export default function NavGroup({ path, items }: Props) {
  return (
    <>
      {items.map((item, index) => (
        <NavGroupItem key={item.slug} path={path} item={item} />
      ))}
    </>
  );
}
