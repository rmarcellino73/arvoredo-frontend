import React from 'react'
import { useGoogleMaps } from "react-hook-google-maps";

export default function Position({lat, long}) {
  
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyAX7l8Jy09vudax2S55rbC2XjPLlrJ2xHI",
    {
      center: { lat: lat,  lng: long },
      zoom: 17
    }
  );
  
  return (
    <div ref={ref} style={{ width: 399, height: 300 }} />
  )
}
