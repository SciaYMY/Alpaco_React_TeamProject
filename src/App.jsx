import { Box } from './components/Box';
import { Nav } from './components/Nav';

function App() {
  const { data } = useData();
  const [boxId, setBoxId] = useState(data.boxes.id);

  return (
    <div className='App'>
      <browserRouter>
        <header className='bg-rose-100 p-6'>
          <p className='text-xl font-bold' />
          <Nav />
        </header>

        <Routes>
          <main className='bg-gray-100 p-6'>
            <p className='text-xl font-bold'>BASIC BOX1</p>
            <Route path='/' element={<main />}></Route>
            <Route path='/box/:boxId/:contentName' element={<box />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </main>
        </Routes>

        <footer className='bg-rose-100 p-6'>
          <p className='text-xl font-bold'>FOOTER</p>
          <h2>팀원</h2>
          <p>경지혜, 문창일, 박문수, 양민영</p>
        </footer>
      </browserRouter>
    </div>
  );
}

export default App;
