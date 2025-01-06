import React from 'react';
import { Helmet } from 'react-helmet';
import IndividualService from '../individual.webp';
import Couples from '../couples.webp';
import Workshop from '../workshop.webp';
import styled from 'styled-components';
import Group from '../group.webp';
import Consultation from '../consultation.webp';
import { colors } from '../utils/colors';

const CONTENT = [
  {
    image: IndividualService,
    type: 'individual',
    description:
      'Discover personalized individual therapy at Rosewatter Chicagoland Counseling.',
    title: 'Individual Therapy | Rosewatter Chicagoland Counseling',
    header: 'Individual Therapy',
    mainContent:
      'At Rosewatter, our clinicians take the time to understand you and your unique experiences. In your one-on-one sessions, you’ll work with a therapist who listens carefully and collaborates with you to navigate your concerns, identify patterns, and set meaningful and achievable goals. Each session is part of an ongoing relationship to help you gain insight into your thoughts and feelings while equipping you with practical tools for change. We’re here to walk alongside you on your path to emotional well-being, offering guidance and skills that are specifically suited to where you are in your journey.',
    subHeader: [
      {
        title: 'Is Therapy Right for Me?',
        content:
          "Deciding to start therapy can be a big step, and it's normal to have questions or concerns about whether it's the right choice for you. Therapy is a personal journey, and what works for one person might not work for another. If you're feeling uncertain, that's okay, this process can be hard and that’s why finding the right therapist for you is so important.",
      },
      {
        title: 'How do I know if I need therapy?',
        content:
          'Therapy can be helpful for anyone dealing with challenges, whether they’re related to stress, anxiety, depression, trauma, relationship issues, or simply wanting a space to process life events. If you find yourself feeling stuck, overwhelmed, or unable to manage your emotions on your own, it could be a good time to explore therapy.',
      },
      {
        title: 'What if I don’t know what to talk about?',
        content:
          "You don’t need to have everything figured out before starting therapy. Our therapists are here to help you explore your thoughts and feelings, even if you’re unsure where to begin. They have the education and experience to create opportunities for you to engage in fruitful conversations. Sometimes, simply expressing what's on your mind in a safe space can open up insights and directions that weren’t immediately obvious.",
      },
      {
        title: 'Will therapy really help me?',
        content:
          'Therapy is a collaborative process. It offers a unique opportunity to explore yourself with the guidance of a trained clinician. Many people find that therapy helps them gain clarity, develop coping strategies, and make lasting changes in their lives. Your therapist will work with you to set goals and tailor the approach to your specific needs.',
      },
      {
        title: 'What if I’m not ready to talk about certain things?',
        content:
          'Therapy is a space where you set the pace. There’s no rush to discuss anything you’re not comfortable with. Your therapist will meet you where you are, offering support without pressure, and allowing you to share if and when you’re ready.',
      },
      {
        title: 'Is therapy only for people with mental health issues?',
        content:
          'While therapy is an essential tool for managing mental health conditions, it’s also valuable for anyone seeking personal growth, better relationships, or greater self-awareness. You don’t need a diagnosis to benefit from therapy.',
      },
    ],
  },
  {
    image: Couples,
    type: 'couples',
    description:
      "Rebuild trust and intimacy with couples therapy at Rosewatter Chicagoland Counseling. Explore your relationship's dynamics and grow together. Schedule your first session today.",
    title: 'Couples Therapy | Rosewatter Chicagoland Counseling',
    header: 'Couples Therapy',
    mainContent:
      'In couples therapy at Rosewatter, the relationship is the client. If you’re looking to strengthen your bond, resolve conflicts, or make important decisions together, we provide a space where both partners can feel heard and supported. Our work focuses on understanding the dynamics of the relationship rather than solely addressing individual concerns. By exploring these patterns, we help you develop healthier communication, navigate challenges, and foster growth within the relationship, leading to a deeper, more fulfilling connection.',
    faqHeader: 'Is Couples Therapy Right for Us?',
    subHeader: [
      {
        title: 'Can therapy really help our relationship?',
        content:
          'Many couples find that therapy gives them a fresh perspective on their relationship. It helps to illuminate patterns and behaviors that may be contributing to conflict or disconnection. With the relationship as our central focus, couples can learn healthier ways of communicating and resolving differences, allowing them to rebuild trust, foster intimacy, or navigate transitions more effectively.',
      },
      {
        title: 'What if we’re not sure whether we want to stay together?',
        content:
          'Couples therapy isn’t only for couples committed to staying together. Whether you’re working to repair your relationship or contemplating separation, therapy provides a space to clarify what you both want moving forward. Our therapists can help facilitate honest conversations that allow you to explore your options in a supportive, non-judgmental environment.',
      },
      {
        title: 'Will we need to talk about everything in our past?',
        content:
          'The focus of couples therapy is on your current relationship dynamics, though past experiences may sometimes come up to help explain present issues. You won’t be pressured to revisit every past event, but your therapist may guide you to explore patterns or unresolved issues that could be influencing your relationship now.',
      },
      {
        title: 'What if my partner and I have different goals for therapy?',
        content:
          "It’s common for partners to have different expectations when starting therapy. Since the relationship is the focus, our therapists work to find common ground between your individual needs, ensuring that the therapy process respects both partners' perspectives while moving toward the overarching goals of the relationship.",
      },
      {
        title: 'How long does couples therapy take?',
        content:
          'There’s no one-size-fits-all timeline for couples therapy. Some couples may find significant improvements after a few sessions, while others may benefit from ongoing work over a longer period. The process is tailored to the unique dynamics of your relationship, and the duration of therapy will be discussed with your couples therapist as you progress.',
      },
    ],
  },
  {
    image: Consultation,
    type: 'consultation',
    description:
      'Rosewatter Chicagoland Counseling offers expert supervision for aspiring clinicians. Gain real-world experience and develop your therapeutic skills. Join our program now.',
    title: 'Consultation/Supervision | Rosewatter Chicagoland Counseling',
    header: 'Supervision and Consultation at Rosewatter',
    noFaqContent: () => (
      <div style={{ marginTop: '40px' }}>
        <p>
          At Rosewatter, we are dedicated to supporting the next generation of
          clinicians by offering comprehensive supervision and consultation
          services for practicum students, post-doctoral residents, and master's
          level clinical fellows. Our supervision is rooted in providing young
          professionals with the guidance, feedback, and real-world experience
          they need to grow into competent and compassionate clinicians.
        </p>
        <p>
          We offer tailored supervision that goes beyond theory, focusing on
          hands-on learning through clinical casework, professional development,
          and ethical practice. You’ll have the opportunity to work closely with
          experienced clinicians who will guide you in applying theoretical
          frameworks, developing therapeutic skills, and navigating complex
          client interactions. Whether you are refining your diagnostic
          abilities, honing your therapy techniques, or learning to balance
          self-care with client care, our supervision is designed to meet you
          where you are in your professional journey.
        </p>
        <p>
          Our approach to supervision also emphasizes the importance of
          reflective practice. You’ll engage in thoughtful discussion about your
          cases, receive constructive feedback, and develop confidence in your
          clinical decision-making. We believe in fostering an environment where
          you feel supported and challenged as you develop your professional
          identity. With real-world clinical experience at the core of your
          training, you’ll be better prepared to transition from student to
          professional, equipped with the skills and insight necessary to make a
          meaningful impact throughout your career.
        </p>
      </div>
    ),
  },
  {
    image: Group,
    type: 'group',
    description:
      'Rosewatter Chicagoland Counseling offers support groups to foster connection, build skills, and promote healing. Share your journey with others. Join our group sessions now.',
    title: 'Support Groups | Rosewatter Chicagoland Counseling',
    header: 'Support Groups',
    mainContent:
      'Support Groups are a powerful service where one or two therapists guide a small group of individuals through shared experiences and personal growth. At Rosewatter, support groups provides a supportive and confidential environment where participants can openly explore their feelings, share their stories, and learn from one another.',
    faqHeader: 'Support Groups offers many unique benefits:',
    subHeader: [
      {
        title: 'Support and Connection',
        content:
          'Participants find solace in knowing they’re part of a group facing similar challenges. This shared understanding can help build a sense of belonging and provide emotional support during difficult times.',
      },
      {
        title: 'Shared Experiences',
        content:
          'In support groups, members can share their own experiences. Hearing others’ stories helps participants feel understood and validated, reducing isolation and enhancing empathy within the group.',
      },
      {
        title: 'Skill Building',
        content:
          'Many groups focus on specific therapeutic goals, such as improving communication, learning coping strategies, and developing emotional regulation techniques. These practical skills can be used to manage stress, improve relationships, and promote mental well-being.',
      },
      {
        title: 'Feedback and Reflection',
        content:
          'Group members benefit from constructive feedback offered by both peers and therapists. This feedback provides new perspectives, encouraging participants to reflect on their own behaviors, thoughts, and feelings in a supportive setting.',
      },
      {
        title: 'Diverse Perspectives',
        content:
          'In a group setting, participants are exposed to a variety of viewpoints and experiences. This diversity enriches the therapeutic process, offering new ways of understanding and approaching personal challenges.',
      },
    ],
    endingContent:
      'Support Groups at Rosewatter can be an effective way to address a range of issues, including anxiety, depression, relationship problems, and trauma. It allows participants to gain insight from the collective wisdom of the group, while also contributing to the growth and healing of others. For many, this shared journey fosters deep emotional support and lasting change.',
  },
  {
    image: Workshop,
    type: 'workshop',
    description:
      'Rosewatter Chicagoland Counseling offers expert supervision for aspiring clinicians. Gain real-world experience and develop your therapeutic skills. Join our program now.',
    title: 'Mental Health Workshops | Rosewatter Chicagoland Counseling',
    header: 'Mental Health Workshops',
    noFaqContent: () => (
      <div style={{ marginTop: '40px' }}>
        <p>
          Our mental health workshops are interactive training sessions designed
          to equip both healthcare professionals and the general population with
          essential knowledge, skills, and tools to address and manage mental
          health needs. These workshops not only promote personal well-being but
          also enhance the ability to support others. We specialize in training
          on a range of topics, including social class awareness, emotion
          regulation skills, building healthy relationships, supervising
          psychologists-in-training, conflict resolution, and mindfulness
          practices. Each workshop is crafted to offer practical insights and
          techniques that can be applied in everyday life, whether in clinical
          settings or personal interactions.
        </p>
      </div>
    ),
  },
];

