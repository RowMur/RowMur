import styled from "styled-components";
import { colors } from "../globalStyles";

import Html from "../icons/html";
import Css from "../icons/css";
import Javascript from "../icons/javascript";
import Typescript from "../icons/typescript";
import React from "../icons/react";
import Python from "../icons/python";
import Graphql from "../icons/graphql";

const Skills = () => {
  return (
    <StyledSection>
      <h1>Skills</h1>
      <IconsContainer>
        <Html />
        <Css />
        <Javascript />
        <Typescript />
        <React />
        <Python />
        <Graphql />
      </IconsContainer>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 40px 80px;
  color: ${colors.white};

  h1 {
    margin: 0;
    text-align: center;
    font-size: 36px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;

  svg {
    height: 48px;
    width: auto;
    padding: 0 10px;
  }
`;

export default Skills;
