import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default async function Layout({ children }: any) {
  const session = await getServerSession();

  if (!session) return redirect('/api/auth/signin');

  return children;
}
