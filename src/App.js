import React, { useEffect, useState } from "react";
import NavbarComponent from "./components/Navbar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Career from "./components/Career";
import GroupFlyer from "./components/GroupFlyer";
import Locations from "./components/Locations";
import StaffPage from "./components/StaffPage";
import Admin from "./components/Admin";
import { Container } from "@mui/material";
import Home from "./components/Home";
import Popup from "./components/Popup"; // Import the Popup component

const Main = styled.div`
  // background-color: #fbede6;
`;

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit");
    if (!isFirstVisit && location.pathname === "/") {
      setShowPopup(true);
      localStorage.setItem("isFirstVisit", "true");
    }
  }, [location.pathname]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <NavbarComponent className={"navbar"} />
      <Main>
        {showPopup && <Popup onClose={handleClosePopup} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:name" element={<StaffPage />} />
          <Route
            path="about"
            element={
              <Container className={"container"} maxWidth="lg">
                <About />
              </Container>
            }
          />
          <Route path="appointment" element={<Footer />} />
          <Route
            path="career"
            element={
              <Container
                className={"container"}
                maxWidth="lg"
                style={{ height: "100vh" }}
              >
                {/* <Career /> */}
              </Container>
            }
          />
          <Route
            path="locations"
            element={
              <Container
                className={"container"}
                maxWidth="lg"
                style={{ height: "100vh" }}
              >
                <Locations />
              </Container>
            }
          />
          <Route
            path="group"
            element={
              <Container
                className={"container"}
                maxWidth="lg"
                style={{ height: "100vh" }}
              >
                <GroupFlyer />
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
