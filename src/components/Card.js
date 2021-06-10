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
    
    background-color: white;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.15);
    border-radius: 1.6rem;
    text-align: left;
    text-decoration: none;
    border: 0px;
    padding: 0.8rem;

    & h2 {
        font-weight: 700;
    }

    &:hover img {
        opacity:0.9;
    }
    
    & p {
        color: #777;
        font-size: 1.5rem;
        font-weight: 500;
    }
`;

const ImgContainer = styled.div`
    width: 100%;
    position:relative;
    margin-bottom: 1.2rem;
    height: 16.0rem;
    box-sizing: border-box;
    overflow: hidden;

    & img {
        width: 100%;
        height: 16.0rem;
        object-fit: cover;
        border-radius: 1.2rem;
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
                <ImgContainer>
                    <img loading="lazy" 
                        src={props.imgSrc} 
                        alt={props.altTag}/>
                </ImgContainer>
                <div>
                    <Typography variant="h4" component="h2" gutterBottom>{props.title}</Typography>
                    <Typography variant="body1" gutterBottom>{props.body}</Typography>
                    <Chip variant="outlined" color="secondary" label={props.label} className={props.chipIsHidden} size="small"/>
                </div>
        </CardContainer>
    )
}

export default Card;