import React, { useState, useEffect } from 'react';
import CustomInput from './CustomInput';
import Button from './Button';
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CardContainer from './CardContainer';
import SearchList from './SearchList';
import Section from './Section';

    const SearchContainer = (props) => {

        // Search value array state
        const [searchResult, setSearchResult] = useState("")

        // Search value array state
        const [artwork, setArtwork] = useState([ ])


        const handleChange = (e) => {
            e.preventDefault()
            console.log(e.target.value)
            setSearchResult(e.target.value)
        }

        const handleClick = (e) => {
            e.preventDefault()
            fetchAPI(searchResult)
            
        }

        const checkArray = (array) => {
            if (array.length >= 1) {
                console.log("Good")
                console.log(array)
                setArtwork(array)
            } else {
                console.log("Not Good")
            }
        }

        const fetchAPI = async (id) => {

            const URL = `https://api.artic.edu/api/v1/artworks/search?q=${id}`

            console.log(URL)
              const response = await fetch(URL)
        
              const art = await response.json()
        
              checkArray(art.data)
        }
        return (
            <div>

            <Section backgroundColour={"black"}>
            <h1>Search something</h1>
            <form>
                <CustomInput
                    onChange={handleChange}
                    placeholder={"Search something"}
                />
                <Button onClick={handleClick}> Search </Button>
            </form>
            <CardContainer isCard={false}>
                <SearchList searchArray={artwork}></SearchList>
            </CardContainer>

            </Section>
            </div>
        )
    }

    export default SearchContainer