import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import WorkExperience from "./pages/workExperience";
import Profile from "./pages/Profile";
import PersonalProjects from "./pages/personalProjects";
import EducationSkills from "./pages/educationSkills";
import AboutMe from "./pages/aboutMe";

function App() {
  const [page, setPage] = useState(<Profile />);

  const handleClick = (i: number) => {
    const pages = [
      <Profile />,
      <WorkExperience />,
      <PersonalProjects />,
      <EducationSkills />,
      <AboutMe />,
    ];
    setPage(pages[i]);
    return pages[i];
  };

  return (
    <StyledApp>
      <Header onClick={(i: number) => handleClick(i)} />
      <StyledContent>{page}</StyledContent>
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  color: #dfdce3;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  position: relative;
  // min-height: 100vh;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const StyledContent = styled.a`
  position: relative;
  min-height: 100vh;
  // padding-bottom: 8vh;
`;

export default App;
