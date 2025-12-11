import styled, { keyframes } from 'styled-components';
import React, { useRef, useEffect, useState } from 'react';
import Card from './gallery/card/Card';
import { staffMembers } from '../components/StaffPage';
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

const PageWrapper = styled.div`
  background: ${colors.cream};
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 5rem 2rem 3rem;
  text-align: center;
  background: linear-gradient(
    180deg,
    ${colors.roseLight} 0%,
    ${colors.cream} 100%
  );
  position: relative;
`;

const SectionHeader = styled.div`
  max-width: 700px;
  margin: 0 auto;
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
`;

const Title = styled.h1`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 500;
  color: ${colors.charcoal};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const TitleAccent = styled.span`
  display: inline-block;
  background: linear-gradient(
    135deg,
    ${colors.sage} 0%,
    ${colors.sageDark} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.15rem;
  color: ${colors.slate};
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
`;

const TeamSection = styled.section`
  padding: 3rem 2rem 5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.25rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  background: ${(props) => (props.$active ? colors.sage : 'transparent')};
  color: ${(props) => (props.$active ? 'white' : colors.slate)};
  border: 2px solid ${(props) => (props.$active ? colors.sage : colors.sand)};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.$active ? colors.sageDark : colors.sand)};
    color: ${(props) => (props.$active ? 'white' : colors.charcoal)};
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DecorativeQuote = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  padding: 2rem;
  background: rgba(168, 181, 160, 0.08);
  border-radius: 20px;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Cormorant Garamond', serif;
    font-size: 4rem;
    color: ${colors.rose};
    line-height: 1;
  }
`;

const QuoteText = styled.p`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 1.5rem;
  font-style: italic;
  color: ${colors.charcoal};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const QuoteAuthor = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: ${colors.sage};
  font-weight: 500;
`;

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const currentDate = new Date();
  const cutoffDate = new Date('2025-03-28');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getRoleCategory = (staff) => {
    // Use explicit category if defined
    if (staff.category) return staff.category;

    const title = staff.title?.toLowerCase() || '';
    if (title.includes('owner') || title.includes('director')) {
      return 'leadership';
    }
    if (
      title.includes('trainee') ||
      title.includes('practicum') ||
      title.includes('fellow') ||
      title.includes('intern')
    ) {
      return 'trainees';
    }
    return 'clinicians';
  };

  const filteredStaff = staffMembers
    .filter((staff) => !(staff.id === 4 && currentDate > cutoffDate))
    .filter((staff) => {
      if (filter === 'all') return true;
      const category = getRoleCategory(staff);
      // 'staff' category only shows in "All Staff"
      if (category === 'staff') return false;
      return category === filter;
    });

  return (
    <PageWrapper>
      <HeroSection ref={sectionRef}>
        <SectionHeader $isVisible={isVisible}>
          <Eyebrow>Our Team</Eyebrow>
          <Title>
            Meet the <TitleAccent>Rosewatter</TitleAccent> Team
          </Title>
          <Subtitle>
            Our diverse team of licensed clinicians brings together decades of
            combined experience in evidence-based therapies, all united by a
            commitment to compassionate, client-centered care.
          </Subtitle>
        </SectionHeader>
      </HeroSection>

      <TeamSection>
        <Container>
          <FilterBar>
            <FilterButton
              $active={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              All Team
            </FilterButton>
            <FilterButton
              $active={filter === 'leadership'}
              onClick={() => setFilter('leadership')}
            >
              Leadership
            </FilterButton>
            <FilterButton
              $active={filter === 'clinicians'}
              onClick={() => setFilter('clinicians')}
            >
              Clinicians
            </FilterButton>
            <FilterButton
              $active={filter === 'trainees'}
              onClick={() => setFilter('trainees')}
            >
              Trainees & Fellows
            </FilterButton>
          </FilterBar>

          <CardContainer>
            {filteredStaff.map((staff) => (
              <Card
                key={staff.id}
                image={staff.image}
                routeName={staff.routeName}
                title={staff.header}
                description={staff.title}
                blurb={staff.blurb}
              />
            ))}
          </CardContainer>
        </Container>
      </TeamSection>
    </PageWrapper>
  );
}
