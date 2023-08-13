import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: '',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // console.log('credentials', credentials);

        if (credentials?.username === 'alvarohj21' && credentials.password === 'alvaro1921') {
          return {
            id: '1',
            username: 'alvarohj21',
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
};
