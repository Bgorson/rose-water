import React from 'react';
import image from '../rose-water-759.jpg';

import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;
const HeaderText = styled.h1`
  color: #ffb30f;
  text-align: center;
  padding: 2em;
`;
export default function Hero() {
  return (
    <div>
      <HeaderText>Rose Water Therapy</HeaderText>
      <Image src={image} />
    </div>
  );
}
