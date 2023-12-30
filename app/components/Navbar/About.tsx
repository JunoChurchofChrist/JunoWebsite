import React, { ReactNode } from 'react';
import Dropdown from './Dropdown';

interface Props {
  children?: ReactNode;
  classname?: string;
}

const About = ({ children, classname }: Props) => {
  return (
    <div
      className={
        'group relative inline-block hover:cursor-pointer ' + classname
      }
    >
      <div>About {children}</div>
      <Dropdown />
    </div>
  );
};

export default About;
