export const Box = () => {
  return (
    <section className='container'>
      <div id='contentWrap'>
        <p className='border'>이미지</p>
        <img
          src='https://upload.wikimedia.org/wikipedia/ko/thumb/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/800px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'
          alt='어벤져스'
          className='h-[600px]'
        />
        <p>리뷰</p>
      </div>
      <button className='float-right p-2 border bg-rose-900 text-white'>
        작성
      </button>
    </section>
  );
};
