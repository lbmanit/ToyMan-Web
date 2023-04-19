import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import greenAnimatedKid from '../../../../assets/images/headerImages/Green_Animated_Kids_Lessons_Facebook_Cover_1_e8f07e74-20b1-416e-8997-0cd8c9ada936.webp';
import h1thmb from '../../../../assets/images/headerImages/h1thmb.webp';
import animated from '../../../../assets/images/headerImages/thmb2d_836dbfe8-8883-4720-980e-39af19da7de5.webp';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../Spinner';
function Intro() {
  const backgroundIntro = {
    backgroundImage: `url(${greenAnimatedKid})`,
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    height: '750px',
  };
  const [change, setChange] = useState(true);
  return (
    <section
      className='relative flex justify-between items-center p-24 mb-24'
      style={backgroundIntro}
    >
      <div className={`${change ? 'next-intro' : 'prev-intro'}`}>
        <h1 className='w-3/5 text-4xl bg-pink text-white py-4 px-8'>
          {change ? 'New arrival' : 'Big discount'}
        </h1>
        <p className='font-black text-8xl'>
          {change ? 'ONE BOX TOY' : 'KIDS OFFER'}
        </p>
        <p className='text-2xl mt-4 mb-8'>Flat 10% Off On Order Above $29.99</p>
        <div className='flex items-center text-2xl'>
          <Link className='animated my-6' to='/collections'>
            SHOP NOW <i className='fa fa-hand-point-right'></i>
          </Link>
          <div className='m-6 text-7xl'>
            <i className='fa fa-play-circle'></i>
          </div>
        </div>
      </div>
      <LazyLoad height={200} offset={50} once placeholder={<Spinner />}>
        <img
          className={`${change ? 'next-intro' : 'prev-intro'}`}
          src={change ? animated : h1thmb}
          alt={change ? animated : h1thmb}
        />
      </LazyLoad>
      <div>
        <i
          className={`absolute z-20 cursor-pointer text-cyan bottom-6 right-1/2 mx-4 ${
            change ? 'far fa-check-circle' : 'far fa-circle'
          }`}
          onClick={() => setChange(true)}
        ></i>
        <i
          className={`absolute z-20 cursor-pointer text-cyan bottom-6 left-1/2 mx-4 ${
            change ? 'far fa-circle' : 'far fa-check-circle'
          }`}
          onClick={() => setChange(false)}
        ></i>
      </div>
    </section>
  );
}

export default Intro;
