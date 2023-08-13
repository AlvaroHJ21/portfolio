'use client';
import { signOut } from 'next-auth/react';
import React from 'react';
import { MdLogout } from 'react-icons/md';

export const ButtonLogout = () => {
  return (
    <button onClick={() => signOut()} className="btn">
      <MdLogout />
    </button>
  );
};
