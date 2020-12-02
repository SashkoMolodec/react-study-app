import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import usePlacesAutocomplete,
 { getGeocode, getLatLng, }
  from "use-places-autocomplete";
import { Combobox, 
  ComboboxInput, 
  ComboboxPopover, 
  ComboboxList, 
  ComboboxOption } from "@reach/combobox";


const containerStyle = {
  width: '100vw',
  height: '100vh'
};
 
const center = {
  lat: 49.839684,
  lng: 24.029716
};
 const options = {
  disableDefaultUI: true,
  zoomControl: true,
 }

 function Search() {
  const {
    ready,
    value,
    suggestions: {status, data},
    setValue, 
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 49.839684,
        lng: () => 24.029716 },
        radius: 200 * 1000,
    }
  });
  return (
    <div className="search">
    <Combobox 
    onSelect={async (address) => {
    try {
      const results = await getGeocode({address});
      console.log(results[0])
    } catch(error) {
      console.log("error!")
    }
  }}
  >

  <ComboboxInput value={value} onChange={(e) => {
    setValue(e.target.value);
  }}
  
  placeholder="Enter an address" />
  <ComboboxPopover>
    {status === "OK" && data.map(({id, description}) =>(
      <ComboboxOption key={id} value={description} />
    ))}
  </ComboboxPopover>
  </Combobox>
  </div>
  );
}
function MyComponent() {
  
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat:event.latLng.lat(),
        lng:event.latLng.lng(),
        time: new Date()
    },
  ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  return ( <div>
    
    <LoadScript googleMapsApiKey="AIzaSyAFwUpEqV2eCsWKrp5Woq0YCg_3auodBOU">
    <h1>Google Maps API</h1>


    <Search />


      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
        
        >
        {markers.map((marker) => (
        <Marker key={marker.time.toISOString()}
        position={{lat:marker.lat, lng: marker.lng}}
        onClick={() => {
          setSelected(marker);
        }}
        />
        ))}
        {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}}
        onCloseClick={() => {
          setSelected(null);
        }}>
          <div>
            <h2>Event</h2>
            <p> Spotted {formatRelative(selected.time, new Date())}</p>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
    </LoadScript>
    </div>)
    
}

export default React.memo(MyComponent)

