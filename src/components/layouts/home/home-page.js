import React, { lazy, Suspense } from 'react';
import Spinner from '../../../app/Spinner';
const Header = lazy(() => import('./header/header'));
const Main = lazy(() => import('./main/main'));
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
