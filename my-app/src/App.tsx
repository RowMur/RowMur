import React from "react";
import styled from "styled-components";
import MyHeader from "./components/header";
import MyFooter from "./components/footer";
import MainBody from "./components/body";

function App() {
  return (
    <StyledSite>
      <MyHeader />
      <MainBody />
      <MyFooter />
    </StyledSite>
  );
}

const StyledSite = styled.a`
  font-family: "Courier";
  display: inline-block;
`;

export default App;
