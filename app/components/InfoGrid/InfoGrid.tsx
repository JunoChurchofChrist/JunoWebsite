import React from 'react';
import CenterText from '../CenterText';
import InfoCard from './InfoCard';
import { InfoCardInterface } from './InfoCardItemInterface';

interface InfoGridProps {
  cards: InfoCardInterface[];
  className?: string;
}

const InfoGrid = ({ cards, className }: InfoGridProps) => {
  return (
    <CenterText>
      <CenterText className={'flex-wrap max-w-[72rem] ' + className}>
        {cards.map((card) => (
          <InfoCard className="p-4" card={card} />
        ))}
      </CenterText>
    </CenterText>
  );
};

export default InfoGrid;
