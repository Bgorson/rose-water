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
    description: 'Individual psychotherapy is a form of mental health treatment in which an individual meets with a trained clinician one-on-one to discuss their thoughts, feelings and behaviors. I do not believe that there is a one-sized-fits-all approach to individual work. Rather, each individual comes to therapy with a particular set of concerns or experiences that they would like to process and understand. We work collaboratively to formulate goals and a plan, informed by a theoretical framework that I will provide to move towards meaningful change together.',
  },

  {
    title: 'Couples Therapy',

    image: CouplesService,
    description: 'Couples therapy is a type of psychotherapy that is designed to help couples understand their relationship. Sometimes couples come to counseling to improve their relationship, other times couples come to counseling to end their relationship, and everything in-between. During couples therapy, I will help you understand the patterns and issues that are underlying the concerns or experiences in your relationship. I will work with you to better understand each other and to develop strategies to improve communication, resolve conflicts, and build a stronger and more satisfying relationship.'
  },
  {
    title: 'Mental Health Workshops',

    image: WorkShop,
    description: "Mental health workshops are training sessions that are designed to provide healthcare professionals with the knowledge, skills and tools they need to effectively address and manage mental health needs of the populations they serve. I have particular experience in training other mental health practitioners on social class, emotion regulation skills, healthy relationships, supervision of psychologists-in-training, conflict resolution and mindfulness training/technique."

  },
  {
    title: 'Consultation/Supervision',

    image: Consultation,
    description: "Consultation services and clinical supervision are also available. Please inquire for more information."
  }
];

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }} id="home">
      <Hero />
      <AboutMeHome />
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