const Image = styled.img`
  max-width: 600px;
  height: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FaqList = styled.div`
  margin-top: 20px;
`;

const FaqItem = styled.div`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
`;

const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const QuestionText = styled.h3`
  margin: 0;
`;

const ToggleIcon = styled.span`
  font-size: 20px;
  font-weight: bold;
  transition: transform 0.3s;
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
`;

const FaqAnswer = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #555;
  padding-left: 20px;
`;

const MainContent = styled.div`
  margin: auto;
  width: 90%;
  padding-bottom: 200px;
`;

const FaqHeader = styled.h1`
  font-size: 2.5em;
  margin: 1em 0;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: linear-gradient(
    to right,
    ${colors.lightGreen},
    ${colors.green},
    ${colors.darkerGreen}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  padding: 30px 0;
`;

const ContentBlog = ({ type }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const content = CONTENT.find((c) => c.type === type);
  const {
    title,
    header,
    mainContent,
    noFaqContent,
    description,
    subHeader,
    faqHeader,
    endingContent,
  } = content;
  React.useEffect(() => {
    document.title = title;
    document.description = description;
  });

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <MainContent>
        <h1>{header}</h1>
        <p>{mainContent}</p>
        <ImageContainer>
          <Image src={content.image} alt={content.header} />
        </ImageContainer>
        {noFaqContent && noFaqContent()}

        {subHeader && (
          <FaqList>
            <FaqHeader>{faqHeader}</FaqHeader>
            {subHeader.map((item, index) => (
              <FaqItem key={index}>
                <FaqQuestion onClick={() => handleToggle(index)}>
                  <QuestionText>{item.title}</QuestionText>
                  <ToggleIcon>{activeIndex === index ? '-' : '+'}</ToggleIcon>
                </FaqQuestion>
                {activeIndex === index && <FaqAnswer>{item.content}</FaqAnswer>}
              </FaqItem>
            ))}
          </FaqList>
        )}
        {endingContent && <p>{endingContent}</p>}
      </MainContent>
    </>
  );
};

export default ContentBlog;
