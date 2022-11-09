import { createContext, useContext, useState } from 'react';

const SampleData = {
  postContents: [
    { id: 1, title: 'First Post', marks: [] },
    { id: 2, title: '어벤져스 엔드게임', marks: [] },
  ],
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
  const removePost = (rmPostId) => {
    setData({
      ...data,
      postContents: [
        ...data.postContents.filter((_post) => _post.id !== rmPostId),
      ],
    });
  };

  return (
    <DataContext.Provider value={{ data, addPost, removePost }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
