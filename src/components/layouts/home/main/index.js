import React, { Suspense, lazy } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../Spinner';
const Categories = lazy(() => import('./category/categories'));
const Items = lazy(() => import('./trends/trends'));
const Animated = lazy(() => import('./animated/Animated'));
const FeedBack = lazy(() => import('./feedback/feedBack'));
const Loves = lazy(() => import('./loves/loves'));
const RecentPhotos = lazy(() => import('./recentphotos/recentPhotos'));
const Questions = lazy(() => import('./questions/questions'));
const Sponsors = lazy(() => import('./sponsors/sponsors'));
function Main() {
  return (
    <Suspense fallback={<Spinner />}>
      <main>
        <Categories />
        <LazyLoad height={563} offset={50} once placeholder={<Spinner />}>
          <Items />
        </LazyLoad>
        <LazyLoad height={563} offset={50} once placeholder={<Spinner />}>
          <Animated />
        </LazyLoad>
        <LazyLoad height={563} offset={50} once placeholder={<Spinner />}>
          <FeedBack />
        </LazyLoad>
        <LazyLoad height={563} offset={50} once placeholder={<Spinner />}>
          <Loves />
        </LazyLoad>
        <LazyLoad height={563} offset={50} once placeholder={<Spinner />}>
          <RecentPhotos />
        </LazyLoad>
        <LazyLoad height={563} offset={50} once placeholder={<Spinner />}>
          <Questions />
        </LazyLoad>
        <LazyLoad height={563} offset={50} once placeholder={<Spinner />}>
          <Sponsors />
        </LazyLoad>
      </main>
    </Suspense>
  );
}

export default Main;
