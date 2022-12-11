import React from "react";
import styled from "styled-components";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

function App() {
  return (
    <StyledApp>
      <Header />
      <Content />
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  color: #eaebed;
  background-color: #2e424d;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default App;
