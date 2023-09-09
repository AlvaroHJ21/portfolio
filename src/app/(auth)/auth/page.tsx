'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Logo } from '@/components/ui/logo';
import { Button, ButtonMode } from '@/components/ui';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn('credentials', {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: '/dashboard', // si quisiera para que redirija a la pagina de inicio
      // si quisiera que redirija a la pagina solicitada

      // callbackUrl: '/dashboard',
    });
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen px-4">
      <div className="w-full max-w-sm text-gray-600 dark:text-white">
        <div className="text-center">
          <div className="flex items-center justify-between gap-4 mb-6">
            <Logo />
            <ButtonMode iconSize={20} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
              className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none dark:border-gray-700 focus:border-indigo-600"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none dark:border-gray-700 focus:border-indigo-600"
            />
          </div>
          {/* <button className="w-full px-4 py-2 font-medium text-white duration-150 rounded-lg bg-primary hover:bg-indigo-500 active:bg-indigo-600">
            Sign in
          </button> */}
          <Button text="Sig in" className='w-full' />
        </form>
      </div>
    </main>
  );
}
