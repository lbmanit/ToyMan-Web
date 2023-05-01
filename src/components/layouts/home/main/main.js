import React, { lazy, Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../app/Spinner';
const Categories = lazy(() => import('./category/categories'));
const Trends = lazy(() => import('./trends/trends'));
const Animated = lazy(() => import('./animated/animated'));
const FeedBack = lazy(() => import('./feedback/feedback'));
const Loves = lazy(() => import('./loves/loves'));
const RecentPhotos = lazy(() => import('./recentphotos/recent-photos'));
const Questions = lazy(() => import('./questions/questions'));
const Sponsors = lazy(() => import('./sponsors/sponsors'));
function Main() {
  return (
    <Suspense fallback={<Spinner />}>
      <main>
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <Categories />
        </LazyLoad>
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <Trends />
        </LazyLoad>
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <Animated />
        </LazyLoad>
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <FeedBack />
        </LazyLoad>
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <Loves />
        </LazyLoad>
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <RecentPhotos />
        </LazyLoad>
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <Questions />
        </LazyLoad>
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <Sponsors />
        </LazyLoad>
      </main>
    </Suspense>
  );
}

export default Main;
