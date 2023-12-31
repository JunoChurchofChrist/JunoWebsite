import React, { ReactNode } from 'react';
import Dropdown from './Dropdown';

interface AboutProps {
  children?: ReactNode;
  classname?: string;
}

const About = ({ children, classname }: AboutProps) => {
  return (
    <div
      className={
        'group relative inline-block hover:cursor-pointer ' + classname
      }
    >
      <div className="p-2">About {children}</div>
      <Dropdown />
    </div>
  );
};

export default About;
