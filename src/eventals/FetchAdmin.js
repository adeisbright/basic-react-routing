import {
    React , 
    Component , 
    Lazy , 
    Suspense , 
    Fragment  , 
    useState , 
    useEffect
} from "react" 

import Build from "../images/build.svg" 
import "../css/easyframer.css" 
import "../css/style.css"  
import {sendData ,getData ,   selector} from "../js/api"  
import {
    validateName , 
    validateEmail , 
    validatePassword
} from "../js/validate"
const IntroText = <h1 className="center-text bold-700 uppercase bg-dark white-text"> Welcome to Eventals Internal API </h1> /*  */


class AdminCreator extends Component { 
    constructor(props){
        super(props)
        this.state = {
            nameField : {
                value : "" , 
                text : ""
            } ,
            emailField : {
                value : "" , 
                text : ""
            } ,
            passwordField : {
                value : "" , 
                text : "Adeleke"
            } ,
            confirmField : {
                value : "" , 
                text : ""
            } ,
            api : ""
        } 
        this.handleBlur   = this.handleBlur.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this) 
    } 
    componentDidMount(){
        getData("http://localhost:4500")
		.then(res => {
            this.setState({api: res.message})
            //window.location.replace("http://localhost:4500")
        })
		.catch(err => this.setState({jsonBody : "Nothing Now"}))
    }  
    handleBlur(e){
        let {target} = e 
        let {id , value , classList , parentNode} = target  
        switch(target.id){
            case "email" : 
                if (validateEmail(value).value !== null) {
                    this.setState({
                        emailField : {
                          value : value , 
                          text : "Good" , 
                          theClass : "red-text"
                        }
                    })
               }
               break; 
            case "name" : 
                if (validateName(value).value !== null) {
                    this.setState({
                        nameField : {
                            value : value , 
                            text : "Good" , 
                            theClass : "red-text"
                        }
                    })
                }
                break; 
            case "password" : 
                if (validatePassword(value).value !== null) {
                    this.setState({
                        passwordField : {
                            value : value , 
                            text : "Good" , 
                            theClass : "red-text"
                        }
                    })
                }
                break; 
            case "confirm" : 
                if (value !== "" && value === this.state.passwordField.value && value !== null) {
                    this.setState({
                       confirmField : {
                            value : value , 
                            text: "The Last name" , 
                            theClass : "red-text"
                        }
                    })
                }
                break; 
            default : 
              return false
        }
    } 
    handleSubmit(e){
        e.preventDefault() 
        let name = this.state.nameField.value , 
        email = this.state.emailField.value  , 
        password = this.state.passwordField.value , 
        confirmPassword = this.state.confirmField.value 
        if (name && email &&  password === confirmPassword){ 
            sendData("http://localhost:4500/api/v1/signup/admin" , {
                name : name , 
                email : email , 
                password : password , 
                confirmPassword : confirmPassword
            }).then(res => {
                this.setState({
                    api : `status : ${res.status} : message : ${res.message}`
                })
            }).catch(err => {
                this.setState({
                    api : err.message
                })
            })
          
        }
    } 
    render(){
        return (
           <form  onSubmit={this.handleSubmit}>
               
                <label htmlFor="name">Name</label> 
                <input 
                   id="name"
                   type="text" 
                   className="input input-border-faint pad-10 m-b-1" 
                   onBlur={this.handleBlur}
                /> 
                <span style={{display : "block"}}>{this.state.nameField.text}</span>
               <label htmlFor="name">Email</label>
               <input type="email" id="email"
                   className="input input-border-faint pad-10 m-b-1" 
                   onBlur={this.handleBlur}
                />
                <span style={{display : "block"}}>{this.state.emailField.text}</span>
               <label htmlFor="name">Password</label>
               <input 
                   id="password"
                   type="password" 
                   className="input input-border-faint pad-10 m-b-1" 
                   onBlur={this.handleBlur}
                /> 
                <span style={{display : "block"}}>{this.state.passwordField.text}</span>
               <label htmlFor="name">Confirm Password</label>
               <input 
                   id="confirm"
                   type="password" 
                   className="input input-border-faint pad-10 m-b-1" 
                   onBlur={this.handleBlur}
               />
                <span style={{display : "block"}}>{this.state.confirmField.text}</span>
                <input 
                   type="submit" 
                   className="input bg-blue white-text input-border-faint m-b-1 pad-10"
                /> 
                <p> {this.state.api} </p>
           </form>
        )
    }
} 

class Login extends Component { 
    constructor(props){
        super(props)
        this.state = {
            api : ""
        } 
        this.handleSubmit = this.handleSubmit.bind(this) 
    } 
  
    handleSubmit(e){
        e.preventDefault() 
       
        if (true){ 
            sendData("http://localhost:4500/api/v1/auth/admin" , {
                email : "adenababanla@gmail.com" , 
                password : "12345678", 
            }).then(res => {
                this.setState({
                    api : `status : ${res.status} : message : ${res.message}`
                })
            }).catch(err => {
                this.setState({
                    api : err.message
                })
            })
          
        }
    } 
    render(){
        return (
           <form  onSubmit={this.handleSubmit}>
               <label htmlFor="name">Email</label>
               <input type="email" id="emailLogin"
                   className="input input-border-faint pad-10 m-b-1" 
                 
                />
                {/* <span style={{display : "block"}}>{this.state.emailField.text}</span> */}
               <label htmlFor="name">Password</label>
               <input 
                   id="passwordLogin"
                   type="password" 
                   className="input input-border-faint pad-10 m-b-1" 
                  
                /> 
                {/* <span style={{display : "block"}}>{this.state.passwordField.text}</span> */}
               
                <input 
                   type="submit" 
                   value="Login"
                   className="input bg-blue white-text input-border-faint m-b-1 pad-10"
                /> 
                <p> {this.state.api} </p>
           </form>
        )
    }
}

export default function FetchAdmin(props) {
    return (
        <>
            {IntroText}
            <div className="framer">
                <div className="frame">
                    <div className="fr-md-5"> 
                        <div style={{paddingRight : "90px"}}> 
                            
                            <h2>Creating  , and Listing Admin</h2>
                            <AdminCreator />
                        </div>
                    </div> 
                    <div className="fr-md-4">
                        <h2>List of Existing Admin</h2> 
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}