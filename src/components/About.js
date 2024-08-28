import styled from "styled-components";
import aboutImage from "../grandparents.jpg";
import Rachel from "../RachelUpdate.jpg";
import Sara from "../SGT_headshot.jpeg";
import Sarah from "../sarah_j2.jpg";
import Elisabeth from "../elisabeth.jpeg";
import Sydnie from "../Sydnie_Dobkin.jpg";
import Reagan from "../r_sword.jpeg";
import Nikki from "../nikki.jpg";
import Ashley from "../ashley.jpg";
import DBT from "../dbt_badge.png";

const Header = styled.h1``;

const HeaderTrainees = styled.h3``;
const Decorated = styled.div`
  overflow: hidden;
  text-align: center;
`;

const EnhancedHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const HeaderTraineesDivider = styled.h2`
  margin: 1em 0;
  position: relative;
  display: inline-block;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    border-bottom: 2px solid;
    width: 100vw;
    margin: 0 20px;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }
`;
const Description = styled.p``;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin-bottom: 2em;
`;
const AboutImage = styled.img`
  max-width: 300px;
  border-radius: 50%;
  margin-bottom: 2em;
  @media (max-width: 768px) {
    max-width: 300px;
    margin: 2em auto;
  }
`;
const Container = styled.div`
  margin-bottom: 10em;
`;

const Badge = styled.img`
  max-width: 100px;
