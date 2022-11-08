import { createContext, useContext, useState } from 'react';

const SampleData = {
  postContents: [{ id: 1, title: 'First Post', marks: [] }],
};
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(SampleData);
  const addPost = () => {
    setData({
      ...data,
      postContents: [...data.postContents, { id: 0, title: '제목', marks: [] }],
    });
  };

  return (
    <DataContext.Provider value={{ data, addPost }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
