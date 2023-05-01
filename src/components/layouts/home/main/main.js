import React, { lazy, Suspense } from 'react';
// import LazyLoad from 'react-lazyload';
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
        <Categories />
        <Trends />
        <Animated />
        <FeedBack />
        <Loves />
        <RecentPhotos />
        <Questions />
        <Sponsors />
      </main>
    </Suspense>
  );
}

export default Main;
