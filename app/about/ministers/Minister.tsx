import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import CenterText from '@/app/components/CenterText';

interface MinisterProps {
  className?: string;
  children?: ReactNode;
  imgData: StaticImageData;
  title: string;
}

const Minister = ({ className, children, imgData, title }: MinisterProps) => {
  return (
    <CenterText className={'flex-col m-5 text-2xl p-5' + className}>
      <h2 className="font-bold my-2">{title}</h2>
      <div className="flex m-5">
        <div className="h-fit">
          <Image src={imgData} alt={title} width={2000} />
        </div>
        <CenterText className="m-5 p-5">{children}</CenterText>
      </div>
    </CenterText>
  );
};

export default Minister;
