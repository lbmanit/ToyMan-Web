import React from 'react';
import { useContext } from 'react';
import { ItemsContext } from '../hooks/items-context';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../components/spinner';
function RelatedItems(props) {
  const data = useContext(ItemsContext);
  const { id } = props;
  const relatedItems = () => {
    return data
      .filter((item) => item.id !== parseInt(id))
      .slice(0, 3)
      .map((item, index) => {
        return (
          <article key={index} className='mx-8 my-2 relative'>
            <Link to={`/collections/${item.id}`}>
              <LazyLoad offset={100} once placeholder={<Spinner />}>
                <img
                  className='rounded-2xl'
                  src={item.avatarUrl}
                  alt={item.title}
                />
              </LazyLoad>
            </Link>
            <p className='product-name-action text-2xl mt-4'>{item.title}</p>
            <p className='text-xl font-semibold my-2'>
              <span
                className={`${
                  item.details.mod === 'SALE'
                    ? 'text-gray text-base line-through'
                    : 'text-cyan'
                }`}
              >
                {' '}
                $ {item.price}
              </span>{' '}
              {item.details.mod === 'SALE' && (
                <span className='text-cyan'>$ {item.salePrice}</span>
              )}
            </p>
            <h3 className='text-xl'>
              {item.details.rate} / 5 <i className='text-yellow fa fa-star'></i>
            </h3>
            {item.details.mod && (
              <h3
                className={`absolute rounded-2xl text-white py-1 px-6 z-50 ${
                  item.details.mod === 'SALE' ? 'sale-mod' : 'new-mod'
                }`}
              >
                {item.details.mod}
              </h3>
            )}
          </article>
        );
      });
  };
  return (
    <section className='container m-auto jumpActive mb-16'>
      <div>
        <h1 className='text-3xl mt-16 text-center font-semibold'>
          You May Also Like
        </h1>
        <h3 className='text-xl m-8 text-center text-cyan'>Related Products</h3>
      </div>
      <div className='flex'>{relatedItems()}</div>
    </section>
  );
}

export default RelatedItems;
