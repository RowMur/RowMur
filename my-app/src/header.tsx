import styled from "styled-components";

type headerType = {
  onClick: (i: number) => JSX.Element;
};

const Header = (props: headerType) => {
  return (
    <StyledHeader>
      <StyledTitle onClick={() => props.onClick(0)}>Rowan Murray</StyledTitle>
      <StyledNav>
        <StyledOptions onClick={() => props.onClick(1)}>
          Work Experience
        </StyledOptions>
        <StyledOptions onClick={() => props.onClick(2)}>
          Education
        </StyledOptions>
        <StyledOptions onClick={() => props.onClick(3)}>
          Skills and Achievements
        </StyledOptions>
        <StyledOptions onClick={() => props.onClick(4)}>About Me</StyledOptions>
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
  padding: 12px 0px;
  background-color: #202020;
  align-items: center;
`;

const StyledNav = styled.a`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: stretch;
  gap: 10px;
  margin: 0px 24px 0px 12px;
`;

const StyledOptions = styled.a`
  height: auto;
  width: auto;
  padding: 5px;
  margin: 5px;
  border: 2px;
  border-style: solid;
  border-color: #202020;
  &:hover {
    border-bottom-color: #5b8291;
    cursor: pointer;
  }
`;

const StyledTitle = styled.p`
  font-size: 24px;
  margin: 0px 24px;
  &:hover {
    cursor: pointer;
  }
`;

export default Header;
