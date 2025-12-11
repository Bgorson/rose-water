import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';
import { colors } from '../utils/colors';
import Logo from '../../src/simple_logo.png';
import InstagramLink from './Instagram';

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

const FooterSection = styled.footer`
  background: linear-gradient(
    180deg,
    ${colors.cream} 0%,
    ${colors.roseLight} 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${colors.sage} 50%,
      transparent 100%
    );
  }
`;

const ContactSection = styled.section`
  padding: 5rem 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? '0' : '30px')});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${colors.sage};
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 500;
  color: ${colors.charcoal};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  color: ${colors.slate};
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background: ${colors.warmWhite};
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 40px rgba(61, 61, 61, 0.08);
  margin-bottom: 4rem;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? '0' : '30px')});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.charcoal};
`;

const Input = styled.input`
  padding: 1rem 1.25rem;
  border: 2px solid ${colors.sand};
  border-radius: 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  background: ${colors.warmWhite};
  color: ${colors.charcoal};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.sage};
    box-shadow: 0 0 0 4px rgba(168, 181, 160, 0.15);
  }

  &::placeholder {
    color: ${colors.muted};
  }
`;

const Textarea = styled.textarea`
  padding: 1rem 1.25rem;
  border: 2px solid ${colors.sand};
  border-radius: 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  background: ${colors.warmWhite};
  color: ${colors.charcoal};
  min-height: 160px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.sage};
    box-shadow: 0 0 0 4px rgba(168, 181, 160, 0.15);
  }

  &::placeholder {
    color: ${colors.muted};
  }
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  padding: 1rem 2.5rem;
  background: linear-gradient(
    135deg,
    ${colors.sage} 0%,
    ${colors.sageDark} 100%
  );
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(122, 139, 114, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(122, 139, 114, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${colors.sand};
`;

const ContactCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-4px);
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background: linear-gradient(
    135deg,
    ${colors.roseLight} 0%,
    ${colors.rose} 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 28px;
    height: 28px;
    color: ${colors.charcoal};
  }
`;

const ContactLabel = styled.h4`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.charcoal};
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: ${colors.sageDark};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.sage};
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    color: ${colors.slate};
  }
`;

const BottomBar = styled.div`
  padding: 2rem;
  background: rgba(61, 61, 61, 0.03);
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LogoImage = styled.img`
  height: 80px;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: ${colors.muted};
  margin: 0;
`;

const ImageCredit = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: ${colors.muted};
  margin: 0;

  a {
    color: ${colors.sage};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem 1.5rem;
  background: rgba(168, 181, 160, 0.15);
  border: 1px solid ${colors.sage};
  border-radius: 12px;
  color: ${colors.sageDark};
  font-family: 'DM Sans', sans-serif;
  text-align: center;
`;

export default function Footer() {
  const service = process.env.REACT_APP_SERVICE_EMAIL;
  const template = process.env.REACT_APP_TEMPLATE_EMAIL;
  const publicKey = process.env.REACT_APP_PUBLIC_EMAIL;

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef(null);

  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(service, template, toSend, { publicKey });
      setToSend({ from_name: '', from_email: '', message: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      alert('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <FooterSection ref={sectionRef} id="contact">
      <ContactSection>
        <SectionHeader $isVisible={isVisible}>
          <Eyebrow>Get in Touch</Eyebrow>
          <Title>Ready to Begin Your Journey?</Title>
          <Subtitle>
            We'd love to hear from you. Fill out the form below or reach out
            directly.
          </Subtitle>
        </SectionHeader>

        <FormContainer $isVisible={isVisible}>
          {showSuccess ? (
            <SuccessMessage>
              ✓ Thank you for reaching out! We'll be in touch soon.
            </SuccessMessage>
          ) : (
            <Form onSubmit={onSubmit}>
              <InputRow>
                <InputGroup>
                  <Label htmlFor="from_name">Your Name</Label>
                  <Input
                    id="from_name"
                    type="text"
                    name="from_name"
                    placeholder="Jane Smith"
                    value={toSend.from_name}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <Label htmlFor="from_email">Email Address</Label>
                  <Input
                    id="from_email"
                    type="email"
                    name="from_email"
                    placeholder="jane@example.com"
                    value={toSend.from_email}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </InputRow>
              <InputGroup>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a bit about what you're looking for..."
                  value={toSend.message}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </Form>
          )}
        </FormContainer>

        <ContactInfo>
          <ContactCard>
            <ContactIcon>
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
            </ContactIcon>
            <ContactLabel>Email Us</ContactLabel>
            <ContactValue href="mailto:inquiry@rosewatterchicounseling.com">
              inquiry@rosewatterchicounseling.com
            </ContactValue>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </ContactIcon>
            <ContactLabel>Our Locations</ContactLabel>
            <ContactValue href="/locations">Chicago & Skokie</ContactValue>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
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
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
            </ContactIcon>
            <ContactLabel>Follow Us</ContactLabel>
            <SocialWrapper>
              <InstagramLink />
              <span>@rosewatterchicounseling</span>
            </SocialWrapper>
          </ContactCard>
        </ContactInfo>
      </ContactSection>

      <BottomBar>
        <LogoImage src={Logo} alt="Rosewatter Logo" />
        <Copyright>
          © {new Date().getFullYear()} Rosewatter Chicagoland Counseling PLLC.
          All rights reserved.
        </Copyright>
        <ImageCredit>
          Chicago Skyline Image by{' '}
          <a
            href="https://www.freepik.com/free-photo/chicago-skyline-lake-michigan_26743083.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            TravelScape on Freepik
          </a>
        </ImageCredit>
      </BottomBar>
    </FooterSection>
  );
}
