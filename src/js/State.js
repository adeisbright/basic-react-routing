import React ,{Fragment , Component} from "react" ;   

import "../css/easyframer.css" 
import "../css/style.css" 

export default class App extends Component {
    constructor(props){
        super(props) 
        this.state = {
            userName : "" , 
            date  : new Date()
        }
    }
    componentDidMount(){
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date : new Date()
        })
    }
    render(){
        return ( 
            <Fragment>
                <div className="framer"> 
                    <div 
                        className="frame" 
                        style={{flexDirection : "column" , alignItems : "center" , paddingTop:"30px"}}

                        > 
                        <h1>
                            <span>The time is </span>
                            <span>{this.state.date.toLocaleTimeString()}</span>
                        </h1>
                        <button 
                            className="button no-border radius-5 shadow no-outline bg-blue white-text" 
                        >
                            Login
                        </button>
                    </div>
                </div>
                
            </Fragment> 
        )
    }
}