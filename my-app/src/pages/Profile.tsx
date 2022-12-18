import React from "react";
import styled from "styled-components";
import { StyledContent } from "./pageStyles";

const Profile = () => {
  return (
    <StyledContent>
      <LandingPage>
        <StyledTitle>Hi, I'm Rowan.</StyledTitle>
        <StyledComment>Junior Applications Engineer</StyledComment>
      </LandingPage>
      <TechBar>
        <TechImg src="https://img.icons8.com/color/2x/html-5.png" alt="HTML" />
        <TechImg src="https://img.icons8.com/color/2x/css3.png" alt="CSS" />
        <TechImg
          src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
          alt="JavaScript"
        />
        <TechImg
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
          alt="Typescript"
        />
        <TechImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
          alt="React"
        />
        <TechImg
          src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
          alt="Python"
        />
        <TechImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png?20161105194737"
          alt="GraphQL"
        />
      </TechBar>
      <StyledProfile>
        I am currently working as a Junior Applications Engineer in the
        Cambridge area. Having started learning to code at University, I made
        the decision to leave my mathematics degree. Building upon the Python I
        had learnt there, I dipped into frontend development by learning HTML,
        CSS and JavaScript. Most recently I've been learning TypeScript and
        React which I have used to make this website.
        <br />
        <br />
        I've got A Level grades of A* Mathematics, A* Further Mathematics and A
        Physical Education.
      </StyledProfile>
    </StyledContent>
  );
};

const LandingPage = styled.a`
  height: 40vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 40px;
  border: 5px;
  border-style: double;
  border-color: #5b8291;
`;

const StyledTitle = styled.p`
  font-size: 40px;
  margin: 12px;
  font-weight: bold;
`;

const StyledComment = styled.p`
  margin: 0px;
  color: #5b8291;
`;

const TechBar = styled.a`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1vh 0vh;
`;

const TechImg = styled.img`
  height: 64px;
  width: auto;
  margin: 1vh;
`;

const StyledProfile = styled.p`
  width: auto;
  margin: 0px 0px 20px 0px;
`;

export default Profile;
