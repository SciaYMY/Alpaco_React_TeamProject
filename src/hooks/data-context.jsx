import { createContext, useContext, useState } from 'react';

const SampleData = {
  postContents: [
    {
      id: 1,
      title: 'First Post',
      postValue: '첫 게시물의 내용을 적어주세요.',
      marks: [],
    },
    {
      id: 2,
      title: '어벤져스 엔드게임',
      postValue: '리뷰 내용을 적어주세요.',
      marks: [],
    },
  ],
};
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(SampleData);
  const addPost = () => {
    setData({
      ...data,
      postContents: [
        ...data.postContents,
        { id: 0, title: '제목', postValue: '내용', marks: [] },
      ],
    });
  };
  const savePost = (selectPost) => {
    const newPost = data.postContents.filter(
      (_post) => _post.id !== selectPost.id
    );
    if (!selectPost.id) {
      selectPost.id =
        Math.max(...data.postContents.map((_defaultPost) => _defaultPost.id)) +
        1;
    }
    setData({ ...data, books: [...newPost, selectPost] });
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
    <DataContext.Provider value={{ data, addPost, removePost, savePost }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
