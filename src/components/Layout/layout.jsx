import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
