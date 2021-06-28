import React from "react";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>CONTACT US</FooterLinkTitle>
              <FooterLink to="/email">EMAIL</FooterLink>
              <FooterLink to="/phone">PHONE</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>SITEMAP</FooterLinkTitle>
              <FooterLink to="/home">HOME</FooterLink>
              <FooterLink to="/about">ABOUT</FooterLink>
              <FooterLink to="/portfolio">PORTFOLIO</FooterLink>
              <FooterLink to="/contact">CONTACT</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterContainer>
    </div>
  );
};

export default Footer;
