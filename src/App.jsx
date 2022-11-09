import { Box } from './components/Box';
import { Nav } from './components/Nav';

function App() {
  return (
    <div>
      <header className='bg-rose-100 p-6'>
        <p className='text-xl font-bold'>HEADER</p>
        <Nav />
      </header>
      <main className='bg-gray-100 p-6'>
        <p className='text-xl font-bold'>BASIC BOX1</p>
        <Box />
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
