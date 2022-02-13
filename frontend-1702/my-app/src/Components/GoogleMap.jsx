import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./googlemap.css";



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };


 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  render() {
    return (
      <Map google={this.props.google}
          style={{position: 'absolute !important' , width: '100%', height: '425px'}}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}>
        <Marker onClick={this.onMarkerClick}
                name={'Distrito'}/>
 
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDIXfC8X2HsmQleyIgjaxxObp6pxx79q4k')
})(MapContainer)