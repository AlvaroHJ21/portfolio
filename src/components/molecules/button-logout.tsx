'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import { MdLogout } from 'react-icons/md';

export default function ButtonLogout() {
  return (
    <button onClick={() => signOut()} className="btn">
      <MdLogout />
    </button>
  );
}
