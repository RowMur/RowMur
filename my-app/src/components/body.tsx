import react from "react";
import styled from "styled-components";

const MainBody = () => {
  return (
    <BodyContainer>
      <TopicContainer>
        <TopicTitle>
          <p>Work Experience</p>
        </TopicTitle>
        <TopicContent>
          <p>Junior Applications Engineer @ Altium</p>
        </TopicContent>
      </TopicContainer>
    </BodyContainer>
  );
};

const BodyContainer = styled.a`
  background-color: #7b7b7c;
  display: flex;
  flex-direction: column;
`;

const TopicContainer = styled.a`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const TopicTitle = styled.a`
  align-items: center;
  vertical-align: center;
`;

const TopicContent = styled.a`
  align-items: center;
`;

export default MainBody;
