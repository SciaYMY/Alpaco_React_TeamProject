export const Box = ({ post, removePost }) => {
  return (
    <section className='mr-4 last:mr-0'>
      <div id='contentWrap'>
        <img
          src='https://upload.wikimedia.org/wikipedia/ko/thumb/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/800px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'
          alt='어벤져스'
          className='h-[350px]'
        />
        <h2>{post.title}</h2>
        <p>리뷰 내용</p>
      </div>
      <button
        onClick={() => removePost(post.id)}
        className='bg-teal-900 p-2 text-white'
      >
        Remove
      </button>
    </section>
  );
};
