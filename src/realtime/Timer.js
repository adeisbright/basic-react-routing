import React , {useState , useEffect , useRef} from "react" 

export default function App(){
    let [message , setMessage] = useState("")
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
        const SERVER = "ws://localhost:5000"
        let socket = new WebSocket(SERVER) 

        socket.addEventListener("open" , event => {
            socket.send("Hello , my small server")
        })

        socket.addEventListener("message" , event => {
            console.log("I received this message from the server" , event)
            setMessage(event.data)
        })
        socket.addEventListener("error" , event => {
            console.log("The error is " , event)
        })
    })
    return (
        <>
            <h1>Working with Websockets</h1>
            <p>{message}</p>
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