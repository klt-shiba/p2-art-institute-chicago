import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import PrimaryBanner from './PrimaryBanner'
import Section from './Section'
import DetailsContainer from './DetailContainer'

const ExhibitionContainer = () => {
    
    const sections = document.querySelectorAll(Section)

    // Exhibition state array
    const [exhibitions, setExhibition] = useState([ ])
    // Single Artwork Object
    const [artworkObj, setArtworkObj] = useState([])
    // Fetch Exhibitions API
    const fetchAPI = async () => {

        const URL = "https://api.artic.edu/api/v1/exhibitions?limit=100"

        const response = await fetch(URL)

        const exhibitions = await response.json()

        setExhibition(selectExhibitionsWithImgsAndLink(exhibitions.data))
    }


    useEffect(() => {
        fetchAPI()
        
    }, []);

    useEffect(() => {
        selectImage(exhibitions)
        renderArtworkDetail()
    });

    // Filter out exhibitions with no images or links
    const selectExhibitionsWithImgsAndLink = (array) => {
        const filteredArray = array.filter((el) => {
            return (el.web_url !== null && el.image_url !== null)
        })
        return randomiseArray(filteredArray)
    }

    // Shuffle order of array
    const randomiseArray = (array) => {
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
        return shuffledArray
    }

    const selectImage = (array) => {
        console.log(array)
        if (array.length === 0) {
            console.log("empty")
        } else {
            const imageURL = randomiseArray(array)[5].image_url
            return imageURL
        }
    }

    const handleClick = (e) => {
        // Capture click event and Id
        const eventID = e.currentTarget.id
        console.log(eventID)
        findAndReturnArtwork(exhibitions, eventID)
        toggleSections("artwork-grid-layout")
        showDetailsSection()
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
    

    const renderCards = () => {
        return exhibitions.map((el) => {
            return <Card
                imgSrc={el.image_url}
                title={el.title}
                padding="0"
                body={el.summary}
                onClick={handleClick}
                id={el.id} 
                >
                </Card>
        })
    }
    const findAndReturnArtwork = (array, id) => {
        const art = array.find((el) => {
            return el.id == id
        })
        console.log(art)
        setArtworkObj(art)
    }

    const trimCategories = (category) => {

        if (category.length >= 8) {

            const updatedCategory = category.slice(0, 7) 
            const showMorePill = "..."
            updatedCategory.push(`${showMorePill}`)        
            
            return updatedCategory
        
        } else if (category.length == 0 ) {
        
            return false
        
        } else {
            return category
        }
    }

    const showDetailsSection = () => {
        const detailsSection = document.getElementById("artwork-details-layout")
        detailsSection.classList.remove("hidden")
        renderArtworkDetail()
    }

    const renderArtworkDetail = () => {
        return (
            <Section backgroundColour={"none"} id={"artwork-primary-banner"}>
                <DetailsContainer data={artworkObj} trimCategory={trimCategories}></DetailsContainer>
            </Section>
        )
    }

    return (
        <div>
            <Section backgroundColour={"none"} id={"artwork-grid-layout"}>
                <CardContainer isCard>
                    {renderCards()}
                </CardContainer>
            </Section>
            <Section backgroundColour={"none"} id={"artwork-details-layout"} className={"hidden"}>
                {renderArtworkDetail()}
            </Section>
        </div>
    )
}

export default ExhibitionContainer
