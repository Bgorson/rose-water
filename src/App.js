import React from "react";
import NavbarComponent from "./components/Navbar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Career from "./components/Career";
import GroupFlyer from "./components/GroupFlyer";
import Locations from "./components/Locations";
import Admin from "./components/Admin";

import { Container } from "@mui/material";
import Home from "./components/Home";
const Main = styled.div`
  // background-color: #fbede6;
`;

function App() {
  return (
    <div>
      <NavbarComponent className={"navbar"} />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
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
                <Career />
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
          <Route
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
          />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
