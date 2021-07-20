import React  from "react" 
import "./css/easyframer.css"
import "./css/style.css"

const  userName = "Fuad Adegoke"
let isOld = false

let message = <p> Hello {userName} is not {isOld}</p> //JSX = Javascript as XML
let sum = <p>{1 + 2}</p>
 
function Button(props){
    return (
        <React.Fragment>
            <button  
            className="button no-border no-outline bg-blue white-text radius-5 shadow m-r-2" >
                {props.content}
            </button>
        </React.Fragment>
    )
}
const students = [
    {name : "Fuad" , email : "fuad@gmail.com"} ,
    {name : "Ayo" , email : "ayo@gmail.com"} , 
    {name : "Femi" , email : "femi@gmail.com"} , 
    {name : "Mohammed" , email : "mohammed@gmail.com"}
]

const PrintStudents = props => {
    const pupils = props.pupils.map((pupil , index) => 
        <li key={pupil.email}>{pupil.name} : {pupil.email}</li>
    )
    return (
        <li className="framer">
            {pupils}
        </li>

    )
}

function Main(props){
    return (
        <>
            <main style={{marginLeft : "50px"}}>
                <h1>Hello World</h1>
                {message}
                {sum}
                <h2 style={{marginRight:"3px" , color : "#fff" , backgroundColor:"#000"}}>{props.question}</h2>
                <Button content="Congratulations"/>
                <Button content="Join us"/>
                <Button content="Subscribe"/>
                <Button content="Report"/>
                <Button content="Enroll"/>
                <Button content="Vote"/>
            </main>
            <aside>
                <PrintStudents pupils={students} />
            </aside>
        </>
    )
}

export default Main 
/**
 * 1. JSX 
 * 2. Element 
 * 3. Component = Functional or class component 
 * SPA = Single Page Applications 
 */