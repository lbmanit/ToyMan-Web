import React from 'react';
import Spinner from '../../../app/Spinner';
import LazyLoad from 'react-lazyload';
import Header from './header/header';
import Main from './main/main';
function Home() {
  return (
    <React.Fragment>
      <LazyLoad height={100} once placeholder={<Spinner />}>
        <Header />
      </LazyLoad>
      <LazyLoad height={100} once placeholder={<Spinner />}>
        <Main />
      </LazyLoad>
    </React.Fragment>
  );
}
export default Home;
