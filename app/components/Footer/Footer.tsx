import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import CenterText from '../CenterText';

const Footer = () => {
  return (
    <CenterText className="px-5 my-5 h-[5vh] min-w-screen">
      <div className="flex w-full justify-between items-baseline">
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
    </CenterText>
  );
};

export default Footer;
