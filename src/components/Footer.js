import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { colors } from '../utils/colors';
import Logo from '../../src/simple_logo.png';
import { Link } from 'react-router-dom';
import InstagramLink from './Instagram';
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
  border-radius: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContentText = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
const ContactCard = styled.div`
  // padding: 1em 0;
  display: flex;
  font-size: 32px;
  justify-content: center;
  gap: 1em;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 21px;
    flex-direction: column-reverse;
    align-items: center;
  }
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

const Card = styled.div`
  background-color: ${colors.lightGreen};
  width: 100%;
`;
const CardTitle = styled.div`
  text-align: center;
  font-size: 32px;
`;
const FormContainer = styled.div`
  padding-top: 2em;
  background: ${colors.grey};
`;
const ContactTags = styled.a`
  color: ${colors.grey};
`;
const ContactText = styled.div`
  text-align: center;
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
`;
const LogoImage = styled.img`
  height: 300px;
  margin: -2em 0;
`;
export default function Footer() {
  // eslint-disable-next-line no-undef
  const service = process.env.REACT_APP_SERVICE_EMAIL;
  // eslint-disable-next-line no-undef
  const template = process.env.REACT_APP_TEMPLATE_EMAIL;
  // eslint-disable-next-line no-undef
  const publicKey = process.env.REACT_APP_PUBLIC_EMAIL;
  const [toSend, setToSend] = React.useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(service, template, toSend, {
        publicKey: publicKey,
      })
      .then(() => {
        setToSend({
          from_name: '',
          from_email: '',
          message: '',
        });
        // eslint-disable-next-line no-undef
        alert('Thank you for your message and we will be in contact soon. ');
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormContainer>
        <h2>Please Contact Us Using the Form Below</h2>
        <div style={{ padding: '2em' }}>
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
                style={{ borderRadius: '16px', padding: '1em' }}
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
      </FormContainer>

      <Container id="contact">
        <Card>
          <CardTitle>Or Reach Out to Us</CardTitle>
          <ContactCard>
            <LogoImage src={Logo} alt="logo" />
            <ContentText>
              <ContactTags
                className="contactInfo"
                href="mailto:inquiry@rosewatterchicounseling.com"
              >
                inquiry@rosewatterchicounseling.com
              </ContactTags>
            </ContentText>
          </ContactCard>
          <ContactText>
            <InstagramLink />
            Check out our Instagram @rosewatterchicounseling
          </ContactText>
        </Card>
      </Container>
      {/* <Link to="/admin">Admin</Link> */}
    </>
  );
}
