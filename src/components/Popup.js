import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import GroupThumbnal from "../Group_Thumbnail.png";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
`;

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const PopupContent = styled.div`
  position: relative;
  background: white;
  padding: 2em;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.5s ease-out;
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
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1em;
`;

const Popup = ({ onClose }) => {
  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <PopupWrapper onClick={handleWrapperClick}>
      <PopupContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Image src={GroupThumbnal} alt="Group Image" />
        <h2>Upcoming DBT Multifamily Group</h2>
        <p>Group starts Wednesdays in October!</p>
        <Link onClick={onClose} to="/group">
          Click here for more information
        </Link>
      </PopupContent>
    </PopupWrapper>
  );
};

export default Popup;
