import React, { lazy } from 'react';
import { Suspense } from 'react';
import Spinner from '../../../app/Spinner';
// import LazyLoad from 'react-lazyload';
const Header = lazy(() => import('./header/header'));
const Main = lazy(() => import('./main/main'));
function Home() {
  return (
    <Suspense fallback={<Spinner />}>
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    </Suspense>
  );
}
export default Home;
