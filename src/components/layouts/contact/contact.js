import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Contact() {
  const [contactForm, setContactForm] = useState([
    {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  ]);
  const [isMessage, setIsMessage] = useState(false);
  function handleChangeContact(event) {
    const { name, value } = event.target;
    setContactForm((prevContact) => {
      return { ...prevContact, [name]: value, id: new Date().getTime() };
    });
  }
  function handleSubmitContact(event) {
    event.preventDefault();
    setIsMessage(true);
    setTimeout(() => setIsMessage(false), 2000);
    window.localStorage.setItem('contactForm', JSON.stringify(contactForm));
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }
  return (
    <section className='right-active'>
      <div className='flex bg-darkLight h-20'>
        <div className='container m-auto flex items-center font-bold'>
          <Link to='/'>
            <h1 className='text-cyan text-xl'>Home</h1>
          </Link>
          <h1 className='text-cyan text-xl m-2'>/</h1>
          <h1 className='text-pink text-xl'>Contact</h1>
        </div>
      </div>
      <div className='container m-auto flex my-24'>
        <div className='w-1/2'>
          <h1 className='font-bold text-3xl'>Get in touch</h1>
          <p className='text-base mt-4 mb-12'>
            We'd love to hear from you, lets get in touch! lorem ipsum is not
            simply random text. It has roots in a piece of classical.
          </p>
          <div className='flex justify-start items-center my-8'>
            <i className='text-2xl bg-cyan text-white rounded-full w-12 h-12 flex justify-center items-center p-4 fas fa-map-marker-alt'></i>
            <div className='mx-4'>
              <h1 className='font-bold text-2xl'>Headquarter</h1>
              <h1 className='text-base'>Ha Noi, Viet Nam</h1>
            </div>
          </div>
          <div className='flex justify-start items-center my-8'>
            <i className='text-2xl bg-cyan text-white rounded-full w-12 h-12 flex justify-center items-center p-4 fas fa-mobile-alt'></i>
            <div className='mx-4'>
              <h1 className='font-bold text-2xl'>Phone Number</h1>
              <h1 className='text-base'>033 411 5449</h1>
            </div>
          </div>
          <div className='flex justify-start items-center my-8'>
            <i className='text-2xl bg-cyan text-white rounded-full w-12 h-12 flex justify-center items-center p-4 fas fa-envelope'></i>
            <div className='mx-4'>
              <h1 className='font-bold text-2xl'>Email Us</h1>
              <h1 className='text-base'>quan0168591059@gmail.com</h1>
            </div>
          </div>
        </div>
        <form
          className='contact-form w-1/2 text-lg flex flex-col rounded-md p-8'
          method='POST'
          onSubmit={handleSubmitContact}
        >
          {isMessage && (
            <p className='text-base font-bold rounded-md border bg-greenLight text-green border-green px-4 py-2 my-4 downActive'>
              Thanks for contacting us. We'll get back to you as soon as
              possible.
            </p>
          )}
          <input
            className='rounded-lg text-grayDark px-4 py-2 border border-gray my-2'
            type='text'
            name='name'
            value={contactForm.name}
            onChange={handleChangeContact}
            checked
            required
            placeholder='Name'
          />
          <input
            className='rounded-lg  text-grayDark px-4 py-2 border border-gray my-2'
            type='email'
            name='email'
            value={contactForm.email}
            onChange={handleChangeContact}
            checked
            required
            placeholder='Email'
          />
          <input
            className='rounded-lg text-grayDark px-4 py-2 border border-gray my-2'
            type='text'
            name='subject'
            value={contactForm.subject}
            onChange={handleChangeContact}
            checked
            required
            placeholder='Subject'
          />
          <textarea
            className='rounded-lg text-grayDark  px-4 py-2 border border-gray my-2 focus:outline-none'
            name='message'
            id='message'
            cols='25'
            rows='10'
            value={contactForm.message}
            onChange={handleChangeContact}
            checked
            placeholder='Your Message'
          ></textarea>
          <button
            type='submit'
            className='w-1/4 bg-pink text-white rounded-3xl px-4 py-2 my-4 hover:bg-cyan'
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
