import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from '../components/spinner';
const Home = lazy(() => import('../pages/home/home'));
const Page404 = lazy(() => import('../components/page-404'));
const Header = lazy(() => import('../components/header'));
const Footer = lazy(() => import('../components/footer'));
const ScrollPage = lazy(() => import('../components/scroll'));
const BlogList = lazy(() => import('../pages/blogs/blog-list'));
const DetailBlog = lazy(() => import('../pages/blogs/view-blog/detail-blog'));
const Collections = lazy(() => import('../pages/items/list-item'));
const DetailItem = lazy(() => import('../pages/items/detail-item'));
const ViewCart = lazy(() => import('../pages/cart/view-cart'));
const PayCart = lazy(() => import('../pages/pay/pay-cart'));
const CompletePay = lazy(() => import('../pages/pay/complete-pay'));
const Contact = lazy(() => import('../pages/contact/contact'));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Page404 />} />
          {/* <Route path='/search/:search' element={<SearchPage />} /> */}
          <Route path='/news' element={<BlogList />} />
          <Route path='/news/:id' element={<DetailBlog />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/collections/:id' element={<DetailItem />} />
          <Route path='/cart' element={<ViewCart />} />
          <Route path='/cart/checkouts' element={<PayCart />} />
          <Route path='/cart/checkouts/complete' element={<CompletePay />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollPage />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
