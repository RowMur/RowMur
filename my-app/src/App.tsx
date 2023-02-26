import { colors } from "./globalStyles";
import styled from "styled-components";
import LinkedIn from "./icons/linkedIn";
import GitHub from "./icons/gitHub";
import DownArrow from "./icons/downArrow";

import Projects from "./components/personalProjects";
import Footer from "./components/footer";
import Skills from "./components/skills";

export const App = () => {
  return (
    <div
      style={{
        background: `linear-gradient(30deg, ${colors.dark}, ${colors.blue})`,
      }}
    >
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
          <DownArrow />
        </Icon>
      </Main>
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

const Main = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
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

    :hover {
      height: 40px;
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
    }
  }
`;
