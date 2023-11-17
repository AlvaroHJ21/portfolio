'use client';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/util';

interface Props {
  text?: string;
  position?: 'left' | 'right';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Dropdown(props: Props) {
  const { icon, text, children, position = 'right', className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as HTMLElement)) {
        setIsOpen(false);
      }
    }
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className='p-4 text-white rounded-full bg-primary' aria-label='button dropdown'>
        {text} {icon}
      </button>
      {isOpen && (
        <ul
          className={cn(
            'absolute z-20 rounded-box',
            position === 'left' ? 'left-0' : 'right-0',
            className
          )}
        >
          {children}
        </ul>
      )}
    </div>
  );
}
