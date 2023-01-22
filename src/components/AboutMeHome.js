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
                        Welcome to My Private Practice
                    </Headline>
                    <br/>
                    <Description>
                    My name is Rachel Nitzarim and I am a licensed clinical psychologist located in Chicago, Illinois. Since graduating with my doctorate in 2015, I have provided both short-term and long-term psychotherapy services to numerous individuals and couples within a private practice setting. <br/> <br/> More recently, I expanded my practice to include both mental health workshops and psychological/therapist-training consultation services.

Research tells us that the relationship between client and therapist is <i>the</i> central healing factor in psychotherapy. On this website you will find some information about me and how I approach my work. Knowing a little bit more about me may help you decide if I could be a good fit for you. <b>I am glad you are here.</b>
                    </Description>
                </TextContent>

            </AboutContainer>
            <Container>


            </Container>

        </>


    )

}