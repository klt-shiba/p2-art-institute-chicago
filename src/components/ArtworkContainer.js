import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import PrimaryBanner from './PrimaryBanner'
import Section from './Section'
import Details from './pages/Details';


const ArtworkContainer = () => {

    // Artwork array state
    const [artwork, setArtwork] = useState(["Empty"])

    // Single Artwork Value
    const [artworkID, setArtworkID] = useState("")

    // Fetches artwork API
    const fetchAPI = async () => {

        const URL = "https://api.artic.edu/api/v1/artworks?limit=40"

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

    useEffect(() => {
        setArtworkID()
    }, []);

    const handleClick = (e) => {
        e.preventDefault()
        const artworkId = e.currentTarget.id
        setArtworkID(artworkId)
        console.log(artworkID)
    }

    const toggleSections = (id, ) => {
    }

    return (
        <div>
            <Section backgroundColour={"black"} id={"Vincent"}>
                <PrimaryBanner
                    imgSrc={imgUrl(artwork[0].image_id)}
                />
            </Section>
            <Section backgroundColour={"black"} id={"James"}>
                <CardContainer isCard>
                {randomiseArray(artwork).map((el) => {
                    return <Card
                            onClick={handleClick}
                            imgSrc={imgUrl(el.image_id)}
                            title={el.title}
                            padding="0.8rem"
                            artist={el.artist_display}
                            id={el.id}
                            >
                            </Card>
                    })}
                </CardContainer>
                {        console.log(artworkID)}
            </Section>
            <Section backgroundColour={"black"} id={"Craig"}>
                <Details>James</Details>
            </Section>
        </div>
    )
}

export default ArtworkContainer