import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Spinner from '../../../../../app/Spinner';
import useFetch from '../../customHooks/useFetch';
import urlAnimatedData from '../../../../../data/animated-data.JSON';
function Animated() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const { data } = useFetch(urlAnimatedData);
  const animatedElement = data.map((e, index) => {
    const styleHover = {
      transform: hoverIndex === index ? 'scale(1.2)' : 'none',
    };
    return (
      <article
        className='main-animated cursor-pointer relative m-4 overflow-hidden left-active'
        key={e.id}
        onMouseOver={() => setHoverIndex(index)}
        onMouseOut={() => setHoverIndex(null)}
      >
        <LazyLoad offset={100} once placeholder={<Spinner />}>
          <img
            className='animated-img'
            src={e.url}
            alt={e.title}
            style={styleHover}
          />
        </LazyLoad>
        <div
          className={`absolute z-10 flex flex-col items-start text-white top-1/4 ${
            e.id === 1 ? 'left-2/3' : 'left-1/4'
          }`}
        >
          <h3 className='text-lg my-4'>{e.title}</h3>
          <p className='text-2xl my-4 w-40'>{e.content}</p>
          <Link
            className={`animated-btn ${
              e.id === 1 ? 'animated-btn-left' : 'animated-btn-right'
            } text-lg my-4`}
            to='/collections'
          >
            {e.btn}
          </Link>
        </div>
      </article>
    );
  });
  return (
    <section className='flex justify-center my-8'>{animatedElement}</section>
  );
}

export default Animated;
