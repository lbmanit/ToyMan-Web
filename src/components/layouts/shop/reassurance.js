import React from 'react';
function Reassurance() {
  return (
    <div className='border border-gray rounded-xl p-2'>
      <div className='flex justify-between items-center'>
        <div className='w-1/2 flex justify-start items-center p-4'>
          <i className='fas fa-box mr-4 text-2xl'></i>
          <div>
            <h1 className='text-base font-semibold'>Free Delivery</h1>
            <p>Lorem Ipsum dummy</p>
          </div>
        </div>
        <div className='w-1/2 flex justify-start items-center p-4'>
          <i className='fa fa-euro mr-4 text-2xl'></i>
          <div>
            <h1 className='text-base font-semibold'>Big Savings</h1>
            <p>Lorem Ipsum dummy</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center p-4'>
        <div className='w-1/2 flex justify-start items-center'>
          <i className='fa fa-user mr-4 text-2xl'></i>
          <div>
            <h1 className='text-base font-semibold'>Customer Support</h1>
            <p>Lorem Ipsum dummy</p>
          </div>
        </div>
        <div className='w-1/2 flex justify-start items-center p-4'>
          <i className='fa fa-gift mr-4 text-2xl'></i>
          <div>
            <h1 className='text-base font-semibold'>Gift Voucher</h1>
            <p>Lorem Ipsum dummy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reassurance;
