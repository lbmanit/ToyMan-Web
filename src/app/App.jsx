import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from '../components/spinner';
const Layout = lazy(() => import('../components/layout'));
const Page404 = lazy(() => import('../components/page-404'));
const ScrollPage = lazy(() => import('../components/scroll'));
const HomeLayout = lazy(() => import('../components/home-layout'));
const ShopLayout = lazy(() => import('../components/shop-layout'));
const DetailItem = lazy(() => import('../pages/items/detail-item'));
const BlogLayout = lazy(() => import('../components/blog-layout'));
const DetailBlog = lazy(() => import('../pages/blogs/view-blog/detail-blog'));
const SearchPage = lazy(() => import('../pages/search/search-page'));
// const ViewCart = lazy(() => import('../pages/cart/view-cart'));
// const PayCart = lazy(() => import('../pages/pay/pay-cart'));
// const CompletePay = lazy(() => import('../pages/pay/complete-pay'));
const Contact = lazy(() => import('../pages/contact/contact'));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomeLayout />} />
            <Route path='collections'>
              <Route index element={<ShopLayout />} />
              <Route path=':id' element={<DetailItem />} />
            </Route>
            <Route path='blogs'>
              <Route index element={<BlogLayout />} />
              <Route path=':id' element={<DetailBlog />} />
            </Route>
            <Route path='search/:search' element={<SearchPage />} />
            <Route path='*' element={<Page404 />} />
          </Route>
          <Route path='contact' element={<Contact />} />
        </Routes>
        <ScrollPage />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
