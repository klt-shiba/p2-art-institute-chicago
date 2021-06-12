import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import Section from './Section'
import DetailsContainer from './DetailContainer'
import HomeBanner from './HomeBanner';

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

        console.log(exhibitions.data)

        setExhibition(selectExhibitionsWithImgsAndLink(exhibitions.data))
    }

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

    const handleClick = (e) => {
        // Capture click event and Id
        const eventID = e.currentTarget.id
        console.log(eventID)
        findAndReturnArtwork(exhibitions, eventID)
        toggleSections("artwork-grid-layout")
        showDetailsSection()
        renderArtworkDetail()
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
                body={el.department_display}
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


    const showDetailsSection = () => {
        const detailsSection = document.getElementById("artwork-details-layout")
        detailsSection.classList.remove("hidden")
        renderArtworkDetail()
    }

    const renderArtworkDetail = () => {
        return (
            <Section backgroundColour={"none"} id={"artwork-primary-banner"}>
                <DetailsContainer data={artworkObj}></DetailsContainer>
            </Section>
        )
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
                backgroundImg={"https://artic-web.imgix.net/4d01f586-3fa6-4f83-b93f-6eb5db4feddd/exh_supernatural-shakespeare_mega_2000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C"}
                title="Past Exhibitions">
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
