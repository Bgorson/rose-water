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
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Rachel Nitzarim PhD Chicago Mental Health Therapy"
        />
        <meta property="og:site_name" content="Rosewatter Chicago Counseling" />
        <meta property="og:title" content="Rosewatter" />
        <meta
          property="og:url"
          content="http://www.rosewatterchicounseling.com"
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Rachel Nitzarim, mental health, therapy, rosewatter counseling, chicago, DBT-Linehan
  Board of Certification"
        />
        <meta itemprop="name" content="Rosewatter Chicago Counseling" />
        <meta itemprop="url" content="http://www.rosewatterchicounseling.com" />
        <meta
          name="google-site-verification"
          content="BPqPfpBjzyOdMBaCa9YnxrTeYgLgQBcOQkhX3Ccwq1U"
        />
        <title>Rosewatter Chicago Counseling</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17632796266"></script>
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
