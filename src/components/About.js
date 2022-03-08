import styled from 'styled-components';
import aboutImage from '../IMG_2640.jpg';
import CardImage from '../view.jpeg';

const Header = styled.h1`
  color: #ffb30f;
`;
const Description = styled.p`
  color: #ffb30f;
`;
const AboutContainer = styled.div`
  display: flex;
  gap: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const AboutImage = styled.img`
  max-width: 300px;
  @media (max-width: 768px) {
    max-width: 200px;
    margin: auto;
  }
`;
export default function About() {
  return (
    <>
      <Header id={'about'}>About me</Header>
      <AboutContainer>
        <AboutImage src={aboutImage} />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse ultrices gravida dictum fusce. Fames ac turpis egestas
          maecenas pharetra convallis posuere morbi. Integer quis auctor elit
          sed. Id donec ultrices tincidunt arcu non sodales neque. Diam volutpat
          commodo sed egestas egestas. Fermentum odio eu feugiat pretium nibh
          ipsum consequat nisl vel. Arcu ac tortor dignissim convallis aenean et
          tortor at. Et netus et malesuada fames ac turpis. At risus viverra
          adipiscing at in tellus. Mauris in aliquam sem fringilla. Sollicitudin
          nibh sit amet commodo. Fames ac turpis egestas maecenas pharetra
          convallis posuere morbi.
        </Description>
      </AboutContainer>
      <br />
      <br />
      <AboutContainer>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse ultrices gravida dictum fusce. Fames ac turpis egestas
          maecenas pharetra convallis posuere morbi. Integer quis auctor elit
          sed. Id donec ultrices tincidunt arcu non sodales neque. Diam volutpat
          commodo sed egestas egestas. Fermentum odio eu feugiat pretium nibh
          ipsum consequat nisl vel. Arcu ac tortor dignissim convallis aenean et
          tortor at. Et netus et malesuada fames ac turpis. At risus viverra
          adipiscing at in tellus. Mauris in aliquam sem fringilla. Sollicitudin
          nibh sit amet commodo. Fames ac turpis egestas maecenas pharetra
          convallis posuere morbi.
        </Description>
        <AboutImage src={CardImage} />
      </AboutContainer>
    </>
  );
}
