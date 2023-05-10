import React from 'react';

function ContactInfo(props) {
  return (
    <section className='content-info text-base'>
      <div className='container m-auto flex flex-col justify-around'>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>Contact information</h1>
          <i className='fas fa-times' onClick={props.displayContact}></i>
        </div>
        <h2>Trade name: Ber</h2>
        <h2>Phone number: 0334115449</h2>
        <h2>Email: quan01685910759@gmail.com</h2>
        <h2>Physical address: Ha Noi, Viet Nam.</h2>
      </div>
    </section>
  );
}

export default ContactInfo;
