import React, { lazy, Suspense } from 'react';
import Spinner from '../../../Spinner';
const Header = lazy(() => import('../home/header/index'));
const Main = lazy(() => import('../home/main/index'));
function Home() {
  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Main />
      </Suspense>
    </React.Fragment>
  );
}
export default Home;
