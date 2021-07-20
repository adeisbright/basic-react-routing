import React , {useState , useCallback , useRef} from "react" 
import {
    GoogleMap , 
    useLoadScript , 
    Marker , 
    InfoWindow
} from "@react-google-maps/api" 
import usePlacesAutocomplete  , {
    getGeocode , 
    getLatLng , 
} from "use-places-autocomplete"

import {
    Combobox , 
    ComboboxInput , 
    ComboboxPopover , 
    ComboboxList , 
    ComboboxOption
} from "@reach/combobox"

import "@reach/combobox/styles.css";
const Search = ({panTo}) => {
    const {
        ready , 
        value , 
        suggestions : {status , data} , 
        clearSuggestions , 
        setValue

    } = usePlacesAutocomplete({
        requestOptions : {lat : () => 6.537216  , lng : () => 3.3488895999999997} , 
        radius : 200*1000
    })
    return (
        <Combobox 
            onSelect={async (address) => {
                setValue(address ,false)
                clearSuggestions()
                try {
                    let results = await getGeocode({address}) 
                    let {lat , lng} = await getLatLng(results[0])
                
                    panTo({lat , lng})
                }catch(error){
                    console.error(error)
                }
            }}
            style={{position : "absolute" , float : "right" , zIndex : 10}}    
        >
            <ComboboxInput
                value={value} 
                onChange={e => setValue(e.target.value)}
                disabled = {!ready}
                placeholder="Enter the event address"
            />
            <ComboboxPopover>
                {
                    status === "OK" && data.map(({id , description}) => 
                        <ComboboxOption key={id} value={description} /> 
                    )
                }
            </ComboboxPopover>
        </Combobox>
    )
}
const libraries = ["places"]
const mapContainerStyle = {
    width : "100vw" , 
    height : "100vh"
}
const zoom = 15 
const center = {
    lat : 6.537216 ,
    lng :  3.3488895999999997
}
const options = {
    disableDefaultUI : true ,
    zoomControl : true
}
export default function App(){
    const {isLoaded , loadError} = useLoadScript({
        googleMapsApiKey : "AIzaSyCyD3ZOIglTRben6KCOvjlYhA2ANU6PXwg" , 
        libraries , 
    }) 
    let [markers , setMarkers] = useState([])
    const onMapClick = useCallback((event) => {
        setMarkers(current => [...current , {
            lat : event.latLng.lat() , 
            lng : event.latLng.lng() , 
            time : new Date()
        }])
        console.log(markers)
    }, [])

    let mapRef = useRef() 
    const onMapLoad = useCallback(map => {
        map = mapRef.current
    })
    let [selectedMarker , setSelectedMarker] = useState(null)

    const panTo = useCallback(({lat , lng}) => {
        
        console.log(mapRef)
        mapRef.current.panTo({lat , lng}) 
        mapRef.current.setZoomLevel(15)
    } , [])

    if (loadError) return <h1> Load Error</h1>
    if(!isLoaded) return <h2>Loading... </h2>
    return (
        <div>
            <div className="mapper">
                <h1 
                    style={{
                        position:"absolute",
                        zIndex : "10" , 
                        margin:"0"
                    }}
                >
                    Bigjara
                </h1>
                <Search panTo={panTo}/>
                <GoogleMap 
                    mapContainerStyle={mapContainerStyle}
                    zoom = {15} 
                    center = {center}
                    options = {options}
                    onClick={onMapClick}
                    onLoad={onMapLoad}
                >
                {markers.map(marker => 
                    <Marker
                        key={marker.time.getTime()}
                        position={{lat : marker.lat , lng:marker.lng}}
                        onClick={() => setSelectedMarker(marker)}
                    />
                )}
                {selectedMarker ? (
                    <InfoWindow
                        position={{lat : selectedMarker.lat , lng : selectedMarker.lng}}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <p>Adeleke lives here</p>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
            </div>
            
        </div>
    ) 
}