import React ,  {Fragment , Component} from "react"  
import "../EasyFramer.css" 

//Using containment to componse component that may not know its child in the future like sidebar and dialog 
//
const FancyBorder = props => {
    return (
        <>
        {props.children} 
        <p>{props.title}</p>
        </>
    )
}
const SplitPane = props => {
    return (
        <>
            {props.left} 
            {props.right}
        </>
    )
} 
const Hello = () => <p> We are left</p> 
const Right = () =>  <p> We are right</p>
function TodoList(props){ 
    let todos = props.todos.map((todo , i) =>
        <li key={i}>{todo}</li>
    )
    return( 
        <Fragment>
            <FancyBorder  title={"Something fishy is going on"}>
                <h1>Yes  fancy</h1>
            </FancyBorder>
            <ul>
           {todos}
        </ul> 
        <SplitPane right={<Right />} left={<Hello/>} />
        </Fragment>
        
    ) 
}

export default class TodoApp extends Component {
    constructor(props){
        super(props) 
        this.state ={
            todos : []  , 
            content  : ""
        } 
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 

    } 
    handleChange(e){
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault() 
        let todo = this.state.content
        this.setState({
            todos : this.state.todos.concat(todo) , 
            //concat() is a pure method that can be used to add eleme to the end of an array. It does not affect the original array
            content : ""
        })
    }
    render() {
        return(
            <section className="framer" style={{background:"#f2f2f2" , height:"100vw"}}>
                <h1>Todo</h1>
                <TodoList todos={this.state.todos} /> 
                <form 
                    className="fr-4 shadow bg-white pad-20 radius-5 m-b-1" 
                    onSubmit={this.handleSubmit}
                    >
                    <label htmlFor="userName">What needs to be done</label> 
                    <input 
                        type="text" 
                        value={this.state.content} 
                        onChange={this.handleChange}
                        className="input input-border-faint pad-10 m-b-1"
                    />
                    <input 
                        type="submit" 
                        className="input input-border-faint pad-10 bg-red white-text"
                        id="submit" 
                        value="Register"
                    />
                </form>
                <p>{this.state.todos.length} item(s) created</p>
            </section>
        )
    }
}