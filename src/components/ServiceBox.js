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
border-radius: 50%;
width:100%;
height:100%;
`
export const CardBody = styled.div``
export const CardText = styled.p``

const ImageWrapper = styled.div`
margin:auto;
height:300px;
width:300px;

`


export default function ServiceBox({ service }) {
  return (
    <CardContainer>
      <Card >
        <>
          <ImageWrapper>
            <Image
              src={service.image}
              alt={service.title}
            />
          </ImageWrapper>
        </>

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
