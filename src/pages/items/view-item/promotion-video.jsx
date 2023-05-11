import React from 'react';
import vb_img from '../../../assets/images/children/vb.webp';
function PromotionVideo() {
  return (
    <section
      className='container m-auto py-32 my-16 rounded-md right-active'
      style={{
        backgroundImage: `url(${vb_img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl'>We Have Everything You Need</h1>
        <p className='text-lg m-8'>
          Contrary to popular belief, Lorem Ipsum is popular belief not simply
          random text popular belief.
        </p>
        <i className='my-4 flex justify-center items-center promotion fa fa-play'></i>
      </div>
    </section>
  );
}

export default PromotionVideo;
