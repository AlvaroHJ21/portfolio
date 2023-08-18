import networkLinks from '@/data/networkLinks';
import React from 'react';

export const IconLineGroup = () => {
  return (
    <div className="absolute left-0 flex-col items-center hidden gap-4 text-gray-400 sm:flex dark:text-gray-500 bottom-12">
      <ul className="flex flex-col gap-1">
        {networkLinks.map((link) => (
          <li
            key={link.name}
            className="transition-colors scale-50 hover:text-black dark:hover:text-white"
          >
            <a href={link.url} target="_blank" aria-label={link.name}>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-px h-10 bg-current"></div>
    </div>
  );
};