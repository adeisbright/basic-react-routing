import React , {Fragment , useEffect , useState} from "react"
import WebWorker from "../realtime/WorkerSetup.js" 
import worker from "../realtime/Worker.js"
import "./easyframer.css"


export default function App(){
    let [notifications , setNotifications] = useState([])
    let [error , setError] = useState(null)
    let [failed , setFailed] = useState(true)
    useEffect(() => {

        let appWorker = new WebWorker(worker)
        appWorker.addEventListener("message" , e => {
            let data = e.data
            if (data.type === "message"){
                setFailed(false)
                setNotifications(data.message)
            }else if (data.type === "error"){
                setFailed(false)
                setError(data.message)
            }
        })
        
    }  , [notifications])
    return (
        <Fragment>
            {error ? (
                <p>Sorry an error occured : {error}</p>
            ):(
                <h1>Hello  , Server Sent</h1>
            )}
            {!failed ? (
                <ol>
                    { 
                        notifications.map((notification , index) => 
                            <li key={index}>
                                {notification.description}
                            </li>
                        )
                    }
                </ol>) : (
                <p>Your notifications will show here</p>
            )}
        </Fragment>
    )
}