import React, { useState } from 'react';
import '../../../../../assets/css/main/questions/questions.css';

function Question(props) {
  const [isShow, setIsShow] = useState(false);
  const [character, setCharacter] = useState('fa fa-plus');
  function handleShow() {
    setIsShow((prevShow) => !prevShow);
    setCharacter((prevCharacter) => {
      if (prevCharacter === 'fa fa-plus') {
        return 'fa fa-minus';
      } else {
        return 'fa fa-plus';
      }
    });
  }

  return (
    <div className='ml-8 cursor-pointer'>
      <div>
        <div
          className='flex justify-between items-center questions text-xl py-4'
          onClick={() => handleShow()}
        >
          <p>{props.question}</p>
          <i className={`${character}`}></i>
        </div>
        {isShow && (
          <p className={`${isShow ? 'answers-show' : ''} text-base my-4`}>
            {props.answer}
          </p>
        )}
      </div>
    </div>
  );
}

export default Question;
