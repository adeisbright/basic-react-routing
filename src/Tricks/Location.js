import react  , {Fragment ,Suspense ,  lazy, useState , useRef, useEffect} from "react" 
import {Link} from "react-router-dom"
import { Loader } from '@googlemaps/js-api-loader';

const Navigation = lazy(() => import("./Navigation")) 
const Jumbotron = lazy(() => import("./Jumbotron"))

const Location = () => { 
    let [lat , setLat] = useState(null) 
    let [long , setLong] = useState(null)
    let [full , setFull] = useState(false)
    let [screenMessage , setScreenMessage] = useState("Fullscreen")
    let el = useRef(null)
    let map = useRef(null)
    let enableFullScreen = () => {
        let m = el.current 
        console.log(m)
        if (m.requestFullscreen){
            if (full){
                if(document.exitFullscreen){
                    document.exitFullscreen() 
                    setFull(false)
                    
                    setScreenMessage("Enable")
                }
            }else{
                m.requestFullscreen()
                setScreenMessage("Exist")
                setFull(true)
            }
            
        }
    }
    let enableLocation = () => {
        const options = {
            enableHighAccuracy : true , 
            maximumAge : 30000 , 
            timeOut : 27000
        }
        const error = () => alert("Location is not enabled")
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((p , e = error , option = options ) => {
                
                const latitude  = p.coords.latitude.toFixed(2) 
                const longitude = p.coords.longitude.toFixed(2)  
                console.log(p.coords.latitude)
                setLat(latitude)
                setLong(longitude)
            })
        }else{
            console.log("Location no dey")
        }
        
    }
    
    useEffect(() => {
        console.log(map.current)

        const loader = new Loader({
            apiKey: "AIzaSyCyD3ZOIglTRben6KCOvjlYhA2ANU6PXwg",
            version: "weekly",
            libraries: ["places"]
        })

        const mapOptions = {
            center : {
                lat : 6.537216 ,
                lng :  3.3488895999999997
            } , 
            zoom : 15
        }

        loader
            .load()
            .then((r) => {
                // new google.maps.Map(map.current, mapOptions);
                console.log("E show something")
                
            })
            .catch(e => {
                // do something
                console.error(e)
            });
        })
    return (
        <Fragment>
            <Navigation/>
            <section className="bg-white" style={{paddingTop: "6rem",marginBottom:"1.5rem"}} ref={el}>
                <div className="full-frame">
                <div className="framer">
                    <div className="frame justify-content-between">
                        <div className="fr-md-7 fr-12 pad-bottom-1 pad-top-1">
                            <h2 className="hero-title m-b-1">
                                Location based services
                            </h2>
                            <p className="hero-text m-b-1-5">
                                Using Web API Geolocation , Google Services and third 
                                party APIs to build location enabled services
                            </p>
                            <Link
                                type="button" 
                                role="button" 
                                to="#faq" 
                                className="button no-outline no-border bg-white dark-blue-solid-border blue-text m-r-1 m-b-1 font-1 no-decoration"
                                id="started"
                                onClick={enableFullScreen}
                            >
                               {screenMessage}
                            </Link>
                            <button
                                type="button" 
                                role="button" 
                                to="/signup" 
                                className="button  no-outline white-solid-border  bg-blue-dark white-text border-white  font-1"
                                id="started"
                                onClick={enableLocation}
                            >
                                Enable
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="framer center-text">
                <p>Map go enter here</p>
                <div id="map" ref={map} style={{height:"100%"}}></div>
                {long ? (
                    <h3>Your location :  {lat} latitude and {long} longitude</h3>
                ) : (
                    <h3> Enable Location sharing to proceed</h3>
                )}
            </section>
        </Fragment>
    )
}

export default Location