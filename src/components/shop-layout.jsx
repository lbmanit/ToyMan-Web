import React from 'react';
import Collections from '../pages/items/list-item';
import { Outlet } from 'react-router-dom';
function ShopLayout() {
  return (
    <>
      <Collections />
      <Outlet />
    </>
  );
}

export default ShopLayout;
