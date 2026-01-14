import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../utils/colors';
import Skyline from '../chicago-skyline-lake-michigan.webp';

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

const Section = styled.section`
  position: relative;
  background: ${colors.cream};
`;

const ContentSection = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1.5rem;
  }
`;

const TextContent = styled.div`
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? '0' : '30px')});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${colors.sage};
  margin-bottom: 1rem;
  position: relative;
  padding-left: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
    height: 2px;
    background: ${colors.sage};
  }
`;

const Headline = styled.h2`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 500;
  color: ${colors.charcoal};
  line-height: 1.3;
  margin-bottom: 1.5rem;

  span {
    color: ${colors.sageDark};
  }
`;

const Description = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  color: ${colors.slate};
  line-height: 1.9;
  margin-bottom: 1.5rem;
`;

const HighlightText = styled.p`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 1.4rem;
  font-style: italic;
  color: ${colors.sageDark};
  line-height: 1.6;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  border-left: 3px solid ${colors.rose};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(168, 181, 160, 0.08);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(168, 181, 160, 0.15);
    transform: translateY(-3px);
  }
`;

const StatNumber = styled.div`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${colors.sageDark};
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: ${colors.slate};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ImageWrapper = styled.div`
  position: relative;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? '0' : '30px')});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;

  @media (max-width: 900px) {
    order: -1;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid ${colors.sage};
    border-radius: 20px;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 60%;
    height: 60%;
    background: ${colors.roseLight};
    border-radius: 20px;
    z-index: -1;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  display: block;

  @media (max-width: 768px) {
    object-position: left center;
  }
`;

const ParallaxSection = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ParallaxImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${Skyline});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @supports (-webkit-touch-callout: none) {
    background-attachment: scroll;
  }

  @media (max-width: 768px) {
    background-position: left center;
  }
`;

const ParallaxOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(251, 248, 245, 0.3) 0%,
    rgba(168, 181, 160, 0.2) 50%,
    rgba(251, 248, 245, 0.3) 100%
  );
`;

const ParallaxContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const ParallaxText = styled.h3`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  line-height: 1.4;
`;

const StaticSkyline = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
    object-position: left center;
  }
`;

export default function AboutMeHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let isSafariCheck = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setIsSafari(isSafariCheck);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0, rootMargin: '100px 0px 100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={sectionRef}>
      <ContentSection>
        <TextContent $isVisible={isVisible}>
          <Eyebrow>Welcome</Eyebrow>
          <Headline>
            We're glad you're <span>here</span>
          </Headline>
          <HighlightText>
            "Research tells us that the relationship between client and
            therapist is the central healing factor in psychotherapy."
          </HighlightText>
          <Description>
            At Rosewatter Chicagoland Counseling, we know that people who have a
            good relationship with their therapist will get the most out of
            therapy. On this website you will find information about us and how
            we approach our work. Knowing a little bit more about our team will
            help you decide if we could be a good fit for you.
          </Description>
        </TextContent>

        <ImageWrapper $isVisible={isVisible}>
          <ImageFrame>
            <StyledImage src={Skyline} alt="Chicago Skyline" />
          </ImageFrame>
        </ImageWrapper>
      </ContentSection>
    </Section>
  );
}
