import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

export default function ServiceBox({ service }) {
  return (
    <div>
      <Title>{service.title}</Title>
      <Card>
        <Card.Img
          style={{ maxHeight: '650px' }}
          variant="top"
          src={service.image}
        />
        {/* <Card.Body>
          <Card.Text>{service.description}</Card.Text>
        </Card.Body> */}
      </Card>
    </div>
  );
}
