import React from 'react';
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const CardContainer = styled.button`
    
    ${props => { 
      if (props.isSquare) {
        return (props.isSquare && css `
          /* border: 1px solid red;
          background-color: saddlebrown; */
        `)}
      else {
        return (props.isSquare && css `
          /* background-color: white;
          border: 1px solid grey; */
          `
        )}
    }} 
    display: flex;
    align-items: flex-start;
    background-color: white;
    text-align: left;
    text-decoration: none;
    border: 0px;
    padding: 0.4rem 0;

    & h2 {
        font-weight: 700;
    }

    &:hover img {
        opacity:0.9;
    }

    &:hover h2 {
        text-decoration: underline;
    }
    
    & p {
        color: #777;
        font-size: 1.5rem;
        font-weight: 500;
    }
    & div {
        width:100%;
    }
`;

const ImgContainer = styled.div`
    width: 100%;
    position:relative;
    margin-bottom: 1.2rem;
    height: 16.0rem;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #f2f2f2;

    & img {
        width: 100%;
        height: 16.0rem;
        object-fit: cover;
    }
`


const Card = (props) => {
    return (
        <CardContainer 
            padding={props.padding} 
            isSquare={props.isSquare}
            id={props.id}
            onClick={props.onClick}
            linkHref={props.href}
            >
                
                <div>
                    <ImgContainer>
                    <img loading="lazy" 
                        src={props.imgSrc} 
                        alt={props.altTag}/>
                </ImgContainer>
                <div>
                    <Typography variant="h5" component="h2" gutterBottom>{props.title}</Typography>
                    <Typography variant="body2" gutterBottom>{props.body}</Typography>
                </div>
                </div>
        </CardContainer>
    )
}

export default Card;