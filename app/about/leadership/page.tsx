import React from 'react';
import CenterText from '@/app/components/CenterText';
import { elderCardItems } from './ElderCardItems';
import InfoGrid from '@/app/components/InfoGrid';

const LeadershipPage = () => {
  return (
    <>
      <CenterText className="flex-col">
        <p className="m-5">Find a verse discribing the role of elders</p>
        <h2 className="font-bold text-2xl m-5">Our Elders</h2>
      </CenterText>
      <InfoGrid cards={elderCardItems} />
    </>
  );
};

export default LeadershipPage;
