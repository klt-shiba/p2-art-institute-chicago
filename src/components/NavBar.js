import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components'
import { Container } from 'reactstrap'
import { Box } from '@material-ui/core'

const Nav = styled.nav`
  width: 100%;
  padding: 1rem 0;
  background-color: white;
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
    padding: 12px 16px;
    border-radius: 4px;

    &.${activeClassName} {
        font-weight: 600;
        background-color: #dfe4ff;
        text-decoration: underline;
    }

    &:hover{
        text-decoration: underline;
    }

`;

const NavBar = () => {
    return (
    <Container fluid="xl">
        <Box pt={4}>
            <Nav>
                <NavRight>
                    <StyledNavLinks exact to={"/"}>Home</StyledNavLinks>
                </NavRight>
                <NavLeft>
                    <StyledNavLinks exact to={"/artworks"}>Artwork</StyledNavLinks>
                    <StyledNavLinks exact to={"/exhibitions"}>Exhibitions</StyledNavLinks>
                    <StyledNavLinks exact to={"/favourites"}>Favourites</StyledNavLinks>
                </NavLeft>
            </Nav>
        </Box>
    </Container>
    )
}

export default NavBar;