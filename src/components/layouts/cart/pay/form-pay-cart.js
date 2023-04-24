import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function FormPayCart() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    async function fetchCountryData() {
      try {
        const res = await fetch('https://restcountries.com/v2/all');
        const data = await res.json();
        setCountryData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCountryData();
  }, []);
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
    console.log(checked);
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <div className='flex items-center'>
        <Link className='return-cart' to='cart'>
          Cart
        </Link>
        <i className='fas fa-angle-right m-2'></i>
        <h1>information</h1>
      </div>
      <form
        className='border-b-2 border-gray my-8'
        method='POST'
        onSubmit={handleSubmit}
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
              checked
              placeholder='Email'
              onChange={handleForm}
              value={formData.email}
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
            <label htmlFor='checkEmail' name='checkEmail'>
              Email me with news and offers
            </label>
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
            required
          >
            <option>Select a country</option>
            {countryData.map((country) => {
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
            required
          />
          <input
            className='form-input-value'
            type='text'
            name='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleForm}
            required
          />
          <input
            className='form-input-value'
            type='text'
            name='city'
            placeholder='City'
            value={formData.city}
            onChange={handleForm}
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
          <Link className='continue-shipping text-base px-3 py-6'>
            <h1>Continue to shipping</h1>
          </Link>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FormPayCart;
