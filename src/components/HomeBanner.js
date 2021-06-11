import styled, { css } from 'styled-components'
import React, { useState } from 'react';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const HomeBannerContainer = styled.div`
    width: 100%;
    background-repeat: no-repeat;
    background-color: black;
    height: ${props => props.isSmall ? "280px" : "800px"};
    display: block;
    position: relative;
    overflow: hidden;

    & img {
        object-fit: cover;
        width: 100%;
        height: auto;
        position: absolute;
        top:0;
        left:0;
        z-index: 0;
        opacity: 0.5;
        filter: blur(2px);
    }

    & div {
        z-index: 2;
        position: relative;
        color: white;
        vertical-align: baseline;
        display:flex;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    & h1 {
 
    }
`

const HomeBanner = (props) => {

    return (
        <div>

        <HomeBannerContainer isSmall={props.isSmall}>
            <img src={props.backgroundImg}></img>
            <Box mx="auto">
                <Typography variant="h2" component="h1" gutterBottom>{props.title || "Welcome to the Art Institute of Chicago"}</Typography>
            </Box>
        </HomeBannerContainer>

        </div>
    )
}

export default HomeBanner