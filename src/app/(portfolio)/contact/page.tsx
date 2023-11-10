import { Metadata } from 'next';

import Contact from '@/components/organisms/contact';

export const metadata: Metadata = {
  title: 'Contacto | Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
};

export default function ContactPage() {
  return <Contact />;
}
