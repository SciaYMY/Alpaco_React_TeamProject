import { ArrowPathIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import { useReducer, useState } from 'react';
import { useData } from '../hooks/data-context';
import { Mark } from './Mark';

export const Main = ({ movie }) => {
  const { saveMovie, removeMovie, addMark } = useData();
  const [MovieTitle, setMovieTitle] = useState(movie.title);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);

  const changeMovieTitle = () => {
    movie.title = MovieTitle;
    saveMovie(movie);
    toggleEditing();
  };

  return (
    <section className='container'>
      <div id='contentWrap'>
        <div className='flex items-center justify-between text-xl font-bold text-slate-700'></div>
        <h3 className='border'>{movie.title}</h3>
        <button
          onClick={toggleEditing}
          className='text-sm text-cyan-400 hover:text-cyan-600'
        >
          {isEditing ? (
            <ArrowPathIcon className='w-5 text-cyan-400' />
          ) : (
            <Cog8ToothIcon className='w-5 text-cyan-400' />
          )}
        </button>
      </div>

      {movie?.id === 0 || isEditing ? (
        <div className='p-1.5'>
          <input
            type='text'
            value={MovieTitle}
            onChange={(evt) => setMovieTitle(evt.target.value)}
            className='w-full rounded px-1'
            placeholder='타이틀...'
          />
          <button
            onClick={() => removeMovie(movie.id)}
            className='float-left text-rose-400 hover:text-rose-600'
          >
            Remove
          </button>
          <button
            onClick={changeMovieTitle}
            className='float-right text-cyan-400 hover:text-cyan-600'
          >
            Save
          </button>
        </div>
      ) : movie?.marks?.length ? (
        movie?.marks.map((mark) => (
          <Mark key={mark.id} movie={movie} mark={mark} />
        ))
      ) : (
        <hr className='border-3 mt-0 mb-3 border-white' />
      )}
      <img
        src='https://upload.wikimedia.org/wikipedia/ko/thumb/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/800px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'
        alt='어벤져스'
        className='h-[600px]'
      />
      <p>리뷰</p>
      <button
        onClick={() => addMark(movie)}
        className='float-right border bg-rose-900 p-2 text-white'
      >
        작성
      </button>
    </section>
  );
};
