import { useReducer } from 'react';

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

const reducer = (data, action) => {
  let newData;
  switch (action.type) {
    case 'add':
      newData = {
        ...data,
        boxes: [...data.boxes, { id: 0, title: '', content: [] }],
      };
      break;

    case 'save':
      newData = {
        ...data,
        boxes: [
          ...data.boxes.filter((_box) => _box.id !== action.payload.id),
          action.payload,
        ],
      };
      break;

    case 'remove':
      newData = {
        ...data,
        boxes: [...data.boxes.filter((_box) => _box.id !== action.payload)],
      };
      break;

    case 'add-content':
      newData = {
        ...data,
      };
      break;

    case 'remove-content':
      newData = {
        ...data,
        boxes: [...data.boxes.filter((_box) => _box.id !== action.payload)],
      };
      break;

    default:
      throw new Error('Not Defined Action!!');
  }

  localStorage.setItem(SKEY, JSON.stringify(newData));
  return newData;
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem(SKEY)) || SampleData
  );

  const addBox = () => {
    dispatch({ type: 'add' });
  };

  // 수정(등록포함)
  const saveBox = (box) => {
    if (!box.id) {
      box.id = Math.max(...data.boxes.map((_box) => _box.id)) + 1;
    }
    dispatch({ type: 'save', payload: box });
  };

  const removeBox = (boxId) => {
    dispatch({ type: 'remove', payload: boxId });
  };

  const addContent = (box) => {
    box.content.push({ id: 0, title: '', image: '', description: '' });
    dispatch({ type: 'add-content', payload: box });
  };

  const saveContent = (box, content) => {
    if (!content.id || isNaN(content.id)) {
      const allContents = [...data.boxes.map((box) => box.contents)];
      console.log('allContents>>>', allContents);
      content.id =
        Math.max(...allContents.flat().map((_content) => _content.id)) + 1;
    }
    dispatch({ type: 'save', payload: box });
  };

  const removeContent = (box, contentId) => {
    console.log('box >>', box);
    console.log('contentId>>', contentId);
    box.contents = [
      ...box.contents.filter((content) => content.id !== contentId),
    ];
    dispatch({ type: 'save', payload: box });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addBox,
        saveBox,
        removeBox,
        addContent,
        saveContent,
        removeContent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
