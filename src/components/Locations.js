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
    margin: auto;
  }
`;

const Locations = () => {
  return (
    <Container>
      <MainContainer>
        <h2>Logan Square/Bucktown Office</h2>
        <HorizontalContainer>
          <OfficeImage src={BucktownOfficeImage} alt="Bucktown Office" />
          <OfficeImage src={BucktownOfficeImage2} alt="Bucktown Office 2" />
        </HorizontalContainer>
        <iframe
          title="Logan Square/Bucktown Office"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.4651538106277!2d-87.6873967!3d41.9258551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd29006a7e555%3A0x90007284c5a1efaf!2s2433%20N%20Western%20Ave%2C%20Chicago%2C%20IL%2060647!5e0!3m2!1sen!2sus!4v1759798940909!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </MainContainer>
      <MainContainer>
        <h2>Skokie Office</h2>
        <iframe
          title="Skokie Office"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.142797989279!2d-87.75330022349954!3d42.061558471222156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5cf42faff05%3A0x568b1ce43ab6ef7b!2s4905%20Old%20Orchard%20Rd%2C%20Skokie%2C%20IL%2060077!5e0!3m2!1sen!2sus!4v1720212556387!5m2!1sen!2sus"
          width={"100%"}
          height="450"
          style={{ border: 0 }}
          allowfullscreen
        ></iframe>
      </MainContainer>
    </Container>
  );
};
export default Locations;
