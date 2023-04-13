import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import animatedData from './animatedData';
import '../../../../../assets/css/main/animated.css';
import Spinner from '../../../../../Spinner';
function Animated() {
  const [animated, setAnimated] = useState(animatedData);
  const animatedElement = animated.map((e) => {
    return (
      <article
        className='main-animated cursor-pointer relative m-4 overflow-hidden left-active'
        key={e.id}
      >
        <LazyLoad height={563} offset={50} once placeholder={<Spinner />}>
          <img className='animated-img' src={e.url} alt={e.title} />
        </LazyLoad>
        <div
          className={`absolute z-10 flex flex-col items-start text-white top-1/4 ${
            e.id === 1 ? 'left-2/3' : 'left-1/4'
          }`}
        >
          <h3 className='text-lg my-4'>{e.title}</h3>
          <p className='text-2xl my-4 w-40'>{e.content}</p>
          <button
            className={`animated-btn ${
              e.id === 1 ? 'animated-btn-left' : 'animated-btn-right'
            } text-lg my-4`}
          >
            {e.btn}
          </button>
        </div>
      </article>
    );
  });
  return <section className='flex justify-center'>{animatedElement}</section>;
}

export default Animated;
