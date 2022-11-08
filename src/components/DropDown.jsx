import { useState } from 'react';
import { Link } from 'react-router-dom';

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>메뉴 보기</button>

      {isOpen && (
        <ul>
          <li>
            <Link to={`/box/1`}>BOX 1</Link>
          </li>
          <li>
            <Link to={`/box/2`}>BOX 2</Link>
          </li>
          <li>
            <Link to={`/box/3`}>BOX 3</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
