import styled from "styled-components";

export const HeaderComponent = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`

export const NavList = styled.ul`
  display: flex;
  margin: 0 10px;
  list-style: none;
`

export const NavItem = styled.li`
  margin: 16px;
  padding: 10px;
  cursor: pointer;
`

export const NavDescription = styled.span`
  margin: 0 15px;
  font-size: 1.2rem;
  letter-spacing: 0.8px;
  font-weight: 600;
  color: #e4e4e7;
  transition: all 500ms;

  &:hover {
    color: #9333ea;
  }
`

export const TitleHeader = styled.h1`
  position: absolute;
  z-index: 10;
  bottom: 12%;
  left: 3%;
  letter-spacing: 5px;
  font-size: 3rem;
  color: #e4e4e7;
`

