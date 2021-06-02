import React from 'react';
import styled, { css } from 'styled-components'

const CardContainer = styled.div`
    background-color: white;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.15);
    padding: ${props => props.padding};
`;

const ImgContainer = styled.div`
    
`

const Card = (props) => {
    return (
        <CardContainer padding={props.padding}>
            <img src={props.imgSrc} alt={"Hi"}></img>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </CardContainer>
    )
}

export default Card;