import styled from "styled-components";
import { colors } from "../globalStyles";
import { Icon } from "../app";

import LinkedIn from "../icons/LinkedIn";
import GitHub from "../icons/GitHub";
import Arrow from "../icons/Arrow";

const Footer = () => {
  return (
    <div style={{ padding: "20px 0", alignSelf: "center" }}>
      <FooterContainer>
        <Icon
          href="https://www.linkedin.com/in/rowan-murray-303242246/"
          target="_blank"
        >
          <LinkedIn />
        </Icon>
        <Icon href="https://github.com/RowMur" target="_blank">
          <GitHub />
        </Icon>
        <Icon href="#main" style={{ rotate: "180deg" }}>
          <Arrow />
        </Icon>
      </FooterContainer>
    </div>
  );
};

const FooterContainer = styled.div`
  background-color: ${colors.dark};
  border-radius: 40px;
  height: 80px;
  width: min-content;
  box-shadow: 1px 1px black;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export default Footer;