`;

export default function About() {
  return (
    <Container>
      <Header id={"about"}>Rachel Nitzarim Ph.D.</Header>
      <h5>Owner, Licensed Clinical Psychologist</h5>
      <AboutContainer>
        <AboutImage alt="Rachel Nitzarim" src={Rachel} />
        <Description>
          Welcome to my private practice. I am Rachel Nitzarim, a licensed
          clinical psychologist and the owner of Rosewatter Chicagoland
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
          Chicago School, Clinical PsyD Doctoral Program. I have been with The
          Chicago School since 2017 and moved into the DCT role in 2019.
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
      <Header>Sara Taxman PsyD</Header>
      <h5>Licensed Clinical Psychologist</h5>
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
      <h5>Licensed Professional Counselor</h5>
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
      <Header>Elisabeth Pratt PsyD</Header>
      <h5>Licensed Clinical Psychologist</h5>
      <AboutContainer>
        <AboutImage alt="Elisabeth Pratt" src={Elisabeth} />
        <Description>
          My name is Elisabeth Pratt. I received my doctorate degree in clinical
          psychology from The Chicago School of Professional Psychology. I have
          received training in a variety of settings, including a trauma-focused
          clinic at a local Department of Veteran Affairs hospital, in private
          practice settings with a variety of presentations, and within the
          criminal justice system on both state and federal levels. I completed
          my APA-accredited predoctoral internship with the Wisconsin Department
          of Corrections, and completed my post-doctoral training here in
          Chicago at a local private practice.
        </Description>
        <Description>
          <b>
            “It takes two to speak the truth - one to speak, the other to hear.”
            -Henry David Thoreau
          </b>
        </Description>
        <Description>
          Therapy requires bravery and a willingness to explore the complexities
          of who you are. Through a warm and caring therapeutic alliance, we can
          work together to highlight your best qualities and work toward
          changing areas of your life that you have identified as
          unsatisfactory. I practice through a relational-cultural lens, meaning
          not only am I a human in the room with you, but I pay special
          attention to the past and current relationships (on all levels of
          society) that have had a significant influence on the development of
          the current self. I have strong roots in anti-oppressive approaches
          and highly value empowering my clients.
        </Description>
        <Description>
          While most of our work will be unstructured, I do incorporate
          techniques from evidence-based interventions (DBT, CPT, CBT, positive
          psychology) to give you real skills to use outside of our sessions.
          Our work together will not only focus on what is going wrong but will
          also focus on what is going right. We will continue to foster and
          develop your personal strengths that will help see you through the
          challenges life brings your way. Together we will navigate the path
          toward healthy relationships, self-compassion, and learn to find the
          brightest of light in the darkest of places.
        </Description>
        <Description>
          I enjoy working with adults ages 18+ and have experience with diverse
          clientele from all walks of life. While I am open to working on a wide
          variety of concerns, I am especially interested in trauma-focused
          treatment, relationship concerns, mood disorders, grief and loss,
          substance misuse, and emotional regulation.{" "}
        </Description>
        <Description>
          <b>
            “What are the words you do not yet have? What do you need to say? …
            There are so many silences to be broken.” – Audre Lorde
          </b>
        </Description>
        <Description>
          When not working, I enjoy rock climbing, hiking, trying new
          restaurants, spending time with friends and family, reading (get ready
          for book recommendations!), live music, and exploring creative
          outlets.
        </Description>
      </AboutContainer>
      <EnhancedHeader>
        <Header>Sydnie Dobkin LCPC</Header>
        <Badge
          alt="DBT-Linehan
          Board of Certification, Certified Clinician"
          src={DBT}
        />
      </EnhancedHeader>

      <h5>Licensed Clinical Professional Counselor</h5>
      <AboutContainer>
        <AboutImage alt="Sydnie Dobkin" src={Sydnie} />
        <Description>
          My name is Sydnie Dobkin and I received my Masters in Counseling from
          the Family Institute at Northwestern University. I am a DBT-Linehan
          Board of Certification, Certified Clinician™ and I have almost a
          decade of experience providing comprehensive and adherent DBT. I then
          completed my post-graduate fellowship at The Family Institute at
          Northwestern University on the Mindfulness and Behavioral Therapies
          Team. Following The Family Institute, I served as the Director of
          Adolescent DBT at Great Lakes Therapy Center, a DBT-Linehan Certified
          Program. Today, I continue to work with families and parents through a
          behavioral lens.
        </Description>
        <Description>
          Currently, I am working at Rosewatter Chicagoland Counseling providing
          psychotherapy to youth, young adults, and families with emotion
          regulation difficulties, eating disorders, trauma, addiction,
          suicidality, and self-injurious behaviors. I have comprehensive
          training and experience using numerous evidence-based therapies,
          including Dialectical Behavioral Therapy (DBT), Radically Open
          Dialectical Behavioral Therapy (RODBT), Dialectical Behavioral Therapy
          Prolonged Exposure (DBT PE), Supportive Parenting for Anxious
          Childhood Emotions (SPACE), Cognitive Behavioral Therapy (CBT), and
          Trauma Focused Cognitive Behavioral Therapy (TF CBT). In addition to
          evidence-based practices, I am also trained in psychodynamic theory,
          reiki, and yoga-informed psychotherapy.
        </Description>
        <Description>
          My primary goal is to provide behaviorally driven therapeutic care to
          clinically and culturally diverse adolescents and young adults. I want
          to support my clients and help them generalize their skills outside of
          the therapy room. In my free time, I love to travel, snuggle with my
          dog Harold, and scope out the best places to eat sushi. I also love
          Taylor Swift, The 1975, and Harry Styles! You can find me reading YA
          novels, watching (maybe too much) television, and collecting crystals.
        </Description>
      </AboutContainer>
      <Decorated>
        <HeaderTraineesDivider>Trainees</HeaderTraineesDivider>
      </Decorated>
      <HeaderTrainees>Reagan Sword, Trainee</HeaderTrainees>
      <AboutContainer>
        <AboutImage alt="Reagan Sword" src={Reagan} />

        <Description>
          My name is Reagan Sword, and I hold a B.A. in Fine Art from Columbia
          College Chicago and a Master of Arts in Counseling: Art Therapy. As a
          pre-licensed counselor and art therapist, my approach is integrative
          and tailored to each client's unique needs. I draw from
          strengths-based, person-centered, cognitive behavioral therapy (CBT),
          and art therapy techniques to support individuals' personal growth.
          While working towards my licensure at Rosewatter Chicagoland
          Counseling, I will primarily be supervised by Sarah Jeziorski, LCPC.
        </Description>
        <Description>
          My experience includes supporting clients dealing with anxiety,
          depression, trauma, and grief. I have also worked considerably with
          older adults who are managing a cancer diagnosis or medical condition.
          I am particularly excited about expanding my work with adolescents, as
          I am interested in helping young people navigate their unique
          challenges and developmental stages.
        </Description>
        <Description>
          I am passionate about assisting clients in discovering their strengths
          and achieving their goals. My priority is to empower people to feel
          more confident in managing life's challenges. I believe therapy is a
          collaborative journey where you are the expert on your own life, and I
          provide support, resources, and guidance to help you along the way.
        </Description>
        <Description>
          Outside of work, I enjoy spending time with my cats, watching reality
          TV, painting, reading, yoga, and exploring new foods. These activities
          help me stay balanced and energized, so I can best support my clients!
        </Description>
      </AboutContainer>
      <HeaderTrainees>Nicole (Nikki) Sharf, Trainee</HeaderTrainees>
      <AboutContainer>
        <AboutImage alt="Nicole Sharf" src={Nikki} />

        <Description>
          My name is Nicole (Nikki) Sharf, M.A. I received my Bachelor of
          Science in Psychology from the University of Florida and my Master’s
          in Clinical Psychology from The Chicago School. I am currently working
          towards my Doctorate in Clinical Psychology. Over the last few years,
          I have had the opportunity to work with adults across a variety of
          clinical settings, including private practice, outpatient hospitals,
          integrated primary care, inpatient rehabilitation, and residential
          care. I have training in individual and group therapy, and
          psychological and neuropsychological assessments. While at Rosewatter
          Chicagoland Counseling, I will be primarily supervised by Dr.
          Elisabeth Pratt.
        </Description>
        <Description>
          My therapeutic approach is integrative, drawing from evidence-based
          approaches like CBT, DBT, and ACT, as well as psychodynamic,
          humanistic, and positive psychology. I strive to incorporate warmth,
          humor, curiosity, and creativity in the therapy room to help clients
          understand the impact of past events and relationships on their
          current thoughts, emotions, and behaviors, nurture self-compassion,
          and find new perspectives to facilitate healing, growth, and
          meaningful change. I especially enjoy working with adults across the
          lifespan on issues related to mood and emotional dysregulation,
          anxiety, depression, relationship concerns, major life transitions,
          trauma, self-esteem and body image concerns, women’s issues, sexual
          health concerns, adjustment to chronic illness and disability, and
          medical conditions.
        </Description>

        <Description>
          In my free time, I enjoy spending time with family and friends,
          walking or biking by the lake, trying as many of the delicious
          Chicagoland restaurants as I can, attending comedy shows or musicals,
          and traveling.
        </Description>
      </AboutContainer>
      <HeaderTrainees>Ashley Levenson, Trainee</HeaderTrainees>
      <AboutContainer>
        <AboutImage alt="Ashley Levenson" src={Ashley} />

        <Description>
          My name is Ashley Levenson, M.A. I completed my Bachelor of Science in
          Biopsychology, Cognition, and Neuroscience at the University of
          Michigan and my Master’s in Clinical Psychology at The Chicago School.
          Currently, I am a PsyD student at working towards obtaining my
          Doctorate in Clinical Psychology from The Chicago School. I have
          worked with individuals across the lifespan, with an emphasis on
          adults. Throughout my training, I have gained experience in individual
          therapy, group therapy, and neuropsychological assessment while
          working in settings including private practice, outpatient clinics,
          integrated primary care, and medical centers. At Rosewatter
          Chicagoland Counseling, I am primarily supervised by Dr. Sara Taxman.
        </Description>
        <Description>
          My approach to therapy is primarily cognitive-behavioral while
          incorporating components from other theoretical orientations based on
          individual client needs. I utilize evidence-based interventions such
          as ACT, DBT, and cognitive restructuring in order to help clients
          reach their therapeutic goals and minimize the impact of symptoms on
          daily life. I strive to create a collaborative and comfortable
          environment, where clients feel open to expressing themselves as well
          as empowered to participate in shared decision-making for their
          treatment. While I am trained in a wide variety of clinical concerns
          and populations, I especially enjoy working with adults on issues
          related to anxiety, OCD, disordered eating, body image, women’s
          issues, and health- and illness- related concerns.
        </Description>

        <Description>
          Outside of psychology, I enjoy spending my time doing yoga, going on
          walks and hikes, singing, trying new restaurants, playing board games,
          and spending time with friends and family.
        </Description>
      </AboutContainer>
    </Container>
  );
}
