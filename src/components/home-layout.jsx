import React from 'react';
import Intro from '../pages/home/Intro';
import Categories from '../pages/home/category/categories';
import Trends from '../pages/home/trends/trends';
import Animated from '../pages/home/animated';
import FeedBack from '../pages/home/feedback';
import Loves from '../pages/home/loves';
import RecentPhotos from '../pages/home/recent-photos';
import Questions from '../pages/home/questions/questions';
import Sponsors from '../pages/home/sponsors';
import LazyLoad from 'react-lazyload';
import Spinner from './spinner';
function HomeLayout() {
  return (
    <>
      <LazyLoad offset={100} once placeholder={<Spinner />}>
        <Intro />
      </LazyLoad>
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
    </>
  );
}

export default HomeLayout;
