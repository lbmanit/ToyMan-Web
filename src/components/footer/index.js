import React from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../Spinner';
import logo from '../../assets/images/logo/toymanlogo.jpeg';
import payments from '../../assets/images/payments/payments_large_25c93ac6-988d-4e66-b116-eab60a12eced_large.png';
import '../../assets/css/footer/footer.css';
function Footer() {
  return (
    <footer>
      <section className='flex justify-around items-center p-8'>
        <div>
          <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
            <img className='my-2' src={logo} alt='toy-logo' />
          </LazyLoad>
          <p className='w-2/3 text-lg my-2'>
            A kids toy shop is a store that specializes in selling toys and
            games designed specifically for children.
          </p>
          <h3>
            <i className='fa fa-map text-xl text-pink my-2 mr-2'></i> Addresss:
            Ha Noi, Viet Nam
          </h3>
          <h3>
            <i className='fa fa-envelope text-xl text-pink my-2 mr-2'></i>{' '}
            Email: quanber123@icloud.com
          </h3>
          <h3>
            <i className='fa fa-phone text-xl text-pink my-2 mr-2'></i> Phone:
            (033) 411 5449
          </h3>
        </div>
        <div>
          <h1 className='text-lg font-semibold my-4'>Quick Links</h1>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>Help Center</h3>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>
            Redeem Voucher
          </h3>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>Contact Us</h3>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>
            Policies & Rules
          </h3>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>
            Check Offer List
          </h3>
        </div>
        <div>
          <h1 className='text-lg font-semibold my-4'>Information</h1>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>
            Product Support
          </h3>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>Checkout</h3>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>
            License Policy
          </h3>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>Affiliate</h3>
          <h3 className='my-2 hover:text-cyan cursor-pointer'>About Us</h3>
        </div>
        <div className='flex flex-col justify-between'>
          <h1 className='text-lg font-semibold my-4'>Follow Us On</h1>
          <a
            className='hover:text-cyan cursor-pointer'
            href='https://www.facebook.com/quanber1003'
            target='_blank'
          >
            <i className='fa fa-facebook-official m-2'></i> Facebook
          </a>
          <a
            className='hover:text-cyan cursor-pointer'
            href='https://twitter.com/ber1xD'
            target='_blank'
          >
            <i className='fa fa-twitter m-2'></i> Twitter
          </a>
          <a
            className='hover:text-cyan cursor-pointer'
            href='https://www.instagram.com/quanber123/'
            target='_blank'
          >
            <i className='fa fa-instagram m-2'></i> Instagram
          </a>
          <a className='hover:text-cyan cursor-pointer'>
            <i className='fa fa-youtube m-2'></i> Youtube
          </a>
          <a className='hover:text-cyan cursor-pointer'>
            <i className='fa fa-pinterest m-2'></i> Pinterest
          </a>
        </div>
      </section>
      <section className='copyright'>
        <div className='container m-auto flex justify-between items-center py-8'>
          <p>Copyright Toyman | Built with Toyman by Tran Manh Quan</p>
          <img src={payments} alt='payments' />
        </div>
      </section>
    </footer>
  );
}

export default Footer;