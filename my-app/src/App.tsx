import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import WorkExperience from "./pages/workExperience";
import Profile from "./pages/Profile";
import Education from "./pages/education";
import SkillsAchievements from "./pages/skillsAchievements";
import AboutMe from "./pages/aboutMe";

function App() {
  const [page, setPage] = useState(<Profile />);

  const handleClick = (i: number) => {
    const pages = [
      <Profile />,
      <WorkExperience />,
      <Education />,
      <SkillsAchievements />,
      <AboutMe />,
    ];
    setPage((page) => pages[i]);
    return pages[i];
  };

  return (
    <StyledApp>
      <Header onClick={(i: number) => handleClick(i)} />
      {page}
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  color: #cfd2d8;
  background-color: #303030;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export default App;
