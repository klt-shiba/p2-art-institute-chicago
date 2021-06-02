import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components'
import { Container } from 'reactstrap';

const Nav = styled.nav`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 4px solid black;
  box-sizing: border-box;
  display:flex;
`;

const NavRight = styled.div`
    text-align: left;
    justify-content: flex-start;
`;

const NavLeft = styled.div`
    text-align: right;
    width: 100%;
    justify-content: flex-end;

    & > & {
        margin-left:2.4rem;
    }
`;

const activeClassName = 'active'

const StyledNavLinks = styled(NavLink).attrs({ activeClassName })`
    color: black;
    text-decoration: none;
    font-weight:800;
    letter-spacing:0px;
    margin: 0 0.4rem;

    
    &.${activeClassName} {
    color: white;
    background-color:black
    }

    &:hover{
    text-decoration: underline;
    }

`;

const NavBar = () => {
    return (
    <Container fluid="xl">
        <Nav>
            <NavRight>
                <StyledNavLinks to={"/"}>Home</StyledNavLinks>
            </NavRight>
            <NavLeft>
                <StyledNavLinks to={"/movies"}>Movies</StyledNavLinks>
                <StyledNavLinks to={"/directors"}>Directors</StyledNavLinks>
                <StyledNavLinks to={"/actors"}>Actors</StyledNavLinks>
            </NavLeft>
        </Nav>
    </Container>
    )
}

export default NavBar;