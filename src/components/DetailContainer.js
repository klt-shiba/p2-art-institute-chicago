import React, { useEffect, useState } from 'react';
import PrimaryBanner from './PrimaryBanner'
import Chip from '@material-ui/core/Chip';
import { Table } from 'reactstrap';
import { Box } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';


const DetailsContainer = (props) => {
    
    // Favourite Art
    const [faveArt, setFaveArt] = useState(["Empty"])

    const artworkObj = props.data

    console.log(artworkObj)

    // Create artwork image url
    const imgUrl = (id) => {
      const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
      return URL
    }

    const chooseBanner = (array) => {

      if (array.api_model === "artworks") {
        return (
          <PrimaryBanner 
          label={artworkObj.department_title}
            imgSrc={imgUrl(artworkObj.image_id)}
            title={artworkObj.title} 
            body={artworkObj.artist_display} 
            isHidden={"hidden"} />
        )
      } else {
        return (<PrimaryBanner 
          label={artworkObj.department_display}
          imgSrc={artworkObj.image_url}
          title={artworkObj.title} 
          body={artworkObj.short_description}
          url={artworkObj.web_url}
          />
        )
      }
    }
    const ChooseTable = (array) => {
      if (array.api_model === "artworks") {
        return (
        <Table>
          <tbody>
            <tr>
              <th scope="row">Artist</th>
              <td>{array.artist_title}</td>
            </tr>
            <tr>
              <td scope="row">Title</td>
              <td>{array.title}</td>
            </tr>
            <tr>
              <td scope="row">Origin</td>
              <td>{array.place_of_origin}</td>
            </tr>
            <tr>
              <td scope="row">Date</td>
              <td>{array.date_end}</td>
            </tr>
            <tr>
              <td scope="row">Medium</td>
              <td>{array.medium_display}</td>
            </tr>
            <tr>
              <td scope="row">Dimensions</td>
              <td>{array.dimensions}</td>
            </tr>
            <tr>
              <td scope="row">Credit Line</td>
              <td>{array.credit_line}</td>
            </tr>
          </tbody>
        </Table>
        )
    } else {
      return (
        <Table>
          <tbody>
            <tr>
              <th scope="row">Title</th>
              <td>{array.title}</td>
            </tr>
            <tr>
              <td scope="row">Description</td>
              <td>{array.description}</td>
            </tr>
            <tr>
              <td scope="row">Department</td>
              <td>{array.department_display}</td>
            </tr>
            <tr>
              <td scope="row">Status</td>
              <td>{array.status}</td>
            </tr>
          </tbody>
        </Table>
      )
      }
    }
    const renderAltImgs = () => {
      
      const altImgs = artworkObj.alt_image_ids

      if (altImgs) {


        return (
    
            <GridList cellHeight={160} cols={3}>
              {altImgs.map((tile) => (
                <GridListTile key={"James"} cols={tile.cols || 1}>
                  <img src={imgUrl(tile)} alt={tile} />
                </GridListTile>
              ))}
            </GridList>

        );
      } else {
        return (
          <div></div>
        )
      }
    }

    const favouriteArt = () => {

    }
    const renderStars = () => {
      return( 
        <div style={{ width: '100%' }}>
          <form action="http://localhost:3000/favourites" method="POST">
            <Box display="flex" p={1} bgcolor="background.paper">
            <Box>
              <Button  
              variant={buttonVariant}
              color="Primary"
              startIcon={buttonIcon}
              onClick={handleClick}
              value={"James"}>
                {buttonLabel}
              </Button>
            </Box>
            </Box>
          </form>
        </div>
      )
    }

    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        artwork_id: artworkObj.id,
        title: artworkObj.title
      })
    };

    const deleteConfigurationObject = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };

    const deleteItem = async (a) => {
      fetch(`http://localhost:3000/favourites/${a}`, deleteConfigurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
      })
      .catch(function(err) {
        console.log(err)
      });
    }

    const [buttonLabel, setButtonLabel] = useState("Favourite")
    const [buttonIcon, setButtonIcon] = useState(<FavoriteIcon />)
    const [buttonVariant, setButtonVariant] = useState("contained")
    
    const handleClick = (e) => {
      e.preventDefault();
      if (buttonLabel === "Favourite") {
        setFaveArt(artworkObj)
        updateDataBase()

        // SetButtonStyles
        setButtonLabel("Remove")
        setButtonIcon(<FavoriteBorderIcon />)
        setButtonVariant("outlined")
      } else {

        deleteItem(dataBaseItem.id)
        // SetButtonStyles
        setButtonLabel("Favourite")
        setButtonIcon(<FavoriteIcon />)
        setButtonVariant("contained")
      }
    }
    const [dataBaseItem, setDataBaseItem] = useState()

    const updateDataBase = async () => {
      fetch("http://localhost:3000/favourites", configurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
        setDataBaseItem(object)
      })
      .catch(function(err) {
        console.log(err)
      });
    }
    return (
      <div className={"left"}>
            {chooseBanner(artworkObj)}
            <Box mt={4}>
              {renderStars()}
            </Box>
            <Box mt={4}>
              {ChooseTable(artworkObj)}
            </Box>
            <Box mt={4}>
              {renderAltImgs()}
            </Box>
            </div>
            );
}

export default DetailsContainer
