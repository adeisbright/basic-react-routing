import React  , {useRef , useState} from "react" 
import "./accordion.css" 

const Accordion = props => {
    let [active , setActive] = useState("")
    let [height , setHeight] = useState("0px")
    const content = useRef(null) 
    const toggleAccordion = () => {
        setActive(active ? "" : "active")
        setHeight(
            active ? "0px"  :`${content.current.scrollHeight}px`
        )
    }
    return (
        <div className="accordion_selection">
            <button className={`accordion ${active}`} 
                onClick={() => setHeight(height === "0px" ? `${content.current.scrollHeight}px` : "0px")}>
                <p className="accordion_title">{props.title}</p>
                <i className="fa fa-chevron-right accordion_icon"/>
            </button>
            <div    className="accordion_content" 
                    style={{maxHeight : `${height}`}}
                    ref={content}>
                <div 
                    className="accordion_text" 
                    dangerouslySetInnerHTML={{__html : props.content}}>

                </div>
            </div>
        </div>
    )
}

export default Accordion 