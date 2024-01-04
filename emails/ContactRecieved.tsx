import React from 'react';
import { Html, Body, Container, Text, Preview } from '@react-email/components';

interface ContactRecievedProps {
  firstName: string;
  lastName: string;
}

const ContactRecieved = ({ firstName, lastName }: ContactRecievedProps) => {
  return (
    <Html>
      <Preview>We have recieved your message...</Preview>
      <Body>
        <Container>
          <Text>
            Hello {firstName} {lastName}
          </Text>
          <Text>
            We have recieved your message and will be reaching out to you as
            soon as we have the chance.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactRecieved;
