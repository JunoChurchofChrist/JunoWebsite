import React from 'react';
import Minister from './Minister';
import dakota from '@/public/img/ministers/dakota.jpeg';
import isaiah from '@/public/img/ministers/isaiah.jpeg';

const MinisterPage = () => {
  return (
    <>
      <Minister imgData={dakota} title="Minister">
        Dakota Jenkins is currently serving as the part-time minister. He is an
        Freed-Hardeman University graduate with a major in Bible, minor in
        Spanish, and another minor in Business. When he is not preaching at
        Juno, he is running his electrician business, Jenkins Electric,
        fathering his two children Sydney and Solomon, or studying to complete
        the masters degree he is currently pursuing from FHU. He is married to
        Adrianna Jenkins and they enjoy and appreciate the opportunity to work
        with the Juno congregation.
      </Minister>
      <div className="p-5"></div>
      <Minister imgData={isaiah} title="Associate Minister">
        Isaiah Leininger is currently serving as our youth minister. He is a
        student at Freed-Hardeman University where he is double majoring in
        Bible and Social Work. Originally from West Virginia, he is very
        grateful for the opportunities he has been given to attend FHU and work
        with the Juno congregation. His favorite verse is Romans 8:18
      </Minister>
    </>
  );
};

export default MinisterPage;
