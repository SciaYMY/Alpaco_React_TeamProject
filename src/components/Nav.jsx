export const Nav = () => {
  return (
    <nav className='flex justify-between'>
      <div>
        <h1 className='text-3xl'>3조</h1>
        <h2>Alpaco React TeamProject</h2>
      </div>
      <div>
        <ul>
          <li className='bg-rose-800 p-2 text-xl text-white'>
            DROPBOX
            <ul>
              <li>드라마</li>
              <li>음악</li>
              <li>영화</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
