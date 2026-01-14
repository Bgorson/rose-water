import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { colors } from '../utils/colors';

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
  flex: 1 1 340px;
  max-width: 400px;
  min-width: 300px;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? '0' : '30px')});
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${(props) => props.$delay || '0s'};

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

const Card = styled.div`
  position: relative;
  background: ${colors.warmWhite};
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(61, 61, 61, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(61, 61, 61, 0.12);

    img {
      transform: scale(1.05);
    }

    .overlay {
      opacity: 1;
    }

    .arrow {
      transform: translateX(5px);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 260px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 50%,
    rgba(61, 61, 61, 0.4) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${colors.sageDark};
`;

const Content = styled.div`
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.charcoal};
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const Description = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: ${colors.slate};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex: 1;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.sageDark};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.sage};
  }
`;

const Arrow = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  font-size: 1.2rem;
`;

const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${colors.muted};
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${colors.sand};
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.sand};
    color: ${colors.charcoal};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const DecorativeLine = styled.div`
  height: 3px;
  width: 40px;
  background: linear-gradient(90deg, ${colors.rose}, ${colors.sage});
  border-radius: 3px;
  margin-bottom: 1rem;
`;

export default function ServiceBox({ service, index = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0, rootMargin: '100px 0px 100px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryLabel = (title) => {
    if (title.toLowerCase().includes('adhd') || title.toLowerCase().includes('assessment')) return 'Assessment';
    if (title.toLowerCase().includes('dbt')) return 'DBT';
    if (title.toLowerCase().includes('couples')) return 'Relationships';
    if (title.toLowerCase().includes('individual')) return 'Personal Growth';
    if (title.toLowerCase().includes('workshop')) return 'Training';
    if (title.toLowerCase().includes('consultation')) return 'Professional';
    if (title.toLowerCase().includes('group')) return 'Group';
    return 'Therapy';
  };

  return (
    <CardContainer
      ref={cardRef}
      $isVisible={isVisible}
      $delay={`${index * 0.1}s`}
    >
      <Card>
        <ImageWrapper>
          {service.link ? (
            <Link to={service.link}>
              <Image src={service.image} alt={service.title} />
              <ImageOverlay className="overlay" />
            </Link>
          ) : (
            <>
              <Image src={service.image} alt={service.title} />
              <ImageOverlay className="overlay" />
            </>
          )}
          <CategoryBadge>{getCategoryLabel(service.title)}</CategoryBadge>
        </ImageWrapper>

        <Content>
          <DecorativeLine />
          <Title>{service.title}</Title>
          <Description>{service.description}</Description>

          <LinkWrapper>
            {service.link && (
              <StyledLink to={service.link}>
                Learn More
                <Arrow className="arrow">→</Arrow>
              </StyledLink>
            )}

            {service.pdf && (
              <DownloadLink href={service.pdf} download>
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
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download Flyer
              </DownloadLink>
            )}
          </LinkWrapper>
        </Content>
      </Card>
    </CardContainer>
  );
}
