import React, { useState, useEffect } from 'react';
import CustomInput from './CustomInput';
import Button from './Button';
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';



    const SearchContainer = (props) => {

        // Search value array state
        const [searchResult, setSearchResult] = useState("")

        // Search value array state
        const [artwork, setArtwork] = useState("")


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
            } else {
                console.log("Not Good")
            }
        }


        const fetchAPI = async (id) => {

            const URL = `https://api.artic.edu/api/v1/artworks/search?q=${id}`
            
              const response = await fetch(URL)
        
              const art = await response.json()
        
              console.log(art.data);
              checkArray(art.data)
              setArtwork(art.data)
          
        }

        return (
            <div>
            <h1>Search something</h1>
            <form>
                <CustomInput
                    onChange={handleChange}
                    placeholder={"Search something"}
                />
                <Button onClick={handleClick}> Search </Button>
                <FormGroup tag="fieldset">
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option one is this and that—be sure to include why it's great
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option two can be something else and selecting it will deselect option one
                    </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                    <Label check>
                        <Input type="radio" name="radio1"/>{' '}
                        Option three is disabled
                    </Label>
                    </FormGroup>
                </FormGroup>

            </form>
            </div>
        )
    }

    export default SearchContainer