import Link from 'next/link';
import { ButtonLogout } from '../button';

export const NavbarDashboard = () => {
  const links = [
    {
      name: 'Proyectos',
      to: '/dashboard/projects',
    },
    {
      name: 'Categorías',
      to: '/dashboard/categories',
    },
    {
      name: 'Tecnologías',
      to: '/dashboard/tecnologies',
    },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.to} aria-label={link.name}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a href="/" className="text-xl normal-case btn btn-ghost">
          Admin
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.to} aria-label={link.name}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <ButtonLogout />
      </div>
    </div>
  );
};
