import React from 'react';
import Hero from '../components/Hero';
import ServiceBox from '../components/ServiceBox';
import styled from 'styled-components';
import About from '../components/About';
import Footer from '../components/Footer';
import IndividualService from '../individual.jpg';
import CouplesService from '../couples.jpg';

const CardWrapper = styled.div`
  display: flex;
  gap: 15em;
  padding: 1em;
  margin-bottom: 5em;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
    margin-bottom: 0;
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
