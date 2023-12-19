import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Minister = ({ children }: Props) => {
  return <div className="my-5">Minister</div>;
};

export default Minister;
