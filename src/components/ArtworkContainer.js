import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import PrimaryBanner from './PrimaryBanner'
import Section from './Section'

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
            <Section backgroundColour={"black"}>
            <PrimaryBanner
                imgSrc={imgUrl(artwork[0].image_id)}
            />
            </Section>
            <Section backgroundColour={"black"}>
            <CardContainer isCard>
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
                </Section>
        </div>
    )
}

export default ArtworkContainer