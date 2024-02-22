import styled from "styled-components";

export const HeaderComponent = styled.header`
  position: relative;
  width: 100%;
  height: 58vh;
`

export const Mask = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #09090b;
  opacity: 0.7;
` 

export const Navbar = styled.nav`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100;
  padding: 10px;
`

export const NavList = styled.ul`
  display: flex;
  margin: 0 10px;
  list-style: none;
`

export const NavItem = styled.li`
  margin: 20px;
`

export const NavDescription = styled.span`
  margin: 0 10px;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #e4e4e7;
`

