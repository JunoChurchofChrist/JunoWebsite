'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import About from './About';

const NavBar = () => {
  const [displayNavBar, setDisplayNavBar] = useState(false);
  let prevScrollPosition = 0;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < prevScrollPosition && scrollPosition > 20) {
      setDisplayNavBar(true);
    } else {
      setDisplayNavBar(false);
    }
    prevScrollPosition = scrollPosition;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const navBarDefaultClasses = 'navbar transition-opacity';
  return (
    <header
      className={
        displayNavBar
          ? 'fixed ' + navBarDefaultClasses
          : 'min-h-[10vh] box-border ' + navBarDefaultClasses
      }
    >
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
    </header>
  );
};

export default NavBar;
