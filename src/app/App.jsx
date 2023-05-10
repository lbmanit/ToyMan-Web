import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './Spinner';
const Home = lazy(() => import('../components/layouts/home/home-page'));
const Page404 = lazy(() => import('../components/layouts/404'));
const Navbar = lazy(() => import('../components/router/navbar'));
const Footer = lazy(() => import('../components/layouts/footer/footer'));
const ScrollPage = lazy(() => import('../components/layouts/scroll'));
const SearchPage = lazy(() =>
  import('../components/layouts/search-page/search-page')
);
const BlogList = lazy(() =>
  import('../components/layouts/blog/view-blog/blog-list')
);
const DetailBlog = lazy(() =>
  import('../components/layouts/blog/view-blog/detail-blog')
);
const Collections = lazy(() =>
  import('../components/layouts/shop/collections')
);
const DetailItem = lazy(() => import('../components/layouts/shop/detail-item'));
const ViewCart = lazy(() => import('../components/layouts/cart/view-cart'));
const PayCart = lazy(() => import('../components/modules/pay/pay-cart'));
const CompletePay = lazy(() =>
  import('../components/modules/pay/complete-pay')
);
const Contact = lazy(() => import('../components/layouts/contact/contact'));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/search/:search' element={<SearchPage />} />
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
