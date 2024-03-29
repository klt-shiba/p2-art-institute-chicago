import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import Section from './Section'
import DetailsContainer from './DetailContainer'
import '@fontsource/roboto';
import HomeBanner from './HomeBanner';

const ArtworkContainer = () => {

    // Artwork array state
    const [artwork, setArtwork] = useState(["Empty"])

    // Single Artwork Object
    const [artworkObj, setArtworkObj] = useState("")

    const sections = document.querySelectorAll(Section)

    // Fetches artwork API
    const fetchAPI = async () => {
        const rndInt = Math.floor(Math.random() * 10) + 1
        const URL = `https://api.artic.edu/api/v1/artworks?page=${rndInt}&limit=100`
        const response = await fetch(URL)
        const cards = await response.json()
        setArtwork(randomiseArray(cards.data))
        renderCards()
        console.log(cards.data)
    }

    // Create artwork image url
    const imgUrl = (id) => {
        const URL = `https://www.artic.edu/iiif/2/${id}/full/400,/0/default.jpg`
        return URL
    }
    // Shuffle order of array
    const randomiseArray = (array) => {
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
        return shuffledArray
    }
    useEffect(() => {
        fetchAPI()
    }, []);
    
    const handleClick = (e) => {
        const artworkId = e.currentTarget.id
        // fetchSingleArtwork(artworkId)
        findAndReturnArtwork(artwork, artworkId)
        toggleSections("artwork-grid-layout")
        window.scrollTo(0, 0)
        showDetailsSection()
        renderArtworkDetail()
    }
    const findAndReturnArtwork = (array, id) => {
        const art = array.find((el) => {
            return el.id == id
        })
        console.log(art)
        setArtworkObj(art)
    }
    const renderCards = () => {
        return (
            artwork.map((el) => {
            return <Card
                    onClick={handleClick}
                    imgSrc={imgUrl(el.image_id)}
                    title={el.title}
                    padding="0.8rem"
                    body={el.artist_display}
                    id={el.id} 
                    >
                    </Card>
            })
        )
    }
    const toggleSections = (id) => { 
        console.log(id)
        for (let section of sections) {
            console.log(section)
            if (section.id === id) {
                section.classList.add('hidden')
            } else {
                section.classList.remove('hidden')
            }
        }   
    }    
    const showDetailsSection = () => {
        const detailsSection = document.getElementById("artwork-details-layout")
        detailsSection.classList.remove("hidden")
    }
    const renderArtworkDetail = () => {
        return (
            <Section backgroundColour={""} id={"artwork-primary-banner"}>
                <DetailsContainer data={artworkObj}></DetailsContainer>
            </Section>
        )
    }
    return (
        <div>
            <Section backgroundColour={"None"} id={"artwork-grid-layout"}>
                <HomeBanner
                isSmall 
                title="Artwork">
                </HomeBanner>
                <CardContainer isCard>
                    {renderCards()}
                </CardContainer>
            </Section>
            <Section backgroundColour={"None"} id={"artwork-details-layout"}className={"hidden"}>
                {renderArtworkDetail()}
            </Section>
        </div>
    )
}
export default ArtworkContainer