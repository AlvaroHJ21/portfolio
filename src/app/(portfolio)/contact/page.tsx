import { Contact } from '@/components/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
};

export default function ContactPage() {
  return <Contact />;
}
