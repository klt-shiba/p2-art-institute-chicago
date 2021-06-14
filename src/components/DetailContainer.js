import React, { useEffect, useState } from 'react';
import PrimaryBanner from './PrimaryBanner'
import { Table } from 'reactstrap';
import { Box } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const DetailsContainer = (props) => {

    // SETTING FAVOURITE ARTWORKS OBJECT
    const [faveArt, setFaveArt] = useState(["Empty"])

    // SETTING FAVOURITES BOOL
    const [favourite, setFavourite] = useState(false)
    
    // SETTING FAVOURITES TO THE DATABASE
    const [dataBaseItem, setDataBaseItem] = useState()

    // SETTING BUTTON STATES
    const [buttonLabel, setButtonLabel] = useState("Favourite")
    const [buttonIcon, setButtonIcon] = useState(<FavoriteIcon />)
    const [buttonVariant, setButtonVariant] = useState("contained")

    // OG SINGLE EXHIBITION OR ARTWORK OBJECT
    const artworkObj = props.data

    // CREATE ARTWORK URL FROM ID
    const imgUrl = (id) => {
      const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
      return URL
    }
    // RENDER CORRECT BANNER WITH CONTENT
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
    // RENDER CORRECT TABLE WITH CONTENT
    const ChooseTable = (array) => {

      // IF ARTWORK OBJECT RENDER THIS
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

      // IF ARTWORK OBJECT RENDER THIS
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

    // RENDER OTHER IMAGES IF THEY EXIST
    const renderAltImgs = () => {
  
      const altImgs = artworkObj.alt_image_ids
      const altArtworkImgs = artworkObj.artwork_ids


      // CHECK AND SEE IF ALT IMAGES EXIST
      if (altImgs) {

        return (
            <GridList cellHeight={160} cols={3}>
              {altImgs.map((tile) => (
                <GridListTile key={""} cols={tile.cols || 1}>
                  <img src={imgUrl(tile)} alt={tile} />
                </GridListTile>
              ))}
            </GridList>

        );
      } else if (altArtworkImgs) {
        return (
          <GridList cellHeight={160} cols={3}>
            {altArtworkImgs.map((tile) => (
              <GridListTile key={""} cols={tile.cols || 1}>
                <img src={imgUrl(tile)} alt={tile} />
              </GridListTile>
            ))}5
          </GridList>
      );
      } else {
        return (
          <div></div>
        )
      }
    }
    // FETCH FUNCTION FOR MOCK SERVER
    const checkDataBase = async () => {
      fetch("http://localhost:3000/favourites")
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
        compareDataBase(object, artworkObj.id)
      })
      .catch(function(err) {
        console.log(err)
      });
    }

    const compareDataBase = (array, id) => {
      const comparedDataBase = array.map((el) => {
        if (el.artwork_id === id) {
          setFavourite(true)
        } else {
          return false
        }
      })
      return comparedDataBase
    }

    const updateButton = () => {

      console.log(favourite)

      if (favourite) {
          setButtonVariant("outlined");
          setButtonLabel("Remove");
          setButtonIcon(<FavoriteBorderIcon/>);
      } else {
        console.log("Not working")
          // setButtonVariant("outlined");
          // setButtonLabel("Remove");
          // setButtonIcon(<FavoriteBorderIcon/>);
      }
    }  
    // RENDER TOPBAR
    // ** INCLUDES BACK AND FAVOURITE BUTTONS
    const topBar = () => {
      return (
        <div style={{ width: '100%' }}>
            <Button  
                variant="outlined"
                color="Primary"
                startIcon={<ArrowBackIcon/>}
                onClick={handleBackClick}
                value={"Back"}>
                  Back
                </Button>
          <div style={{ float: 'right'}}>
            {renderStars(artworkObj)}
           </div>
        </div>
      )
    }
    // RENDER TOPBAR
    // ** CLICK HANDLER FOR BACK BUTTON
    const handleBackClick = (e) => {
      e.preventDefault()
      window.location.reload(false);
    }
    // RENDER TOPBAR
    // ** RENDER FAVOURITE BUTTON
    const renderStars = (array) => {

      // CHECK IF OBJECT IS ARTWORK
      if (array.api_model === "artworks") {
        return ( 
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
        )
      } else {
          return false
      }
    }
    // ADD CONFIGURATION OBJECT
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        artwork_id: artworkObj.id,
        title: artworkObj.title,
        api_link: artworkObj.api_link,
        image_id: artworkObj.image_id
      })
    };
    // DELETE CONFIGURATION OBJECT
    const deleteConfigurationObject = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
    // DETELE FETCH FUNCTION
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
    // UPDATE FETCH FUNCTION
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
    // FAVOURITE/UNFAVOURITE BUTTON HANDLER
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
    
    useEffect(() => {
      checkDataBase()
    }, []);
    useEffect(() => {
      // UPDATING BUTTON STATE
      updateButton()
    }, []);
  
    return (
      <div className={"left"}>
            <Box mb={4} mt={-4}>
              {topBar()}
            </Box>
              {chooseBanner(artworkObj)}
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
