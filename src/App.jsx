import { Movie } from './components/Movie';
import { Nav } from './components/Nav';
import { Drama } from './components/Drama';
import { Music } from './components/Music';
import { Webtoon } from './components/Webtoon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className='p-6 bg-rose-100'>
          <p className='text-xl font-bold'>HEADER</p>
          <Nav />
        </header>
        <Routes>
          <Route path='/' exact={true} component={Movie} />
          <Route path='/drama'>
            <Drama />
          </Route>
          <Route path='/music'>
            <Music />
          </Route>
          <Route path='/Webtoon'>
            <Webtoon />
          </Route>
        </Routes>
        <footer className='p-6 bg-rose-100'>
          <p className='text-xl font-bold'>FOOTER</p>
          <h2>팀원</h2>
          <p>경지혜, 문창일, 박문수, 양민영</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
