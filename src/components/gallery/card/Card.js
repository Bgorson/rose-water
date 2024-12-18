import React, { useState } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    transform 0.6s,
    box-shadow 0.3s;
  backface-visibility: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 2em auto;
  }
`;

const Header = styled.div`
  width: 100%;
  padding: 1em;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #ccc;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const TapToFlipOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5em 1em;
  border-radius: 5px;
  font-size: 0.9em;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  width: 90%;
`;

const Image = styled.img`
  width: 100%;
  height: 350px; /* Fixed height */
  object-fit: cover; /* Maintain aspect ratio and cover the area */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Card = ({ image, title, description, routeName, blurb }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <CardContainer onClick={handleClick}>
        <Header>{title}</Header>
        <Image
          src={image}
          srcSet={`${image}?w=300 300w, ${image}?w=600 600w, ${image}?w=900 900w`}
          sizes="(max-width: 768px) 100vw, 300px"
          alt={title}
        />
        <TapToFlipOverlay>Tap for Bio</TapToFlipOverlay>
      </CardContainer>

      <CardContainer onClick={handleClick}>
        <TextContainer>
          <h4>{title}</h4>
          <p>{blurb}</p>
        </TextContainer>

        <Link
          to={`/about/${routeName.toLowerCase().replace(' ', '-')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Link>
      </CardContainer>
    </ReactCardFlip>
  );
};

export default Card;
