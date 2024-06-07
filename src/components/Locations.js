const React = require("react");
import BucktownOfficeImage from "../bucktown_1.jpeg";
import BucktownOfficeImage2 from "../bucktown_2.jpeg";

import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    padding: 2em;
    margin: 2em;
    border-radius: 1em;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        flex-direction: column;
    margin: 0;  
    padding:0;

        
        }
    }
`;
const OfficeImage = styled.img`
  width: 50%;
  border-radius: 1em;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 2em;
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const Container = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Locations = () => {
  return (
    <Container>
      <MainContainer>
        <h2>Bucktown Office</h2>
        <HorizontalContainer>
          <OfficeImage src={BucktownOfficeImage} alt="Bucktown Office" />
          <OfficeImage src={BucktownOfficeImage2} alt="Bucktown Office 2" />
        </HorizontalContainer>
        <iframe
          title="Bucktown Office"
          width={"100%"}
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.6600263928267!2d-87.67622272341389!3d41.921666662684466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2ec1036710f%3A0xc976ad1d18ea89b2!2s1820%20W%20Webster%20Ave%20Suite%20400%2C%20Chicago%2C%20IL%2060614!5e0!3m2!1sen!2sus!4v1708462400902!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </MainContainer>
    </Container>
  );
};
export default Locations;
