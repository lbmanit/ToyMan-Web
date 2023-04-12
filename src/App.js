import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/layouts/home';
import Page404 from './components/layouts/404';
import Navbar from './components/Navbar';
import Footer from './components/footer';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
