import React from 'react';
import { Html, Body, Container, Text, Preview } from '@react-email/components';

interface ContactMessageProps {
  firstName: string;
  lastName: string;
  comments: string;
  returnAddress: string;
}

const ContactMessage = ({
  firstName,
  lastName,
  comments,
  returnAddress,
}: ContactMessageProps) => {
  return (
    <Html>
      <Preview>
        {firstName} {lastName} has reached out to you...
      </Preview>
      <Body>
        <Container>
          <Text>
            {firstName} {lastName} has reached out from {returnAddress} saying:
          </Text>
          <Text>{comments}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactMessage;
