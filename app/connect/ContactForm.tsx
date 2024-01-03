import React from 'react';
import CenterText from '../components/CenterText';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  return (
    <form className={'flex flex-col ' + className}>
      <CenterText className="flex-col mb-5">
        <h2 className="text-2xl font-bold mb-2">Connect With Us</h2>
        <p className="text-lg">Contact us with your questions or inquiries</p>
      </CenterText>
      <div className="m-2 flex justify-between w-96">
        <div>
          <h3 className="mb-1">First Name</h3>
          <input className="rounded h-7" type="text" />
        </div>
        <div>
          <h3 className="mb-1">Last Name</h3>
          <input className="rounded h-7" type="text" />
        </div>
      </div>
      <div className="m-2 w-96">
        <h3 className="mb-1">Email</h3>
        <input className="w-full rounded h-7" type="text" />
      </div>
      <div className="m-2 w-96">
        <h3 className="mb-1">Comments</h3>
        <input className="w-full h-40 rounded" type="text" />
      </div>
    </form>
  );
};

export default ContactForm;
