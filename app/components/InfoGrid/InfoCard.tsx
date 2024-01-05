import React, { ReactNode } from 'react';
import Image from 'next/image';
import CenterText from '@/app/components/CenterText';
import { InfoCardInterface } from './InfoCardItemInterface';

interface InfoCardProps {
  card: InfoCardInterface;
  className?: string;
}

const InfoCard = ({
  card: { title, data, imgData },
  className,
}: InfoCardProps) => {
  return (
    <CenterText
      className={
        'flex-col h-[580px] w-96 border-t-2 justify-stretch ' + className
      }
    >
      <Image className="my-2" src={imgData} alt={title} height={300}></Image>
      <h2 className="p-2 text-2xl font-bold">{title}</h2>
      <p>{data}</p>
    </CenterText>
  );
};

export default InfoCard;
