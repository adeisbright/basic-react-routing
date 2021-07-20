import {React , Component} from "react" 
import Build from "../images/build.svg"
export function FunctionComponent(props){
    return (
        <h1>This is a functional component created by {props.name}</h1>
    )
}
const Greeting = props => {
    return (
        <p>{props.day} {props.user}</p>
    )
} 
const author ={
    avatarUrl : Build , 
    name : "Timothy Godwin" , 
    comment : "I will see you later" , 
    commentDate : new Date().toLocaleDateString()

}
export class ClassComponent extends  Component{ 
    constructor(props){ //Add a constructor if you are trying to use function component with props within a class component
        super(props)
    }
    render(){
        return(
            <>
            <h1>This is a class component created by {this.props.name} </h1> 
            <Greeting day={"Good morning"} user={"Ipenko Bright"} />
            <Greeting day={"Hello"} user={"Emmanuel Silas"} /> 
            <SimplifiedComment author={author} />
            </>
        )
    }
}

//How to Extract and Create components from smaller components 

function Comment(props){
    return (
        <div className="framer">
            <div className="frame">
                <div className="fr-md-4">
                    <div className="comment">
                        <div className="user-information">
                            <h2>{props.userInfo}</h2> 
                            <img src={props.avatar} className="avatar"></img> 
                        </div>
                        <p>{props.comment}</p>
                        <p>{props.commentDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 

function Avatar(props){
    return (
        <>
            <figure>
                <img src={props.user.avatarUrl} alt={props.user.name} style={{height : "100px"}}/>
            </figure>
        </>
    )
}

function UserInfo(props){
    return (
        <> 
            <div className="user">
                <h2>{props.user.name}</h2> 
                <Avatar user={props.user} />
            </div>
        </>
    )
} 

function SimplifiedComment(props){
    return (
        <div className="framer">
            <div className="frame">
                <div className="fr-md-4">
                    <div className="comment">
                        <UserInfo user={props.author} />
                        <p>{props.author.comment}</p>
                        <p>{props.author.commentDate}</p>
                    </div> 
                </div> 
            </div> 
        </div>
    )
}