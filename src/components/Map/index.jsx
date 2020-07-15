
import React from 'react';

const { Map: LeafletMap, TileLayer, Marker, Popup } = window.ReactLeaflet

const position = [51.505, -0.09]
const Example = () => (
  <LeafletMap center={position} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        <span>
          A pretty CSS3 popup. <br /> Easily customizable.
        </span>
      </Popup>
    </Marker>
  </LeafletMap>
)


export default  Example