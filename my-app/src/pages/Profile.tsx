import React from "react";
import { StyledProfile, StyledContent } from "./pageStyles";

const Profile = () => {
  return (
    <StyledContent>
      <StyledProfile>
        Last academic year I was at Durham University studying mathematics. I
        made the decision to leave the University after completing two terms
        having realised that the course wasn’t for me after all. However I
        thoroughly enjoyed the programming module.
        <br /> Since then, I have continued learning to code and program using
        online courses and resources, mainly Codecademy on which I’ve completed
        a python course and am working through the “Full-Stack Engineer” career
        path. I’ve been exposed to html, css, javascript and c also.
      </StyledProfile>
    </StyledContent>
  );
};

export default Profile;
