import React from 'react';
import { Outlet } from 'react-router-dom';
import { lazy } from 'react';
const Header = lazy(() => import('./header'));
const Footer = lazy(() => import('./footer'));
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
