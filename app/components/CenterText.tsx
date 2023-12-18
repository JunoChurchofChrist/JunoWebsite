import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const CenterText = ({ children, className }: Props) => {
  const styles = 'flex justify-center items-center ' + className;
  return <div className={styles}>{children}</div>;
};

export default CenterText;
