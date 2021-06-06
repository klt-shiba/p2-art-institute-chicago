import React, { useState, useEffect } from 'react';
import Card from  './Card';
import CardContainer from './CardContainer'
import PrimaryBanner from './PrimaryBanner'
import Section from './Section'

const ExhibitionContainer = () => {
    // Artwork array state
    const [exhibitions, setExhibition] = useState([ ])

    // Fetches artwork API
    const fetchAPI = async () => {

        const URL = "https://api.artic.edu/api/v1/exhibitions?limit=100"

        const response = await fetch(URL)

        const exhibitions = await response.json()

        setExhibition(selectExhibitionsWithImgsAndLink(exhibitions.data))
        console.log(exhibitions.data)
        selectImage(setExhibition(selectExhibitionsWithImgsAndLink(exhibitions.data)))
    }

    // Filter out exhibitions with no images
    const selectExhibitionsWithImgsAndLink = (array) => {
        const filteredArray = array.filter((el) => {
            return (el.web_url !== null && el.image_url !== null)
        })
        return randomiseArray(filteredArray)
    }

    // // Create artwork image url
    // const imgUrl = (id) => {
    //     const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
    //     return URL
    // }

    // Shuffle order of array
    const randomiseArray = (array) => {
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
        return shuffledArray
    }

    const selectImage = (array) => {
        const imageURL = array[0].image_url
        console.log(imageURL)
        return imageURL
    }


    useEffect(() => {
        fetchAPI()
    }, []);

    
    return (
        <div>
            <Section backgroundColour={"black"}>
                <PrimaryBanner imgSrc={selectImage}/>
            </Section>
            <Section backgroundColour={"black"}>
                <CardContainer isCard>
                    {exhibitions.map((el) => {
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
            </Section>
        </div>
    )
}

export default ExhibitionContainer
