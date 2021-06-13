import styled, { css } from 'styled-components'
import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import BackgroundImage from './BackgroundImage'

const HomeBannerContainer = styled.div`
    width: 100%;
    background-repeat: no-repeat;
    background-color: black;
    height: ${props => props.isSmall ? "280px" : "800px"};
    display: block;
    position: relative;
    overflow: hidden;

    & img {
        object-fit: fill;
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

const UpdatedTypography = styled(Typography)`
    font-family: 'DM Serif Display', serif;
`;

const HomeBanner = (props) => {

    const chooseBackgroundImage = (array) => {
        //Randomise Array first
        const newRandomArray = randomiseArray(array)
        return newRandomArray[0]  
    }
        // Shuffle order of array
        const randomiseArray = (array) => {
            const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
            return shuffledArray
        }
        
    useEffect(() => {
        setTimeout(() => {
            return chooseBackgroundImage(BackgroundImage)
        }, 1000);
    });

    return (
        <div>
        <HomeBannerContainer isSmall={props.isSmall}>
            <img src={chooseBackgroundImage(BackgroundImage)}></img>
            <Box mx="auto">
                <UpdatedTypography variant="h1" component="h1">{props.title || "The Art Institute of Chicago"}</UpdatedTypography>
            </Box>
        </HomeBannerContainer>

        </div>
    )
}

export default HomeBanner