import {
    React , 
    Component , 
    Fragment , 
    Suspense , 
    lazy 
} from "react" 
import {
    BrowserRouter as Router , 
    Switch  , 
    Link , 
    Route 
} from "react-router-dom" 
import Build from "./images/build.svg" 
import "./css/easyframer.css" 
import "./css/style.css" 
import {sendData ,getData ,   selector} from "./js/api" 
const Footer = lazy(() => import("./GameFooter")) 
const Header = lazy(() => import("./GameHeader")) 

function Error404(props){
    return (
        <h1>
            <p>Error 404 : Seems you miss your way</p> 
            <a href="/">Return to main page </a>
        </h1>
    )
} 
// ErrorBoundary for handling errors in lazy loaded components 
class ErrorBoundary extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			hasError : false 
		}
	}
	static getDerivedStateFromError(error) {
		return {hasError : true }
	}
	componentDidCatch(error , errorInfo) {
		console.log(error , errorInfo) 
	}
	render() {
		if ( this.state.hasError ) {
			return <h1> Something bad happen </h1>
		}
		return this.props.children 
	}
} 
function ShowUser(props){
    return(
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Header/>
            </Suspense>
            <main>
                <div className="framer">
                    <div className="frame">
                        <div className="fr-md-2"></div> 
                        <div className="fr-md-8">
                            <h2>List of users</h2>
                        </div>
                        <div className="fr-md-2"></div>
                    </div>
                </div>
            </main>
            <Suspense fallback={<p>Loading...</p>}>
                <Footer/>
            </Suspense>
        </>
    )
} 



function Home(props){
    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<h2>Error while loading component</h2>}>
                    <Header/>
                </Suspense>
            </ErrorBoundary> 
            <main>
                <div className="framer center-text m-bottom">
                    <h2 className="font-2 m-bottom"> Venn Game  Interview </h2> 
                    <p className="hero-text">This is a trial on creating RESTful API's using Go</p> 
                    <Link to="/create" className="m-bottom no-border no-outline button bg-dark white-text radius-5">
                        Get Started
                    </Link>
                </div> 
                <section id="about">
                    <div class="framer">
                        <div className="frame justify-content-between">
                            <article>
                                <h2>About the interview</h2>
                                <p>The Interview was on designing an API for creating 
                                    User with the following fields 
                                    <ul>
                                        <li>Name</li>
                                        <li>Age</li>
                                        <li>Address</li>
                                    </ul>
                                    <small>See the question</small>
                                </p> 
                                <button className="button no-border no-outline bg-dark white-text">
                                    Reach Eventals
                                </button>
                                <pre>
                                    <code>
                                        <p>package main</p> 
                                        <p>
                                            import (
                                                <p>"fmt" </p>
                                                "net/htpp"
                                            ) 
                                        </p>
                                        
                                    </code>
                                </pre>
                            </article>
                            <figure>
                                <image 
                                    src={Build}
                                    alt="remote work" 
                                    title="Vhenn Game trial" 
                                    className="w-100"
                                />
                            </figure>
                        </div>
                    </div>
                </section>
            </main>
            <ErrorBoundary>
                <Suspense fallback={<h2>Error while loading component</h2>}>
                    <Footer/>
                </Suspense>
            </ErrorBoundary> 
        </>
    )
} 
function TextField(props){
    return (
        <>
            <label htmlFor={props.whatFor}>{props.name}</label>
            <input 
             type={props.type} 
             className={props.className} 
             onBlur={props.onBlur}  
             onBlur={props.onClick} 
             id={props.id}
          /> 
          <span className={props.validClass}>{props.validationMessage}</span>
     </>
    )
 }
class User extends Component{
    constructor(props){ 
        document.body.style.backgroundColor = "#ccc"
        super(props)
        this.state = {
            name : {
                val : "" , 
                text : "" , 
                valiationClass : "" 
            } , 
            age : {
                val : "" , 
                text : "" , 
                valiationClass : "" 
            } , 
            address : {
                val : "" , 
                text : "" , 
                valiationClass : "" 
            } , 
            jsonBody : "Fetching resource"
        }
    } 
    componentDidMount(){
        getData("http://localhost:8090/json")
		.then(res => {
            this.setState({jsonBody : res.Name})
            console.log(res)
        })
		.catch(err => this.setState({jsonBody : "Nothing Now"}))
    }
    render(){
        return (
            <Fragment> 
                <Suspense fallback={<p>Loading...</p>}>
                    <Header/>
                </Suspense>
                <div className="framer m-b-5">
                    <div className="frame">
                        <div className="fr-md-4"></div>
                        <div className="fr-md-4">
                            <form 
                                method="post" 
                                className="shadow bg-white pad-10" 
                            >  
                                <h2>{this.state.jsonBody}</h2>
                                <TextField 
                                  className={"input input-border-faint m-b-1 pad-10"} 
                                  type={"text"} 
                                  id={"name"} 
                                  name={"Name"} 
                                  validationMessage={this.state.name.text}
                                />
                                <TextField 
                                  className={"input input-border-faint pad-10"} 
                                  type={"number"} 
                                  id={"age"} 
                                  name={"Age"} 
                                  validationMessage={this.state.name.text}
                                />
                                <textarea className="input input-border-faint pad-10"
                                  id="address" 
                                  name="address">
                                  
                                </textarea>
                                <TextField 
                                  className={"input input-border-faint pad-10 bg-dark white-text"} 
                                  type={"submit"} 
                                  id={"submit"} 
                                  validationMessage={this.state.name.text}
                                />
                            </form>
                        </div>
                        <div className="fr-md-3"></div>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <Footer/>
                </Suspense>
            </Fragment>
        )
    }
}
export default class App extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/users" component={ShowUser}></Route> 
                    <Route path="/create">
                        <User/>
                    </Route>
                    <Route path="/" component={Home} exact />
                    <Route>
                        <Error404></Error404>
                    </Route>
                 </Switch>
            </Router>
        )
    }
}