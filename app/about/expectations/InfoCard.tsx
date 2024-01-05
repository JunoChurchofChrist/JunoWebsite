import React, { ReactNode } from 'react';
import Image from 'next/image';
import CenterText from '@/app/components/CenterText';
import { StaticImageData } from 'next/image';

interface InfoCardProps {
  title: string;
  imgData: StaticImageData;
  className?: string;
  children?: ReactNode;
}

const InfoCard = ({ title, imgData, className, children }: InfoCardProps) => {
  return (
    <CenterText
      key={title}
      className={
        'flex-col h-[580px] w-96 border-t-2 justify-stretch ' + className
      }
    >
      <Image className="my-2" src={imgData} alt={title} height={300}></Image>
      <h2 className="p-2 text-2xl font-bold">{title}</h2>
      {children}
    </CenterText>
  );
};

export default InfoCard;
