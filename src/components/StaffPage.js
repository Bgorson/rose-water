import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { colors } from '../utils/colors';
import aboutImage from '../grandparents.jpg';
import Rachel from '../RachelUpdate.jpg';
import Sara from '../SGT_headshot.jpg';
import Sarah from '../sarah.jpeg';
import Elisabeth from '../elisabeth.jpeg';
import Sydnie from '../Sydnie_Dobkin.jpg';
import Reagan from '../r_sword.jpeg';
import Ashley from '../ashley.jpg';
import DBT from '../dbt_badge.png';
import Jacob from '../jacob.jpg';
import Annie from '../annie.jpg';
import Samantha from '../Samantha.jpg';
import Talia from '../talia.jpg';
import Julia from '../julia.jpg';
import Dan from '../dan.jpg';
import Isabel from '../Isabel.jpg';
import Katherine from '../Katherine.jpg';
import Jake from '../Jake.jpeg';
import Melanie from '../melanie.jpeg';
import Katie from '../katie.jpeg';
import Matthew from '../matt.jpg';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageWrapper = styled.div`
  background: ${colors.cream};
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(
    180deg,
    ${colors.roseLight} 0%,
    ${colors.cream} 100%
  );
  padding: 4rem 2rem 6rem;
  position: relative;
`;

const BreadcrumbNav = styled.nav`
  max-width: 900px;
  margin: 0 auto 2rem;

  a {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    color: ${colors.sage};
    text-decoration: none;

    &:hover {
      color: ${colors.sageDark};
    }
  }

  span {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    color: ${colors.muted};
    margin: 0 0.5rem;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  align-items: start;
  animation: ${fadeInUp} 0.8s ease forwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageColumn = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 10px 40px rgba(61, 61, 61, 0.12);

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  background: linear-gradient(135deg, ${colors.sand} 0%, ${colors.stone} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.muted};
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

const Badge = styled.img`
  position: absolute;
  bottom: -15px;
  right: -15px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: white;
  padding: 5px;
  box-shadow: 0 4px 15px rgba(61, 61, 61, 0.1);

  @media (max-width: 768px) {
    right: calc(50% - 110px - 15px);
  }
`;

const InfoColumn = styled.div`
  padding-top: 1rem;
`;

const Name = styled.h1`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: ${colors.charcoal};
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const Title = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${colors.sage};
  margin-bottom: 1rem;
`;

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: ${colors.slate};
  text-decoration: none;
  padding: 0.6rem 1rem;
  background: rgba(168, 181, 160, 0.1);
  border-radius: 50px;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: rgba(168, 181, 160, 0.2);
    color: ${colors.sageDark};
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Specialties = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SpecialtyTag = styled.span`
  padding: 0.4rem 0.8rem;
  background: ${colors.warmWhite};
  border: 1px solid ${colors.sand};
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: ${colors.slate};
`;

const ContentSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem 5rem;
  transform: translateY(-3rem);
`;

const ContentCard = styled.article`
  background: ${colors.warmWhite};
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 40px rgba(61, 61, 61, 0.08);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colors.charcoal};
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${colors.roseLight};

  &:not(:first-of-type) {
    margin-top: 2.5rem;
  }
`;

const Description = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: ${colors.slate};
  line-height: 1.9;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Quote = styled.blockquote`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 1.3rem;
  font-style: italic;
  color: ${colors.charcoal};
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  background: linear-gradient(90deg, ${colors.roseLight} 0%, transparent 100%);
  border-left: 4px solid ${colors.rose};
  border-radius: 0 12px 12px 0;
`;

const FamilyImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  margin: 2rem auto;
  display: block;
  box-shadow: 0 8px 30px rgba(61, 61, 61, 0.1);
`;

const BookingCTA = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${colors.sand};
  text-align: center;
`;

const CTAText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: ${colors.slate};
  margin-bottom: 1rem;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    ${colors.sage} 0%,
    ${colors.sageDark} 100%
  );
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(122, 139, 114, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(122, 139, 114, 0.4);
    color: white;
  }
