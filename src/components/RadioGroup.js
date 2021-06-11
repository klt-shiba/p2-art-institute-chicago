import Chip from '@material-ui/core/Chip';
import { spacing } from '@material-ui/system';
import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import styled, { css } from 'styled-components'


const RadioGroup = (props) => {
    
    const radioOptions = props.array


    const RadioWrapper = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
        & * {
          margin: 4px;
        }
    `

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const renderChips = (array) => {
        
        return <RadioWrapper> {array.map((el) => {
            return (
                <Chip variant="outlined" color="secondary" label={el} className={props.chipIsHidden} onClick={handleClick} onDelete={handleDelete}/>
                )
            })
        }</RadioWrapper> 
    }
    
    return (
    <Box mx="auto">
        {renderChips(radioOptions)}
    </Box>
    )
}


export default RadioGroup