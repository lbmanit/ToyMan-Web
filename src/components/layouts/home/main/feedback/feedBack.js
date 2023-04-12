import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import feedBackData from './feedBackData';
import '../../../../../assets/css/main/feedback/feedback.css';
import Spinner from '../../../../../Spinner';

function FeedBack() {
  const [users, setUsers] = useState(feedBackData);
  const [slideActive, setSlideActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const endIndex = currentSlide + 2;
  const nextSlide = () => {
    setSlideActive(true);
    const newIndex = currentSlide === 0 ? users.length - 2 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    setSlideActive(true);
    const newIndex = currentSlide === users.length - 2 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };
  const feedBackUsers = users.slice(currentSlide, endIndex).map((user) => {
    return (
      <article className='feedback-users w-1/2 m-4 p-8' key={user.id}>
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
    <section className='container m-auto'>
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
