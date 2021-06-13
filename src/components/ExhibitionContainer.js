import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import Section from './Section'
import DetailsContainer from './DetailContainer'
import HomeBanner from './HomeBanner';

const ExhibitionContainer = () => {
    
    // STORE ALL SECTIONS ON THE PAGE
    const sections = document.querySelectorAll(Section)

    // STORE FETCHED EXHIBITIONS
    const [exhibitions, setExhibition] = useState([])

    // STORE SINGLE EXHIBITIONS OBJECT
    const [artworkObj, setArtworkObj] = useState([])

    // FETCH EXHIBITIONS 
    const fetchAPI = async () => {

        const URL = "https://api.artic.edu/api/v1/exhibitions?limit=100"

        const response = await fetch(URL)

        const exhibitions = await response.json()

        console.log(exhibitions.data)

        // SET EXHBITIONS
        // ** FILTER OUT EXHIBITIONS WITHOUT LINKS 
        setExhibition(selectExhibitionsWithLinks(exhibitions.data))
    }

    // FILTER OUT EXHIBITIONS WITH NO LINKS
    const selectExhibitionsWithLinks = (array) => {
        const filteredArray = array.filter((el) => {
            return (el.web_url !== null )
        })
        return filteredArray
    }

    // TOGGLE SECTIONS
    const toggleSections = (id) => { 

        // LOOP THROUGH SECTIONS AND IF THE ID PARAMETER MATCHES THE SECTION ID, HIDE THE SECTION, OTHER REMOVE HIDDEN CLASS
        for (let section of sections) {
            console.log(section)
            if (section.id === id) {
                section.classList.add('hidden')
            } else {
                section.classList.remove('hidden')
            }
        }   
    } 

    // RENDER CARDS
    const renderCards = () => {
        return exhibitions.map((el) => {
            return <Card
                imgSrc={el.image_url}
                title={el.title}
                padding="0"
                body={el.department_display}
                onClick={handleClick}
                id={el.id} 
                >
                </Card>
        })
    }

    // USING THE EXHIBITION ID WHICH WAS CAPTURED WHEN A CARD HAS BEEN CLICKED
    // FIND THE EXHIBITION ITEM IN THE EXHIBITIONS ARRAYS 
    const findAndReturnArtwork = (array, id) => {
        const art = array.find((el) => {
            return el.id == id
        })
        console.log(art)
        // SET THE EXHIBITION ITEM IN THE EXHIBITION STATE
        setArtworkObj(art)
    }

    // SHOW THE DETAILS SECTION AND RENDER ARTWORK/EXHIBITION DETAIL
    const showDetailsSection = () => {
        const detailsSection = document.getElementById("artwork-details-layout")
        detailsSection.classList.remove("hidden")
        renderArtworkDetail()
    }

    // RENDER ARTWORK/EXHIBITION DETAIL
    const renderArtworkDetail = () => {
        
        // PASS THE ARTWORK/EXHIBITION STATE AS A PROP TO THE DETAILS COMPONENT
        return (
            <Section backgroundColour={"none"} id={"artwork-primary-banner"}>
                <DetailsContainer data={artworkObj}></DetailsContainer>
            </Section>
        )
    }

    // HANDLE CLICK WHEN CARD IS CLICKED
    const handleClick = (e) => {
        // Capture click event and Id
        const eventID = e.currentTarget.id
        console.log(eventID)
        findAndReturnArtwork(exhibitions, eventID)
        toggleSections("artwork-grid-layout")
        window.scrollTo(0, 0)
        showDetailsSection()
        renderArtworkDetail()
    }

    useEffect(() => {
        fetchAPI() 
    }, []);

    useEffect(() => {
        renderArtworkDetail()
    });

    return (
        <div>
            <Section backgroundColour={"none"} id={"artwork-grid-layout"}>
                <HomeBanner
                    isSmall
                    title="Exhibitions">
                </HomeBanner>
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
