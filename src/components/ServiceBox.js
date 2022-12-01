import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const CardContainer = styled.div`
  flex-basis: 33%;
  flex-grow: 1;
  max-width: 500px;
`;

export default function ServiceBox({ service }) {
  return (
    <CardContainer>
      <Title>{service.title}</Title>
      <Card>
        <Card.Img
          style={{ maxHeight: '650px' }}
          variant="top"
          src={service.image}
          alt={service.title}
        />
        {/* <Card.Body>
          <Card.Text>{service.description}</Card.Text>
        </Card.Body> */}
      </Card>
    </CardContainer>
  );
}
