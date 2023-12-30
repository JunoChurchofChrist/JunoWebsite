import React from 'react';
import Link from 'next/link';

const Dropdown = () => {
  return (
    <ul>
      <li>
        <Link href="/about/expectations">What to Expect?</Link>
      </li>
      <li>
        <Link href="/about/ministers">Our Ministers</Link>
      </li>
      <li>
        <Link href="/about/services">When/Where We Meet</Link>
      </li>
    </ul>
  );
};

export default Dropdown;
