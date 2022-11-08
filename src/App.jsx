import { Routes, Route } from 'react-router-dom';

import { Nav } from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <div className='App'>
        <Nav />
        <Routes>
          <Route
            path='/'
            element={<div>메뉴 보기에서 보고자 하는 BOX를 클릭하세요</div>}
          />
          <Route path='/box/:boxId' element={<Content />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
