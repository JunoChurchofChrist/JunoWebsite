import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="px-5 min-w-screen flex justify-around items-baseline">
      <Link href="/">Juno Church of Christ</Link>
      <div className="w-1/6 flex justify-around items-center">
        <Link href="/connect">Contact Us!</Link>
        <a
          href="https://www.facebook.com/JunoChurchOfChrist/?ref=br_rs"
          target="_blank"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default Footer;
