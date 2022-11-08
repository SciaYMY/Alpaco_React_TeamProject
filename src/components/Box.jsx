import React from 'react';

export const Box = ({ title, imageURL }) => {
  return (
    <section className='container'>
      <div id='contentWrap'>
        <h3>{title}</h3>
        <p className='border'>이미지</p>
        <img src={imageURL} alt={title} className='h-[600px]' />
        <p>리뷰</p>
      </div>
      <button className='float-right border bg-rose-900 p-2 text-white'>
        작성
      </button>
    </section>
  );
};
