import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  font-size: 1.4rem;

  ${props => {
     
    if (props.hasVariant === "Primary") { 
      return css`
      background-color: blue;
      border: 1px solid blue;
      color: white;

      &:hover {
        background-color: lightblue;
        color: black;
      }`
    }
    else if (props.hasVariant === "Secondary") {
      return css`
      background-color: white;
      border: 1px solid blue;
      color: black;

      &:hover {
        background-color: lightblue;
        color: black;
      }`
    }
    }
  }
`;

export default Button