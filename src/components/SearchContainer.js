import React, { useState, useEffect } from 'react';
import Section from './Section';
import HomeBanner from './HomeBanner';
import DetailsContainer from './DetailContainer'
import Card from './Card';
import CardContainer from './CardContainer';


const SearchContainer = (props) => {

      const sections = document.querySelectorAll(Section)

      // Array of your favourited Artworks
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
      // Single Artwork Object
      const [singleArtObj, setSingleArtworkObj] = useState([])
      
      const fetchSingleArtworkObject = async (link) => {
        fetch(link)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          console.log(object)
          setSingleArtworkObj(object.data)
        })
      }
        
      useEffect(() => {
          fetchMockData() 
      }, []);
        
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
        renderArtworkDetail()
      }

      const renderArtworkDetail = () => {
        return (
            <Section backgroundColour={"none"} id={"artwork-primary-banner"}>
                <DetailsContainer data={singleArtObj}></DetailsContainer>
            </Section>
        )
      }
      const renderCards = (array) => {
        if (array) {
            return array.map((el) => {
                return (<Card
                  imgSrc={imgUrl(el.image_id)}
                  title={el.title}
                  padding="0"
                  body={el.summary} 
                  onClick= {handleClick}
                  id={el.api_link}
                  > 
                  </Card>)
                  })
                }
                else {
                  return false
                }
        }
      const handleClick = (e) => {
        const artworkId = e.currentTarget.id
        console.log(artworkId)
        fetchSingleArtworkObject(artworkId)
        toggleSections("artwork-grid-layout")
        showDetailsSection()
        renderArtworkDetail()
      }

      // Create artwork image url
      const imgUrl = (id) => {
        const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
        return URL
      }
      return (
        <div>
          <Section backgroundColour={"none"} id={"artwork-grid-layout"}>
            <HomeBanner
              isSmall 
              backgroundImg={"https://www.artic.edu/iiif/2/7bd4542d-3e84-e21a-d259-8d22e20bee0a/full/843,/0/default.jpg"}
              title="View your favourites">
            </HomeBanner>
            <CardContainer isCard>
              {renderCards(favouriteArtwork)}
            </CardContainer>
          </Section>
          <Section backgroundColour={"none"} id={"artwork-details-layout"} className={"hidden"}>
            {renderArtworkDetail()}
          </Section>
        </div>
        )
    }

    export default SearchContainer