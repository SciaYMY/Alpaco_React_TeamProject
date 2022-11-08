import { Dropbox } from "./Dropbox";

export const Nav = () => {
  return (
    <nav className='flex justify-between'>
      <div>
        <h1 className='text-3xl'>3조</h1>
        <h2>Alpaco React TeamProject</h2>
      </div>
      <div>
        <Dropbox/>
      </div>
    </nav>
  );
};
