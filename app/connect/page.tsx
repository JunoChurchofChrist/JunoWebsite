import React from 'react';
import ContactForm from './ContactForm';
import CenterText from '../components/CenterText';

const ConnectPage = () => {
  return (
    <CenterText className="flex-col">
      <h3 className="text-lg my-5">
        Looking for a church home? Wanting a better relationship with God?
        Looking for more information about the church?
      </h3>
      <ContactForm className="mt-5" />
    </CenterText>
  );
};

export default ConnectPage;
