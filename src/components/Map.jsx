import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_KEY;

export default function Map({
  handleMarker,
  center,
  zoom = 3.5,
  width = '100%',
  height = '300px',
  onInit,
}) {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    // Don't create the map until the ref is connected to the container div.
    // Also don't create the map if it's already been created.
    if (ref.current && !map) {
      console.log(ref.current)
      const map = new mapboxgl.Map({
        container: ref.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center,
        zoom,
      });
      setMap(map);
      handleMarker(map)
      // onInit(map);
    }
  }, [ref, center, zoom, map, onInit]);
  return <div ref={ref} style={{ width, height }} />;
}