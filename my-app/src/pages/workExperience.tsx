import React from "react";
import styled from "styled-components";
import { SectionContent } from "./pageStyles";

const WorkExperience = () => {
  return (
    <SectionContent>
      <ExperienceContainer>
        <ShortDesc>
          <StyledImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Altium_Logo.svg/664px-Altium_Logo.svg.png?20110520195717"
            alt="Altium"
          />
          <Timeline>November 2022 - Present</Timeline>
        </ShortDesc>
        <Desc>
          <JobTitle>Junior Applications Engineer</JobTitle>
          Working on Nexar (www.nexar.com) - a GraphQL based API bringing
          together the supply, design and manufacturing processes of the
          electronics industry.
          <Skills>
            <SkillsImg
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png"
              alt="TypeScript"
            />
            <SkillsImg
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
              alt="React"
            />
            <SkillsImg
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png?20161105194737"
              alt="GraphQl"
            />
          </Skills>
        </Desc>
      </ExperienceContainer>
      <ExperienceContainer>
        <ShortDesc>
          <StyledImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Waitrose_Logo.svg/540px-Waitrose_Logo.svg.png?20220920033336"
            alt="Waitrose"
          />
          <Timeline>November 2019 - October 2022</Timeline>
        </ShortDesc>
        <Desc>
          <JobTitle>Supermarket Assistant</JobTitle>
          Working at Waitrose part-time I became a key team member, proficient
          in stock rotation, till work and customer service.
        </Desc>
      </ExperienceContainer>
      <ExperienceContainer>
        <ShortDesc>
          <StyledImg
            src="https://www.gs-fresh.com/content/themes/fcs_theme/public/images/logo.png"
            alt="G's Fresh"
          />
          <Timeline>June - August 2021</Timeline>
        </ShortDesc>
        <Desc>
          <JobTitle>Administrative Assistant - Summer Placement</JobTitle>
          Working within the procurement department, I was involved in a project
          to automate the forecasting and procurement planning tools used. This
          was a previous manual task that I implemented using Excel, saving half
          a day each week.
          <Skills>
            <SkillsImg
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png?20190925171014"
              alt="Excel"
            />
          </Skills>
        </Desc>
      </ExperienceContainer>
    </SectionContent>
  );
};

const ExperienceContainer = styled.a`
  width: 90vw;
  height: auto;
  border: 3px;
  border-style: solid;
  border-radius: 5px;
  border-color: #5b8291;
  align-self: center;
  margin: 20px 20px;
  display: flex;
  flex-direction: row;
`;

const ShortDesc = styled.a`
  width: 30%;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #5b8291;
  justify-content: center;
`;

const Desc = styled.a`
  width: 70%;
  height: auto;
  background-color: #121212;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImg = styled.img`
  padding: 10px;
  width: 50%;
  height: auto;
`;

const Timeline = styled.p`
  padding: 5px;
  margin: 0px;
  overflow: hidden;
`;

const JobTitle = styled.p`
  color: #5b8291;
  margin: 0px 0px 5px 0px;
`;

const Skills = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SkillsImg = styled.img`
  height: 32px;
  width: auto;
  margin: 1vh 1vh 0vh 1vh;
`;

export default WorkExperience;
