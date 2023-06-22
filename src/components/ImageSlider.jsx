
import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import Welcome from '../pages/HomePage/Welcome';

export default function ImageSlider() {

  const data = [
    
    {
      image: "../assets/building.jpg",
      caption: "Building"
    },

    {
      image: "../assets/cropfarming.jpg",
      caption: "Crop Farming"
    },

    {
      image: "../assets/AnimalFarming.jpg",
      caption: "Animal Farming"
    },

    {
      image: "../assets/ImpExp.jpg",
      caption: "Import & Export"
    },

    {
      image: "../assets/Property.jpg",
      caption: "Property Management"
    },

    {
      image: "../assets/Software.jpg",
      caption: "Software Development"
    },


  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '10px',
    fontWeight: 'bold',
  }

  return (
    
    
    <div style={{ textAlign: "center" }}>
        <Welcome />
    <div style={{ padding: "0 10px" }}>

      <Carousel
        data={data}
        time={2000}
        width="100%"
        height="450px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "450px",
          margin: "30px auto",
        }}
      />

    </div>

  </div>
  )
}
