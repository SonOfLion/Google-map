import React, {useEffect, useRef, useState} from 'react';

import './GoogleApi.scss';

interface IMap {
  mapType: google.maps.MapTypeId,
  mapTypeControl: boolean
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

const GoogleApi: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<GoogleMap>();

  const startMap = (): void => {
    if (!map) {
      defaultMapStart();
    }
  };

  useEffect(startMap,[map]);

  const defaultMapStart = (): void => {
    const defaultAddress = new google.maps.LatLng(65.166, 13.369);
    initMap(5, defaultAddress);
  };

  const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
    if (ref.current) {
      setMap(
        new google.maps.Map(ref.current, {
          zoom: zoomLevel,
          center: address,
          mapTypeControl: mapTypeControl,
          streetViewControl: false,
          zoomControl: true,
          mapTypeId: mapType
        })
      );
    }
  };

  return (
    <div className="map-container">
      <div ref={ ref } className="map_container__map"></div>
    </div>
  )
};

export default GoogleApi;

// <GoogleMap
//   defaultZoom={ 10 }
//   defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
// />

// <WrappedMap
//   googleMapURL={`
//         https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,
//         places&key=AIzaSyCNw_Ce_6Js45GHQsLWhNUr0YsJ6lytF8k`}
//   loadingElement={<div style={{ height: "100%" }} /> }
//   containerElement={<div style={{ height: "100%" }} /> }
//   mapElement={<div style={{ height: "100%" }} /> }
// />