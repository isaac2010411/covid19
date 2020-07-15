import React from 'react';
import { Map, TileLayer } from 'react-leaflet';


const styles = {
  wrapper: { 
    height: 400, 
    width: '100%', 
    margin: '0 auto', 
    display: 'flex' 
  },
  map: {
    flex: 1
  } 
};

const Moves = props => {
  const {latitud , longitud } = props;
  console.log(latitud,longitud)
  const center = [latitud , longitud ]
  const url= 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png'
  const zoom = 8;
  return (
    <div style={styles.wrapper}>
      <Map style={styles.map} center={center} zoom={zoom}>
        <TileLayer url={url} />
      </Map>
    </div>
  );
}


export default Moves;