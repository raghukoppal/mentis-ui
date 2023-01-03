import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { StepPages } from "./components/StepPages";
import { BreadCrumbs } from "./components/BreadCrumbs";
import { Header } from "./components/Header";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Box>
        <Container>
          <BreadCrumbs />
          <StepPages />
        </Container>
      </Box>
    </>
  );
}

export default App;
