import React, { useState, useEffect } from 'react';
import Card from './Card';
import styled, { css } from 'styled-components'


const SearchList = (props) => {

    const array = props.newArtworkArray

    console.log(array)
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
        renderCards(array) 
    });

    // Create artwork image url
    const imgUrl = (id) => {
        const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
        return URL
    }

    return (
        <div>
            <li>
                {renderCards()}
            </li>
        </div>
    )

}


export default SearchList