import React from 'react';
import image from '../rosewatter.svg';

import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  margin: auto;
`;

const ImageContainer = styled.div`
  width: 75%;
  margin: auto;
  background-color: #fbede6;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const HeaderText = styled.h1`
  color: #ffb30f;
  text-align: center;
  padding: 1em;
  font-family: 'ArchivoNarrow';
  font-size: 2em;
`;
export default function Hero() {
  return (
    <ImageContainer>
      <Image alt="Rosewatter Chicago Counseling" src={image} />
    </ImageContainer>
  );
}
