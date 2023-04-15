import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './Spinner';
import './assets/css/animation.css';
import './assets/css/header.css';
const Home = lazy(() => import('./components/layouts/home'));
const Page404 = lazy(() => import('./components/404'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/footer'));
const Blog = lazy(() => import('./components/layouts/blog'));
const BlogDetail = lazy(() => import('./components/layouts/blog/blogDetail'));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/news' element={<Blog />} />
          <Route path='/news/:id' element={<BlogDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
