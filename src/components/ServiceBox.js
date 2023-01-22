import styled from 'styled-components';
import { colors } from '../utils/colors';

const Title = styled.h1`
  text-align: center;
`;

const CardContainer = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
  // max-width: 500px;
  padding-bottom:10px;

`;

export const Card = styled.div``
export const Image = styled.img`
height:300px;
width:300px;
border-radius: 50%;

`
export const CardBody = styled.div``
export const CardText = styled.p``


export default function ServiceBox({ service }) {
  return (
    <CardContainer>
      <Card >
        <Image
          src={service.image}
          alt={service.title}
        />
        <Title>{service.title}</Title>

        <CardBody
        >
          <CardText
          >{service.description}</CardText>
        </CardBody>
      </Card>
    </CardContainer>
  );
}
