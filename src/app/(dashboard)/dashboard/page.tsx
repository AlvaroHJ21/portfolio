// 'use client';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session) return redirect('/api/auth/signin');

  redirect('/dashboard/projects');
  // const router = useRouter();
  // useEffect(() => {
  // router.push('/dashboard/projects');
  // }, []);
  // return <div>Redirigiendo...</div>;
}
