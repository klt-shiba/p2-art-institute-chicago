import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import PrimaryBanner from './PrimaryBanner'

const ExhibitionContainer = () => {
    // Artwork array state
    const [exhibition, setExhibition] = useState(["Empty"])

    // Fetches artwork API
    const fetchAPI = async () => {

        const URL = "https://api.artic.edu/api/v1/exhibitions?limit=100"

        const response = await fetch(URL)

        const cards = await response.json()

        setExhibition(selectExhibitionsWithImgsAndLink(cards.data))
    }

    // Filter out exhibitions with no images
    const selectExhibitionsWithImgsAndLink = (array) => {
        const filteredArray = array.filter((el) => {
            return (el.web_url !== null && el.image_url !== null)
        })
        return filteredArray
    }

    // Create artwork image url
    const imgUrl = (id) => {
        const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
        return URL
    }

    // Shuffle order of array
    const randomiseArray = (array) => {
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
        return shuffledArray
    }

    useEffect(() => {
        return fetchAPI()
    }, []);

    return (
        <div>
            <PrimaryBanner
                
            />
            <CardContainer>
                {randomiseArray(exhibition).map((el) => {
                    return <Card
                        imgSrc={el.image_url}
                        title={el.title}
                        padding="0"
                        body={el.summary}
                        linkHref={el.web_url} 
                        >
                        </Card>
                })}
                </CardContainer>
        </div>
    )
}

export default ExhibitionContainer
