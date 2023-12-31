import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const CenterText = ({ children, className }: Props) => {
  return (
    <div className={'flex justify-center items-center ' + className}>
      {children}
    </div>
  );
};

export default CenterText;
