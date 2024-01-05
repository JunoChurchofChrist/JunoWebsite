import React, { ReactNode } from 'react';

interface CenterTextProps {
  children: ReactNode;
  className?: string;
  key?: string;
}

const CenterText = ({ children, className, key }: CenterTextProps) => {
  return (
    <div key={key} className={'flex justify-center items-center ' + className}>
      {children}
    </div>
  );
};

export default CenterText;
