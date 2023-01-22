import React from 'react';
import Hero from '../components/Hero';
import ServiceBox from '../components/ServiceBox';
import styled from 'styled-components';
import About from '../components/About';
import AboutMeHome from './AboutMeHome.js';
import Footer from '../components/Footer';
import IndividualService from '../individual.jpg';
import CouplesService from '../couples.jpg';
import WorkShop from '../workshop-image.jpeg';
import Consultation from '../consultation.jpg';

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

const services = [
  {
    title: 'Individual Therapy',

    image: IndividualService,
    description:'Individual therapy is a great way to improve your mental health.  I offer individual therapy for a variety of issues',
  },

  {
    title: 'Couples Therapy',

    image: CouplesService,
    description:'Couples therapy can improve communication and intimacy in your relationship.'
  },
  {
    title: 'Mental Health Workshops',

    image: WorkShop,
    description:"A workshop can help you learn about a topic and get some hands on experience."

  },
  {
    title: 'Consultation',

    image: Consultation,
    description:"Consultation can provide advice on a specific issue."
  }
  ];

export default function Home() {
  return (
    <div style={{textAlign:'center'}} id="home">
      <Hero />
      <AboutMeHome/>
      <CardWrapper id={'services'}>
        {services.map((service) => (
          <ServiceBox service={service} />
        ))}
      </CardWrapper>
      {/* <About /> */}
      <Footer />
      <p>Chicago Skyline Image <a href="https://www.freepik.com/free-photo/chicago-skyline-lake-michigan_26743083.htm#query=chicago%20skyline&position=0&from_view=keyword">Image by TravelScape</a> on Freepik</p>
    </div>
  );
}
