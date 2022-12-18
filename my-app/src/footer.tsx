import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>rowanomurray@gmail.com</FooterContent>
      <FooterContent>
        <a
          href="https://www.linkedin.com/in/rowan-murray-303242246/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterImg
            src={
              "https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
            }
            alt="LinkedIn"
            width={50}
            height={50}
          />
        </a>
      </FooterContent>
      <FooterContent>
        <a
          href="https://github.com/RowMur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterImg
            src={
              "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            }
            alt="Github"
            width={50}
            height={50}
          />
        </a>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-height: 0px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #202020;
  height: 8vh;
`;

const FooterContent = styled.a`
  padding: 12px;
`;

const FooterImg = styled.img`
  height: 40px;
  width: auto;
`;

export default Footer;
