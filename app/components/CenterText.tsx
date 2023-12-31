import React, { ReactNode } from 'react';

interface CenterTextProps {
  children: ReactNode;
  className?: string;
}

const CenterText = ({ children, className }: CenterTextProps) => {
  return (
    <div className={'flex justify-center items-center ' + className}>
      {children}
    </div>
  );
};

export default CenterText;
