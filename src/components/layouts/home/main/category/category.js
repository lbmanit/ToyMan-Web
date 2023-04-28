import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../../app/Spinner';
function Category(props) {
  const { image, modalContent } = props;
  Category.propTypes = {
    image: PropTypes.string.isRequired,
    modalContent: PropTypes.string.isRequired,
  };
  return (
    <article className='m-6'>
      <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
        <img src={image} alt={modalContent} />
      </LazyLoad>
      <h1 className='text-center text-xl font-semibold my-6 cursor-pointer hover:text-cyan'>
        {modalContent}
      </h1>
    </article>
  );
}
export default Category;
