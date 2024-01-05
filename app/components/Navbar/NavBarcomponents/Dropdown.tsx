import React from 'react';
import Link from 'next/link';
import { DropdownItemsInterface } from './DropdownItemInterface';

interface DropdownProps {
  dropdownItems: Array<DropdownItemsInterface>;
}

const Dropdown = ({ dropdownItems }: DropdownProps) => {
  return (
    <div className="group hidden absolute group-hover:inline-block">
      <div className="my-2 min-w-fit border rounded z-auto">
        {dropdownItems.map((item: DropdownItemsInterface) => (
          <Link
            key={item.title}
            className="block p-2 min-w-max z-auto"
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
