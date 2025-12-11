import React, { useEffect, useState } from 'react';
import NavbarComponent from './components/Navbar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Career from './components/Career';
import GroupFlyer from './components/GroupFlyer';
import Locations from './components/Locations';
import StaffPage from './components/StaffPage';
import Admin from './components/Admin';
import { Container } from '@mui/material';
import Home from './components/Home';
import AdultDbt from './components/AdultDbt';
import Popup from './components/Popup'; // Import the Popup component
import ContentBlog from './components/ContentBlog';
import { Helmet } from 'react-helmet';

const Main = styled.div`
  // background-color: #fbede6;
`;

function App() {
  console.log(`
▗▄▄▖  ▗▄▖  ▗▄▄▖▗▄▄▄▖▗▖ ▗▖ ▗▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▖ 
▐▌ ▐▌▐▌ ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌ █    █  ▐▌   ▐▌ ▐▌
▐▛▀▚▖▐▌ ▐▌ ▝▀▚▖▐▛▀▀▘▐▌ ▐▌▐▛▀▜▌ █    █  ▐▛▀▀▘▐▛▀▚▖
▐▌ ▐▌▝▚▄▞▘▗▄▄▞▘▐▙▄▄▖▐▙█▟▌▐▌ ▐▌ █    █  ▐▙▄▄▖▐▌ ▐▌
                                                 
                                                 
                                      
    Email: brandon@rosewatterchicounseling.com with any issues.`);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit');
    if (!isFirstVisit && location.pathname === '/') {
      setShowPopup(true);
      localStorage.setItem('isFirstVisit', 'true');
    }
  }, [location.pathname]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Helmet>
        <meta
          name="google-site-verification"
          content="BPqPfpBjzyOdMBaCa9YnxrTeYgLgQBcOQkhX3Ccwq1U"
        />
        <html lang="en" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.rosewatterchicounseling.com" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#A8B5A0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rosewatter Chicagoland Counseling offers individual therapy, couples therapy, DBT, and mental health workshops in Chicago. Our experienced team of psychologists and therapists provide compassionate, evidence-based care."
        />
        <meta
          name="keywords"
          content="Chicago therapist, Chicago psychologist, DBT therapy Chicago, couples therapy Chicago, individual therapy, mental health counseling, anxiety therapy, depression treatment, trauma therapy, Rosewatter Counseling, Rachel Nitzarim, DBT-Linehan Board Certified, Illinois therapy, Glenview therapist, Bucktown therapist"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Rosewatter Chicagoland Counseling"
        />
        <meta
          property="og:title"
          content="Rosewatter Chicagoland Counseling | Therapy & Mental Health Services in Chicago"
        />
        <meta
          property="og:description"
          content="Compassionate, evidence-based therapy for individuals and couples in Chicago. Specializing in DBT, anxiety, depression, trauma, and relationship issues."
        />
        <meta
          property="og:url"
          content="https://www.rosewatterchicounseling.com"
        />
        <meta
          property="og:image"
          content="https://www.rosewatterchicounseling.com/og-image.jpg"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rosewatter Chicagoland Counseling | Chicago Therapy Services"
        />
        <meta
          name="twitter:description"
          content="Compassionate, evidence-based therapy for individuals and couples in Chicago. Specializing in DBT, anxiety, depression, and trauma."
        />
        <meta
          name="twitter:image"
          content="https://www.rosewatterchicounseling.com/og-image.jpg"
        />

        {/* Schema.org structured data */}
        <meta itemprop="name" content="Rosewatter Chicagoland Counseling" />
        <meta
          itemprop="description"
          content="Mental health therapy and counseling services in Chicago"
        />
        <meta
          itemprop="url"
          content="https://www.rosewatterchicounseling.com"
        />

        <title>
          Rosewatter Chicagoland Counseling | Therapy & Mental Health Services
          in Chicago
        </title>

        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Rosewatter Chicagoland Counseling",
              "description": "Mental health therapy and counseling services specializing in individual therapy, couples therapy, DBT, and mental health workshops.",
              "url": "https://www.rosewatterchicounseling.com",
              "telephone": "",
              "email": "inquiry@rosewatterchicounseling.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Chicago",
                  "addressRegion": "IL",
                  "addressCountry": "US"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.8781",
                "longitude": "-87.6298"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "medicalSpecialty": [
                "Psychiatry",
                "Psychology"
              ],
              "availableService": [
                "Individual Therapy",
                "Couples Therapy",
                "DBT",
                "Mental Health Workshops",
                "Clinical Supervision"
              ],
              "sameAs": [
                "https://www.instagram.com/rosewatterchicounseling"
              ]
            }
          `}
        </script>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17632796266"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17632796266');
          `}
        </script>
      </Helmet>
      <NavbarComponent className={'navbar'} />
      <Main>
        {/* {showPopup && <Popup onClose={handleClosePopup} />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:name" element={<StaffPage />} />
          <Route
            path="about"
            element={
              <Container className={'container'} maxWidth="lg">
                <About />
              </Container>
            }
          />
          <Route path="appointment" element={<Footer />} />
          <Route
            path="career"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <Career />
              </Container>
            }
          />
          <Route
            path="locations"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <Locations />
              </Container>
            }
          />
          <Route
            path="groupDBT"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <GroupFlyer />
              </Container>
            }
          />
          <Route
            path="adult-dbt"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <AdultDbt />
              </Container>
            }
          />
          <Route
            path="individual-therapy"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <ContentBlog type="individual" />
              </Container>
            }
          />
          <Route
            path="couples-therapy"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <ContentBlog type="couples" />
              </Container>
            }
          />
          <Route
            path="consultation-supervision"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <ContentBlog type="consultation" />
              </Container>
            }
          />
          <Route
            path="support-group"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <ContentBlog type="group" />
              </Container>
            }
          />
          <Route
            path="mental-health-workshops"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <ContentBlog type="workshop" />
              </Container>
            }
          />
          {/* <Route
            path="admin"
            element={
              <Container
                className={"container"}
                maxWidth="lg"
                style={{ height: "100vh" }}
              >
                <Admin />
              </Container>
            }
          /> */}
        </Routes>
      </Main>
    </div>
  );
}

export default App;
