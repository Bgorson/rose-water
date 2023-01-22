import React from 'react';
import styled from 'styled-components';
import Rachel from '../RachelUpdate2.jpg'
import { colors } from '../utils/colors';
import Skyline from '../chicago-skyline-lake-michigan.jpg'
const AboutContainer = styled.div`
display: flex;
padding:1em;
border-radius:1em;
width:95%;
margin:auto auto 2em auto;
justify-content: space-between;
gap:3em;
@media (max-width: 768px) {
    flex-direction: column;
    width:100%;
    margin:auto;
  }
`
const Container = styled.div`
display: flex;
align-items: center;
height:500px;
background-image: url(${Skyline});
min-height: 100%;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
background-size: cover;
@media (max-width: 912px) {
    background-position: -230px;

  }
}
`
const Description = styled.p`
padding-left:1em;
font-size:24px;
`
const ProfilePicture = styled.img`
border-radius:50%;
max-width: 400px;
max-height: 400px;
`
const ChicagoSkyline = styled.img`
width:100%;
`
const Headline = styled.h1`
color: ${colors.green};
` 
const TextContent = styled.div`


`


export default function AboutMeHome() {
    return (
        <>
            <AboutContainer>

                <ProfilePicture src={Rachel} />
                <TextContent>

                <Headline>
                Welcome to my private practice
                </Headline>
                <Description>
                     I'm glad you're here. I am Dr. Rachel Nitzarim, founder and owner of Rosewatter Chicagoland Counseling.
                    I believe that therapy is a powerful tool for empowering you to take on live's challenges. I am passionate about helping people find their voice and live their best life.
                </Description>
                </TextContent>

            </AboutContainer>
            <Container>


            </Container>

        </>


    )

}