`;

export const staffMembers = [
  {
    id: 1,
    routeName: 'rachel',
    header: 'Rachel Nitzarim, Ph.D',
    blurb: `I'm Rachel Nitzarim, a licensed clinical psychologist and owner of Rosewatter Chicagoland Counseling. I have extensive clinical and training experience, and a passion for interpersonal psychotherapy, while also serving as the Director of Clinical Training, Clinical PsyD at The Chicago School, and offering a broad range of psychotherapy services, supervision, consultation, training and workshops.`,
    title: 'Practice Owner',
    email: 'rnitzarim@rosewatterchicounseling.com',
    image: Rachel,
    specialties: [
      'Couples Therapy',
      'DBT',
      'Mood Disorders',
      'Trauma',
      'Clinical Supervision',
    ],
    description1:
      'Welcome to my private practice. I am Rachel Nitzarim, a licensed clinical psychologist and the owner of Rosewatter Chicagoland Counseling.',
    description2: `I am a proud graduate of UW Madison's Counseling Psychology PhD program (Go Badgers!) My time at UW was spent delving into social class process and outcome research, training in rigorous clinical settings, gaining a passion for clinical training and forming my own dynamic-relational, common-factors informed, clinical style. I completed my pre-doctoral internship at The Counseling and Mental Health Center at The University of Texas at Austin and my post-doctoral work at Student Counseling Services at The University of Chicago.`,
    description3: `After my formal education was complete, I knew that my next steps were
          to involve a combination of both academic/training and clinically
          focused work. Currently, I am the Director of Clinical Training at The
          Chicago School, Clinical PsyD Doctoral Program. I have been with The
          Chicago School since 2017 and moved into the DCT role in 2019.`,
    description4: `Simultaneously, I grew my private practice work at Smith Psychotherapy
          Associates, S.C., (owned by my wonderful Uncle, shoutout to Robert
          Smith!) and was on staff there since 2015.`,
    description5: `Rosewatter was created in 2022 and also pays homage to my family
          origins as it is named after my grandmother "Rose" and my mother's
          maiden name "Goldwasser". My grandparents were Holocaust survivors and
          understanding their history is an incredibly important part of my
          story. Delving deeply into my clients' family histories and stories is
          what I aim to do.`,
    description6: `I believe that our family origins are the foundation of who we are and
          also sometimes provide a pedestal for problems to emerge. I practice
          from a psychodynamic lens with a relational/interpersonal focus. I
          believe that understanding one's history is critical and the work that
          occurs in the here-and-now is where we can make the most progress
          together.`,
    description7: `Research tells us that the central healing factor in psychotherapy is
          the real relationship (Wampold, 2015). It is of the upmost importance
          that my clients feel that I am a good fit for them and vice versa. I
          see the interaction in the therapy room as being a two-way-street.`,
    description8: `In my practice, I work with emerging adults, adults and couples. I
          also offer training workshops for mental healthcare professionals and
          consultation services. I am a generalist which means I see a little
          bit of everything. I especially enjoy working on issues related to:
          mood/emotion dysregulation, dating and relationships, marriage and
          divorce, adjustment, life transition, transition to parenthood,
          couples counseling, LGBTQ+, family dynamics, depression, anxiety,
          Bipolar Disorder, Borderline Personality Disorder, grief/loss, trauma,
          body image concerns, medical conditions as well as therapist
          development and supervision.`,
    description9: `Outside of work, I enjoy being a self-proclaimed foodie at the
          delicious Chicagoland restaurants, consuming as many true crime
          documentaries, reality television series, fiction and nonfiction books
          as possible, spending time with friends and family, yoga/meditation,
          and tending to my mini zoo consisting of one turtle, one talkative
          parrot and three elderly doggies.`,
  },
  {
    id: 2,
    routeName: 'sara',
    blurb: `I'm Sara Taxman, a Clinical Psychologist with a doctorate from The Chicago School, specialized in treating youth and families with emotion regulation, trauma, and behavioral issues at Rosewatter Chicagoland Counseling, while also teaching at The Chicago School and engaging in psychological assessment.`,
    header: 'Sara Taxman, PsyD',
    email: 'staxman@rosewatterchicounseling.com',
    title: 'Clinical Director',
    image: Sara,
    specialties: [
      'DBT',
      'Youth & Families',
      'Eating Disorders',
      'Trauma',
      'Assessment',
    ],
    description1: `My name is Sara Taxman and I received my doctorate in Clinical
          Psychology from The Chicago School and completed my American
          Psychological Association (APA)-accredited pre-doctoral residency at
          Alexian Brothers Behavioral Health Hospital with a focus in children,
          adolescents, and families. Following internship, I completed my
          post-doctoral fellowship at The Family Institute at Northwestern
          University on the Mindfulness and Behavioral Therapies Team. I have
          extensive experience with youth and families across multiple treatment
          settings including therapeutic day and boarding schools, residential
          treatment centers, outpatient psychiatric clinics, and inpatient
          psychiatric hospitals`,
    description2: `Currently, I am working at Rosewatter Chicagoland Counseling providing
          psychotherapy to youth, young adults, and families with emotion
          regulation difficulties, eating disorders, trauma, addiction,
          suicidality, and self-injurious behaviors. I have comprehensive
          training and experience using numerous evidence-based therapies,
          including dialectical behavioral therapy (DBT) and cognitive
          behavioral therapy (CBT). In addition to therapy, I am also excited to
          work as an adjunct professor at The Chicago School of Professional
          Psychology and honing my skills in psychological and
          neuropsychological assessment.`,
    description3: `My primary goal is to provide behaviorally driven therapeutic care to
          clinically and culturally diverse adolescents and young adults. I want
          to support my clients and their families and help them implement the
          skills and perspectives they acquire in therapy in their lives outside
          of the therapy room. In my free time, I love to play pickleball,
          practice yoga, and travel. I also love Taylor Swift and the Dave
          Matthews Band!`,
  },
  {
    id: 5,
    routeName: 'sydnie',
    header: 'Sydnie Dobkin, LCPC',
    email: 'sdobkin@rosewatterchicounseling.com',
    blurb: `I'm Sydnie Dobkin, a certified DBT clinician with a Master's from the Family Institute at Northwestern University and extensive experience in evidence-based therapies, currently providing psychotherapy at Rosewatter Chicagoland Counseling to youth and families dealing with a range of issues, while also incorporating psychodynamic theory, reiki, and yoga-informed practices into my work.`,
    title: 'DBT Director',
    image: Sydnie,
    badge: DBT,
    specialties: [
      'DBT (Certified)',
      'Eating Disorders',
      'Adolescents',
      'Self-Harm',
      'Family Therapy',
    ],
    description1: `My name is Sydnie Dobkin and I received my Masters in Counseling from
          the Family Institute at Northwestern University. I am a DBT-Linehan
          Board of Certification, Certified Clinician™ and I have almost a
          decade of experience providing comprehensive and adherent DBT. I then
          completed my post-graduate fellowship at The Family Institute at
          Northwestern University on the Mindfulness and Behavioral Therapies
          Team. Following The Family Institute, I served as the Director of
          Adolescent DBT at Great Lakes Therapy Center, a DBT-Linehan Certified
          Program. Today, I continue to work with families and parents through a
          behavioral lens.`,
    description2: `Currently, I am working at Rosewatter Chicagoland Counseling providing
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
          reiki, and yoga-informed psychotherapy.`,
    description3: `My primary goal is to provide behaviorally driven therapeutic care to
          clinically and culturally diverse adolescents and young adults. I want
          to support my clients and help them generalize their skills outside of
          the therapy room. In my free time, I love to travel, snuggle with my
          dog Harold, and scope out the best places to eat sushi. I also love
          Taylor Swift, The 1975, and Harry Styles! You can find me reading YA
          novels, watching (maybe too much) television, and collecting crystals.`,
  },
  {
    id: 3,
    routeName: 'sarah',
    blurb: `I'm Sarah Jeziorski, a Licensed Clinical Professional Counselor and Registered Art Therapist at Rosewatter Counseling, specializing in trauma-informed, relational therapy for emerging adults and adults. I integrate talk therapy, creative arts, and EMDR (somatic trauma re-processing) to support personal growth and healing.`,
    header: 'Sarah Jeziorski, LCPC',
    email: 'sjeziorski@rosewatterchicounseling.com',
    title: 'Licensed Professional Counselor',
    image: Sarah,
    specialties: [
      'Art Therapy',
      'EMDR',
      'Trauma',
      'Adults',
      'Creative Approaches',
    ],
    description1: `My name is Sarah Jeziorski. I am a Licensed Clinical Professional
          Counselor and Registered Art Therapist. I enjoy helping Emerging
          Adults and Adults develop their personal strengths and learn to use
          their creativity for growth and healing. I have a trauma-informed,
          relational focus. I aim to understand each person's unique background
          including cultural identity, gender identity, spirituality and beliefs
          and how they influence each person's life.`,
    description2: `I am in the process of EMDR training, and qualified to provide this
          service to individuals with recent or past trauma histories. Therapy
          sessions with me involve a combination of talk therapy, goal planning,
          creative art or movement, and trauma-reprocessing, depending on client
          needs. I consider myself flexible and able to work with a variety of
          different people, with different presenting issues. I have much
          experience in community based non profit settings, private settings,
          and group settings. I have recently decided to focus solely on therapy
          with Rosewatter Counseling. I look forward to working with you.`,
  },
  {
    id: 4,
    routeName: 'elisabeth',
    blurb: `I'm Dr. Elisabeth Pratt, a Licensed Clinical Psychologist with a doctorate from The Chicago School. I specialize in trauma-focused treatment, substance misuse/early recovery, and grief processing. I work through a relational-cultural lens, incorporating evidence-based techniques and an anti-oppressive approach to empower clients and foster personal growth.`,
    header: 'Elisabeth Pratt, PsyD',
    email: 'epratt@rosewatterchicounseling.com',
    title: 'Licensed Clinical Psychologist',
    image: Elisabeth,
    specialties: [
      'Trauma',
      'Substance Use',
      'Grief & Loss',
      'Mood Disorders',
      'Relationships',
    ],
    description1: `My name is Elisabeth Pratt. I received my doctorate degree in clinical
          psychology from The Chicago School of Professional Psychology. I have
          received training in a variety of settings, including a trauma-focused
          clinic at a local Department of Veteran Affairs hospital, in private
          practice settings with a variety of presentations, and within the
          criminal justice system on both state and federal levels. I completed
          my APA-accredited predoctoral internship with the Wisconsin Department
          of Corrections, and completed my post-doctoral training here in
          Chicago at a local private practice.`,
    description2Custom: () => (
      <Quote>
        It takes two to speak the truth - one to speak, the other to hear.
        <br />— Henry David Thoreau
      </Quote>
    ),
    description3: `Therapy requires bravery and a willingness to explore the complexities
          of who you are. Through a warm and caring therapeutic alliance, we can
          work together to highlight your best qualities and work toward
          changing areas of your life that you have identified as
          unsatisfactory. I practice through a relational-cultural lens, meaning
          not only am I a human in the room with you, but I pay special
          attention to the past and current relationships (on all levels of
          society) that have had a significant influence on the development of
          the current self. I have strong roots in anti-oppressive approaches
          and highly value empowering my clients.`,
    description4: `While most of our work will be unstructured, I do incorporate
          techniques from evidence-based interventions (DBT, CPT, CBT, positive
          psychology) to give you real skills to use outside of our sessions.
          Our work together will not only focus on what is going wrong but will
          also focus on what is going right. We will continue to foster and
          develop your personal strengths that will help see you through the
          challenges life brings your way. Together we will navigate the path
          toward healthy relationships, self-compassion, and learn to find the
          brightest of light in the darkest of places.`,
    description5: `I enjoy working with adults ages 18+ and have experience with diverse
          clientele from all walks of life. While I am open to working on a wide
          variety of concerns, I am especially interested in trauma-focused
          treatment, relationship concerns, mood disorders, grief and loss,
          substance misuse, and emotional regulation.`,
    description6Custom: () => (
      <Quote>
        "What are the words you do not yet have? What do you need to say? …
        There are so many silences to be broken."
        <br />— Audre Lorde
      </Quote>
    ),
    description7: `When not working, I enjoy rock climbing, hiking, trying new
          restaurants, spending time with friends and family, reading (get ready
          for book recommendations!), live music, and exploring creative
          outlets.`,
  },

  {
    id: 8,
    routeName: 'ashley',
    email: 'alevenson@rosewatterchicounseling.com',
    blurb: `I'm Ashley Levenson, a PsyD candidate at The Chicago School. I specialize in cognitive-behavioral therapy for anxiety, OCD, disordered eating, body image, and health-related concerns.`,
    header: 'Ashley Levenson, MA',
    title: 'Trainee',
    image: Ashley,
    specialties: ['CBT', 'Anxiety', 'OCD', 'Body Image', "Women's Issues"],
    description1: `My name is Ashley Levenson, M.A. I completed my Bachelor of Science in
          Biopsychology, Cognition, and Neuroscience at the University of
          Michigan and my Master's in Clinical Psychology at The Chicago School.
          Currently, I am a PsyD student at working towards obtaining my
          Doctorate in Clinical Psychology from The Chicago School. I have
          worked with individuals across the lifespan, with an emphasis on
          adults. Throughout my training, I have gained experience in individual
          therapy, group therapy, and neuropsychological assessment while
          working in settings including private practice, outpatient clinics,
          integrated primary care, and medical centers. At Rosewatter
          Chicagoland Counseling, I am primarily supervised by Dr. Sara Taxman.`,
    description2: `My approach to therapy is primarily cognitive-behavioral while
          incorporating components from other theoretical orientations based on
          individual client needs. I utilize evidence-based interventions such
          as ACT, DBT, and cognitive restructuring in order to help clients
          reach their therapeutic goals and minimize the impact of symptoms on
          daily life. I strive to create a collaborative and comfortable
          environment, where clients feel open to expressing themselves as well
          as empowered to participate in shared decision-making for their
          treatment. While I am trained in a wide variety of clinical concerns
          and populations, I especially enjoy working with adults on issues
          related to anxiety, OCD, disordered eating, body image, women's
          issues, and health- and illness- related concerns.`,
    description3: `Outside of psychology, I enjoy spending my time doing yoga, going on
          walks and hikes, singing, trying new restaurants, playing board games,
          and spending time with friends and family.`,
  },
  {
    id: 10,
    routeName: 'jacob',
    header: 'Jacob Sweetow, LCSW',
    email: 'jsweetow@rosewatterchicounseling.com',
    blurb: `I'm Jacob Sweetow, a psychotherapist with an MSW from the University of Chicago, specializing in emotion dysregulation and mood disorders with expertise in DBT and mindfulness-based therapies, while also enjoying triathlons, reading, and a diverse range of music.`,
    title: 'LCSW',
    image: Jacob,
    specialties: ['DBT', 'Mindfulness', 'Mood Disorders', 'Emotion Regulation'],
    description1: `Jacob Sweetow is a compassionate psychotherapist with a focus on emotion dysregulation and mood disorders. He holds a Master's in Social Work (MSW) from the University of Chicago and is currently pursuing LCSW licensure under the supervision of Rachel Nitzarim, Ph.D.`,
    description2: `Specializing in Dialectical Behavior Therapy (DBT) and mindfulness-based DBT-informed therapy, Jacob has gained extensive experience through an internship at The Family Institute's DBT program and a DBT Fellowship at the Great Lakes Therapy Center. There, he also served as a Staff Therapist and Mindfulness Services Coordinator. His approach is deeply influenced by his personal journey with meditation, infusing his practice with mindfulness and empathy to help clients build resilience and emotional balance.`,
    description3: `Jacob's educational background includes a Bachelor's degree in Politics with a focus on Constitutional Law from Princeton University, which adds a unique perspective to his therapeutic practice.
`,
    description4: `Beyond his professional life, Jacob is an enthusiastic triathlete who enjoys running, biking, and swimming. His love for reading spans from coming-of-age novels to philosophy, scary stories, and physics. Music plays a significant role in his life, with last year's top Spotify artists featuring Taylor Swift, Dua Lipa, John Mayer, and John Coltrane. An ardent supporter of the Fighting Illini (a legacy from his dad) and Chicago sports teams, Jacob endures the highs and lows of his favorite teams with a mix of hope and humor.`,
    description5: `In his personal time, Jacob treasures moments with his fiancée and their two cats, Binx and Wally.`,
  },
  {
    id: 11,
    routeName: 'annie',
    email: 'agleason@rosewatterchicounseling.com',
    header: 'Annie Gleason, Operations Manager',
    blurb: `Annie Gleason is the Operations Manager at Rosewatter Chicagoland Counseling, pursuing a PhD in Industrial and Organizational Psychology while also serving as the Clinical Training Coordinator at The Chicago School, and she is passionate about problem-solving and effective organizational management.`,
    title: 'Operations Manager',
    category: 'staff', // Only shows in "All Staff"
    image: Annie,
    description1: `My name is Annie Gleason and I am the Operations Manager at Rosewatter Chicagoland Counseling. I have a background in clinical mental health counseling and am currently obtaining my PhD in Industrial and Organizational Psychology (Business Psychology). I also currently serve as the Clinical Training Coordinator for training at The Chicago School, Chicago Campus PsyD Clinical PsyD program. Simply put, I am a self proclaimed "operations and infrastructure nerd." I am energized by problem solving and thinking creatively about how to make effective lasting organizational change, create practical solutions for personnel, and establish organizational capacity for the unknown. My professional experiences to date have provided me with a unique perspective that allows me to ensure that the intricacies of clinical work, people management, and system oriented challenges are addressed proactively and pragmatically.`,
    description2: `I have earned my B.A. in Psychology from UW-Whitewater and an Ed.S. in Clinical Mental Health Counseling from Loyola University Chicago. I also own my own solo psychotherapy telehealth private practice in Chicago. In my free time, I am an avid consumer of the arts, awannabe yoga instructor, a Dog Mom to fur-baby Arugula, and a lover of any and all things Chicago!`,
  },
  {
    id: 111,
    routeName: 'samantha',
    email: 'sfitzwater@rosewatterchicounseling.com',
    header: 'Samantha Fitzwater, DBT Fellow LSW',
    blurb: `I specialize in DBT to help teens and adults navigate emotional struggles, self-harm, and daily stress. Whether you're in crisis or seeking personal growth, therapy with me is practical, collaborative, and focused on meaningful change.`,
    title: 'DBT Fellow, LSW',
    category: 'clinicians',
    image: Samantha,
    specialties: ['DBT', 'Self-Harm', 'Adolescents', 'CBT', 'Mindfulness'],
    description1: `I'm Samantha Fitzwater, a Licensend Social Worker who specializes in Dialectical Behavior Therapy (DBT), working with teens and adults navigating intense emotions, self-harm, suicidal ideation, and the chronic stress of daily life. Many of my clients come to therapy feeling overwhelmed or stuck in patterns that no longer serve them. My goal is to help you build awareness, develop practical coping skills, and create a life that feels more balanced and fulfilling.`,
    description2: `My approach is warm, direct, and collaborative. I use evidence-based therapies including DBT, Cognitive Behavioral Therapy (CBT), Mindfulness, and Acceptance and Commitment Therapy (ACT), tailoring each session to your unique needs and goals. Whether you're in crisis or pursuing deeper personal growth, I meet you where you are and help you take meaningful steps forward.`,
    description3: `I focus on the balance between acceptance and change—helping you respond to emotional pain with compassion while also building new behaviors that align with your values. Therapy with me is practical, skill-based, and grounded in real connection.`,
    description4: `If you're feeling stuck, struggling with self-harm or emotional overwhelm, or simply curious about whether therapy could help, I invite you to reach out. You don't have to go through this alone—together, we can create space for healing, growth, and meaningful change.`,
  },
  {
    id: 12,
    routeName: 'talia',
    email: 'taliafr@rosewatterchicounseling.com',
    header: 'Talia Farrell-Rosen, MSW',
    blurb: `I'm Talia Farrell-Rosen, a psychotherapist with my MSW from Boston College, specializing in DBT to support adolescents, families, and adults managing emotion dysregulation, mood disorders, ADHD, autism, and anxiety.`,
    title: 'Social Worker',
    image: Talia,
    specialties: ['DBT', 'ADHD', 'Autism', 'Adolescents', 'Anxiety'],
    description1: `Talia is a graduate of Boston College's Master of Social Work program, bringing extensive experience from her previous roles in school and behavioral health settings, where she supported children and teens from diverse backgrounds. At Rosewatter, she provides therapy for both adults and adolescents under the supervision of Lauren Barris, LCSW, a Certified DBT Clinician and Dr. Rachel Nitzarim.`,
    description2: `During her graduate studies, Talia focused on gaining hands-on experience with Latinx communities and implementing evidence-based therapies, including DBT and CBT. She specializes in working with individuals with autism, ADHD, anxiety, and emotional dysregulation, and is passionate about creating a supportive and empathetic environment for clients of all ages and backgrounds.`,
    description3: `As a new resident of Chicago, Talia enjoys exploring her city, taking long walks along the lakefront, discovering new neighborhoods, and participating in dance classes.`,
  },
  {
    id: 13,
    routeName: 'julia',
    header: 'Julia Friedland, LSW',
    email: 'jfriedland@rosewatterchicounseling.com',
    blurb: `I'm Julia Friedland, a Licensed Social Worker with a Master's from Columbia University's School of Social Work. I specialize in supporting both adolescents and adults managing symptoms of depression, anxiety, emotion dysregulation, and mood disorders.`,
    title: 'Licensed Social Worker',
    image: Julia,
    specialties: [
      'DBT',
      'Adolescents',
      'Depression',
      'Anxiety',
      'Mood Disorders',
    ],
    description1: `Julia Friedland is a Licensed Social Worker who brings a compassionate, skill-building approach to therapy, specializing in treating mood disorders and emotion dysregulation in adolescents and adults. She earned her Master of Social Work from Columbia University in NYC, where she focused on Dialectical Behavior Therapy (DBT) and evidence-based approaches to help clients manage life's most difficult moments. At Rosewatter, she provides therapy to adolescents, families, and adults under the supervision of Rachel Nitzarim, Ph.D., and Lauren Barris, LCSW, a DBT-Linehan Board-Certified Clinician.`,
    description2: `Julia's approach emphasizes meeting clients where they are, combining practical tools with genuine validation and acceptance. Her experience includes hands-on DBT work with adolescents and adults at Metro NY DBT Center, as well as providing behavioral health and social support services to adults from diverse backgrounds at a primary care facility in Washington Heights, NYC through Columbia Doctors at NewYork-Presbyterian. Julia's holistic and person-centered approach ensures that each individual's unique needs are met with warmth and understanding. Her passion for inclusivity has also been shaped by years of involvement in the disability community in Chicagoland, fostering a welcoming, supportive space for all her clients.`,
    description3: `Outside of work, Julia enjoys traveling, exploring new music, and unwinding with a great podcast. She can often be found relaxing with her dog, Henry, or satisfying her sweet tooth by baking up a new recipe!`,
  },
  {
    id: 14,
    routeName: 'dan',
    header: 'Dan Greenstein, Psy.D',
    email: 'dgreenstein@rosewatterchicounseling.com',
    blurb: `I'm Dan Greenstein, a licensed clinical psychologist specializing in ACT and CBT. My approach is client-centered, empathetic, and non-judgmental—focused on helping you align your actions with your values.`,
    title: 'Licensed Clinical Psychologist',
    image: Dan,
    specialties: ['ACT', 'CBT', 'Adults', 'Values-Based Work'],
    description1: `Join me on your journey to well-being! With years of experience supporting individuals from diverse backgrounds, I specialize in treating a wide range of mental health concerns through in-person or teletherapy in a safe, nonjudgmental space.`,
    description2: `My approach is client-centered, evidence-based, and empathetic, focused on building trust and exploring values to create a meaningful, vibrant life. I primarily use Acceptance and Commitment Therapy (ACT) to help you overcome unhelpful thoughts and behaviors while incorporating Cognitive-Behavioral Therapy (CBT) when appropriate to address negative thinking patterns. Together, we'll develop strategies for responding effectively to life's challenges and aligning your actions with your core values.`,
    description3: `Before joining Rosewatter Chicagoland Counseling, I worked as a Forensic Psychologist and Drug Abuse Program Coordinator in the federal prison system. I am proud to have supervised over 80 predoctoral students during my career. Outside of counseling, I enjoy spending time with my wife and sons, roasting coffee beans, cooking, exercising, listening to classical music, and watching collegiate sports.`,
  },
  {
    id: 15,
    routeName: 'isabel',
    header: 'Isabel Silverston, M.A.',
    email: 'ISilverston@rosewatterchicounseling.com',
    blurb: `With a warm, relational approach and a passion for supporting clients across all ages, Isabel helps individuals navigate life's challenges with compassion, insight, and care.`,
    title: 'Practicum Student',
    image: Isabel,
    specialties: [
      'Psychodynamic',
      'All Ages',
      'Relationships',
      'Anxiety',
      'Depression',
    ],
    description1: `My name is Isabel Silverston, M.A. I received my Bachelor of Arts in Sociology from Tufts University and my Master's in Clinical Psychology from The Chicago School. I am currently working towards my Doctorate in Clinical Psychology. Over the last few years, I have worked with children, adolescents, and adults in a variety of clinical settings, including community mental health, private practice, and college counseling. I have experience working with clients who hold diverse cultural identities and treating a wide range of mental health issues, including anxiety, depression, emotional dysregulation, self-esteem and identity issues, challenges associated with trauma and loss, and relationship concerns. I also enjoy working with children and families, and have experience supporting them through developmental transitions, behavioral challenges, and parent-child relational difficulties. While at Rosewatter Chicagoland Counseling, I will be primarily supervised by Dr. Sara Taxman.`,
    description2: `My therapeutic approach draws primarily from psychodynamic and relational-cultural theory while also incorporating client-centered and humanistic perspectives. I believe that relationships can be a mechanism for change, and that this starts with the therapeutic relationship. I strive to create a safe, trusting, and collaborative relationship with clients to support them in processing how their past experiences shape who they are and how they interact with others. My therapeutic style is warm, curious, and non-judgmental. I meet clients where they are in their process and tailor my work with each client to address their goals, needs, and unique identities.`,
    description3: `In my free time, I love to cook, run by the lake, try new restaurants, travel, read, and spend time with family and friends.`,
  },
  {
    id: 16,
    routeName: 'katherine',
    header: 'Katherine Russeau, Pys.D',
    email: 'KRusseau@rosewatterchicounseling.com',
    blurb: `I'm Katherine Russeau, a licensed clinical psychologist dedicated to supporting people navigate
trauma, relationship challenges, substance use, and major life transitions through humanistic,
interpersonal, and somatic therapies. I'm also passionate about working with justice-involved
individuals and providing comprehensive psychological evaluations.`,
    title: 'Licensed Clinical Psychologist',
    image: Katherine,
    specialties: [
      'Trauma',
      'DBT',
      'ACT',
      'Substance Use',
      'Forensic Evaluations',
    ],
    description1: `My name is Katherine Russeau, and I am a licensed clinical psychologist. I earned my Doctorate
in Clinical Psychology from the Wisconsin School of Professional Psychology and completed my
pre-doctoral internship and post-doctoral fellowship with the Wisconsin Department of
Corrections, where I specialized in trauma treatment and substance misuse. Throughout my career,
I have worked in outpatient clinics, inpatient hospitals, correctional facilities, and skilled nursing
homes, which has shaped my passion for providing compassionate care across diverse populations
and settings.`,
    description2: `At Rosewatter Chicagoland Counseling, my goal is to create a collaborative and supportive space
where clients feel safe exploring their experiences and finding meaningful paths toward change. I
provide psychotherapy to youth and adults facing emotion regulation difficulties, trauma,

addiction, suicidality, and relationship challenges. I have comprehensive training in evidence-
based therapies, including Dialectical Behavior Therapy (DBT) and Acceptance and Commitment

Therapy (ACT). In addition to therapy, I have expertise in conducting psychological and forensic
evaluations.`,
    description3: `I am licensed in Illinois, Wisconsin, and California, credentialed as a National Register Health
Service Psychologist, and hold the PSYPACT credential, which allows me to provide telehealth
services across participating states.`,
    description4: `Outside of work, I enjoy spending time with family and friends, attending music festivals, cuddling
with my cats, watching horror movies, and staying active outdoors.`,
  },
  {
    id: 17,
    routeName: 'jake',
    header: "Jake O'Brien, M.A.",
    email: 'JOBrien@rosewatterchicounseling.com',
    blurb: `I'm Jake O'Brien, a psychotherapist experienced in trauma-informed care and emotional distress tolerance. I use a client-centered relational approach to support clients across a variety of ages and presentations.`,
    image: Jake,
    specialties: [
      'Trauma',
      'Justice-Involved',
      'Substance Use',
      'Group Therapy',
    ],
    description1: `I'm Jake O'Brien, a psychotherapist with an M.A. in Clinical Psychology from Roosevelt University, experienced with individual and group therapy including trauma-informed care and emotional distress tolerance. I like to use a client-centered relational approach to provide support. I have experience working with a variety of ages and presentations, including justice-involved, unhoused, and substance use.`,
  },
  {
    id: 18,
    routeName: 'alice',
    image: null,
    header: 'Alice Overland',
    email: 'aoverland@rosewatterchicounseling.com',
    blurb: `My name is Alice Overland, and I am a clinical intern specializing in Dialectical Behavior Therapy (DBT) and supporting our Family Skills Group. I am currently pursuing my Master of Social Work (MSW) at the University of Chicago's Crown Family School of Social Work, Policy, and Practice.`,
    title: 'Clinical Intern',
    category: 'trainees',
    specialties: ['DBT', 'Family Skills', 'Adolescents'],
    description1: `My clinical interests include helping individuals and families build emotional regulation skills, improve communication, and strengthen relationships. I am passionate about creating a safe, collaborative, and nonjudgmental space where clients feel supported in working toward meaningful change.`,
    description2: `Following completion of my graduate degree, I plan to pursue licensure as a Licensed Clinical Social Worker (LCSW) and continue providing therapy to children, adolescents, and families.`,
    description3: `In my free time, I enjoy trying out new restaurants and cafes in Chicago, running, yoga, and hanging out with friends. I also love reading, listening to Taylor Swift, and watching any reality TV show!`,
  },
  {
    id: 19,
    routeName: 'melanie',
    image: Melanie,
    header: 'Melanie Umbdenstock',
    email: 'mumbdenstock@rosewatterchicounseling.com',
    blurb: `I'm Melanie Umbdenstock, a Clinical Mental Health Counseling M.A. student at Northwestern University. I'm committed to providing a trauma-informed, client-centered space rooted in compassion, where individuals feel empowered and supported in working toward their mental health and wellness goals.`,
    title: 'Trainee',
    category: 'trainees',
    specialties: ['Trauma-Informed', 'Client-Centered'],
    description1: `My name is Melanie Umbdenstock, and I am a Clinical Mental Health Counseling M.A. student at Northwestern University. I am committed to providing a trauma-informed, client-centered space rooted in compassion, where individuals feel empowered and supported in working toward their mental health and wellness goals.`,
  },
  {
    id: 20,
    routeName: 'katie',
    header: 'Katie Gallo, M.A. Candidate',
    email: 'KGallo@rosewatterchicounseling.com',
    blurb: `I help adults navigating anxiety, depression, and life transitions feel more grounded, connected, and whole. My approach is warm, collaborative, and relational—rooted in authenticity, empathy, and trust—to help you reconnect with your inner wisdom and move toward lasting healing.`,
    title: 'Counseling Intern',
    category: 'trainees',
    image: Katie,
    specialties: ['Anxiety', 'Depression', 'Life Transitions', 'Relational'],
    description1: `My name is Katie Gallo, and I am a counselor-in-training at Northwestern University, working toward licensure as a professional counselor (LCPC) in Illinois. I work with adults navigating anxiety, depression, relationship challenges, and life transitions who want to feel more balanced, connected, and at home within themselves and the world around them.`,
    description2: `I view counseling as a deeply human and relational process—one grounded in safety, authenticity, and connection. I believe that healing happens within supportive relationships where we can feel truly seen, accepted, and understood. My therapeutic style is warm, reflective, and exploratory, rooted in person-centered and psychodynamic principles. I strive to create a space where clients can bring their full, authentic selves without fear of judgment and begin to recognize their inherent worth and capacity for wholeness.`,
    description3: `Our work together will be collaborative and flexible, moving at a pace that feels right for you. Together, we'll explore recurring patterns, deepen emotional insight, and reconnect to your inner wisdom—supporting your growth toward greater self-understanding, alignment, and authenticity.`,
    description4: `Outside the therapy room, I find joy in painting and exploring creative outlets, walking around the city with a good deep-dive podcast, and browsing thrift stores and farmers' markets. My favorite way to recharge is through meaningful conversation and laughter shared with family and friends over a warm, home-cooked meal.`,
  },
  {
    id: 21,
    routeName: 'matthew',
    image: Matthew,
    header: 'Matthew Berg',
    email: 'MBerg@rosewatterchicounseling.com',
    blurb: `Hi, I'm Matthew Berg, a Master of Social Work intern at the University of Chicago. I'm interested in applying what I'm learning to psychotherapy with clinically and culturally diverse populations. I approach each client with curiosity, respect, and a deep belief in their capacity for growth and change.`,
    title: 'Social Work Intern',
    category: 'trainees',
    specialties: ['DBT', 'ACT', 'Culturally Diverse Populations'],
    description1: `Hi, I'm Matthew Berg, and I'm currently a Master of Social Work student at the University of Chicago, working as an intern here at Rosewatter Chicagoland Counseling. With an academic focus on evidence-based therapies such as Dialectical Behavior Therapy (DBT) and Acceptance and Commitment Therapy (ACT), I'm interested in applying what I'm learning to psychotherapy with clinically and culturally diverse populations. DBT recognizes clients as complex individuals with layered identities and strengths, shaped by their unique social and historical contexts. In honoring that perspective, I approach each client with curiosity, respect, and a deep belief in their capacity for growth and change.`,
    description2: `Previously, I interned at Lift-Chicago, where I worked closely with parents to collaboratively problem-solve, connect them with resources, and provide long-term, compassionate support. A central part of that work involved building relationships grounded in mutual respect and trust, something I bring with me to Rosewatter, where I hope to continue helping clients build lives that feel meaningful and aligned with their values.`,
    description3: `In my free time, I enjoy watching movies, going on walks to clear my head, and slowly working through my list of free and low-cost things to do in the city. Let me know if there's anything I should add to my Chicago bucket list!`,
  },
];

