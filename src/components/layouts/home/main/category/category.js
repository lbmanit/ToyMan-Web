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
    <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
      <article className='m-6'>
        <img src={image} alt={modalContent} />
        <h1 className='text-center text-xl font-semibold my-6 cursor-pointer hover:text-cyan'>
          {modalContent}
        </h1>
      </article>
    </LazyLoad>
  );
}
export default Category;
