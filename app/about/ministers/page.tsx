import React from 'react';
import CenterText from '@/app/components/CenterText';
import Minister from './Minister';
import { ministerCardItems } from './MinisterCardItems';

const MinisterPage = () => {
  return (
    <>
      <CenterText className="flex-col">
        <h1 className="p-3 text-3xl font-bold">OUR SERVANTS</h1>
        <p className="p-3 text-xl max-w-[70%]">
          Though all Christians are called to be ministers (2 Cor. 5:17-21), we
          have a couple of men who regularly preach and teach here at the Juno
          congregation. We hope you will come and join us for a worship service
          or Bible study and meet them.
        </p>
      </CenterText>
      {ministerCardItems.map((minister) => (
        <Minister
          imgData={minister.img}
          title={minister.title}
          name={minister.name}
        >
          {minister.data}
        </Minister>
      ))}
    </>
  );
};

export default MinisterPage;
