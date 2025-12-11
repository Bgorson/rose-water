import React, { useEffect, useState } from 'react';
import { colors, gradients } from '../utils/colors';
import styled, { keyframes } from 'styled-components';
import Logo from '../logo_transparent5.png';
import Skyline from '../chicago-skyline-lake-michigan.webp';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const HeroContainer = styled.section`
  position: relative;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    ${colors.cream} 0%,
    ${colors.roseLight} 50%,
    ${colors.cream} 100%
  );

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 2rem 1rem;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(168, 181, 160, 0.15) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(232, 196, 188, 0.2) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(201, 169, 98, 0.05) 0%,
      transparent 60%
    );
  pointer-events: none;
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Shape = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
  animation: ${float} ${(props) => props.$duration || '6s'} ease-in-out infinite;
  animation-delay: ${(props) => props.$delay || '0s'};

  &.shape-1 {
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      ${colors.sageLight} 0%,
      transparent 70%
    );
    top: 10%;
    left: -5%;
  }

  &.shape-2 {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, ${colors.rose} 0%, transparent 70%);
    bottom: 15%;
    right: -3%;
  }

  &.shape-3 {
    width: 150px;
    height: 150px;
    background: radial-gradient(
      circle,
      ${colors.goldLight} 0%,
      transparent 70%
    );
    top: 60%;
    left: 10%;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`;

const LogoImage = styled.img`
  width: 55%;
  max-width: 500px;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.3s;
  filter: drop-shadow(0 10px 30px rgba(61, 61, 61, 0.1));

  @media (max-width: 768px) {
    width: 85%;
    margin-bottom: 1.5rem;
  }
`;

const Tagline = styled.h1`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 400;
  color: ${colors.charcoal};
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.6s;
  line-height: 1.4;

  span {
    display: inline-block;
    background: linear-gradient(
      135deg,
      ${colors.sageDark} 0%,
      ${colors.sage} 50%,
      ${colors.sageDark} 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 3s linear infinite;
  }
`;

const Subtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${colors.slate};
  max-width: 600px;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.9s;
  line-height: 1.8;
`;

const CTAWrapper = styled.div`
  display: flex;
  gap: 1rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 1.2s;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: linear-gradient(
    135deg,
    ${colors.sage} 0%,
    ${colors.sageDark} 100%
  );
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(122, 139, 114, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(122, 139, 114, 0.4);
    color: white;
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: transparent;
  color: ${colors.sageDark};
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid ${colors.sage};
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${colors.sage};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 4px 20px rgba(122, 139, 114, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 1.8s;
  cursor: pointer;

  span {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    color: ${colors.muted};
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, ${colors.sage} 0%, transparent 100%);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: ${colors.sage};
    animation: scrollDown 1.5s ease-in-out infinite;
  }

  @keyframes scrollDown {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(30px);
      opacity: 0;
    }
  }
`;

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <BackgroundPattern />
      <FloatingShapes>
        <Shape className="shape-1" $duration="8s" $delay="0s" />
        <Shape className="shape-2" $duration="7s" $delay="1s" />
        <Shape className="shape-3" $duration="9s" $delay="2s" />
      </FloatingShapes>

      <ContentWrapper>
        <LogoImage alt="Rosewatter Chicago Counseling" src={Logo} />
        <Tagline>
          Where <span>healing</span> begins through connection
        </Tagline>
        <Subtitle>
          At Rosewatter Chicagoland Counseling, we believe in the power of the
          therapeutic relationship. Our compassionate team is here to walk
          alongside you on your journey toward emotional well-being.
        </Subtitle>
        <CTAWrapper>
          <PrimaryButton href="/appointment">
            Schedule a Consultation
          </PrimaryButton>
          <SecondaryButton href="/about">Meet Our Team</SecondaryButton>
        </CTAWrapper>
      </ContentWrapper>

      <ScrollIndicator onClick={scrollToServices}>
        <span>Explore</span>
        <ScrollLine />
      </ScrollIndicator>
    </HeroContainer>
  );
}
