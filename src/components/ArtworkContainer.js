import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import PrimaryBanner from './PrimaryBanner'
import Section from './Section'
import Chip from '@material-ui/core/Chip';
import DetailsContainer from './DetailContainer'
import RadioGroup from './RadioGroup'
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';

const ArtworkContainer = () => {

    // Artwork array state
    const [artwork, setArtwork] = useState(["Empty"])

    // Single Artwork Object
    const [artworkObj, setArtworkObj] = useState("")

    // Artwork Categories 
    const [artworkCategories, setArtworkCategories] = useState([])

    const sections = document.querySelectorAll(Section)

    // Fetches artwork API
    const fetchAPI = async () => {
        const URL = "https://api.artic.edu/api/v1/artworks?limit=100"
        const response = await fetch(URL)
        const cards = await response.json()
        setArtwork(randomiseArray(cards.data))
        console.log(cards.data)
    }

     // Fetches Art types API
     const fetchArtTypes = async () => {
        const URL = "https://api.artic.edu/api/v1/artwork-types?limit=100"
        const response = await fetch(URL)
        const cards = await response.json()
        console.log(cards.data)
        collectArtTypes(cards.data)
    }
    // Add Art Types to an ArtworkCategories state
    const collectArtTypes = (array) => {
        let artTypeArray = [];
        const filterOutTitles = array.map((el) => {
            console.log(el.title)
            artTypeArray.push(`${el.title}`)
        })
        setArtworkCategories(artTypeArray)
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
        fetchAPI()
        fetchArtTypes()
    }, []);
    const handleClick = (e) => {
        const artworkId = e.currentTarget.id
        // fetchSingleArtwork(artworkId)
        findAndReturnArtwork(artwork, artworkId)
        toggleSections("artwork-grid-layout")
        showDetailsSection()
        renderArtworkDetail()
    }
    const findAndReturnArtwork = (array, id) => {
        const art = array.find((el) => {
            return el.id == id
        })
        console.log(art)
        console.log(art.term_titles)
        // setArtworkCategories(art.term_titles)
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
    const trimCategories = (category) => {

        if (category.length >= 8) {

            const updatedCategory = category.slice(0, 7) 
            const showMorePill = "..."
            updatedCategory.push(`${showMorePill}`)        
            
            return updatedCategory
        
        } else {
        
            return category
        
        }
    }
    const renderPills = (category) => {

        const updatedCategory = trimCategories(category)

        return (updatedCategory.map((el) => {
            console.log(updatedCategory)
            return (
                <Chip color="secondary" label={el}/>
            )
        }))
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
                <Typography variant="h2" component="h1" gutterBottom>Artwork</Typography>
                {/* <RadioGroup array={artworkCategories}></RadioGroup> */}
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