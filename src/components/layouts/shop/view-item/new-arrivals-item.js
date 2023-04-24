import React, { useState } from 'react';
import itemsData from '../../../../data/items-data';
import PreviewItem from '../preview-item/preview-item';
function NewArrivalsItem() {
  const [items, setItems] = useState(itemsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const newArrivalsItem = () => {
    const endIndex = currentIndex + 3;
    return items.slice(currentIndex, endIndex).map((item, index) => {
      return <PreviewItem key={index} {...item} />;
    });
  };
  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? items.length - 3 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSlideLeft(true);
    setSlideRight(false);
    setTimeout(() => {
      setSlideLeft(false);
    }, 500);
  };
  const handleNextClick = () => {
    const newIndex = currentIndex === items.length - 3 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSlideLeft(false);
    setSlideRight(true);
    setTimeout(() => {
      setSlideRight(false);
    }, 500);
  };
  return (
    <section
      className='container m-auto jumpActive mb-16'
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div>
        <h1 className='text-3xl mt-16 text-center font-semibold'>
          New Arrivals
        </h1>
        <h3 className='text-xl m-8 text-center text-cyan'>Featured Products</h3>
      </div>
      <div className='flex'>
        <div
          className={`flex ${slideLeft ? 'left-active' : ''} ${
            slideRight ? 'right-active' : ''
          }`}
        >
          {newArrivalsItem()}
        </div>
        {isShow && (
          <div className='cursor-pointer opacity-80 flex flex-col justify-center items-center'>
            <i
              className='text-5xl far fa-arrow-alt-circle-up mb-8'
              onClick={handlePrevClick}
            ></i>
            <i
              className='text-5xl far fa-arrow-alt-circle-down'
              onClick={handleNextClick}
            ></i>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewArrivalsItem;
