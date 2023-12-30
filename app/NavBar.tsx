import React from 'react';
import Link from 'next/link';
import Dropdown from './components/Dropdown';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-start ml-5 text-2xl" href="/">
        Juno Church of Christ
      </Link>
      <div className="navbar-end mr-5">
        <div className="mx-2 p-2 border rounded hover:cursor-pointer">
          About
          <Dropdown />
        </div>
        <Link className="mx-2 p-2 border rounded" href="/connect">
          Connect
        </Link>
        <Link className="mx-2 p-2 border rounded" href="/media">
          Media
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
