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
      key={title}
      className={
        'flex-col h-[580px] w-96 border-t-2 justify-stretch ' + className
      }
    >
      <Image
        className="my-2"
        src={imgData}
        alt={title}
        height={300}
        key={title}
      ></Image>
      <h2 key={title} className="p-2 text-2xl font-bold">
        {title}
      </h2>
      <p key={title}>{data}</p>
    </CenterText>
  );
};

export default InfoCard;
