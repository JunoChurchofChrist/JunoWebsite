import React, { ReactNode } from 'react';
import Dropdown from './Dropdown';
import { DropdownItemsInterface } from './DropdownItemInterface';

interface AboutProps {
  children: ReactNode;
  classname?: string;
  dropdownItems: Array<DropdownItemsInterface>;
}

const DropdownButton = ({ children, classname, dropdownItems }: AboutProps) => {
  return (
    <div
      className={
        'mx-2 border rounded group relative inline-block hover:cursor-pointer ' +
        classname
      }
    >
      <div className="p-2">{children}</div>
      <Dropdown dropdownItems={dropdownItems} />
    </div>
  );
};

export default DropdownButton;
