import React from 'react';
import Hero from '../components/Hero';
import ServiceBox from '../components/ServiceBox';
import styled from 'styled-components';
import About from '../components/About';
import AboutMeHome from './AboutMeHome.js';
import Footer from '../components/Footer';
import IndividualService from '../individual.jpg';
import CouplesService from '../couples.jpg';
import WorkShop from '../workshop-image_fixed2.png';
import Consultation from '../consultation.jpg';
import GroupFlyer from '../Group_Thumbnail.png';
import GroupFlyerPDF from '../DBTMFGFlyer.pdf';
import AdultSkills from '../adult_dbt_skills.png';
import { colors } from '../utils/colors';

const CardWrapper = styled.div`
  display: flex;
  gap: 2em;
  // column-gap: 15em;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
    column-gap: 0;
    gap: 1em;
    margin-bottom: 0;
  }
`;
const SectionTitle = styled.h1`
  font-size: 2.5em;
  margin: 1em 0;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: linear-gradient(
    to right,
    ${colors.lightGreen},
    ${colors.green},
    ${colors.darkerGreen}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 2em;
`;

const services = [
  {
    title: 'Individual Therapy',
    link: '/individual-therapy',
    image: IndividualService,
    description:
      'Individual psychotherapy is a form of mental health treatment in which an individual meets with a trained clinician one-on-one to discuss their thoughts, feelings and behaviors. We do not believe that there is a one-sized-fits-all approach to individual work. Rather, each individual comes to therapy with a particular set of concerns or experiences that they would like to process and understand. We work collaboratively to formulate goals, informed by a theoretical framework that we will provide, to move towards meaningful change together.',
  },

  {
    title: 'Couples Therapy',
    link: '/couples-therapy',
    image: CouplesService,
    description:
      'Couples therapy is a form of mental health treatment designed to help couples understand their relationship. Sometimes couples come to counseling to improve their relationship, other times couples come to counseling to end their relationship, and everything in-between. During couples therapy, we will help you understand the patterns and issues that are underlying the concerns or experiences in your relationship. We will work with you to better understand each other and to develop strategies to improve communication, resolve conflicts, and build a stronger and more satisfying relationship.',
  },
  {
    title: 'Mental Health Workshops',
    link: '/mental-health-workshops',
    image: WorkShop,
    description:
      'Mental health workshops are training sessions that are designed to provide healthcare professionals and general populations with the knowledge, skills and tools they need to effectively address and manage mental health needs of themselves and the populations they serve. we have particular experience in providing training on social class, emotion regulation skills, healthy relationships, supervision of psychologists-in-training, conflict resolution and mindfulness training/technique.',
  },
  {
    title: 'Consultation/Supervision',
    link: '/consultation-supervision',
    image: Consultation,
    description:
      'Consultation services and clinical supervision are also available. Please inquire for more information.',
  },
  {
    title: 'DBT Multifamily Skills Group',
    image: GroupFlyer,
    link: '/groupDBT',
    pdf: GroupFlyerPDF,
    description: 'Click for more information about our DBT family group!',
  },
  {
    title: 'DBT Skills ',
    image: AdultSkills,
    link: '/adult-dbt',
    description:
      'Click for more information about our DBT Adult Skills group starting in January!',
  },
];

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }} id="home">
      <Hero />
      <AboutMeHome />
      <div id="services"></div>
      <br />
      <br />
      <SectionTitle>Clinical Services Offered</SectionTitle>
      <SubTitle>Click On An Image To Learn More</SubTitle>
      <CardWrapper>
        {services.map((service) => (
          <ServiceBox service={service} />
        ))}
      </CardWrapper>
      {/* <About /> */}
      <Footer />
      <p>
        Chicago Skyline Image{' '}
        <a href="https://www.freepik.com/free-photo/chicago-skyline-lake-michigan_26743083.htm#query=chicago%20skyline&position=0&from_view=keyword">
          Image by TravelScape
        </a>{' '}
        on Freepik
      </p>
    </div>
  );
}
