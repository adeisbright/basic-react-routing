import React , {useEffect , useState ,useRef ,  Fragment} from "react" 
import io from "socket.io-client" 
import {getData} from "../js/api"
import "../css/easyframer.css" 
import "../css/style.css"

const Counter = props => {
    let [count , setCount] = useState(0) 
    let handleCount = () => {
        setCount(count + 1)
    }
    return (
        <button 
            onClick={handleCount}
            className="button no-border no-outline bg-dark white-text radius-5">
            {count}
        </button>
    )
}

const FetchData = props => {
    let [response , setResponse] = useState("Loading...") 
    
    useEffect(() => {
        getData(props.url)
        .then(res => setResponse(res.message))
        .catch(error => console.error(error))
    })
    return (
        <>
            <h3>Fetching Data From the server</h3>
            <p>{response}</p>
        </>
    )
}

const Todo = props => {
    let [todo , setTodo] = useState([]) 
    // How to reference data in an input field and use it on another element ? useRef 
    // How to pass argument when event listener is invoked
    // Anything that changes the DOM should be created inside an effectful code
    // Effectful codes without cleanup : Manual DOM Mutations , Network Request , and logging 
    const addTodo = () => {
        //Get the data from  a provide 
        // Feed the data to the consumer 

    }
}
const Event = props => {
    let [status , setStatus] = useState(false) 
    const handleStatusChange = props => {
        setStatus(status ? !status : !status)
    }
    useEffect(() => {
        document.title = status ? "Yes" : "No"
        return function cleanUp() { 
            {/*This effect will run when a component unmount*/}
            setTimeout(() => {
                if (status){
                    console.log("Nonsense")
                }
            } , 1000)
        }
    } , [status])
    return (
        <>
            <button 
                className="bg-blue white-text radius-5 shadow text-center button"
                onClick={handleStatusChange}
            >
                {status ? "Now" : "Then"} 
            </button>
        </>
    )
}
const Formed = props => {
    const [students , setStudents] = useState([]) 
    const [data , setData] = useState([])
    let inputValue = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        //inputValue = inputValue.current.value
        setStudents(students.concat(inputValue.current.value))
        inputValue = ""
        console.log(students)
    }
    useEffect(() => {
        setData(students) //The local state is maintained across re-renders. If you do 
        // data.concat(students) the values will be repeated
    } , [students])

    return (
        <>
            <div>
                {data.length > 0 ?
                <ul>
                    {data.map((val , i) => <li key={i}>{val}</li>)}
                </ul>
                :
                <ol>
                    {data.map((val , i) => <li key={i}>{val}</li>)}
                </ol>
                }
            </div>
            <form method="post" onSubmit={handleSubmit} style={{margin:"20px"}}>
                <input ref={inputValue} className="input input-border-faint pad-10" type="text"/>
                <button     
                    type="submit"  
                    className="bg-blue white-text radius-5 shadow text-center button">
                    Register 
                </button>
            </form>
        </>
    )
}
export default function App(props){
    let [items , setItems] = useState([])
    let [m , setM] = useState("")
    let [name , setName] = useState([])
    let i = 1 //Place i outside if you want it to increment
    
    const handleButtonClick = () => {
        console.log(items)
        setItems(items.concat(i)) 
    }

    const handleSocket = () => {
        const ServerNameSpace = "http://127.0.0.1:5000"
        const socket = io(ServerNameSpace , {forceNew : true , reconnect : true})  
        socket.on("connect" , function(){
            console.log("Connected to the backend")
        })
        console.log("This is rubbish")
        // socket.on("message" , data => {
        //     setName(prevName => prevName.concat(data.name))
        // })
    }
    useEffect(() => {
        handleSocket()
    } , [])
   
    const sendMessage = event => {
        event.preventDefault() 
        console.log("Yes")
        
    }
    return (
        <>
            <div className="wrapper">
                <section>
                    <div className="frame">
                        <div className="fr-4">
                            <FetchData url = "http://localhost:5000/json"/>
                            <Event />
                            <Formed />
                        </div>
                        <div className="fr-4">
                            <h2>React and Socket.IO</h2>
                            
                            <Counter />
                            <ul>
                                {items.length > 0 ? 
                                items.map((item , index) => 
                                    <li key={index + 0}>{item}</li>
                                ) : <li>Yes</li>
                                }
                            </ul>
                            <button  
                                className="button no-border no-outline pad-10 bg-dark white-text"
                                onClick={handleButtonClick}
                            >
                                Click Now
                            </button>
                        </div>
                        <div className="fr-4">
                            <button  
                                className="button no-border no-outline pad-10 bg-dark white-text"
                                onClick={sendMessage}
                            >
                               Chat
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}