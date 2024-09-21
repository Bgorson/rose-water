import styled from "styled-components";

import Card from "./gallery/card/Card";
import { staffMembers } from "../components/StaffPage";

const Container = styled.div`
  margin-bottom: 10em;
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
  return (
    <Container>
      <CardContainer>
        {staffMembers.map((staff) => (
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
