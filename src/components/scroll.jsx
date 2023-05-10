import React, { useState, useEffect } from 'react';

export default function ScrollPage() {
  const [showAngleUp, setAngleUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      setAngleUp(true);
    } else {
      setAngleUp(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section>
      {showAngleUp && (
        <i
          className='text-4xl fa fa-angle-double-up downActive'
          onClick={handleClick}
        ></i>
      )}
    </section>
  );
}
