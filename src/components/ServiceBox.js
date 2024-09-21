import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  text-align: center;
`;

const CardContainer = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
  padding-bottom: 10px;
`;

export const Card = styled.div`
  transition: transform 0.3s, box-shadow 0.3s;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and cover the area */
`;

export const CardBody = styled.div``;

export const CardText = styled.p``;

const ImageWrapper = styled.div`
  margin: auto;
  height: 300px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover ${Image} {
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  margin-left: 10px;
  font-size: 0.9em;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ServiceBox({ service }) {
  const imageContent = (
    <ImageWrapper>
      {service.link ? (
        <StyledLink to={service.link}>
          <Image src={service.image} alt={service.title} />
        </StyledLink>
      ) : (
        <Image src={service.image} alt={service.title} />
      )}
    </ImageWrapper>
  );

  const cardContent = (
    <Card>
      {imageContent}
      <Title>{service.title}</Title>
      <CardBody>
        <CardText>
          {service.description}
          {service.pdf && (
            <StyledAnchor href={service.pdf} download>
              Download Flyer
            </StyledAnchor>
          )}
        </CardText>
      </CardBody>
    </Card>
  );

  return <CardContainer>{cardContent}</CardContainer>;
}
