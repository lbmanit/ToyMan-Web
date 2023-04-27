import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PreviewItem from './preview-item/preview-item';
import itemsData from '../../../data/items-data';
import singleCollection from '../../../data/single-collection';
import NewArrivalsItem from './view-item/new-arrivals-item';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../app/Spinner';
function Collections() {
  const [countPage, setCountPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [changeType, setChangeType] = useState(false);
  function animationChangeType() {
    setChangeType(true);
    setTimeout(() => setChangeType(false), 500);
  }
  const itemsInPage = 3;
  function handleArrangeItems(event) {
    const { value } = event.target;
    if (value === 'min') {
      itemsData.sort((a, b) => a.price - b.price);
    } else if (value === 'max') {
      itemsData.sort((a, b) => b.price - a.price);
    } else {
      return itemsData;
    }
  }
  const filteredItems = itemsData.filter((item) =>
    selectedTypes.length === 0
      ? true
      : selectedTypes.includes(item.details.productType)
  );
  const countFilteredItems = filteredItems.length;
  const endIndex = currentIndex + itemsInPage;
  const slicedItems = filteredItems.slice(currentIndex, endIndex);
  const handleIncrement = useCallback(() => {
    if (countPage >= Math.ceil(countFilteredItems / itemsInPage)) {
      return;
    } else {
      setSlideLeft(false);
      setSlideRight(true);
      setTimeout(() => {
        setSlideRight(false);
      }, 500);
      setCountPage(countPage + 1);
      const newIndex =
        currentIndex === countFilteredItems - itemsInPage
          ? currentIndex
          : currentIndex + itemsInPage;
      setCurrentIndex(newIndex);
    }
  }, [countPage, currentIndex, countFilteredItems, itemsInPage]);

  const handleDecrement = useCallback(() => {
    if (countPage === 1) {
      return;
    } else {
      setSlideLeft(true);
      setSlideRight(false);
      setTimeout(() => {
        setSlideLeft(false);
      }, 500);
      setCountPage(countPage - 1);
      const newIndex = currentIndex === 0 ? 0 : currentIndex - itemsInPage;
      setCurrentIndex(newIndex);
    }
  }, [countPage, currentIndex, itemsInPage]);
  useEffect(() => {
    setCurrentIndex(0);
    setCountPage(1);
  }, [selectedTypes]);
  function handleChangeType(event) {
    const type = parseInt(event.target.value);
    const index = selectedTypes.indexOf(type);
    if (index === -1) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      const newSelectedTypes = [...selectedTypes];
      newSelectedTypes.splice(index, 1);
      setSelectedTypes(newSelectedTypes);
    }
  }
  const items = slicedItems.map((item, index) => {
    return <PreviewItem key={index} {...item} />;
  });
  const singleBlock = singleCollection.map((single, index) => {
    return (
      <article key={index} className='single-collection p-8'>
        <img src={single.image} alt={single.title} />
        <h1 className='font-bold text-center text-xl top-2/3 mt-4'>
          {single.title}
        </h1>
      </article>
    );
  });
  return (
    <section className='left-active'>
      <div className='text-xl font-bold nav-collections flex items-center'>
        <div className='container m-auto flex'>
          <Link className='text-cyan' to='/'>
            Home
          </Link>
          <h1 className='text-cyan mx-2'>/</h1>
          <h1 className='text-pink'>Collections</h1>
        </div>
      </div>
      <div
        className={`${
          changeType ? 'left-active' : ''
        } container m-auto flex my-12`}
      >
        <div className='w-1/4'>
          <div>
            <h1 className='text-xl font-bold border-b border-solid border-gray'>
              Product Type
            </h1>
            <div className='flex flex-col justify-start items-center my-8'>
              <h1 className='border-dotted border border-gray rounded-3xl px-4 py-1 mr-auto mb-8'>
                {selectedTypes.length} selected
              </h1>
              <div className='w-full flex justify-center items-center'>
                <input
                  className='w-1/4'
                  type='checkbox'
                  id='type1'
                  value={1}
                  onChange={handleChangeType}
                  onClick={animationChangeType}
                />
                <h1 className='w-1/2 text-base font-bold'>Type 1</h1>
                <h1 className='w-1/4'>{`(${slicedItems.length})`}</h1>
              </div>
              <div className='w-full flex justify-center items-center'>
                <input
                  className='w-1/4'
                  type='checkbox'
                  id='type2'
                  value={2}
                  onChange={handleChangeType}
                  onClick={animationChangeType}
                />
                <h1 className='w-1/2 text-base font-bold'>Type 2</h1>
                <h1 className='w-1/4'>{`(${slicedItems.length})`}</h1>
              </div>
              <div className='w-full flex  justify-center items-center'>
                <input
                  className='w-1/4'
                  type='checkbox'
                  id='type3'
                  value={3}
                  onChange={handleChangeType}
                  onClick={animationChangeType}
                />
                <h1 className='w-1/2 text-base font-bold'>Type 3</h1>
                <h1 className='w-1/4'>{`(${slicedItems.length})`}</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-xl font-bold border-b border-solid border-gray'>
              Price
            </h1>
            <div className='w-full flex justify-start items-center my-1'>
              <input
                className='w-1/4'
                type='checkbox'
                id='min'
                name='min'
                value='min'
                onChange={handleArrangeItems}
                onClick={animationChangeType}
              />
              <h1 className='w-3/4 text-base font-bold'>Low to high</h1>
            </div>
            <div className='w-full flex justify-start items-center'>
              <input
                className='w-1/4'
                type='checkbox'
                id='max'
                name='max'
                value='max'
                onChange={handleArrangeItems}
                onClick={animationChangeType}
              />
              <h1 className='w-3/4 text-base font-bold'>High to low</h1>
            </div>
          </div>
        </div>
        <div>
          <p className='text-xl text-center font-bold mb-8'>
            Showing {filteredItems.length} of {itemsData.length} result
          </p>
          <div
            className={`m-auto flex ${slideLeft ? 'left-active' : ''} ${
              slideRight ? 'right-active' : ''
            }`}
          >
            {items}
          </div>
          <div className='flex justify-center items-center m-8'>
            <i
              className={`fa fa-angle-left text-3xl mx-4`}
              onClick={handleDecrement}
            ></i>
            <h1 className='bg-cyan text-white text-xl count-page'>
              {countPage}
            </h1>
            <i
              className={`fa fa-angle-right text-3xl mx-4`}
              onClick={handleIncrement}
            ></i>
          </div>
        </div>
      </div>
      <div className='container m-auto flex'>{singleBlock}</div>
      <LazyLoad height={563} offset={75} once placeholder={<Spinner />}>
        <NewArrivalsItem />
      </LazyLoad>
    </section>
  );
}
export default Collections;
