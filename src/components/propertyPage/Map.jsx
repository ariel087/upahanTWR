import React, { useEffect, useState } from 'react';

const Map = () => {
  // Default coordinates for the map's initial center
  const defaultLatitude = 14.9669976;  // Default location (e.g., Manila)
  const defaultLongitude = 120.9332742;
  const [latitude, setLatitude] = useState(defaultLatitude);
  const [longitude, setLongitude] = useState(defaultLongitude);

  useEffect(() => {
    // Ensure the Google Maps API script is loaded before using the map
    if (window.google) {
      const mapContainer = document.getElementById('map');
      
      const map = new window.google.maps.Map(mapContainer, {
        center: { lat: latitude, lng: longitude },
        zoom: 12,
        styles: [
          { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
          { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
          // Add more custom styles if needed
        ],
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: 'Custom Location',
        icon: 'https://example.com/custom-icon.png', // Custom marker icon
      });

      // Autocomplete for the search bar
      const input = document.getElementById('address-input');
      const autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) return;

        setLatitude(place.geometry.location.lat());
        setLongitude(place.geometry.location.lng());

        map.setCenter(place.geometry.location);
        map.setZoom(15);

        marker.setPosition(place.geometry.location);
        marker.setTitle(place.name);
      });
    }
  }, [latitude, longitude]);

  return (
    <div className='w-full h-full px-48 mt-10'>
     <div className='flex flex-col gap-10'>
     <span className='text-4xl font-semibold'>Where you’ll be</span>
      <span className='text-2xl font-semibold text-gray-500 gap-2'>Sample Property Address Location</span>
      </div>
       <div
      className='rounded-md m-auto mb-10'
      id="map"
      style={{
        width: '100%',
        height: '600px',
        marginTop: '20px',
      }}
      >
     
      </div>
    </div>
  );
};

export default Map;
