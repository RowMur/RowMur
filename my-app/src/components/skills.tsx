import styled from "styled-components";
import { colors, widths } from "../globalStyles";

import Html from "../icons/Html";
import Css from "../icons/Css";
import Javascript from "../icons/Javascript";
import Typescript from "../icons/Typescript";
import React from "../icons/React";
import Python from "../icons/Python";
import Graphql from "../icons/Graphql";

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

  @media screen and (max-width: ${widths.phone}) {
    padding: 40px 20px;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-size: 36px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  align-items: center;

  svg {
    height: 48px;
    width: auto;
    padding: 10px;
  }
`;

export default Skills;
