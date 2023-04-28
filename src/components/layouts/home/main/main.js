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
        <LazyLoad height={400} offset={100} once placeholder={<Spinner />}>
          <Categories />
        </LazyLoad>
        <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
          <Trends />
        </LazyLoad>
        <LazyLoad height={350} offset={100} once placeholder={<Spinner />}>
          <Animated />
        </LazyLoad>
        <LazyLoad height={450} offset={75} once placeholder={<Spinner />}>
          <FeedBack />
        </LazyLoad>
        <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
          <Loves />
        </LazyLoad>
        <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
          <RecentPhotos />
        </LazyLoad>
        <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
          <Questions />
        </LazyLoad>
        <LazyLoad height={100} offset={100} once placeholder={<Spinner />}>
          <Sponsors />
        </LazyLoad>
      </main>
    </Suspense>
  );
}

export default Main;
