import React from 'react';
import Link from 'next/link';
import About from './About';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-start ml-5 text-2xl" href="/">
        Juno Church of Christ
      </Link>
      <div className="navbar-end mr-5">
        <About classname="mx-2 border rounded" />
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
