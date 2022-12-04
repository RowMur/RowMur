import react from "react";
import styled from "styled-components";

const MyHeader = () => {
  return (
    <HeaderContainer>
      <HeaderOption>
        <p>Rowan Murray</p>
      </HeaderOption>
      <HeaderOption>
        <p>Work Experience</p>
      </HeaderOption>
      <HeaderOption>
        <p>Personal Projects</p>
      </HeaderOption>
      <HeaderOption>
        <p>Education</p>
      </HeaderOption>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.a`
  flex-direction: row;
  display: flex;
  //background-color: #545454;
  height: 10%;
  width: 100%;
  position: fixed;
  justify-content: space-evenly;
`;

const HeaderOption = styled.a`
  color: whitesmoke;
  height: stretch;
  width: 15%;
  padding: fill;
  text-align: center;
  &:hover {
    background-color: #7b7b7c;
    cursor: pointer;
  }
`;

export default MyHeader;
