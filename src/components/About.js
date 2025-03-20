import styled from 'styled-components';
import React from 'react';
import Card from './gallery/card/Card';
import { staffMembers } from '../components/StaffPage';

const Container = styled.div`
  margin-bottom: 10em;
  margin-top: 2em;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function About() {
  const currentDate = new Date();
  const cutoffDate = new Date('2025-03-28');
  return (
    <Container>
      <CardContainer>
        {staffMembers
          .filter((staff) => !(staff.id === 4 && currentDate > cutoffDate))
          .map((staff) => (
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
  );
}
