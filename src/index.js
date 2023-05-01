import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';
import { CartProvider } from './components/context/cart-context';
import { WishProvider } from './components/context/wish-context';
import './assets/css/input.css';
import './assets/css/homepage/animated.css';
import './assets/css/homepage/loves.css';
import './assets/css/homepage/feedback.css';
import './assets/css/homepage/questions.css';
import './assets/css/homepage/recentphotos.css';
import './assets/css/homepage/trends.css';
import './assets/css/404.css';
import './assets/css/animation.css';
import './assets/css/blog.css';
import './assets/css/shop/cart.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/shop/item.css';
import './assets/css/search.css';
import './assets/css/shop/size-guide.css';
import './assets/css/shop/shipping.css';
import './assets/css/wish-list.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <WishProvider>
        <App />
      </WishProvider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
