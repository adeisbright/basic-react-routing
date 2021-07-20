import React from "react" 
import "./css/easyframer.css"
import "./css/classwork-one.css"

const Femi = (props) => {
    return (
        <h2>{props.content}</h2>
    )
}

const  Heading = (props) => {
    return (
        <>
            <h1
                className={props.headingClassName}
            >
                {props.content}
            </h1>
        </>
    )
}

const List = props => {
    const items = props.items.map((item , index) =>
        <li key={index} className="m-b-1 "> {item} </li>
    )
    return (
        <>
            <h2 className="light-blue-text">{props.title}</h2>
            <p>{props.description}</p>
            {props.ordered ? <ul>{items}</ul> : <ol>{items}</ol>}
        </>
    )
}
const beverages = ["Sugar" , "Tea" , "Bread" , "Water"] 
const recipes = [
    "Put the ketlle on " , 
    "Put the teabab on the cup" ,
    "Put the kettle on the stove"  , 
    "Pour the boiling water in the cup" 
]
export default function App(props){
    return (
        <React.Fragment>
            <div className="framer">
                <div className="frame">
                    <div className="fr-3"></div>
                    <div className="fr-6 bg-white white-text ">
                        <p 
                            style={{width:"100%" , padding:"1.2rem"}}
                            className="bg-white"
                        ></p>
                        <div className="bg-blue pad-well">
                            <Femi content="This is USA"/>
                            <Heading content="Creating List in React" headingClassName="orange-text"/>
                            <List 
                                items={beverages} 
                                title="Unorded List" 
                                description="ordering doesn't matter"
                            />
                            <List 
                                items={recipes} 
                                ordered={true}
                                title="ordered List" 
                                description="ordering matter"
                            />
                        </div>
                    </div>
                    <div className="fr-3"></div>
                </div>
            </div>
        </React.Fragment>
    )
}