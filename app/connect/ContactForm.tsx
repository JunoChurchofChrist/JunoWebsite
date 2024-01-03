'use client';
import React from 'react';
import CenterText from '../components/CenterText';
import { FieldValues, useForm } from 'react-hook-form';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'flex flex-col ' + className}
    >
      <CenterText className="flex-col mb-5">
        <h2 className="text-2xl font-bold mb-2">Connect With Us</h2>
        <p className="text-lg">Contact us with your questions or inquiries</p>
      </CenterText>
      <div className="m-2 flex justify-between w-96">
        <div>
          <label htmlFor="firstName" className="mb-1">
            First Name
          </label>
          <input
            {...register('firstName')}
            id="firstName"
            className="rounded h-7"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1">
            Last Name
          </label>
          <input
            {...register('lastName')}
            id="lastName"
            className="rounded h-7"
            type="text"
          />
        </div>
      </div>
      <div className="m-2 w-96">
        <label htmlFor="email" className="mb-1">
          Email
        </label>
        <input
          {...register('email')}
          id="email"
          className="w-full rounded h-7"
          type="text"
        />
      </div>
      <div className="m-2 w-96">
        <label htmlFor="comments" className="mb-1">
          Comments
        </label>
        <input
          {...register('comments')}
          id="comments"
          className="w-full h-40 rounded"
          type="text"
        />
      </div>
      <button type="submit" className="btn btn-primary m-2">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
