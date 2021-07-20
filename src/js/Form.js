import React , {Fragment , Component} from "react" 

import "../css/easyframer.css" 
import "../css/style.css" 
export default class App extends Component {
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