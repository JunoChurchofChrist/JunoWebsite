import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LinkButtonProps {
  className?: string;
  children?: ReactNode;
  href: string;
}

const LinkButton = ({ className, children, href }: LinkButtonProps) => {
  return (
    <Link href={href} className={'mx-2 p-2 border rounded ' + className}>
      {children}
    </Link>
  );
};

export default LinkButton;
