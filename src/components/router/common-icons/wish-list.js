import React from 'react';
import { useContext } from 'react';
import { WishContext } from '../../context/wish-context';
import { CartContext } from '../../context/cart-context';
import LazyLoad from 'react-lazyload';

function WishList(props) {
  const { handleDisplayWish } = props;
  const { handleAddToCart } = useContext(CartContext);
  const { wishList, removeWishList } = useContext(WishContext);
  const WishItems = wishList.map((item, index) => {
    return (
      <LazyLoad offset={100} once>
        <article key={index}>
          <div className='flex items-center mt-8'>
            <img className='w-1/3 mr-8' src={item.avatarUrl} alt={item.title} />
            <div className='w-2/3'>
              <div>
                <h1 className='text-xl font-bold'>{item.title}</h1>
                <h1 className='text-cyan text-lg'>
                  $ {item.details.mod === 'SALE' ? item.salePrice : item.price}
                </h1>
              </div>
              <div className='flex flex-col'>
                <button
                  className='w-1/2 text-lg bg-cyan text-white rounded-2xl py-1 my-2'
                  onClick={() => handleAddToCart(item, 1)}
                >
                  Add To Cart
                </button>
                <button
                  className='w-1/2 text-lg bg-pink text-white rounded-2xl py-1 my-2'
                  onClick={() => removeWishList(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </article>
      </LazyLoad>
    );
  });
  return (
    <section className='wish-list p-16 right-active'>
      <div className='fixed flex flex-col justify-center items-center px-8'>
        <div className='w-full flex justify-between items-center border-b-2 border-b-grayDark'>
          <h1 className='text-3xl font-bold'>Wish List</h1>
          <i
            className='text-4xl cursor-pointer fa fa-times text-grayDark hover:text-cyan'
            onClick={handleDisplayWish}
          ></i>
        </div>
        {WishItems.length === 0 && (
          <p className='text-xl my-4'>Your wish list is empty right now!</p>
        )}
        {WishItems.length !== 0 && (
          <div className='flex flex-col'>{WishItems}</div>
        )}
      </div>
    </section>
  );
}

export default WishList;
