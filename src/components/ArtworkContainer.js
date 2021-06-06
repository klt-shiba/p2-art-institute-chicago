import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import PrimaryBanner from './PrimaryBanner'

const ArtworkContainer = () => {

    // Artwork array state
    const [artwork, setArtwork] = useState(["Empty"])

    // Fetches artwork API
    const fetchAPI = async () => {

        const URL = "https://api.artic.edu/api/v1/artworks?limit=20"

        const response = await fetch(URL)

        const cards = await response.json()

        setArtwork(cards.data)
        console.log(cards.data)

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
                imgSrc={imgUrl(artwork[0].image_id)}
            />
            <CardContainer>
            {randomiseArray(artwork).map((el) => {
                return <Card
                        imgSrc={imgUrl(el.image_id)}
                        title={el.title}
                        padding="0"
                        body={el.summary}
                        linkHref={"/details"} 
                        >
                        </Card>
                })}
                </CardContainer>
            {/* <Button hasVariant="Primary">Morning James </Button> */}
        </div>
    )
}

export default ArtworkContainer