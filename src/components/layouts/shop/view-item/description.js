import React from 'react';
import { useState } from 'react';

function Description() {
  const [selectTab, setSelectTab] = useState('description');
  const style = {
    borderBottom: '1px solid #17a2b8',
    transition: 'all 0.3s linear',
  };
  const [isStyle, setIsStyle] = useState({
    description: style,
    reviews: {},
  });
  function handleClickType(type) {
    if (type === 'Description') {
      setSelectTab('description');
      setIsStyle({
        ...style,
        description: style,
        reviews: {},
      });
    } else {
      setSelectTab('reviews');
      setIsStyle({
        ...style,
        description: {},
        reviews: style,
      });
    }
  }
  return (
    <section className='container m-auto border border-gray rounded-md p-4 left-active'>
      <div className='text-xl mb-8'>
        <button
          className='hover:text-cyan hover:border-b hover:border-b-cyan hover:border-solid font-bold'
          style={isStyle.description}
          onClick={() => handleClickType('Description')}
        >
          Description
        </button>
        <button
          className='hover:text-cyan hover:border-b hover:border-b-cyan hover:border-solid ml-8 font-bold'
          style={isStyle.reviews}
          onClick={() => handleClickType('Reviews')}
        >
          Reviews
        </button>
      </div>
      {selectTab === 'description' && (
        <p className='text-base right-active'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          vulputate odio ut enim blandit volutpat maecenas volutpat. Feugiat
          scelerisque varius morbi enim nunc faucibus a. Non quam lacus
          suspendisse faucibus. Et tortor at risus viverra adipiscing at in
          tellus integer. Elementum sagittis vitae et leo duis ut diam. Nam at
          lectus urna duis convallis. Amet aliquam id diam maecenas. Amet purus
          gravida quis blandit turpis. Nulla pellentesque dignissim enim sit
          amet venenatis urna. Gravida arcu ac tortor dignissim convallis. Ipsum
          a arcu cursus vitae congue mauris. Gravida quis blandit turpis cursus.
          Dolor sit amet consectetur adipiscing elit pellentesque habitant
          morbi. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus.
          Sit amet mauris commodo quis imperdiet massa. Euismod nisi porta lorem
          mollis aliquam. Mauris a diam maecenas sed enim ut sem viverra
          aliquet. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis. Consectetur adipiscing elit ut aliquam purus. Augue
          interdum velit euismod in pellentesque massa placerat. Nulla posuere
          sollicitudin aliquam ultrices sagittis orci a scelerisque. Aenean vel
          elit scelerisque mauris pellentesque pulvinar pellentesque. Egestas
          tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Feugiat
          nisl pretium fusce id velit ut tortor pretium. Nec ullamcorper sit
          amet risus nullam eget felis eget. Etiam dignissim diam quis enim
          lobortis scelerisque fermentum dui faucibus. Tortor id aliquet lectus
          proin. Suspendisse in est ante in. Nunc congue nisi vitae suscipit
          tellus mauris a. Nibh ipsum consequat nisl vel pretium lectus quam id
          leo.
        </p>
      )}
      {selectTab === 'reviews' && (
        <p className='text-xl left-active'>No Reviews!</p>
      )}
    </section>
  );
}

export default Description;
