import React, { useState, useEffect } from 'react';
import Card from './Card';
import styled, { css } from 'styled-components'
import CardContainer from './CardContainer';

const SearchList = (props) => {

    const array = props.searchArray

    const renderCards = (array) => {
        
        if (array) {
            return array.map((el) => {
                return (<Card
                    imgSrc={imgUrl(el.image_id)}
                    title={el.title}
                    padding="0"
                    body={el.summary} 
                    > 
                    </Card>)
                    })
                }
                else {
                    return false
                }
    }


    useEffect(() => {
        renderCards() 
    });

    // Create artwork image url
    const imgUrl = (id) => {
        const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
        return URL
    }

    return (
        <CardContainer isCard>
            {renderCards(array)}
        </CardContainer>

    )

}


export default SearchList