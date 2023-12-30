import React from 'react';
import Link from 'next/link';
import { aboutItems, aboutItemsInterface } from './aboutitems';

const Dropdown = () => {
  return (
    <div className="group hidden absolute group-hover:inline-block">
      <div className="my-4 min-w-fit border rounded z-auto">
        {aboutItems.map((item: aboutItemsInterface) => (
          <Link className="block p-2 min-w-max z-auto" href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
