import { Main } from './components/Main';
import { Nav } from './components/Nav';
import { useData } from './hooks/data-context';

function App() {
  const { data, addMovie } = useData();
  return (
    <div>
      <header className='bg-rose-100 p-6'>
        <Nav />
      </header>

      <main className='bg-gray-100 p-6'>
        <p className='text-xl font-bold'>BASIC Main1</p>
        <div className='flex items-start p-4'>
          {data.movies
            .sort((a, b) =>
              a.id === 0 ? Number.MAX_SAFE_INTEGER : a.id - b.id
            )
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

      <footer className='bg-rose-100 p-6'>
        <p className='text-xl font-bold'>FOOTER</p>
        <h2>팀원</h2>
        <p>경지혜, 문창일, 박문수, 양민영</p>
      </footer>
    </div>
  );
}

export default App;
