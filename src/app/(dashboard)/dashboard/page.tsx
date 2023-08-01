// 'use client';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  redirect('/dashboard/projects');
  // const router = useRouter();
  // useEffect(() => {
  // router.push('/dashboard/projects');
  // }, []);
  // return <div>Redirigiendo...</div>;
}
