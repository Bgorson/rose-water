import styled from 'styled-components';
import aboutImage from '../grandparents.jpg';
import CardImage from '../view.jpeg';
import Rachel from '../Rachel2.jpg';

const Header = styled.h1`
  /* color: #ffb30f; */
`;
const Description = styled.p`
  /* color: #ffb30f; */
`;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
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
      <Header id={'about'}>Rachel Nitzarim Ph.D.</Header>
      <AboutContainer>
        <AboutImage src={Rachel} />
        <Description>
          Welcome to my private practice. I am Rachel Nitzarim, licensed
          clinical psychologist, and the owner of Rosewatter Chicagoland
          Counseling.
        </Description>
        <Description>
          I am a proud graduate of UW Madison’s Counseling Psychology PhD
          program (Go Badgers!) My time at UW was spent delving into social
          class process and outcome research, training in rigorous clinical
          settings, gaining a passion for clinical training and forming my own
          dynamic-relational, common-factors informed, clinical style. I
          completed my pre-doctoral internship at The Counseling and Mental
          Health Center at The University of Texas at Austin and my
          post-doctoral work at Student Counseling Services at The University of
          Chicago.
        </Description>
        <Description>
          After my formal education was complete, I knew that my next steps were
          to involve a combination of both training and clinically focused work.
          Currently, I am the Director of Clinical Training at The Chicago
          School of Professional Psychology, Clinical PsyD Doctoral Program. I
          have been with TCSPP since 2017 and moved into the DCT position in
          2019.
        </Description>
        <Description>
          Simultaneously, I grew my private practice work at Smith Psychotherapy
          Associates, S.C., (owned by my wonderful Uncle, shoutout to Robert
          Smith!) and was on staff there since 2015.
        </Description>
        <Description>
          Rosewatter was created in 2022 and also pays homage to my family
          origins as it is named after my grandmother “Rose” and my mother’s
          maiden name “Goldwasser”. My grandparents were holocaust survivors and
          understanding their history is an incredibly important part of my
          story. Delving deeply into my clients’ family histories and stories is
          what I aim to do.
        </Description>
        <AboutImage style={{ margin: 'auto' }} src={aboutImage} />
        <Description>
          I believe that our family origins are the foundation of who we are and
          also sometimes provide a pedestal for problems to emerge. I practice
          from a psychodynamic lens with a relational/interpersonal focus. I
          believe that understanding one’s history is critical and the work that
          occurs in the here-and-now is where we can make the most progress
          together. Research tells us that the central healing factor in
          psychotherapy is the real relationship (Wampold, 2015). It is of the
          upmost importance that my clients feel that I am a good fit for them
          and vice versa. I see the interaction in the therapy room as being a
          two-way-street.
        </Description>
        <Description>
          In my practice, I work with emerging adults, adults and couples. I am
          a generalist which means I see a little bit of everything. I
          especially enjoy working on issues related to: mood/emotion
          dysregulation, dating and relationships, adjustment, life transition,
          couples counseling, LGBTQ+, family dynamics, depression, anxiety,
          bipolar disorder, Borderline Personality Disorder, grief/loss, trauma,
          body image concerns, medical conditions as well as therapist
          development and supervision.
        </Description>
        <Description>
          Outside of work, I believe that having balance in life is incredibly
          important. I enjoy being a self-proclaimed foodie at all the amazing
          Chicago restaurants, going to yoga, walks throughout the city with my
          two dogs, and spending time growing my [urban] garden.
        </Description>
      </AboutContainer>
    </>
  );
}
