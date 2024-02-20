import React from "react";
import { colors } from "../utils/colors";
import styled from "styled-components";
import Logo from "../logo_transparent5.png";

const Image = styled.img`
  margin: auto;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
  padding: 2em;
`;
const HeaderText = styled.h1`
  text-align: center;
  padding: 0.5em;
  font-family: "Playfair";
  font-size: 4em;
  @media (max-width: 768px) {
    font-size: 2em;
  }
`;
export default function Hero() {
  return (
    <ImageContainer>
      <Image alt="Rosewatter Chicago Counseling" src={Logo} />
      {/* <HeaderText>Rosewatter Chicagoland Counseling PLLC </HeaderText> */}
    </ImageContainer>
  );
}
