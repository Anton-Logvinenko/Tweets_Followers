import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import css from './Layout.module.css';

export default function Layout  ()  {
  return (
    <>
      <header>
        <nav className={css.navigate}>
          <Link className={css.link} to="/">
           
            Home
          </Link>
          <Link className={css.link} to="/tweets">
                       Tweets
          </Link>
        </nav>
      </header>
      <main>
      <Suspense fallback={<div className={css.loding}>Loding...</div>}>
        <Outlet />
      </Suspense>
      </main>
   
    </>
  );
};
