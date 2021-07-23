import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegSquare } from "react-icons/fa";

export const FooterContainer = styled.div`
  background-color: #2a2a36;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 250px;
  box-sizing: border-box;
  color: #0e1111;
  @media screen and (max-width: 820px) {
    width: 160px;
  }
`;

export const FooterLinkTitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  color: #fff;
  @media screen and (max-width: 820px) {
    margin-top: 2rem;
  }
`;

export const FooterLink = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #0dcaf0;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaRegSquare)`
  margin-right: 1.5rem;
  font-size: 2rem;
  transform: rotate(45deg);
  fill: #0dcaf0;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-top: 2rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 820px) {
    margin: 1.5rem;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: #0dcaf0;
  }
`;
