import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-start ml-5" href="/">
        Juno Church of Christ
      </Link>
      <div className="navbar-end mr-5">
        <Link className="p-3" href="/about">
          About
        </Link>
        <Link className="p-3" href="/connect">
          Connect
        </Link>
        <Link className="p-3" href="/media">
          Media
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
