import React, { useState } from 'react';
import PreviewItem from '../../../shop/preview-item/preview-item';
import itemsData from '../../../../../data/items-data';
function Loves() {
  const [collections, setCollections] = useState(itemsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const loveItems = () => {
    const endIndex = currentIndex + 3;
    return collections.slice(currentIndex, endIndex).map((item, index) => {
      return <PreviewItem key={index} {...item} />;
    });
  };
  const handlePrevClick = () => {
    const newIndex =
      currentIndex === 0 ? collections.length - 3 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSlideLeft(true);
    setSlideRight(false);
    setTimeout(() => {
      setSlideLeft(false);
    }, 500);
  };
  const handleNextClick = () => {
    const newIndex =
      currentIndex === collections.length - 3 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSlideLeft(false);
    setSlideRight(true);
    setTimeout(() => {
      setSlideRight(false);
    }, 500);
  };
  return (
    <section
      className='container m-auto jumpActive'
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <h1 className='text-3xl mt-16 text-center font-semibold'>
        Customer Loves
      </h1>
      <h3 className='text-xl m-8 text-center text-cyan'>Popular Product</h3>
      <div className='flex'>
        <div
          className={`flex ${slideLeft ? 'left-active' : ''} ${
            slideRight ? 'right-active' : ''
          }`}
        >
          {loveItems()}
        </div>
        {isShow && (
          <div className='cursor-pointer opacity-80 flex flex-col justify-center items-center'>
            <i
              className='text-5xl text-pink fa fa-arrow-circle-up mb-8'
              onClick={handlePrevClick}
            ></i>
            <i
              className='text-5xl text-pink fa fa-arrow-circle-down'
              onClick={handleNextClick}
            ></i>
          </div>
        )}
      </div>
    </section>
  );
}

export default Loves;
