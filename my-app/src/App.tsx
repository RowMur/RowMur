import { colors, widths } from "./globalStyles";
import styled from "styled-components";
import LinkedIn from "./icons/LinkedIn";
import GitHub from "./icons/GitHub";
import Arrow from "./icons/Arrow";

import Projects from "./components/PersonalProjects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Cube from "./components/Cube";

export const App = () => {
  return (
    <StyledApp>
      <Main id="main">
        <Nav>
          <Icon
            href="https://www.linkedin.com/in/rowan-murray-303242246/"
            target="_blank"
          >
            <LinkedIn />
          </Icon>
          <Icon href="https://github.com/RowMur" target="_blank">
            <GitHub />
          </Icon>
        </Nav>
        <TitleContainer>
          <h1>
            Hi, I'm <span>Rowan.</span>
            <br />
            I'm an applications engineer.
          </h1>
        </TitleContainer>
        <Icon
          href="#projects"
          style={{ marginTop: "auto", paddingBottom: "20px" }}
        >
          <Arrow />
        </Icon>
      </Main>
      <Projects />
      <Skills />
      <Footer />
      <Cube />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background: linear-gradient(30deg, ${colors.dark}, ${colors.blue});
`;

const Main = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  overflow: hidden;

  @media screen and (max-width: ${widths.phone}) {
    padding: 0 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  justify-content: flex-end;
`;

export const Icon = styled.a`
  display: flex;
  flex-direction: column;
  color: ${colors.light};
  margin: 16px;
  height: 50px;
  width: 50px;
  justify-content: center;

  svg {
    height: 36px;
    width: auto;
    align-self: center;
    transition: 0.3s ease-in-out;
    transition-delay: 0.3s;

    :hover {
      scale: 1.2;
    }
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  color: ${colors.white};
  margin-top: auto;

  h1 {
    text-align: left;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.5;
    margin: 0;

    span {
      color: ${colors.light};
      align-self: center;
    }
  }
`;
