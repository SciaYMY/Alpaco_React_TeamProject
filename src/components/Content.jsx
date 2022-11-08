import { useParams } from 'react-router-dom';
import useData from '../hooks/useData';
import { Box } from './Box';

const Content = () => {
  const { boxId } = useParams();

  const { data } = useData();

  if (!data) {
    return <div>로딩중</div>;
  }

  const targetBox = data.boxes.find((box) => box.id === Number(boxId)) ?? [];

  return (
    <>
      <h1 className='font-bold'>BOX {boxId}</h1>

      {targetBox.content.map(({ title, image }) => (
        <Box key={title} title={title} imageURL={image} />
      ))}
    </>
  );
};

export default Content;
