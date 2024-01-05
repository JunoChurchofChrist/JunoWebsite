import React from 'react';
import CenterText from '@/app/components/CenterText';
import { expectationCardContent } from './ExpectationCardContent';
import InfoGrid from '@/app/components/InfoGrid';

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
      <InfoGrid cards={expectationCardContent} />
    </>
  );
};

export default ExpectaionPage;
