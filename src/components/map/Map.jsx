import React, { Component } from 'react';
// import L from 'leaflet';
import './map.scss'
// import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker,  Popup} from "react-leaflet";

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

class MapExample extends Component<{}, State> {
  state = {
    lat: -12.000218,
    lng: -77.083402,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
   
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Bienvenidos a CodiGO  <br /> Sede : Lima Norte 
          </Popup>
        </Marker>
        
      </Map>
    )
  }
}

export {
  MapExample
}