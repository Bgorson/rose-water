import Card from 'react-bootstrap/Card';

export default function ServiceBox({ service }) {
  return (
    <Card>
      <Card.Img variant="top" src={service.image} />
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
