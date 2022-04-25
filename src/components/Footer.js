import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Map from './Map';
import { useState } from 'react';
import { send } from 'emailjs-com';
const blue = '#3498db';
const blueHover = '#2980b9';
// $cloud: #ecf0f1;
// $cloud--hover: #bdc3c7;
const transition = 'all 146ms ease';
const shadow = '0 30px 60px -30px rgba(0, 0, 0, .5)';
const radius = '3px';
const InputContainer = styled.div`
  display: flex;
  gap: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MessageArea = styled.div`
  width: 100%;
  & > textarea {
    width: 100%;
    margin: 2em 0;
    min-height: 200px;
  }
`;

const Container = styled.div`
  /* background: beige; */
  display: flex;
  justify-content: center;
  gap: 2em;
  padding-top: 3em;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2em;
  @media (max-width: 768px) {
    flex-direction: row;
    padding-top: 5em;
  }
`;
const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const InputBlock = styled.input``;

const Button = styled.button`
  color: white;
  padding: 0.35em 1em;
  box-shadow: ${shadow};
  cursor: pointer;
  border: 1px solid ${blue};
  background-color: ${blue};
  transition: ${transition};
  font-size: 1.2rem;
  border-radius: ${radius};
  &:enabled:hover {
    background-color: ${blue};
    color: #fff;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
  }
  background-color: ${blue};
  border-color: ${blue};
  &:enabled:hover {
    background-color: ${blueHover};
    border-color: ${blueHover};
  }
`;
const data = [
  {
    title: 'Contact Me',

    content: (
      <ContactCard>
        <div>
          <h4>Email</h4>
          <a href="mailto:RosewatterChiCounseling@gmail.com">
            RosewatterChiCounseling@gmail.com
          </a>
        </div>
        <div>
          <h4>Phone</h4>
          <a href=" tel:+17732317675">773-231-7675</a>
        </div>
      </ContactCard>
    ),
  },
];

const FooterCard = ({ info }) => {
  return (
    <Card style={info.grow ? { flexGrow: '1' } : null}>
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Text>{info.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default function Footer() {
  const [toSend, setToSend] = React.useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const onSubmit = (e) => {
    console.log('SUBMITED');
    e.preventDefault();
    send('service_1e56ntk', 'template_xkdqpbe', toSend, 'nwpdF_7mfYJEQ3AcZ')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
          from_name: '',
          from_email: '',
          message: '',
        });
        alert('Thank you for your message and we will be in contact soon. ');
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container id="contact">
        {data.map((IndividualData) => (
          <FooterCard info={IndividualData} />
        ))}
      </Container>
      <div style={{ paddingBottom: '2em' }}>
        <form onSubmit={onSubmit}>
          <InputContainer>
            <InputBlock
              type="text"
              name="from_name"
              placeholder="Name"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <InputBlock
              type="text"
              name="from_email"
              placeholder="Email"
              value={toSend.from_email}
              required={true}
              onChange={handleChange}
            />
          </InputContainer>
          <MessageArea>
            <textarea
              type="text"
              name="message"
              placeholder="Your message"
              value={toSend.message}
              onChange={handleChange}
            />
          </MessageArea>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}
