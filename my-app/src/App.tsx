import { colors } from "./globalStyles";
import styled from "styled-components";
import LinkedIn from "./icons/linkedIn";
import GitHub from "./icons/gitHub";

export const App = () => {
  return (
    <>
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
      </Main>
    </>
  );
};

const Main = styled.section`
  background-color: ${colors.dark};
  height: 100vh;
  display: flex;
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

const Icon = styled.a`
  display: flex;
  flex-direction: column;
  color: ${colors.light};
  margin: 16px;
  height: 50px;
  width: 50px;
  justify-content: center;

  svg {
    @keyframes float {
      from {
        transform: translatey(0px);
      }
      to {
        transform: translatey(-4px);
      }
    }

    height: 36px;
    width: auto;

    :hover {
      animation: float 0.1s ease-in forwards;
    }
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  color: ${colors.white};

  h1 {
    text-align: left;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.5;

    span {
      color: ${colors.light};
    }
  }
`;
