import {React , Fragment} from "react" 
import Build from "../images/build.svg"  //How to read from a file that is inside a directory outside this directory

const instructorName = "Adeleke Bright" ; 

const displayMessage = <h1> The instructor ,  {instructorName} is not coming </h1>; //An element 

const childrentElement = (
    <div>
        <h2>JSX can contain children</h2> 
        <p>For the sake of composition and UI growth</p>
    </div>
);
const PublishDate = (props) => {
    return (
        <>
            <h3>Today's date is {props.date}</h3>
        </>
    )
}
export default function App(){
    return ( 
        <Fragment>
            <PublishDate date={new Date().toDateString()} /> 
            {displayMessage} 
            <figure>
                <img src={Build} style={{height:"100px" , width:"100px"}} /> 
                <figcaption>An image of our software build process</figcaption>
            </figure>
            {childrentElement}
            {/*  JSX are wraps within curly brace when tring to render them  */}
        </Fragment>
    )
}