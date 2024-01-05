import React from 'react';
import CenterText from '@/app/components/CenterText';
import InfoCard from '../../components/InfoCard';
import { expectationCardContent } from './ExpectationCardContent';

const ExpectaionPage = () => {
  return (
    <>
      <CenterText className="text-2xl text-bold m-5">
        What to Expect?
      </CenterText>
      <CenterText className="m-5 p-5">
        We hope you'll feel comfortable coming to visit with us. If you have any
        questions following services about how things are done, we hope you'll
        contact us or talk to someone after services. We are striving to be as
        much like Jesus and follow the example of the church in the New
        Testament.
      </CenterText>
      <CenterText className="flex-wrap">
        {expectationCardContent.map((card) => (
          <InfoCard className="p-4" imgData={card.img} title={card.title}>
            {card.data}
          </InfoCard>
        ))}
      </CenterText>
    </>
  );
};

export default ExpectaionPage;
