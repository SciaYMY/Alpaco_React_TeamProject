import { Main } from '../components/Main';
import { useData } from './data-context';

export const Box = () => {
  const { data, addMovie } = useData();

  return (
    <main className='bg-gray-100 p-6'>
      <p className='text-xl font-bold'>BASIC Main1</p>
      <div className='flex items-start p-4'>
        {data.movies
          .sort((a, b) => (a.id === 0 ? Number.MAX_SAFE_INTEGER : a.id - b.id))
          .map((movie) => (
            <Main key={movie.id} movie={movie} />
          ))}
        <div>
          {data.movies.find((movie) => !movie.id) ? (
            ''
          ) : (
            <button
              onClick={addMovie}
              className='mr-2 h-4 w-64 rounded-sm bg-cyan-400 px-5 py-1 font-medium text-white hover:bg-cyan-500'
            >
              +Add Movie
            </button>
          )}
        </div>
      </div>
    </main>
  );
};
