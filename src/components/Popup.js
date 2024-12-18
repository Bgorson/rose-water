import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import adultDbt from '../adult_dbt_skills.png';

const slideIn = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
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

const StyledLink = styled(Link)`
  display: block;
  margin-top: 1em;
  font-size: 1.2em;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PopupContent = styled.div`
  position: relative;
  background: white;
  padding: 2em;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.5s ease-out;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 1em;
`;

const Popup = ({ onClose, imageSrc }) => {
  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleWrapperClick}>
      <PopupContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Image src={adultDbt} alt="Popup" />
        <StyledLink onClick={onClose} to="/adult-dbt">
          Click here for more information
        </StyledLink>
      </PopupContent>
    </ModalOverlay>
  );
};

export default Popup;
