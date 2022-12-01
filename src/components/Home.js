import React from 'react';
import Hero from '../components/Hero';
import ServiceBox from '../components/ServiceBox';
import styled from 'styled-components';
import About from '../components/About';
import Footer from '../components/Footer';
import IndividualService from '../individual.jpg';
import CouplesService from '../couples.jpg';
import WorkShop from '../workshop-image.jpeg';

const CardWrapper = styled.div`
  display: flex;
  gap: 5em;
  column-gap: 15em;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
  margin-bottom: 5em;
  margin-top: -8em;
  @media (max-width: 768px) {
    flex-direction: column;
    column-gap: 0;
    gap: 1em;
    margin-bottom: 0;
    margin-top: -3em;
  }
`;

const services = [
  {
    title: 'Individual Therapy',

    image: IndividualService,
  },

  {
    title: 'Couples Therapy',

    image: CouplesService,
  },
  {
    title: 'Mental Health Workshops and Consultation',

    image: WorkShop,
  },
];

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <CardWrapper id={'services'}>
        {services.map((service) => (
          <ServiceBox service={service} />
        ))}
      </CardWrapper>
      {/* <About /> */}
      <Footer />
    </div>
  );
}
