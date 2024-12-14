import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import GroupFlyer from "../DBT_PAGE1.png";
import GroupFlyerPDF from "../DBTMFGFlyer.pdf";

const FlyerImage = styled.img`
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  cursor: pointer; /* Indicate that the image is clickable */
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  margin-left: 10px;
  font-size: 0.9em;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  max-width: 700px; /* Set a max-width to avoid excessive scaling */
  margin: 0 auto; /* Center the container */
  padding-bottom: 4em; /* Add some space at the bottom */
`;

const Text = styled.p`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 2em;
  border-radius: 16px;
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

const InputBlock = styled.input``;

const Button = styled.button`
  color: white;
  padding: 0.35em 1em;
  box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border: 1px solid #3498db;
  background-color: #3498db;
  transition: all 146ms ease;
  font-size: 1.2rem;
  border-radius: 3px;
  &:enabled:hover {
    background-color: #2980b9;
    border-color: #2980b9;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export default function Group() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
    subject: "DBT Multifamily Group Inquiry",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(service, template, templateParams, {
        publicKey: publicKey,
      })
      .then(() => {
        setToSend({
          from_name: "",
          from_email: "",
          message: "",
        });
        alert("Thank you for your message and we will be in contact soon. ");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <FlyerImage
        src={GroupFlyer}
        srcSet={`${GroupFlyer} 1x, ${GroupFlyer} 2x`}
        sizes="(max-width: 600px) 100vw, 800px"
        alt="Group Flyer"
        onClick={openModal}
      />
      <StyledAnchor href={GroupFlyerPDF} download>
        Download Flyer
      </StyledAnchor>
      <Text>Contact Us Here:</Text>
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
            type="email"
            name="from_email"
            placeholder="Email"
            value={toSend.from_email}
            required={true}
            onChange={handleChange}
          />
        </InputContainer>
        <MessageArea>
          <textarea
            style={{ borderRadius: "16px", padding: "1em" }}
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
        </MessageArea>
        <Button type="submit">Submit</Button>
      </form>
      {isModalOpen && (
        <Modal onClick={closeModal}>
          <ModalImage src={GroupFlyer} alt="Group Flyer" />
        </Modal>
      )}
    </Container>
  );
}
