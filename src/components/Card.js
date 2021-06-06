import React from 'react';
import styled, { css } from 'styled-components'

const CardContainer = styled.div`
    ${props => { 
      if (props.hasError) {
        return (props.hasError && css `
          border: 1px solid red;
          background-color: saddlebrown;
        `)}
      else {
        return (props.hasError && css `
          background-color: white;
          border: 1px solid grey;
          `
        )}
    }} 
    
    background-color: white;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.15);

    & a {
        width: 100%;
        height: 100%;
        padding: ${props => props.padding};
        cursor: pointer;
        position: relative;
        display: block;
        text-decoration: none;
    }

    & h2 {
        text-align: left;
        text-decoration: none;
    }

    &:hover img {
        opacity:0.9;
    }
`;

const ImgContainer = styled.div`
    width: 100%;
    position:relative;

    & img {
        width: 100%;
    }

`

const Card = (props) => {
    return (
        <CardContainer padding={props.padding}>
            <a href={props.linkHref}>
                <ImgContainer>
                    <img lazy src={props.imgSrc} alt={"Hi"}></img>
                </ImgContainer>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </a>
        </CardContainer>
    )
}

export default Card;