import { useRef } from 'react';
import Link from 'react-router-dom';
import styles from '../../styles/components/DropDown.module.scss';
import useDetectClose from '../hooks/useDetectClose'
// import { useParams } from 'react-router-dom';

export const DropDown = () => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  // const { boxId } = useParams();

  return (
    <div className={styles.dropDownMenu}>
      <button onClick={() => setIsOpen(!isOpen)}>메뉴 보기</button>

      <ul ref={dropDownRef}>
        <li>
          <Link to='/box/[boxId]'>마이페이지</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;

