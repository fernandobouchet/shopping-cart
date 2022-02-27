import { FooterContainer } from "./FooterStyle";

function Footer() {
  return (
    <FooterContainer id="footer">
      Copyright {new Date().getFullYear()} - Fernando Bouchet
    </FooterContainer>
  );
}

export default Footer;
