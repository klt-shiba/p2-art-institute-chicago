import React, { useState, useEffect } from 'react';
import SearchList from './SearchList';
import Section from './Section';
import HomeBanner from './HomeBanner';


const SearchContainer = (props) => {

        // const handleChange = (e) => {
        //     e.preventDefault()
        //     console.log(e.target.value)
        //     setSearchResult(e.target.value)
        // }

        // const handleClick = (e) => {
        //     e.preventDefault()
        //     fetchAPI(searchResult)
            
        // }

        const [favouriteArtwork, setFavouriteArtwork] = useState([])
        
        const fetchMockData = async () => {
            fetch("http://localhost:3000/favourites")
            .then(function(response) {
              return response.json();
            })
            .then(function(object) {
              setFavouriteArtwork(object)
            })
        }
        useEffect(() => {
            fetchMockData() 
        }, []);    
    
        return (
            <Section backgroundColour={"none"}>
            <HomeBanner
                    isSmall 
                    backgroundImg={"https://www.artic.edu/iiif/2/7bd4542d-3e84-e21a-d259-8d22e20bee0a/full/843,/0/default.jpg"}
                    title="View your favourites">
                    </HomeBanner>
                <SearchList searchArray={favouriteArtwork}></SearchList>
            </Section>
            )
    }

    export default SearchContainer