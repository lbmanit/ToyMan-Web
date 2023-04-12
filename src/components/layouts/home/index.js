import React, { lazy, Suspense } from 'react';
import Spinner from '../../../Spinner';
const Header = lazy(() => import('../home/header/index'));
const Main = lazy(() => import('../home/main/index'));
function Home() {
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Main />
    </Suspense>
  );
}

export default Home;
