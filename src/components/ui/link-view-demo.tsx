'use client';
import React from 'react';
import { useCursor } from '.';
import { TbExternalLink } from 'react-icons/tb';

export const LinkViewDemo = ({ url }: { url: string }) => {
  const { setMouseConfig } = useCursor();
  return (
    <a
      onMouseOver={() => setMouseConfig({ variant: 'focus-content', content: 'Ver Demo' })}
      href={url}
      target="_blank"
      className="absolute flex items-center gap-2 p-2 text-white rounded-md bottom-2 left-2 bg-main hover:opacity-95"
    >
      <TbExternalLink size={20} /> Ver Demo
    </a>
  );
};
