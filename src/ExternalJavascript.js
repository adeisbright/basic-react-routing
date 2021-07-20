import React , {Component , Fragment , useState , useEffect , lazy, Suspense} from "react" 

// import "./js/easyframer.js"
import "./EasyFramer.css" 
import "./Codewit.css" 

const ChangeBodyBackground = (props) => {
    let [btnClass, setbtnClass] = useState("bg-red white-text no-border no-outline button") 
    let [isOn , setisOn] = useState(true)
    const handleClick = () => { 
        if (isOn){
            document.body.style.background = "white"
        }else{
            document.body.style.background = "black"
        }
        setisOn(!isOn)  
        setbtnClass(
            btnClass.indexOf("bg-white") === 1 ? 
            "bg-red white-text no-border no-outline button"
            :
            "bg-white dark-text no-border no-outline button "
        )
    } 
    return (
        <button 
            onClick={handleClick} 
            id="t"
            className={btnClass} 
        >
            {props.buttonText}
        </button>
    )
}

export default class Button extends Component {
    render(){
        return (
            <Fragment>
                <Suspense 
                    fallback={
				        <div> Warming up ... </div>
                    } 
                >
                    <ChangeBodyBackground 
                        buttonClass={"button no-border no-outline bg-red white-text radius-5"} 
                        buttonText={"Register"}
                    />
                </Suspense>   
            </Fragment>
        )
    }
}