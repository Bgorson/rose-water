import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Map from './Map';

const key = 'AIzaSyBcGot_T-k2V1QEXf0lsFEuMZNjyK1r9TY';

const location = {
  address: '3913 North Marshfield Ave Chicago',
  lat: 41.95309504796733,
  lng: -87.67001743748172,
};
const Container = styled.div`
  background: beige;
  display: flex;
  justify-content: center;
`;

const data = [
  {
    title: 'Office Hours',
    content: (
      <div>
        <ul>
          <li>Monday:9-5p</li>
          <li>Tuesday:9-5p</li>
          <li>Wednesday:9-5p</li>
        </ul>
      </div>
    ),
  },
  ,
  {
    title: 'Contact Me',
    content: <div>Reach me here</div>,
  },
];

const FooterCard = ({ info }) => {
  return (
    <Card style={info.grow ? { flexGrow: '1' } : null}>
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Text>{info.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default function Footer() {
  return (
    <>
      <Container id="contact">
        {data.map((IndividualData) => (
          <FooterCard info={IndividualData} />
        ))}
      </Container>
      <FooterCard
        info={{
          title: 'Location',
          content: <Map location={location} zoomLevel={17} />,
          grow: true,
        }}
      />
    </>
  );
}
