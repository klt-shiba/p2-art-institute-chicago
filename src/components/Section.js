import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints';

const Section = styled.section`
  padding: 2rem 0rem;
  background-color: ${props =>props.backgroundColour};

  ${up('md')} {
    padding: 3rem 0rem;
  }
  ${up('lg')} {
    padding: 4rem 0rem;
  }
`;


export default Section