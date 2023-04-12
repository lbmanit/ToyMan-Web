import React, { lazy, Suspense } from 'react';
import Spinner from './Spinner';
const Header = lazy(() => import('./components/header'));
const Main = lazy(() => import('./components/main'));
const Footer = lazy(() => import('./components/footer'));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Main />
      <Footer />
    </Suspense>
  );
}

export default App;
