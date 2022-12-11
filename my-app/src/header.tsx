import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>Rowan Murray</StyledTitle>
      <StyledNav>
        <StyledOptions>Work Experience</StyledOptions>
        <StyledOptions>Education</StyledOptions>
        <StyledOptions>Skills and Achievements</StyledOptions>
        <StyledOptions>About Me</StyledOptions>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
`;

const StyledNav = styled.a`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: stretch;
  gap: 10px;
  margin: 0px 12px 0px 12px;
`;

const StyledOptions = styled.a`
  height: auto;
  width: auto;
  padding: 5px;
  border: 2px;
  border-style: solid;
  margin: 5px;
  border-color: #2e424d;
  &:hover {
    border-bottom-color: #5b8291;
    cursor: pointer;
  }
`;

const StyledTitle = styled.p`
  font-size: 24px;
  margin: 0px;
`;

export default Header;
