import React, { useEffect } from 'react';
import PrimaryBanner from './PrimaryBanner'
import Chip from '@material-ui/core/Chip';


const DetailsContainer = (props) => {
    
    const artworkObj = props.data

    console.log(artworkObj)

    // Create artwork image url
    const imgUrl = (id) => {
      const URL = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
      return URL
    }


    // useEffect(() => {
    //   renderImages()
    // }, []);

    // const renderImages = () => {
    //   const imageIDs = artworkObj.alt_image_ids
      
    //   console.log(imageIDs)
      
    //   return (
    //     imageIDs.map((el) => {
    //       return (<img src={imgUrl(el)}></img>)
    //     })
    //   )
    // }

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
          />
        )
      }
    }
    return (
      <div>
            {chooseBanner(artworkObj)}
            {/* {renderImages()}   */}
            </div>
            );
}

export default DetailsContainer
