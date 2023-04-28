import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import RefundPolicy from './content-info/refund-policy';
import PrivacyPolicy from './content-info/privacy-policy';
import TermsService from './content-info/terms-service';
import ContactInfo from './content-info/contact-info';
import { CountryData } from '../../fetch/country-data';
function FormPayCart() {
  const { setCartItems } = useContext(CartContext);
  const { data } = CountryData();
  const [displayRefund, setDisplayRefund] = useState(false);
  const [displayPrivacy, setDisplayPrivacy] = useState(false);
  const [displayTerms, setDisplayTerms] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    checkEmail: false,
    region: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    saveForm: false,
  });
  function handleForm(event) {
    event.preventDefault();
    const { name, type, value, checked } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === 'checkbox' ? checked : value,
        id: new Date().getTime(),
      };
    });
  }
  function handleSubmitPay(event) {
    // event.preventDefault();
  }
  return (
    <div>
      <div className='flex items-center'>
        <Link className='return-cart' to='cart'>
          Cart
        </Link>
        <i className='fa fa-angle-right m-2'></i>
        <h1>information</h1>
      </div>
      <form
        className='border-b-2 border-gray my-8'
        method='POST'
        onSubmit={handleSubmitPay}
      >
        <div className='font-base'>
          <div>
            <label className='text-xl font-bold' htmlFor='email'>
              Contact
            </label>
            <input
              className='form-input-value'
              type='email'
              name='email'
              placeholder='Email'
              onChange={handleForm}
              value={formData.email}
              checked
              required
            />
          </div>
          <div className='flex justify-start items-center mr-auto w-1/2'>
            <input
              className='w-1/6'
              type='checkbox'
              name='checkEmail'
              id='checkEmail'
              checked={formData.checkEmail}
              onChange={handleForm}
              required
            />
            <label htmlFor='checkEmail'>Email me with news and offers</label>
          </div>
        </div>

        <h1 className='text-xl font-bold mt-8 mb-4'>Shipping address</h1>
        <div className='select-country px-4 pb-2'>
          <select
            className='w-full mt-6 cursor-pointer'
            name='region'
            id='region'
            value={formData.region}
            onChange={handleForm}
            checked
            required
          >
            <option>Select a country</option>
            {data.map((country) => {
              return (
                <option key={country.alpha2Code} value={country.name}>
                  {country.name}
                </option>
              );
            })}
          </select>
          <h1 className='mx-1'>Country/Region</h1>
        </div>
        <div>
          <input
            className='form-input-value'
            type='text'
            name='firstName'
            placeholder='First Name (optional)'
            value={formData.firstName}
            onChange={handleForm}
            required
          />
          <input
            className='form-input-value'
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleForm}
            checked
            required
          />
          <input
            className='form-input-value'
            type='text'
            name='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleForm}
            checked
            required
          />
          <input
            className='form-input-value'
            type='text'
            name='city'
            placeholder='City'
            value={formData.city}
            onChange={handleForm}
            checked
            required
          />
          <div className='flex justify-start items-center mr-auto w-1/2'>
            <input
              className='w-1/6'
              type='checkbox'
              name='saveForm'
              id='saveForm'
              checked={formData.saveForm}
              onChange={handleForm}
              required
            />
            <label htmlFor='saveForm'>
              Save this information for next time
            </label>
          </div>
        </div>
        <div className='flex justify-between items-center mt-8 mb-16'>
          <Link
            className='return-cart flex justify-between items-center'
            to='/cart'
          >
            <i className='fas fa-angle-left'></i>
            <h1 className='mx-4'>Return to cart</h1>
          </Link>
          <Link
            className='continue-shipping text-base px-3 py-6'
            to='/cart/checkouts/complete'
          >
            <button onClick={() => setCartItems([])}>
              Continue to shipping
            </button>
          </Link>
        </div>
        {/* <button onClick={handleSubmit}>Submit</button> */}
      </form>
      <div className='flex justify-start items-center mb-8'>
        <button
          className='mr-4 btn-content-info'
          onClick={() => setDisplayRefund(true)}
        >
          Refund Policy
        </button>
        <button
          className='mr-4 btn-content-info'
          onClick={() => setDisplayPrivacy(true)}
        >
          Privacy policy
        </button>
        <button
          className='mr-4 btn-content-info'
          onClick={() => setDisplayTerms(true)}
        >
          Terms of service
        </button>
        <button
          className='mr-4 btn-content-info'
          onClick={() => setDisplayContact(true)}
        >
          Contact information
        </button>
      </div>
      {displayRefund && (
        <RefundPolicy displayRefund={() => setDisplayRefund(false)} />
      )}
      {displayPrivacy && (
        <PrivacyPolicy displayPrivacy={() => setDisplayPrivacy(false)} />
      )}
      {displayTerms && (
        <TermsService displayTerms={() => setDisplayTerms(false)} />
      )}
      {displayContact && (
        <ContactInfo displayContact={() => setDisplayContact(false)} />
      )}
    </div>
  );
}

export default FormPayCart;
