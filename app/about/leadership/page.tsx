import React from 'react';
import CenterText from '@/app/components/CenterText';
import InfoCard from '@/app/components/InfoCard';
import { elderCardItems } from './ElderCardItems';

const LeadershipPage = () => {
  return (
    <>
      <CenterText>
        <p>Find a verse discribing the role of elders</p>
        <h2 className="font-2xl text-bold">Our Elders</h2>
      </CenterText>
      <CenterText className="flex-wrap">
        {elderCardItems.map((card) => (
          <InfoCard className="p-4" imgData={card.img} title={card.name}>
            {card.contact}
          </InfoCard>
        ))}
      </CenterText>
    </>
  );
};

export default LeadershipPage;
