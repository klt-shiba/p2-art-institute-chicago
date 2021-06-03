import React from 'react';
import styled, { css } from 'styled-components'

const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",

    // or we can define dynamic ones
    size: props.size || "1em",
  }))`
    color: black;
    font-size: 1em;
    border: 4px solid black;
    padding: 1rem;
    margin: 0rem;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        
    }

    &:hover {
        
    }
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
    /* here we use the dynamically computed prop */
    /* margin: ${props => props.size};
    padding: ${props => props.size}; */
  `;

  // Define our `fg` and `bg` on the theme

  

export default Input;