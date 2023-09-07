import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const mapStyles = {
  width: '75%',
  height: '75%',
};
export class Maps extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      cords: [, 

        {lat:48.984809, lng: 31.393744},
        {lat: 51.072798, lng: 10.318501},  
        {lat: 50.433733, lng: 4.575595},
        {lat: 50.433733, lng: 4.575595},
        {lat:41.05164220596783, lng:28.943116453502622}

     
    
      ]
    }
  }
  showMarkers = () => {
    return this.state.cords.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.lat,
       lng: store.lng
     }}
     onClick={() => console.log("Clicked")} />
    })
  }
  

  render() {
    const containerStyle = {
      width: '70%',
  height: '90%'
    };
    return (
      <div className="section-title">

      <div id="maps" className="text-center">
      <div style={containerStyle} className="container">

          <h2>Location</h2>
          <Map
          
          google={this.props.google}
          zoom={5}
          style={mapStyles}
          initialCenter={{ 


            lat: 44.780655, 
            lng: 20.397457,
        }}>
          {this.showMarkers()}
        </Map>
        
    </div>
    </div>
    </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(Maps);

