import React, { useState } from 'react';
import Item from '../../../items/item';
import Collections from '../../../items/collections';
import { Link } from 'react-router-dom';
function Loves() {
  const memoizedCollections = Collections();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const loveItems = () => {
    const endIndex = currentIndex + 3;
    return memoizedCollections
      .slice(currentIndex, endIndex)
      .map((item, index) => {
        return (
          <Link
            key={index}
            className='flex main-item'
            to={{
              pathname: `collections/${item.id}`,
              search: `?toys=${JSON.stringify(memoizedCollections)}`,
            }}
          >
            <Item key={index} {...item} />
          </Link>
        );
      });
  };
  const handlePrevClick = () => {
    const newIndex =
      currentIndex === 0 ? memoizedCollections.length - 3 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const handleNextClick = () => {
    const newIndex =
      currentIndex === memoizedCollections.length - 3 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <section
      className='relative container m-auto jumpActive'
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <h1 className='text-3xl mt-16 text-center font-semibold'>
        Customer Loves
      </h1>
      <h3 className='text-xl m-8 text-center text-cyan'>Popular Product</h3>
      <div className='flex'>{loveItems()}</div>
      {isShow && (
        <div className='cursor-pointer opacity-80'>
          <i
            className='m-auto absolute text-5xl far fa-arrow-alt-circle-left  top-1/2 left-4 z-20'
            onClick={handlePrevClick}
          ></i>
          <i
            className='m-auto absolute text-5xl far fa-arrow-alt-circle-right top-1/2 right-4 z-20'
            onClick={handleNextClick}
          ></i>
        </div>
      )}
    </section>
  );
}

export default Loves;
