import React, { useState, useEffect } from 'react';
import Section from './Section';
import HomeBanner from './HomeBanner';

const HomeContainer = () => {

        // Artwork array state
        const [artwork, setArtwork] = useState(["Empty"])

        // Fetches artwork API
        const fetchAPI = async () => {

            const URL = "https://api.artic.edu/api/v1/artworks?limit=100"
    
            const response = await fetch(URL)
    
            const cards = await response.json()
 
            setArtwork(randomiseArray(cards.data))

        }

        // Shuffle order of array
        const randomiseArray = (array) => {
            const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
            return shuffledArray
        }

        // Create artwork image url
        const imgUrl = (id) => {
            const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
            return URL
        }

        useEffect(() => {
            setTimeout(() => {
                return fetchAPI()
              }, 3000);
        });

        return (
            <div>
                <Section backgroundColour={"None"}>
                {console.log(imgUrl(artwork[0].image_id))}
                <HomeBanner backgroundImg={imgUrl(artwork[0].image_id)}></HomeBanner>
                </Section>
            </div>
        )
    }

    export default HomeContainer