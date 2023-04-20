import React, { useState, useCallback } from 'react';
import Item from '../shop/item';
import { Link } from 'react-router-dom';
import itemsData from '../../../data/itemsData';
import singleCollection from '../../../data/singleCollection';
import { useEffect } from 'react';
function Collections() {
  const [countPage, setCountPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const itemsInPage = 3;
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
  const item = slicedItems.map((item, index) => {
    return <Item key={index} {...item} />;
  });
  const singleBlock = singleCollection.map((single) => {
    return (
      <article className='single-collection p-8'>
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
      <div className='container m-auto flex my-16'>
        <div>
          <h1 className='text-xl font-bold border-b-2 border-solid border-gray'>
            Product Type
          </h1>
          <div className='flex flex-col justify-start items-center my-8 mr-8'>
            <div className='flex justify-center items-center'>
              <div className='flex justify-between items-center'>
                <input
                  type='checkbox'
                  id='type1'
                  value={1}
                  onChange={handleChangeType}
                />
                <h1 className=' w-36 text-base font-bold'>Type 1</h1>
              </div>
              <h1>{`(${slicedItems.length})`}</h1>
            </div>
            <div className='flex justify-center items-center'>
              <div className='flex justify-between items-center'>
                <input
                  type='checkbox'
                  id='type2'
                  value={2}
                  onChange={handleChangeType}
                />
                <h1 className=' w-36 text-base font-bold'>Type 2</h1>
              </div>
              <h1>{`(${slicedItems.length})`}</h1>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='type3'
                  value={3}
                  onChange={handleChangeType}
                />
                <h1 className=' w-36 text-base font-bold'>Type 3</h1>
              </div>
              <h1>{`(${slicedItems.length})`}</h1>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`m-auto flex ${slideLeft ? 'left-active' : ''} ${
              slideRight ? 'right-active' : ''
            }`}
          >
            {item}
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
    </section>
  );
}
export default Collections;
