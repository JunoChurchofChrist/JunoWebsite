import React from 'react';
import CenterText from '@/app/components/CenterText';

const ServicesPage = () => {
  return (
    <>
      <CenterText className="box-border h-60 text-lg mx-5">
        Anyone is welcome to visit our services and events here at Juno. We hope
        you'll find the environment welcoming and friendly.
      </CenterText>
      <CenterText className="text-2xl">
        <CenterText className="">
          <h2>Juno Church of Christ</h2>
          <p>4600 US-412 Lexington, TN. 38340</p>
        </CenterText>
        <CenterText className="">
          <h2 className="font-bold my-2">Sundays</h2>
          <p>9:30a - Bible Class</p>
          <p>10:30a - Morning Worship</p>
          <p>9:30a - Evening Worship</p>
          <h2 className="font-bold my-2">Wednesdays</h2>
          <p>6:30p - Bible Classes</p>
        </CenterText>
      </CenterText>
    </>
  );
};

export default ServicesPage;
