import React from "react";
import {
  SectionHeader,
  SectionSubTitle,
  SectionContent,
  StyledContent,
} from "./pageStyles";

const WorkExperience = () => {
  return (
    <StyledContent>
      <SectionHeader>Work Experience</SectionHeader>
      <SectionSubTitle>
        Junior Applications Engineer @ Altium, Cambridge <br />
        November 2022 - Present
      </SectionSubTitle>
      <SectionContent>
        Once I know more about my job role and responsibilities I will fill this
        space.
      </SectionContent>
      <SectionSubTitle>
        Summer Placement @ G's Fresh, Ramsey
        <br />
        June - August 2021
      </SectionSubTitle>
      <SectionContent>
        Working within the procurement department, I was involved in a project
        to automate the forecasting and procurement planning tools used. This
        was a previous manual task that I implemented using Excel, saving half a
        day each week.
      </SectionContent>
      <SectionSubTitle>
        Supermarket Assistant @ Waitrose & Partners, St Ives
        <br />
        November 2019 - October 2022
      </SectionSubTitle>
      <SectionContent>
        Working at Waitrose part-time I became a key team member, proficient in
        stock rotation, till work and customer service.
      </SectionContent>
      <SectionSubTitle>
        Shop Assistant @ S Davies Newsagents, Warboys
        <br />
        May - August 2019
      </SectionSubTitle>
      <SectionSubTitle>
        Work Experience @ One Leisure, St Ives
        <br />
        March 2018
      </SectionSubTitle>
    </StyledContent>
  );
};

export default WorkExperience;
