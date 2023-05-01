import React, { lazy } from 'react';
import { Suspense } from 'react';
import Spinner from '../../../app/Spinner';
import LazyLoad from 'react-lazyload';
const Header = lazy(() => import('./header/header'));
const Main = lazy(() => import('./main/main'));
function Home() {
  return (
    <Suspense fallback={<Spinner />}>
      <React.Fragment>
        <LazyLoad height={100} once placeholder={<Spinner />}>
          <Header />
        </LazyLoad>
        <LazyLoad height={100} once placeholder={<Spinner />}>
          <Main />
        </LazyLoad>
      </React.Fragment>
    </Suspense>
  );
}
export default Home;
