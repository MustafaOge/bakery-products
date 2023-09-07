
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '5px',
  fontSize: '35px',
  //  
  color: '#f9f9f9f9'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px'
}
const slideImages = [
  {
    url: 'https://i.hizliresim.com/rykvu7y.jpg',
    caption: 'Harvested with Care, Made with Love'
  },
  {
    url: 'https://i.hizliresim.com/8x93pt0.jpg',
    caption: 'Unveiling Gastronomic Wonders '
  },
  {
    url: 'https://i.hizliresim.com/i20fr1r.jpg',
    caption: 'Inspired by Tradition, Perfected by Innovation',
    
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow  