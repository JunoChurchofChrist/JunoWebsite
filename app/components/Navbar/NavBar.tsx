'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DropDownButton from './NavBarcomponents/DropdownButton';
import LinkButton from '../LinkButton';
import { linkButtonItems } from './LinkButtonItems';
import { aboutDropdownItems } from './AboutDropdownItems';

const NavBar = () => {
  const [displayNavbarOnScroll, setDisplayNavbarOnScroll] = useState(false);
  let prevScrollPosition = 0;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > prevScrollPosition) {
      setDisplayNavbarOnScroll(true);
    } else {
      setDisplayNavbarOnScroll(false);
    }
    prevScrollPosition = scrollPosition;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const navBarDefaultClasses =
    ' navbar top-0 fixed transition-all duration-300 min-h-[10vh]';
  return (
    <header
      className={
        displayNavbarOnScroll
          ? 'top-[-10vh]' + navBarDefaultClasses
          : 'top-0' + navBarDefaultClasses
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
