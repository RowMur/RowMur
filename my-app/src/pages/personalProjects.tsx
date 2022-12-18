import React from "react";
import styled from "styled-components";

const PersonalProjects = () => {
  return (
    <CardsContainer>
      <Card>
        <StyledImg
          src="https://www.udrop.com/file/7F26/pageScreenshot.png"
          alt="Webpage Screenshot"
        />
        <ProjectTitle>Personal Website</ProjectTitle>
        <ProjectDesc>
          Built using React, written in TypeScript and deployed using Github
          Pages.
          <br />
          Can be found at{" "}
          <WebLink href="https://rowmur.com/" color="#5b8291">
            www.rowmur.com
          </WebLink>
        </ProjectDesc>
      </Card>
    </CardsContainer>
  );
};

const CardsContainer = styled.a`
  margin: 20px 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  width: auto;
`;

const Card = styled.a`
  background-color: #202020;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: calc(30vh + 10px);
  align-items: center;
  border-radius: 8px;
`;

const StyledImg = styled.img`
  width: 30vh;
  height: auto;
  border-radius: 4px;
`;

const ProjectTitle = styled.a`
  color: #5b8291;
  margin: 10px 5px 5px 5px;
  align-self: flex-start;
`;

const ProjectDesc = styled.a`
  margin: 0px 5px 10px 5px;
`;

const WebLink = styled.a`
  color: #5b8291;
`;

export default PersonalProjects;
