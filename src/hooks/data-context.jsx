import { createContext, useContext, useReducer } from 'react';

const SKEY = 'moviedata';

const SampleData = {
  movies: [
    {
      id: 1,
      title: '어벤져스,앤드게임',
      marks: [],
    },
  ],
};

// action: {type: 'save', payload: newData}
const reducer = (data, action) => {
  let newData;
  switch (action.type) {
    case 'add':
      newData = {
        ...data,
        movies: [...data.movies, { id: 1, title: '', marks: [] }],
      };
      break;

    case 'save':
      newData = {
        ...data,
        movies: [
          ...data.movies.filter((_movie) => _movie.id !== action.payload.id),
          action.payload,
        ],
      };
      break;

    case 'remove':
      newData = {
        ...data,
        movies: [
          ...data.movies.filter((_movie) => _movie.id !== action.payload),
        ],
      };
      break;

    case 'add-mark':
      newData = {
        ...data,
      };
      break;

    case 'remove-mark':
      newData = {
        ...data,
        movies: [
          ...data.movies.filter((_movie) => _movie.id !== action.payload),
        ],
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

  const addMovie = () => {
    dispatch({ type: 'add' });
  };

  // 수정(등록포함)
  const saveMovie = (movie) => {
    if (!movie.id) {
      movie.id = Math.max(...data.movies.map((_movie) => _movie.id)) + 1;
    }
    dispatch({ type: 'save', payload: movie });
  };

  const removeMovie = (movieId) => {
    dispatch({ type: 'remove', payload: movieId });
  };

  const addMark = (movie) => {
    movie.marks.push({ id: 0, image: '', title: '', description: '' });
    dispatch({ type: 'add-mark', payload: movie });
  };

  const saveMark = (movie, mark) => {
    if (!mark.id || isNaN(mark.id)) {
      const allMarks = [...data.movies.map((movie) => movie.marks)];
      console.log('allMarks>>>>', allMarks);
      mark.id = Math.max(...allMarks.flat().map((_mark) => _mark.id)) + 1;
    }
    dispatch({ type: 'save', payload: movie });
  };

  const removeMark = (movie, markId) => {
    console.log('movie>>>', movie);
    console.log('markId>>>', markId);
    movie.marks = [...movie.marks.filter((mark) => mark.id !== markId)];
    dispatch({ type: 'save', payload: movie });
  };

  // useEffect(() => {
  //   // 브라우저의 localStorage에 값이 있으면 그것을 기본 데이터로 사용!
  //   const mipData = localStorage.getItem(SKEY);
  //   console.log(mipData);
  //   if (mipData) setData(JSON.parse(mipData));
  // }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        addMovie,
        saveMovie,
        removeMovie,
        addMark,
        saveMark,
        removeMark,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
