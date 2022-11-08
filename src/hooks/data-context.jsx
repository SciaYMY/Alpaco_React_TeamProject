import { createContext, useContext, useState } from 'react';

const SampleData = {
  books: [{ id: 1, title: 'First Post', marks: [] }],
};
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(SampleData);
  const addBook = () => {
    setData({
      ...data,
      books: [...data.books, { id: 0, title: '제목', marks: [] }],
    });
  };

  return (
    <DataContext.Provider value={{ data, addBook }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
