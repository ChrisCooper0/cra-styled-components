import styled from "styled-components";
import { Container } from "../../globalStyles";
import { FaRegSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #2a2a36;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaRegSquare)`
  margin-right: 1.5rem;
  font-size: 2rem;
  transform: rotate(45deg);
  fill: #0dcaf0;
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")}};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #2a2a36;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #0dcaf0;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      transition: all 0.3s ease;
    }
  }
`;
