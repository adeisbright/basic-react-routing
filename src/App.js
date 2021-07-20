import {react , Component , Fragment} from "react"  
import "./EasyFramer.css"
import Button from "./Button" //Importing a component
let userName = "Charity" 
let message  = <p className="bg-dark white-text">{userName} was in class yesterday</p> //An example of JSX 

//Function component
function ShowMessage(props){ 
    return(
        <p>The name is {props.name} </p>
    )
} 
//Creating List 
let students = ["Afolabi Wale" , "Tola Owolabi" , "Okezie Emeka" , "Okoye Favour"] 

function DisplayStudents(props){
    let students = props.students.map((student , i) => 
        <li key={i}>
            {student} ''
        </li>
    )
    return(
        <ol>
            {students}
        </ol>
    )
}

// Event Handling 
class Form extends Component {
    constructor(props){
        super(props) 
        this.state = {
            focusMessage : ""
        } 
        this.handleFocus = this.handleFocus.bind(this)
    } 
    handleFocus(){
        this.setState({
            focusMessage : "Are you feeling react ? "
        })
    }
    render(){
        return (
            <Fragment>
                <section className="section-wrapper">
                    <div className="framer">
                        <div className="frame">
                            <div className="fr-4">
                                <form className="shadow bg-white pad-20 radius-5 m-b-1">
                                    <label htmlFor="userName">Username</label> 
                                    <input 
                                        type="text" 
                                        placeholder="Enter your username" 
                                        className="input input-border-faint pad-10 m-b-1"
                                        id="userName" 
                                        onFocus = {this.handleFocus}
                                    />
                                    <p>{this.state.focusMessage}</p>
                                    <label htmlFor="email">Email</label> 
                                    <input 
                                        type="email" 
                                        className="input input-border-faint pad-10 m-b-1"
                                        id="email"
                                    />
                                    <label htmlFor="password">Password</label> 
                                    <input 
                                        type="password" 
                                        className="input input-border-faint pad-10 m-b-1"
                                        id="password" 
                                        autocomplete="false"
                                    /> 
                                    <input 
                                        type="submit" 
                                        className="input input-border-faint pad-10 bg-red white-text"
                                        id="submit" 
                                        value="Register"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
} 

class ToggleBackground extends Component {
    constructor(props){
        super(props) 
        this.state = {
            textOnButton : "Register"
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            textOnButton : this.state.textOnButton === "Register" ? "Login " : "Register"
        })
    }
    render(){
        return(
            <button 
                onClick={this.handleClick}
                className="bg-red white-text no-border no-outline radius-5 shadow pad-10 m-b-1"
            > 
                {this.state.textOnButton}
            </button>
        )
    }
}
//Class Component
export default class  Home extends Component {
    render(){
        return (
            <>
                <ToggleBackground />
                <h1>Welcome to React</h1> 
                <Form />
                {/* <Button /> */} 
                <Button text={"Register"} /> 
                <Button text={"Register"} />
                <Button text={"Register"} />
                {message} 
                <ShowMessage name={"Adeleke"}/>
                <ShowMessage name={"Bunmi"}/>
                <ShowMessage name={"Adaete"}/> 
                <h2> Displaying Students without order</h2>
                <ul> 
                    { 
                        students.map((student , i) => <li key={i}>{student}</li>)
                    }             
                </ul>
                <h2>Displaying students with order</h2>
                <DisplayStudents students={students}/>
              
            </>
        )
    }
} 
