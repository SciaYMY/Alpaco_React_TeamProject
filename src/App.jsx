import { useState } from 'react';
import { Book } from './components/Book';
import { Nav } from './components/Nav';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'Private Book',
      marks: [
        {
          id: 1,
          title: 'Mark Title...',
          image:
            'https://upload.wikimedia.org/wikipedia/ko/thumb/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/800px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
          description: 'mark description',
        },
        {
          id: 2,
          title: 'Mark Title2...',
          image: 'https://tailwindcss.com/api/og?path=/docs/height',
          description: 'mark description2',
        },
      ],
    },
    { id: 2, title: 'React Study', marks: [] },
  ],
};

function App() {
  const [data, setData] = useState(SampleData);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className='container flex justify-start px-6 mx-auto mt-5 space-y-0'>
        {data.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <div>
          <button className='bg-cyan-400 text-white px-5 py-1 rounded-sm font-medium hover:bg-cyan-500'>
            + Add Book
          </button>
        </div>
      </main>
      {/* <footer>Copyright Indiflex Senior Coding</footer> */}
    </div>
  );
}

export default App;