const StaffPage = () => {
  const { name } = useParams();
  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    if (name) {
      const staff = staffMembers.find(
        (member) =>
          member.routeName.toLowerCase().replace(' ', '-') ===
          name.toLowerCase()
      );
      setSelectedStaff(staff);
      window.scrollTo(0, 0);
    }
  }, [name]);

  if (!selectedStaff) {
    return (
      <PageWrapper>
        <ContentSection style={{ paddingTop: '5rem', textAlign: 'center' }}>
          <p>Loading...</p>
        </ContentSection>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <HeroSection>
        <BreadcrumbNav>
          <Link to="/about">Our Team</Link>
          <span>/</span>
          <span>{selectedStaff.header}</span>
        </BreadcrumbNav>

        <HeroContent>
          <ImageColumn>
            {selectedStaff.image ? (
              <ProfileImage
                src={selectedStaff.image}
                alt={selectedStaff.header}
              />
            ) : (
              <ImagePlaceholder>Photo Coming Soon</ImagePlaceholder>
            )}
            {selectedStaff.badge && (
              <Badge
                src={selectedStaff.badge}
                alt="DBT-Linehan Board Certified Clinician"
              />
            )}
          </ImageColumn>

          <InfoColumn>
            <Name>{selectedStaff.header}</Name>
            <Title>{selectedStaff.title}</Title>

            {selectedStaff.email && (
              <EmailLink href={`mailto:${selectedStaff.email}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                {selectedStaff.email}
              </EmailLink>
            )}

            {selectedStaff.specialties && (
              <Specialties>
                {selectedStaff.specialties.map((specialty) => (
                  <SpecialtyTag key={specialty}>{specialty}</SpecialtyTag>
                ))}
              </Specialties>
            )}
          </InfoColumn>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentCard>
          <SectionTitle>About Me</SectionTitle>

          {selectedStaff.description1 && (
            <Description>{selectedStaff.description1}</Description>
          )}

          {selectedStaff.description2Custom &&
            selectedStaff.description2Custom()}

          {selectedStaff.description2 && (
            <Description>{selectedStaff.description2}</Description>
          )}

          {selectedStaff.description3 && (
            <Description>{selectedStaff.description3}</Description>
          )}

          {selectedStaff.description4 && (
            <Description>{selectedStaff.description4}</Description>
          )}

          {selectedStaff.description5 && (
            <Description>{selectedStaff.description5}</Description>
          )}

          {selectedStaff.routeName === 'rachel' && (
            <FamilyImage src={aboutImage} alt="Rachel's family" />
          )}

          {selectedStaff.description6Custom &&
            selectedStaff.description6Custom()}

          {selectedStaff.description6 && (
            <Description>{selectedStaff.description6}</Description>
          )}

          {selectedStaff.description7 && (
            <Description>{selectedStaff.description7}</Description>
          )}

          {selectedStaff.description8 && (
            <Description>{selectedStaff.description8}</Description>
          )}

          {selectedStaff.description9 && (
            <Description>{selectedStaff.description9}</Description>
          )}

          <BookingCTA>
            <CTAText>
              Interested in working with {selectedStaff.header?.split(',')[0]}?
            </CTAText>
            <CTAButton href="/appointment">Book a Consultation</CTAButton>
          </BookingCTA>
        </ContentCard>
      </ContentSection>
    </PageWrapper>
  );
};

export default StaffPage;
