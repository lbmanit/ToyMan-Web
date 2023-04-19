import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './Spinner';
import './assets/css/main/animated.css';
import './assets/css/main/feedback.css';
import './assets/css/main/questions.css';
import './assets/css/main/recentphotos.css';
import './assets/css/main/trends.css';
import './assets/css/404.css';
import './assets/css/animation.css';
import './assets/css/blog.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/item.css';
import './assets/css/search.css';
const Home = lazy(() => import('./components/layouts/home'));
const Page404 = lazy(() => import('./components/404'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/footer'));
const Blogs = lazy(() => import('./components/layouts/blog'));
const MainBlog = lazy(() => import('./components/layouts/blog/mainBlog'));
const Collections = lazy(() => import('./components/layouts/shop/collections'));
const MainItem = lazy(() => import('./components/layouts/shop/mainItem'));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/news' element={<Blogs />} />
          <Route path='/news/:id' element={<MainBlog />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/collections/:id' element={<MainItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
