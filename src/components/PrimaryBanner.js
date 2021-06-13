import styled, { css } from 'styled-components'
import React, { useState } from 'react';
import { up } from 'styled-breakpoints';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { spacing } from '@material-ui/system';
import { Box } from '@material-ui/core';


const BannerDiv = styled.div`
    width:100%;

    ${up('md')} {
        display:flex;
    }
    `
 
 const ImageBlock = styled.div`
    width:100%;

    ${up('md')} {
        width:50%;
    }

    &  img {
        width: 100%;
        height: auto;
        object-fit: cover;

        ${up('md')} {
            height: 720px;
        }

    }
`

const ContentBlock = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    text-align: left;
    color: black;
    padding: 2.4rem 0 0 0;

    ${up('md')} {
        width:50%;
        justify-content: center;
        padding: 0 3.2rem;
    }

`
const UpdatedTypography = styled(Typography)`
    font-family: 'DM Serif Display', serif;
`;

const PrimaryBanner = (props) => {

    const handleClick = (e) => {
        e.preventDefault()
        redirectURL(props.url)
    }

    const redirectURL = (url) => {
        window.open(url);
    }

    return (<BannerDiv>
            <ImageBlock>
                <img lazy src={props.imgSrc} alt={props.alt} ></img>
            </ImageBlock>
            <ContentBlock>
                <div>
                <Box pb={4}>
                    <Chip variant="outlined" color="secondary" label={props.label} className={props.chipIsHidden} size="small"/>
                </Box>
                <Box pb={3}>
                    <UpdatedTypography variant="h2" component="h1" gutterBottom>{props.title || "James - This is the title"}</UpdatedTypography>
                    <Typography variant="body1" gutterBottom>{props.body || "James - This is a short summary, it should be artwork agnostic"}</Typography>
                </Box>
                <Button variant="contained" color="primary" onClick={handleClick} url={props.url} className={props.isHidden}>{props.buttonLabel || "Learn More"}</Button>
                </div>
            </ContentBlock>
            </BannerDiv>)
}

export default PrimaryBanner