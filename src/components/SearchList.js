import React from 'react';
import Card from './Card';
import styled, { css } from 'styled-components'


const SearchList = (props) => {

    // Create artwork image url
    const imgUrl = (id) => {
        const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
        return URL
    }

    return (
        <div>
            <li>
                {props.searchArray.map((el) => {
                    return (<Card
                        imgSrc={imgUrl(el.image_id)}
                        title={el.title}
                        padding="0"
                        body={el.summary} 
                        >
                        </Card>)
                        })
                    }
            </li>
        </div>
    )

}


export default SearchList