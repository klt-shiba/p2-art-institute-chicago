import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints';


const CardContainer = styled.div`
    grid-template-columns: auto;
    grid-template-rows: auto; 
    column-gap: 10px;
    row-gap: 15px;
    display: grid;
    width:100%;
    margin: 0 auto;

    ${up('md')} {
        grid-template-columns: auto auto;
        grid-template-rows: auto auto; 
    }
    ${up('lg')} {
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto; 
    }
`;

export default CardContainer
