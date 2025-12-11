import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../../utils/colors';
import { ImagePlaceholder } from '../../StaffPage';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  height: 560px;
  perspective: 1000px;
  -webkit-perspective: 1000px;
  cursor: pointer;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? '0' : '30px')});
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 520px;
    margin: 0 auto;
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) =>
    props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(61, 61, 61, 0.08);
`;

const CardFront = styled(CardFace)`
  background: ${colors.warmWhite};
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 12px 40px rgba(61, 61, 61, 0.12);
  }
`;

const CardBack = styled(CardFace)`
  background: linear-gradient(
    135deg,
    ${colors.warmWhite} 0%,
    ${colors.roseLight} 100%
  );
  transform: rotateY(180deg) translateZ(1px);
  -webkit-transform: rotateY(180deg) translateZ(1px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(255, 254, 250, 0.8) 100%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    height: 360px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.6s ease;

  ${CardContainer}:hover & {
    transform: scale(1.03);
  }
`;

const PlaceholderStyled = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${colors.sand} 0%, ${colors.stone} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  color: ${colors.muted};
`;

const FrontContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: ${colors.warmWhite};
`;

const Name = styled.h3`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.charcoal};
  margin-bottom: 0.25rem;
  line-height: 1.3;
`;

const Role = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: ${colors.sage};
  font-weight: 500;
  margin: 0;
`;

const TapHint = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  background: rgba(168, 181, 160, 0.9);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: white;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  svg {
    width: 12px;
    height: 12px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const BackContent = styled.div`
  text-align: center;
`;

const BackName = styled.h4`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: ${colors.charcoal};
  margin-bottom: 0.75rem;
`;

const Bio = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: ${colors.slate};
  line-height: 1.6;
  margin-bottom: 1.5rem;

  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    -webkit-line-clamp: 8;
  }
`;

const LearnMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(
    135deg,
    ${colors.sage} 0%,
    ${colors.sageDark} 100%
  );
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(122, 139, 114, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(122, 139, 114, 0.35);
    color: white;
  }
`;

const DecorativeDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 0.75rem;

  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${colors.rose};

    &:nth-child(2) {
      background: ${colors.sage};
    }

    &:nth-child(3) {
      background: ${colors.gold};
    }
  }
`;

const FlipBackHint = styled.div`
  margin-top: 1rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: ${colors.muted};

  @media (min-width: 769px) {
    display: none;
  }
`;

const Card = ({ image, title, description, routeName, blurb }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (e) => {
    // Don't flip if clicking on the learn more link
    if (e.target.closest('a')) return;
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer ref={cardRef} onClick={handleClick} $isVisible={isVisible}>
      <CardInner $isFlipped={isFlipped}>
        <CardFront>
          <ImageWrapper>
            {image ? (
              <Image src={image} alt={title} loading="lazy" />
            ) : (
              <PlaceholderStyled>Photo Coming Soon</PlaceholderStyled>
            )}
          </ImageWrapper>
          <FrontContent>
            <Name>{title}</Name>
            <Role>{description}</Role>
          </FrontContent>
          <TapHint>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
              />
            </svg>
            Tap for bio
          </TapHint>
        </CardFront>

        <CardBack>
          <BackContent>
            <DecorativeDots>
              <span></span>
              <span></span>
              <span></span>
            </DecorativeDots>
            <BackName>{title}</BackName>
            <Bio>{blurb}</Bio>
            <LearnMoreLink
              to={`/about/${routeName.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => e.stopPropagation()}
            >
              View Full Profile
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </LearnMoreLink>
            <FlipBackHint>Tap to flip back</FlipBackHint>
          </BackContent>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
