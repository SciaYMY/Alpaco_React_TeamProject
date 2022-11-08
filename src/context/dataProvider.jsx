import React, { useState, useEffect, createContext, useContext } from 'react';

const SKEY = 'reviewData';

const SampleData = {
  boxes: [
    {
      id: 1,
      title: 'Movie',
      content: [
        {
          id: 1,
          title: '어벤져스',
          image:
            'https://upload.wikimedia.org/wikipedia/ko/thumb/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/800px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
          description: '재밌었다 아이언맨 채고>.<',
        },
      ],
    },
    {
      id: 2,
      title: 'Movie',
      content: [
        {
          id: 2,
          title: '비밀의숲',
          image:
            'https://upload.wikimedia.org/wikipedia/ko/4/4c/%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%B9%84%EB%B0%80%EC%9D%98_%EC%88%B2_%EB%8C%80%ED%91%9C_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
          description: '이게 그렇게 재밌다던데',
        },
      ],
    },
    {
      id: 3,
      title: 'Movie',
      content: [
        {
          id: 3,
          title: 'Ella fitzgerald - Misty',
          image:
            'https://i1.sndcdn.com/artworks-000116410667-8amk4j-t500x500.jpg',
          description: '최애노래',
        },
      ],
    },
  ],
};

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  // data가 업데이트 될 때마다 localStorage에 저장한다.
  useEffect(() => {
    // 처음에 데이터가 없는 경우 localStorage에서 가지고 오거나, 샘플 데이터를 default로 넣어준다.
    if (!data) {
      try {
        const savedData = JSON.parse(localStorage.getItem(SKEY)) || SampleData;

        setData(savedData);
        return;
      } catch (error) {
        // 로컬스토리지 데이터 파싱 시에 데이터 형식으로 인한 에러 방지
        console.error(
          '로컬 스토리지 데이터를 불러오는 과정에서 에러가 발생했습니다'
        );
      }
    }

    localStorage.setItem(SKEY, JSON.stringify(data));
  }, [data]);

  const addBox = (newBoxes) => {
    const newData = { ...data, boxes: [...data.boxes, newBoxes] };

    setData(newData);
  };

  const removeBox = (boxId) => {
    const newData = {
      ...data,
      boxes: data.boxes.filter((box) => box.id === boxId),
    };

    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, addBox, removeBox }}>
      {children}
    </DataContext.Provider>
  );
};
