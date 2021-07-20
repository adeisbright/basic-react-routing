import React , {Fragment , Component} from "react" 

import "../css/easyframer.css" 
import "../css/style.css" 

export default class App extends Component {
    constructor(props){
        super(props) 
        this.state ={
            text : "Login" ,
            isLogin : true
        }
        this.handleClick = this.handleClick.bind(this)
    } 
    handleClick(){
        this.setState({
           text : this.state.text === "Login" ? "Logout" : "Login"  , 
           isLogin : !this.state.isLogin
        })
    } 
    render(){
        return (
            <>
                <button  onClick={this.handleClick}
                    className="button no-border radius-5 shadow no-outline bg-blue white-text" 
                >
                    {this.state.text}
                </button> 
                {/* Conditional Rendering */}
                {
                    this.state.isLogin ?
                        <p>Yes</p> 
                    : 
                    <p>No</p> 
                }
            </>
        )
    }
}