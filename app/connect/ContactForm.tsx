'use client';
import React from 'react';
import { csrfToken } from 'next-auth/client'
import CenterText from '../components/CenterText';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface ContactFormProps {
  className?: string;
}

const schema = z.object({
  firstName: z.string().min(1, { message: 'Must Have a First Name' }),
  lastName: z.string().min(1, { message: 'Must Have a Last Name' }),
  email: z.string().email(),
  comments: z
    .string()
    .min(3, { message: 'Comments must be more than 3 characters' }),
});

export type FormData = z.infer<typeof schema>;

const ContactForm = ({ className }: ContactFormProps) => {
  const token = csrfToken();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    console.log(response);
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
        <div className="max-w-[48%]">
          <label htmlFor="firstName" className="mb-1">
            First Name
          </label>
          <input
            {...register('firstName')}
            id="firstName"
            className="rounded h-7 p-1 max-w-full"
            type="text"
            placeholder="First"
          />
          {errors.firstName && (
            <p className="text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div className="max-w-[48%]" >
          <label htmlFor="lastName" className="mb-1">
            Last Name
          </label>
          <input
            {...register('lastName')}
            id="lastName"
            className="rounded h-7 p-1 max-w-full"
            type="text"
            placeholder="Last"
          />
          {errors.lastName && (
            <p className="text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div className="m-2 w-96">
        <label htmlFor="email" className="mb-1">
          Email
        </label>
        <input
          {...register('email')}
          id="email"
          className="w-full rounded h-7 p-1"
          type="text"
          placeholder="example@email.com"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>
      <div className="m-2 w-96">
        <label htmlFor="comments" className="mb-1">
          Comments/Questions
        </label>
        <textarea
          {...register('comments')}
          id="comments"
          className="w-full rounded resize-none p-1"
          rows={6}
          cols={50}
        />
        {errors.comments && (
          <p className="text-red-600">{errors.comments.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary m-2">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
