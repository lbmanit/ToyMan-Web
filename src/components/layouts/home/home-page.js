import React, { lazy } from 'react';
// import Spinner from '../../../app/Spinner';
// import LazyLoad from 'react-lazyload';
const Header = lazy(() => import('./header/header'));
const Main = lazy(() => import('./main/main'));
function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
}
export default Home;
