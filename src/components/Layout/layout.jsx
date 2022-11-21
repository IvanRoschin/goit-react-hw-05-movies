import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavItem } from './layout.styled';
import Loader from 'components/Loader';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          {navItems.map(({ href, text }) => (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          ))}
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
