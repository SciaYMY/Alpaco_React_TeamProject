import { Box } from './components/Box';
import { Nav } from './components/Nav';
import { useData } from './hooks/data-context';

function App() {
  const { data, addBook } = useData();

  return (
    <div>
      <header className='bg-rose-100 p-6'>
        <p className='text-xl font-bold'>HEADER</p>
        <Nav />
      </header>
      <main className='bg-gray-100 p-6'>
        <div>
          <p className='text-xl font-bold'>BASIC BOX1</p>
          <div className='flex'>
            {data.books.map((book_item) => (
              <Box key={book_item.id} />
            ))}
            <button
              onClick={addBook}
              className='float-right border bg-rose-900 p-2 text-white'
            >
              작성
            </button>
          </div>
        </div>

        <div>
          <p className='text-xl font-bold'>BASIC BOX2</p>
          <div className='flex'>
            <section className=''>
              <div id='contentWrap'>
                <p className='border'>이미지</p>
                <img
                  src='https://mblogthumb-phinf.pstatic.net/MjAyMDA1MDNfMTcx/MDAxNTg4NDczOTM1ODA3.4V6ijCIlgCFYxBll3TiiMrNkx8lcmvrmyreuEiw31RYg.ckwRlQyTS2iqPenS37RR0OWNmMlhw-8wYUdE7k_I0-Ig.JPEG.idum00/%EC%96%B4%EB%91%A0%EC%86%8D%EC%9C%BC%EB%A1%9C_1.jpg?type=w800'
                  alt='into the night'
                  className='h-[350px]'
                />
                <p>리뷰</p>
              </div>
            </section>
            <button className='float-right border bg-rose-900 p-2 text-white'>
              작성
            </button>
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
