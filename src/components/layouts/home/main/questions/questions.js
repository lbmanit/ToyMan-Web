import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import Question from './question';
import url from '../questions/question-data.JSON';
import image from '../../../../../assets/images/questions/toys_party.webp';
function Questions() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const newQuestion = questions.map((question, index) => {
    return <Question key={index} {...question} />;
  });
  return (
    <section className='container m-auto right-active'>
      <h1 className='text-center text-3xl mt-24'>Frequently Asked Questions</h1>
      <h3 className='text-center text-xl text-cyan m-8'>
        Find your answer from here
      </h3>
      <div className='flex justify-between'>
        <div className='relative py-4 w-1/2'>
          <LazyLoad height={563} offset={100} once>
            <img className='animated-question-img' src={image} alt={image} />
          </LazyLoad>
          <div className='absolute'></div>
        </div>
        <div className='w-1/2'>{newQuestion}</div>
      </div>
    </section>
  );
}
export default Questions;
