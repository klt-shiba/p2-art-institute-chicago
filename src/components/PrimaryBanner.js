import styled, { css } from 'styled-components'
import React, { useState } from 'react';
import { up } from 'styled-breakpoints';
import Button from './Button'


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
    color: white;
    padding: 2.4rem 0 0 0;

    ${up('md')} {
        width:50%;
        justify-content: center;
        padding: 0 3.2rem;
    }

`

const PrimaryBanner = (props) => {
    return (<BannerDiv>
            <ImageBlock>
                <img lazy src={props.imgSrc} alt={props.alt}></img>
            </ImageBlock>
            <ContentBlock>
                <div>
                <h1>{props.title}"James - This is the h1 heading"</h1>
                <p>"James - This is a short summary, it should be artwork agnostic"</p>
                <Button hasVariant={"Primary"}>Hi James</Button>
                </div>
                
            </ContentBlock>
            </BannerDiv>)
}

export default PrimaryBanner