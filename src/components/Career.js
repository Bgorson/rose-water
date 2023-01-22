import styled from 'styled-components';
import React from 'react';
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
const Paragraph = styled.p`
  padding: 2em;
  font-family: 'Playfair';
  font-size: 21px;
`;
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
const InputBlock = styled.input``;

const Career = () => {
  const [toSend, setToSend] = React.useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send('service_1e56ntk', 'template_xkdqpbe', toSend, 'nwpdF_7mfYJEQ3AcZ')
      .then(() => {
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
    <div>
      <Paragraph>
        Rosewatter Chicagoland Counseling is currently recruiting for
        pre-licensed or licensed mental health practioners to join the practice. Please reach out with
        your name, a description of your credentials and your email address for more information.
      </Paragraph>
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
  );
};

export default Career;
