import styled from "styled-components";
import aboutImage from "../grandparents.jpg";
import Rachel from "../RachelUpdate.jpg";
import Sara from "../SGT_headshot.jpeg";
import Sarah from "../sarah_j2.jpg";

const Header = styled.h1``;
const Description = styled.p``;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin-bottom: 1em;
`;
const AboutImage = styled.img`
  max-width: 300px;
  border-radius: 50%;
  margin-bottom: 2em;
  @media (max-width: 768px) {
    max-width: 200px;
    margin: 2em auto;
  }
`;
export default function About() {
  return (
    <>
      <Header id={"about"}>Rachel Nitzarim Ph.D.</Header>
      <AboutContainer>
        <AboutImage alt="Rachel Nitzarim" src={Rachel} />
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
          Chicago.{" "}
        </Description>
        <Description>
          After my formal education was complete, I knew that my next steps were
          to involve a combination of both academic/training and clinically
          focused work. Currently, I am the Director of Clinical Training at The
          Chicago School of Professional Psychology, Clinical PsyD Doctoral
          Program. I have been with TCSPP since 2017 and moved into the DCT role
          in 2019.{" "}
        </Description>
        <Description>
          Simultaneously, I grew my private practice work at Smith Psychotherapy
          Associates, S.C., (owned by my wonderful Uncle, shoutout to Robert
          Smith!) and was on staff there since 2015.
        </Description>
        <Description>
          Rosewatter was created in 2022 and also pays homage to my family
          origins as it is named after my grandmother “Rose” and my mother’s
          maiden name “Goldwasser”. My grandparents were Holocaust survivors and
          understanding their history is an incredibly important part of my
          story. Delving deeply into my clients’ family histories and stories is
          what I aim to do.{" "}
        </Description>
        <AboutImage
          style={{ margin: "1em auto" }}
          alt="Family"
          src={aboutImage}
        />
        <Description>
          I believe that our family origins are the foundation of who we are and
          also sometimes provide a pedestal for problems to emerge. I practice
          from a psychodynamic lens with a relational/interpersonal focus. I
          believe that understanding one’s history is critical and the work that
          occurs in the here-and-now is where we can make the most progress
          together.{" "}
        </Description>
        <Description>
          Research tells us that the central healing factor in psychotherapy is
          the real relationship (Wampold, 2015). It is of the upmost importance
          that my clients feel that I am a good fit for them and vice versa. I
          see the interaction in the therapy room as being a two-way-street.
        </Description>
        <Description>
          In my practice, I work with emerging adults, adults and couples. I
          also offer training workshops for mental healthcare professionals and
          consultation services. I am a generalist which means I see a little
          bit of everything. I especially enjoy working on issues related to:
          mood/emotion dysregulation, dating and relationships, marriage and
          divorce, adjustment, life transition, transition to parenthood,
          couples counseling, LGBTQ+, family dynamics, depression, anxiety,
          Bipolar Disorder, Borderline Personality Disorder, grief/loss, trauma,
          body image concerns, medical conditions as well as therapist
          development and supervision.{" "}
        </Description>
        <Description>
          Outside of work, I enjoy being a self-proclaimed foodie at the
          delicious Chicagoland restaurants, consuming as many true crime
          documentaries, reality television series, fiction and nonfiction books
          as possible, spending time with friends and family, yoga/meditation,
          and tending to my mini zoo consisting of one turtle, one talkative
          parrot and three elderly doggies.{" "}
        </Description>
      </AboutContainer>
      <Header>Sara Taxman, PsyD</Header>
      <h5>Psychology Postdoctoral Fellow</h5>

      <AboutContainer>
        <AboutImage alt="Sara Taxman" src={Sara} />
        <Description>
          My name is Sara Taxman and I received my doctorate in Clinical
          Psychology from The Chicago School and completed my American
          Psychological Association (APA)-accredited pre-doctoral residency at
          Alexian Brothers Behavioral Health Hospital with a focus in children,
          adolescents, and families. Following internship, I completed my
          post-doctoral fellowship at The Family Institute at Northwestern
          University on the Mindfulness and Behavioral Therapies Team. I have
          extensive experience with youth and families across multiple treatment
          settings including therapeutic day and boarding schools, residential
          treatment centers, outpatient psychiatric clinics, and inpatient
          psychiatric hospitals.{" "}
        </Description>
        <Description>
          Currently, I am working at Rosewatter Chicagoland Counseling providing
          psychotherapy to youth, young adults, and families with emotion
          regulation difficulties, eating disorders, trauma, addiction,
          suicidality, and self-injurious behaviors. I have comprehensive
          training and experience using numerous evidence-based therapies,
          including dialectical behavioral therapy (DBT) and cognitive
          behavioral therapy (CBT). In addition to therapy, I am also excited to
          work as an adjunct professor at The Chicago School of Professional
          Psychology and honing my skills in psychological and
          neuropsychological assessment.
        </Description>
        <Description>
          My primary goal is to provide behaviorally driven therapeutic care to
          clinically and culturally diverse adolescents and young adults. I want
          to support my clients and their families and help them implement the
          skills and perspectives they acquire in therapy in their lives outside
          of the therapy room. In my free time, I love to play pickleball,
          practice yoga, and travel. I also love Taylor Swift and the Dave
          Matthews Band!
        </Description>
      </AboutContainer>
      <Header>Sarah Jeziorski LCPC</Header>
      <AboutContainer>
        <AboutImage alt="Sarah Jeziorski" src={Sarah} />
        <Description>
          My name is Sarah Jeziorski. I am a Licensed Clinical Professional
          Counselor and Registered Art Therapist. I enjoy helping Emerging
          Adults and Adults develop their personal strengths and learn to use
          their creativity for growth and healing. I have a trauma-informed,
          relational focus. I aim to understand each person’s unique background
          including cultural identity, gender identity, spirituality and beliefs
          and how they influence each person’s life.{" "}
        </Description>
        <Description>
          I am in the process of EMDR training, and qualified to provide this
          service to individuals with recent or past trauma histories. Therapy
          sessions with me involve a combination of talk therapy, goal planning,
          creative art or movement, and trauma-reprocessing, depending on client
          needs. I consider myself flexible and able to work with a variety of
          different people, with different presenting issues. I have much
          experience in community based non profit settings, private settings,
          and group settings. I have recently decided to focus solely on therapy
          with Rosewatter Counseling. I look forward to working with you.
        </Description>
      </AboutContainer>
    </>
  );
}
