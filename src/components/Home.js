import React, { useRef, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ServiceBox from '../components/ServiceBox';
import styled, { keyframes } from 'styled-components';
import AboutMeHome from './AboutMeHome.js';
import Footer from '../components/Footer';
import IndividualService from '../individual.jpg';
import CouplesService from '../couples.jpg';
import WorkShop from '../workshop-image_fixed2.png';
import Consultation from '../consultation.jpg';
import GroupFlyer from '../Group_Thumbnail.png';
import GroupFlyerPDF from '../DBTMFGFlyer.pdf';
import AdultSkills from '../adult_dbt_skills.png';
import ADHDAssessment from '../Adhd_psych_assessment.jpeg';
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

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    180deg,
    ${colors.cream} 0%,
    rgba(168, 181, 160, 0.05) 50%,
    ${colors.cream} 100%
  );
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, ${colors.rose}, ${colors.sage});
    border-radius: 2px;
  }
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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

const SectionTitle = styled.h2`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: clamp(2rem, 5vw, 3rem);
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
    ${colors.sageDark} 50%,
    ${colors.sage} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SubTitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  color: ${colors.slate};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    ${colors.sage} 0%,
    ${colors.sageDark} 100%
  );
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 60%
    );
    pointer-events: none;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 500;
  color: white;
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: white;
  color: ${colors.sageDark};
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: ${colors.sageDark};
  }
`;

const services = [
  {
    title: 'Individual Therapy',
    link: '/individual-therapy',
    image: IndividualService,
    description:
      'One-on-one sessions tailored to your unique needs. We work collaboratively to understand your experiences and create meaningful change through evidence-based approaches.',
  },
  {
    title: 'Couples Therapy',
    link: '/couples-therapy',
    image: CouplesService,
    description:
      'In couples therapy, the relationship is the client. We help you understand patterns, improve communication, and build a stronger, more satisfying connection.',
  },
  {
    title: 'Mental Health Workshops',
    link: '/mental-health-workshops',
    image: WorkShop,
    description:
      'Training sessions designed to provide professionals and communities with essential knowledge in emotion regulation, mindfulness, and mental health management.',
  },
  {
    title: 'Consultation & Supervision',
    link: '/consultation-supervision',
    image: Consultation,
    description:
      'Clinical consultation and supervision services for mental health professionals seeking guidance, support, and professional development.',
  },
  {
    title: 'DBT Multifamily Skills Group',
    image: GroupFlyer,
    link: '/groupDBT',
    pdf: GroupFlyerPDF,
    description:
      'A supportive group environment for families to learn and practice DBT skills together. Building stronger connections through shared learning.',
  },
  {
    title: 'DBT Skills Training',
    image: AdultSkills,
    link: '/adult-dbt',
    tag: 'Updated',
    description:
      'Comprehensive DBT skills training for adults. Learn practical tools for emotional regulation, distress tolerance, and interpersonal effectiveness.',
  },
  {
    title: 'ADHD & Psychological Testing',
    image: ADHDAssessment,
    link: '/adhd-assessment',
    tag: 'New',
    description:
      'Comprehensive psychological testing and ADHD assessment for adults seeking clarity, insight, and practical recommendations.',
  },
];

export default function Home() {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      { threshold: 0, rootMargin: '100px 0px 100px 0px' }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <PageWrapper id="home">
      <Hero />
      <AboutMeHome />

      <ServicesSection ref={servicesRef} id="services">
        <ServicesContainer>
          <SectionHeader $isVisible={isServicesVisible}>
            <Eyebrow>What We Offer</Eyebrow>
            <SectionTitle>
              Clinical Services <TitleAccent>Tailored to You</TitleAccent>
            </SectionTitle>
            <SubTitle>
              We offer a range of evidence-based services designed to support
              your mental health journey at every stage.
            </SubTitle>
          </SectionHeader>

          <CardWrapper>
            {services.map((service, index) => (
              <ServiceBox key={service.title} service={service} index={index} />
            ))}
          </CardWrapper>
        </ServicesContainer>
      </ServicesSection>

      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Take the First Step?</CTATitle>
          <CTAText>
            Finding the right therapist is an important decision. We're here to
            answer your questions and help you determine if we're a good fit for
            your needs.
          </CTAText>
          <CTAButton href="/appointment">Schedule a Consultation</CTAButton>
        </CTAContent>
      </CTASection>

      <Footer />
    </PageWrapper>
  );
}
