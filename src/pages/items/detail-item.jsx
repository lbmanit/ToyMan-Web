import React, { useState, useContext } from 'react';
import LazyLoad from 'react-lazyload';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../cart/hooks/cart-context';
import { WishContext } from '../wish/hooks/wish-context';
import SizeGuide from './view-item/size-guide';
import Shipping from './view-item/shipping';
import Reassurance from './view-item/reassurance';
import Description from './view-item/description';
import RelatedItems from './view-item/related-items';
import PromotionVideo from './view-item/promotion-video';
import { ItemsContext } from './hooks/items-context';
function DetailItem() {
  const dataItems = useContext(ItemsContext);
  const { handleAddToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishContext);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const mainItem = dataItems.find((item) => parseInt(item.id) === parseInt(id));
  const { avatarUrl, title, price, salePrice, details } = mainItem;
  const [isDisplaySize, setIsDisplaySize] = useState(false);
  const [isDisplayShipping, setIsDisplayShipping] = useState(false);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount <= 1) {
        return 1;
      } else {
        return prevCount - 1;
      }
    });
  };

  function handleChange(event) {
    setCount(parseInt(event.target.value));
  }
  return (
    <React.Fragment>
      <div className='text-lg flex items-center font-bold nav-collections left-active'>
        <div className='container m-auto flex items-center'>
          <Link className='text-cyan' to='/'>
            Home
          </Link>
          <h1 className='text-cyan mx-2'>/</h1>
          <h1 className='text-pink'>{title}</h1>
        </div>
      </div>
      <article className='container m-auto flex my-16 left-active'>
        <LazyLoad className='w-1/2' offset={100} once>
          <img src={avatarUrl} alt={title} />
        </LazyLoad>
        <div className='w-1/2 px-8'>
          <h1 className='text-4xl font-medium'>{title}</h1>
          <div className={'text-cyan text-2xl my-2 flex items-center'}>
            <h2
              className={`${
                details.mod === 'SALE' ? 'text-gray text-base line-through' : ''
              } mr-8`}
            >
              $ {price}
            </h2>
            <h2>{details.mod === 'SALE' ? `$ ${salePrice}` : ''}</h2>
          </div>
          <h3 className='text-xl'>
            {details.rate} / 5 <i className='fa fa-star text-yellow'></i>
          </h3>
          <h3 className='text-lg font-bold my-2'>SKU: {id}</h3>
          <h3 className='text-lg font-bold'>Vendor: {details.Vendor}</h3>
          <p className='text-base my-4'>{details.describe}</p>
          <div className='flex text-base cursor-pointer'>
            <div className='flex justify-between items-center mr-4'>
              <i className='fa fa-paw mr-2'></i>
              <button onClick={() => setIsDisplaySize(true)}>Size Guide</button>
            </div>
            <div className='flex justify-between items-center mx-4'>
              <i className='fa fa-plane mr-2'></i>
              <button onClick={() => setIsDisplayShipping(true)}>
                Shipping
              </button>
            </div>
            <div className='flex justify-between items-center mx-4'>
              <i className='fa fa-question-circle mr-2'></i>
              <button>Ask About This Product</button>
            </div>
          </div>
          <div className='input-item text-center my-8'>
            <div className='flex items-center rounded-2xl'>
              <div className='text-xl flex justify-between py-2 px-4 my-4 input-count'>
                <button className='cursor-pointer' onClick={handleDecrement}>
                  -
                </button>
                <h1 onChange={handleChange}>{parseInt(count)}</h1>
                <button className='cursor-pointer' onClick={handleIncrement}>
                  +
                </button>
              </div>
              <button
                className='cursor-pointer text-center text-xl add-item ml-8 p-2 hover:bg-pink'
                onClick={() => handleAddToCart(mainItem, count)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div
            className='cursor-pointer flex items-center text-lg my-4'
            onClick={() => addToWishList(mainItem)}
          >
            <i className='fa fa-heart'></i>
            <h1 className='mx-2 my-4'>Add to wishlist</h1>
          </div>
          <Reassurance />
        </div>
      </article>
      <LazyLoad offset={100} once>
        <Description />
      </LazyLoad>
      <LazyLoad offset={100} once>
        <PromotionVideo />
      </LazyLoad>
      <LazyLoad offset={100} once>
        <RelatedItems id={id} />
      </LazyLoad>
      {isDisplaySize && (
        <section className='fixed size-guide flex justify-center items-center downActive'>
          <div className='p-8 font-black rounded-lg'>
            <i
              className='fa fa-times cursor-pointer flex justify-center items-center ml-auto mb-4 p-2'
              onClick={() => setIsDisplaySize(false)}
            ></i>
            <SizeGuide />
          </div>
        </section>
      )}
      {isDisplayShipping && (
        <section className='fixed shipping flex justify-center items-center downActive'>
          <div className='p-8 font-black bg-white rounded-lg'>
            <i
              className='fa fa-times cursor-pointer flex justify-center items-center ml-auto mb-4 p-2'
              onClick={() => setIsDisplayShipping(false)}
            ></i>
            <Shipping />
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default DetailItem;
