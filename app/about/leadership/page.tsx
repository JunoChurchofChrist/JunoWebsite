import React from 'react';
import CenterText from '@/app/components/CenterText';
import { elderCardItems } from './ElderCardItems';
import InfoGrid from '@/app/components/InfoGrid';

const LeadershipPage = () => {
  return (
    <>
      <CenterText>
        <p>Find a verse discribing the role of elders</p>
        <h2 className="font-bold text-2xl">Our Elders</h2>
      </CenterText>
      <InfoGrid cards={elderCardItems} />
    </>
  );
};

export default LeadershipPage;
