import { useRef, useState, useReducer } from 'react';

export const Box = ({ post, removePost, savePost }) => {
  const contentWrap = useRef();
  // const contentWrapWidth = contentWrap.current.offsetWidth;
  const editWrap = useRef();
  // const editWrapClassName = editWrap.current.classNameh;

  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  // const [postTitle, setPostTitle] = useState;
  const [postTitle, setPostTitle] = useState(post.title);
  const [postValue, setPostValue] = useState(post.postValue);
  const changePostTitle = () => {
    post.title = postTitle;
    post.postValue = postValue;
    savePost(post);
  };

  return (
    <section className='mr-4 last:mr-0'>
      <div ref={contentWrap}>
        <img
          src='https://upload.wikimedia.org/wikipedia/ko/thumb/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/800px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'
          alt='어벤져스'
          className='h-[350px]'
        />
        <h2>{post.title}</h2>
        <p>{post.postValue}</p>
      </div>
      <div id='buttonBox' className='flex justify-between'>
        <button
          onClick={() => removePost(post.id)}
          className='bg-teal-900 p-2 text-white'
        >
          Remove
        </button>
        <button
          onClick={toggleEditing}
          className='px-2 bg-teal-900 p-2 text-white'
        >
          Edit
        </button>
      </div>
      {isEditing ? (
        <div
          id='editWrap'
          ref={editWrap}
          className='border-8 border-teal-900 my-4 w-1/2 absolute'
        >
          <div className='p-2'>
            <div id='inputTitleWrap' className='flex justify-between mb-2'>
              <label htmlFor='postTitle' className='mr-2'>
                Title :
              </label>
              <input
                id='postTitle'
                type='text'
                value={postTitle}
                onChange={(evt) => {
                  setPostTitle(evt.target.value);
                }}
                className='w-10/12'
              />
            </div>
            <div id='inputContentsWrap'>
              <label htmlFor='postContent' className='mr-2'>
                Contents
              </label>
              <textarea
                name='contents'
                id='postContent'
                value={postValue}
                onChange={(evt) => {
                  setPostValue(evt.target.value);
                }}
                cols='45'
                rows='8'
                className='w-full'
              ></textarea>
            </div>
            <button
              onClick={changePostTitle}
              className='bg-teal-900 p-2 text-white'
            >
              save
            </button>
          </div>
        </div>
      ) : (
        <p>Edit 공간</p>
      )}
    </section>
  );
};
