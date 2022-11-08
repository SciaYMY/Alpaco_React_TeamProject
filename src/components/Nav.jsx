import { DropDown } from './DropDown';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='flex justify-between'>
      <div>
        <Link to='/'>
          <h1 className='text-3xl'>3조</h1>
          <h2>Alpaco React TeamProject</h2>
        </Link>
      </div>
      <div>
        <DropDown />
      </div>
    </nav>
  );
};
