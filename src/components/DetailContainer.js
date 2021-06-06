import React, { useState, useEffect } from 'react';


const DetailsContainer = (props) => {

  // Artwork array state
  const [art, setArt] = useState(["Empty"])

  // Fetches artwork API
  const fetchAPI = async (id) => {

    const URL = `https://api.artic.edu/api/v1/artworks/${id}`
    
      const response = await fetch(URL)

      const art = await response.json()

      console.log(art);

      setArt(art)
  
    }

    useEffect(() => {
      return fetchAPI()
    }, []);

    return (
        <div>
          <h1>{props.title}</h1>
          <img src={props.imgSrc}></img>
        </div>
      );
}

export default DetailsContainer
