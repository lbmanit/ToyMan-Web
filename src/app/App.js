import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './Spinner';
import '../assets/css/input.css';
import '../assets/css/homepage/animated.css';
import '../assets/css/homepage/loves.css';
import '../assets/css/homepage/feedback.css';
import '../assets/css/homepage/questions.css';
import '../assets/css/homepage/recentphotos.css';
import '../assets/css/homepage/trends.css';
import '../assets/css/404.css';
import '../assets/css/animation.css';
import '../assets/css/blog.css';
import '../assets/css/shop/cart.css';
import '../assets/css/header.css';
import '../assets/css/footer.css';
import '../assets/css/shop/item.css';
import '../assets/css/search.css';
import '../assets/css/shop/size-guide.css';
import '../assets/css/shop/shipping.css';
const Home = lazy(() => import('../components/layouts/home/home-page'));
const Page404 = lazy(() => import('../components/layouts/404'));
const Navbar = lazy(() => import('../components/router/navbar'));
const Footer = lazy(() => import('../components/layouts/footer/footer'));
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
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/news' element={<BlogList />} />
          <Route path='/news/:id' element={<DetailBlog />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/collections/:id' element={<DetailItem />} />
          <Route path='/cart' element={<ViewCart />} />
          <Route path='/cart/checkouts' element={<PayCart />} />
          <Route path='/cart/checkouts/complete' element={<CompletePay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
