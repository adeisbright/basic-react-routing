import React , {useEffect , useState , useRef} from "react" 
import "../css/easyframer.css" 
import "../css/chat.css" 
import {getData , sendData} from "../js/api" 
import {validateName} from "../js/validate" 
import worker from "./Worker" 
import WebWorker from "./WorkerSetup"
import register from "./ServiceWorker" 
import Notify from "./Notification" 
import Subscribe from "./Subscription" 
import Build from "../images/build.svg"
const UserOnline = props => {
    // let [isOnline , setIsOnline] = useState(false) 
    // setIsOnline(props.isOnline ? props.isOnline : isOnline)
    return (
        <>
            {props.isOnline ? (
                <button 
                    onClick={props.handleClick}
                    className="button no-border no-outline bg-green white-text radius-5">
                        Online
                </button>
            ) : (
                <button 
                    className="button no-border no-outline bg-red white-text radius-5">
                        Offline
                </button>
            )}
        </>
    )
}

const DisplayName = props => {
    let [userName , setUserName] = useState("") 
    let nameValue = useRef(null)
    const handleUserName = event => {
        event.preventDefault() 
        nameValue = nameValue.current.value
        if (nameValue !== "" ||  validateName(nameValue) !== null){
            setUserName(nameValue)
        }
    }
    return (
        <React.Fragment>
            {userName ? (
                <h3>{userName}</h3>
            ) : (
                <form 
                    method="post"
                    onSubmit={handleUserName}>
                    <div className="frame" >
                        <input 
                            className="input input-border-faint pad-10"
                            type="text" 
                            placeholder="Please , enter your name" 
                            ref={nameValue}/>

                        <button 
                            className="button no-border no-outline bg-blue white-text" >
                                Create
                        </button>
                    </div>
                </form>
            )}
        </React.Fragment>
    )
}

const CreateMessage = props => {
    let [messages , setMessages] = useState([])
    let [serverMessage , setServerMessage] = useState("")
    let [users , setUsers] = useState([])
    let chat = useRef("Ade")
    const socketServer = "ws://localhost:4000" 
    let socket = new WebSocket(socketServer)
    const handleBlur = event => {
        event.preventDefault() 
        //chat =  chat.current.value 
        let val = event.target.value
        if (socket.readyState === 1){
            socket.send(val)
        }else{
            console.log("Socket is still connecting")
            console.log(socket.readyState)
        }
        socket.onclose = function(){
            console.log("E dey close")
        }
        socket.onopen = function(){
            console.log("E ope ")
        }
        socket.onerror = function(){
            console.log("Error dey")
        }
        socket.onmessage = function(){
            console.log("Message wa")
        }
    }
    let title = "New booking alert" 
    let notifyOptions = {
        body : "A user is interested in ordering some items from your shop" , 
        vibrate : [100 , 50 , 100] , 
        icon : `${process.env.PUBLIC_URL}/logo192.png` , 
        data : {
            dateOfArrival : Date.now() , 
            primaryKey : 1
        } , 
        actions : [
            {action : "explore" , title : "Accept" , icon : `${process.env.PUBLIC_URL}/logo192.png`} , 
            {action : "close" , title : "Reject" , icon : Build}
        ]
    }
    // const myWorker = new WebWorker(worker)
    // let fetchUsers = () => {
    //     myWorker.postMessage("How do you do")
    //     myWorker.addEventListener("message" , e => {
    //         console.log(e.data)
    //         setUsers(users.concat(e.data))
    //     })
    // }
    useEffect(() => {
        
        socket.addEventListener("open" , data => {
            console.log("E dey open")
                socket.addEventListener("message" , data => {
                    setServerMessage(data.data) 
                    console.log(data.data)
                    setMessages(prevMessage => prevMessage.concat(data.data)) 
                   console.log(messages.length)
                })
        })
        socket.addEventListener("error" , event => {
            console.log(event)
        })
        // socket.onclose = function(){
        //     console.log("It aff close")
        //     setInterval(() => {
        //         new WebSocket(socketServer)
        //     } , 1000)

        // }
        register("service-worker.js")
        Notify()
        Subscribe()

    })

    return (
        <>
            {messages.length > 0 ? (
                <ul>
                    {
                        messages.map((message , i) => 
                            <li key={i}>{message}</li>
                        )}
                </ul>
            ) : (
                <p>No messages yet to display</p>
            //     <button onClick={fetchUsers} >
            //     Click
            // </button>
            )}
            <form 
                method="post"
               >
                <div className="frame" >
                    <input onBlur={handleBlur}
                        className="input input-border-faint pad-10"
                        type="text" 
                        placeholder="Please , enter your name" 
                        />

                    <button 
                        className="button no-border no-outline bg-blue white-text" >
                        Send
                    </button>
                </div>
            </form>
        </>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <div className="framer">
                <div className="frame">
                    <div className="fr-2">
                       
                    </div>
                    <div className="fr-8">
                        <div className="frame">
                            <div className="fr-6">
                                <DisplayName />
                            </div>
                            <div className="fr-6">
                                <UserOnline isOnline={true}/>
                            </div>
                        </div>
                        <main>
                            <CreateMessage />
                        </main>
                    </div>
                    <div className="fr-2"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App