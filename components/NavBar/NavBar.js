import { useState } from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

export default () => {
  // react hooks: useState
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  // handle toggle
  // handleToggle = () => {
  //   setToggleState(!toggleState);
  // };
  const toggle = () => {
    // setToggleState(toggleState === false ? true : false);
    setToggleState(!toggleState);
    console.log('Working!', toggleState);
  };

  return (
    <nav class='flex items-center justify-between flex-wrap bg-grey-darkest p-6'>
      <div class='flex items-center flex-no-shrink text-yellow mr-6'>
        <p class='font-mono text-2xl tracking-tight'>Batman TV Shows</p>
      </div>
      <div class='block lg:hidden'>
        <button
          class='flex items-center px-3 py-2 border rounded text-grey border-grey-light hover:text-yellow hover:border-yellow'
          // isMenuOpen={isMenuOpen}
          // onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          // onClick={() => handleToggle}
          onClick={toggle}
        >
          <svg
            class='fill-current h-5 w-5'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div
        class={
          toggleState
            ? 'w-full block flex-grow'
            : 'hidden lg:block lg:flex lg:items-center lg:w-auto'
        }
      >
        <div class='text-md lg:flex-grow'>
          <Link href='/'>
            <a class='block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-yellow mr-4 no-underline'>
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a class='block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-yellow mr-4 no-underline'>
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
