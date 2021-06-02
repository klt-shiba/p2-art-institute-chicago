import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  font-size: 1.4rem;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}

  &:hover {
    border: 2px solid palevioletred;
  }

`;

export default Button