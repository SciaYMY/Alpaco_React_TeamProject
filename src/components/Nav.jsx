// import { useReducer, useState } from 'react';
// import { useData } from '../hooks/data-context';
import DropDown from './DropDown';

export const Nav = () => {

  return (
    <nav className='flex justify-between'>
      <div>
        <link to='/'>
          <h1 className='text-3xl'>3조</h1>
          <h2>Alpaco React TeamProject</h2>
        </link>
      </div>
      <div>
        <DropDown />
      </div>
    </nav>
  );
};
