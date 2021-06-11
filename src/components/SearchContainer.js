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

         // Search value array state
         const [newArtworkArray, setNewArtworkArray] = useState([])


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


        const fetchAPIObjecst = async (array) => {

            const URL = array

            console.log(URL)
            const response = await fetch(URL)
        
            const art = await response.json()

            const updatedArray = art.data

            console.log(updatedArray)

            return updateNewArtworkArray(updatedArray)
        }


        const updateNewArtworkArray = (object) => {
            const newArray = setNewArtworkArray([...newArtworkArray, object])
            console.log(newArtworkArray)
            return newArray
        }

        const convertIdToUrl = (array) => {

            let arrayOfUrls = array.map((el) => {
                fetchAPIObjecst(el.api_link)
            })

            return arrayOfUrls
        }

        const fetchAPI = async (id) => {

            const URL = `https://api.artic.edu/api/v1/artworks/search?q=${id}`

            console.log(URL)
              const response = await fetch(URL)
        
              const art = await response.json()
        
              checkArray(art.data)
              convertIdToUrl(art.data)
        }


        useEffect(() => {
            fetchAPIObjecst() 
        }, []);    

        return (
            <div>

            <Section backgroundColour={"none"}>
            <h1>Search something</h1>
            <form>
                <CustomInput
                    onChange={handleChange}
                    placeholder={"Search something"}
                />
                <Button onClick={handleClick}> Search </Button>
            </form>
            <CardContainer isCard={false}>
                <SearchList searchArray={newArtworkArray}></SearchList>
            </CardContainer>

            </Section>
            </div>
        )
    }

    export default SearchContainer