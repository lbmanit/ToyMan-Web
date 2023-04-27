import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import feedBackData from '../../../../../data/feedback-data';
import Spinner from '../../../../../app/Spinner';

function FeedBack() {
  const [users, setUsers] = useState(feedBackData);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const endIndex = currentSlide + 2;
  const nextSlide = () => {
    const newIndex = currentSlide === 0 ? users.length - 2 : currentSlide - 1;
    setCurrentSlide(newIndex);
    setSlideLeft(false);
    setSlideRight(true);
    setTimeout(() => {
      setSlideRight(false);
    }, 500);
  };

  const prevSlide = () => {
    const newIndex = currentSlide === users.length - 2 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
    setSlideLeft(true);
    setSlideRight(false);
    setTimeout(() => {
      setSlideLeft(false);
    }, 500);
  };
  const feedBackUsers = users.slice(currentSlide, endIndex).map((user) => {
    return (
      <article
        className={`${slideLeft ? 'left-active' : ''} ${
          slideRight ? 'right-active' : ''
        } feedback-users w-1/2 m-4 p-8`}
        key={user.id}
      >
        <div className='relative flex items-center'>
          <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
            <img src={user.avatarUser} alt={user.name} />
          </LazyLoad>
          <div className='m-4'>
            <h1 className='text-xl font-semibold'>{user.name}</h1>
            <h1>
              {user.voteRate} / 5 <i className='text-yellow fa fa-star'></i>
            </h1>
          </div>
          <i className='absolute fa fa-quote-right text-5xl top-4 right-4 text-gray opacity-50'></i>
        </div>
        <p className='mt-8 text-base'>{user.content}</p>
      </article>
    );
  });

  return (
    <section className='container m-auto right-active'>
      <h1 className='text-3xl text-center mt-24'>Customer Saying</h1>
      <h3 className='text-xl text-center text-cyan m-8'>
        Customer Testimonials
      </h3>
      <div className='relative'>
        <div className='flex'>{feedBackUsers}</div>
        <div className='feedback-slide-btn cursor-pointer'>
          <i
            className='feedback-slide-btn-left far fa-arrow-alt-circle-left absolute text-5xl'
            onClick={prevSlide}
          ></i>
          <i
            className='feedback-slide-btn-right far fa-arrow-alt-circle-right absolute text-5xl'
            onClick={nextSlide}
          ></i>
        </div>
      </div>
    </section>
  );
}

export default FeedBack;
