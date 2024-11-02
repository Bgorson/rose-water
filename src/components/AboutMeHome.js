import React from "react";
import styled from "styled-components";
import Rachel from "../RachelUpdate2.jpg";
import { colors } from "../utils/colors";
import Skyline from "../chicago-skyline-lake-michigan.webp";
import Logo from "../logo_transparent4.png";

const AboutContainer = styled.div`
  display: flex;
  padding: 1em;
  border-radius: 1em;
  width: 95%;
  margin: auto auto 2em auto;
  justify-content: space-between;
  gap: 3em;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  background-image: url(${Skyline});
  min-height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  @media (max-width: 912px) {
    background-position: -230px;
    height: 250px;
  }
`;
const Description = styled.p`
  font-size: 24px;
`;
const ProfilePicture = styled.img``;

const Headline = styled.h2`
  color: ${colors.green};
`;
const TextContent = styled.div``;
const SkylineStatic = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export default function AboutMeHome() {
  const [isSafari, setIsSafari] = React.useState(false);
  React.useEffect(() => {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafari);
  }, []);
  return (
    <>
      <AboutContainer>
        <TextContent>
          <Headline>
            Welcome to Rosewatter Chicagoland Counseling. We are glad you are
            here.
          </Headline>
          <br />
          <Description>
            Research tells us that the relationship between client and therapist
            is <i>the</i> central healing factor in psychotherapy. As such, we
            know that people who have a good relationship with their therapist
            will get the most out of therapy. On this website you will find some
            information about us and how we approach our work. Knowing a little
            bit more about our team will help you decide if we could be a good
            fit for you.
          </Description>
        </TextContent>
      </AboutContainer>
      {isSafari ? <SkylineStatic src={Skyline} /> : <Container> </Container>}
    </>
  );
}
