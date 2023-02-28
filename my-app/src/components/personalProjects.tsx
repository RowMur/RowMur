import styled from "styled-components";
import { colors, widths } from "../globalStyles";

const Projects = () => {
  return (
    <StyledSection id="projects">
      <h1>Personal Projects</h1>
      <h2>{"Promise { <pending> }"}</h2>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 40px 80px;
  color: ${colors.white};

  @media screen and (max-width: ${widths.phone}) {
    padding: 40px 40px;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-size: 36px;
  }

  h2 {
    text-align: center;
  }
`;

export default Projects;
