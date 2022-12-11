import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>Mobile: 07751 291091</FooterContent>
      <FooterContent>Email: rowanomurray@gmail.com</FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
`;

const FooterContent = styled.a`
  padding: 12px;
`;

export default Footer;
