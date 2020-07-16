import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { Container } from 'react-bootstrap';


const styles = {
  wrapper: { 
    height: 200, 
    width: '100%', 
    margin: '0 auto', 
    display: 'flex' 
  },
  map: {
    flex: 1
  } 
};

const MapCountry = props => {
  const {latitud , longitud } = props;
  const center = [latitud , longitud ]
  const url= 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png'
  const zoom = 5;
  return (
    <Container fluid style={styles.wrapper}>
      <Map style={styles.map} center={center} zoom={zoom}>
        <TileLayer url={url} />
      </Map>
    </Container>
  );
}


export default MapCountry;