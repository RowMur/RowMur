import styled from "styled-components";

const Content = () => {
  return (
    <StyledContent>
      <p>
        Last academic year I was at Durham University studying mathematics. I
        made the decision to leave the University after completing two terms
        having realised that the course wasn’t for me after all. However I
        thoroughly enjoyed the programming module.
        <br /> Since then, I have continued learning to code and program using
        online courses and resources, mainly Codecademy on which I’ve completed
        a python course and am working through the “Full-Stack Engineer” career
        path. I’ve been exposed to html, css, javascript and c also.
      </p>
      <StyledSection>
        <SectionHeader>Work Experience</SectionHeader>
        <SectionSubTitle>
          Junior Applications Engineer @ Altium, Cambridge <br />
          November 2022 - Present
        </SectionSubTitle>
        <SectionContent>
          Once I know more about my job role and responsibilities I will fill
          this space.
        </SectionContent>
        <SectionSubTitle>
          Summer Placement @ G's Fresh, Ramsey
          <br />
          June - August 2021
        </SectionSubTitle>
        <SectionContent>
          Working within the procurement department, I was involved in a project
          to automate the forecasting and procurement planning tools used. This
          was a previous manual task that I implemented using Excel, saving half
          a day each week.
        </SectionContent>
        <SectionSubTitle>
          Supermarket Assistant @ Waitrose & Partners, St Ives
          <br />
          November 2019 - October 2022
        </SectionSubTitle>
        <SectionContent>
          Working at Waitrose part-time I became a key team member, proficient
          in stock rotation, till work and customer service.
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
      </StyledSection>
      <StyledSection>
        <SectionHeader>Education</SectionHeader>
        <SectionSubTitle>
          Mathematics @ Durham University
          <br />
          2021 - 2022
        </SectionSubTitle>
        <SectionContent>
          Modules studied; Analysis, Calculus, Discrete Mathematics, Dynamics,
          Linear Algebra, Probability, Programming and Statistics.
          <br />I also qualified to represent the University Table Tennis team
        </SectionContent>
        <SectionSubTitle>
          A Levels @ St Ivo Academy, St Ives
          <br />
          2019 - 2021
        </SectionSubTitle>
        <SectionContent>
          A* Further Mathematics
          <br />
          A* Mathematics
          <br />A Physical Education
        </SectionContent>
        <SectionSubTitle>
          GCSEs @ Abbey College, Ramsey
          <br />
          2014 - 2019
        </SectionSubTitle>
        <SectionContent>
          11 grades 6-9; including a 9 in Mathematics, A in ICT and an A in
          Statistics.
        </SectionContent>
      </StyledSection>
      <StyledSection>
        <SectionHeader>Skills and Achievements</SectionHeader>
        <SectionContent>
          2021 Full UK Driving License
          <br />
          2020 Duke of Edinburgh - Silver Award
          <br />
          2019 Sports Leadership Qualification - Level 1
        </SectionContent>
      </StyledSection>
      <StyledSection>
        <SectionHeader>About Me</SectionHeader>
        <SectionContent>
          I enjoy playing chess, computer games and sports. I am a keen table
          tennis player which I play competitively.
        </SectionContent>
      </StyledSection>
    </StyledContent>
  );
};

const StyledContent = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 12px 20px;
  align-items: center;
`;

const StyledSection = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SectionHeader = styled.a`
  color: #5b8291;
`;

const SectionSubTitle = styled.a`
  color: #98dad9;
`;

const SectionContent = styled.a`
  color: #eaebed;
`;

export default Content;
