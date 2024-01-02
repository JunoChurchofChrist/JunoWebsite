'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DropDownButton from './NavBarcomponents/DropdownButton';
import LinkButton from '../LinkButton';
import { linkButtonItems } from './LinkButtonItems';
import { aboutDropdownItems } from './AboutDropdownItems';

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
        <DropDownButton dropdownItems={aboutDropdownItems}>
          About
        </DropDownButton>
        {linkButtonItems.map((item) => (
          <LinkButton href={item.href}>{item.data}</LinkButton>
        ))}
      </div>
    </header>
  );
};

export default NavBar;
