import React, { ReactNode } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import CenterText from '../CenterText';
import LinkButton from '../LinkButton';

interface FooterProps {
  children?: ReactNode;
  className?: string;
}

const Footer = ({ children, className }: FooterProps) => {
  return (
    <CenterText className={'px-5 my-5 h-[5vh] min-w-screen ' + className}>
      <div className="flex w-full justify-between items-baseline">
        <Link href="/">Juno Church of Christ</Link>
        <div className="w-1/6 flex justify-around items-center">
          <LinkButton href="/connect">Contact Us!</LinkButton>
          <a
            href="https://www.facebook.com/JunoChurchOfChrist/?ref=br_rs"
            target="_blank"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
      {children}
    </CenterText>
  );
};

export default Footer;
