
import {
    React ,
    Fragment , 
    Component , 
    useState , 
    lazy , 
    Suspense
} from "react" 

import {
    BrowserRouter as Router  , 
    Switch , 
    Link , 
    Route , 
    useParams , 
    useLocation , 
    useRouteMatch , 
    useHistory 
} from 'react-router-dom' 
import Build from "./images/build.svg" 
import "./css/easyframer.css" 
import "./css/style.css" 
const JobHeader = lazy(() => import("./JobHeader"))  
const Engineers  = lazy(() => import("./Engineers")) 
const Company  = lazy(() => import("./Company")) 

let students = [{
    name : "Adeleke Bright" , email : "adetight@gmail.com" , mobile : "09057542479"
} , {
    name : "Ipenko Odun" , email : "odun@gmail.com" , mobile : "09057542477"
} , {
    name : "Ipenko Jare" , email : "jare@gmail.com" , mobile : "09057542478"
}] 
function DisplayStudents(props){
    let students = props.students 
    students = students.map((student , index) => 
        <li key={student.email}> {student.name} </li>
    )
    return (
        <ul>
            {students}
        </ul>
    )
}
function SayHello(props){
    return (
        <>
            <h1 className="bold-700 uppercase">Hello , {props.name} </h1>
        </>
    )
}

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

function Home(props){
    return(
        <Fragment>
                <ErrorBoundary>
                    <Suspense 
                        fallback={
                        <h3>Still Loading...</h3>
                    }>
                        <JobHeader />
                    </Suspense>
                </ErrorBoundary>
                <main className="m-b-2">
                    <section className="hero ">
                        <div className="center-text m-b-5 ">
                            <h2>The home of Africa's top talent</h2> 
                            <p>Bigjara hires , develops , and manages remote talent 
                                for companies globally
                            </p> 
                            <a 
                                className="button no-border no-outline bg-white dark-text radius-5 shadow" 
                                href="#"
                            >Join Bigjara</a>
                        </div>
                    </section> 
                    <section id="imageHolder">
                        <div className="framer">
                            <div className="frame">
                                <div className="fr-3"></div> 
                                <div className="fr-6 center-text">
                                    <figure className="w-100">
                                        <img src={Build} className="w-100" alt="Remote team image"/>
                                    </figure>
                                </div>
                                <div className="fr-3"></div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="bg-white dark-text pad-50">
                        <div className="framer">
                            <div className="center-text">
                                <p className="center-text">
                                    From fortune 500 companies to emerging local startup , 
                                    we help our customers achieve their business goals by offering 
                                    acess to top talent remotely
                                </p>
                                <a 
                                    className="button no-border no-outline white-text bg-dark radius-5 shadow" 
                                    href="#"
                                >Get in touch</a>
                            </div>
                        </div>
                    </section>
                    <section id="services">
                        <div className="framer white-text m-b-2">
                            <h3>Our Core services</h3>
                            <div className="frame justify-content-between ">
                                <div className="fr-md-4 fr-12 m-b-1">
                                    <h3 className="service-title">Talent Outsourcing</h3> 
                                    <p>
                                        We provide your organization with the right talent , so you can focus 
                                        on your core business activities
                                    </p>
                                </div> 
                                <div className="fr-md-4 fr-12 m-b-1">
                                    <h3 className="service-title">Talent Outsourcing</h3> 
                                    <p>
                                        We provide your organization with the right talent , so you can focus 
                                        on your core business activities
                                    </p>
                                </div>
                                <div className="fr-md-4 fr-12 m-b-1">
                                    <h3 className="service-title">Talent Outsourcing</h3> 
                                    <p>
                                        We provide your organization with the right talent , so you can focus 
                                        on your core business activities
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="leverageTalent">
                        <div className="framer white-text m-b-5 ">
                            <h3>Leverage Africa's top talent</h3> 
                            <p>Top talent from entry-level to senior engineers made available for your business. 
                                A great payroll management plan for your HR, with a pipeline of top developers 
                                for your company growth.
                            </p>
                            <div className="frame justify-content-between ">
                                <div className="fr-md-4 fr-12  bg-white dark-text pad-10 ">
                                    <h3 className="service-title">UI/UX Engineers</h3> 
                                </div> 
                                <div className="fr-md-4 fr-12  bg-white dark-text pad-10 ">
                                    <h3 className="service-title">Frontend Engineers</h3> 
                                </div>
                                <div className="fr-md-4 fr-12  bg-white dark-text pad-10 ">
                                    <h3 className="service-title">Backend Engineers</h3> 
                                </div>
                                <div className="fr-md-4 fr-12  bg-white dark-text pad-10 ">
                                    <h3 className="service-title">Devops Engineers</h3> 
                                </div>
                                <div className="fr-md-4 fr-12  bg-white dark-text pad-10 ">
                                    <h3 className="service-title">Mobile App Engineers</h3> 
                                </div>
                                <div className="fr-md-4 fr-12  bg-white dark-text pad-10 ">
                                    <h3 className="service-title">QA Engineers</h3> 
                                </div>
                                <div className="fr-md-4 fr-12  bg-white dark-text pad-10 ">
                                    <h3 className="service-title">Blockchain Engineers</h3> 
                                </div>
                                <div className="fr-md-4 fr-12  bg-white dark-text pad-10 ">
                                    <h3 className="service-title">IOT/Robotics Engineers</h3> 
                                </div>
                                <div className="fr-md-4 fr-12  bg-white dark-text pad-10 ">
                                    <h3 className="service-title">Data Scientist</h3> 
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="hire" className="bg-white dark-text pad-50">
                        <div className="framer">
                            <div className="center-text">
                                <h3>Want to hire from Bigjara ?</h3>
                                <p className="">
                                We know how stressful it can be hiring and setting up a team in a new location, 
                                drop your email and we will reach out, to get started.
                                </p>
                                <a 
                                    className="button no-border no-outline white-text bg-dark radius-5 shadow" 
                                    href="#"
                                >Get in touch</a>
                            </div>
                        </div>
                    </section>
                    <section id="update">
                        <div className="framer center-text">
                            <h3>Join our community for more update from Bigjara</h3> 
                            <div className="frame">
                                <div className="fr-3"></div> 
                                <div className="fr-6">
                                    <input 
                                        className="input input-border-faint pad-10 m-r-1" 
                                        type="email" placeholder="Enter your email address" 
                                        style={{width:"60%"}}
                                    /> 
                                    <button 
                                        type="submit" 
                                        role="button" 
                                        className="w-15 button no-border no-outline bg-white dark-text radius-5">
                                            Join
                                    </button>
                                </div>
                                <div className="fr-3"></div> 
                            </div>
                        </div>
                    </section> 
                    <footer>
                        <section>
                            <div className="framer">
                                <div className="frame">
                                    <div className="border-bottom-faint m-b-5">
                                        <h4>Bigjara</h4>
                                        <p>
                                            Bigjara hires, develops and manages remote talent for global companies. With Bigjara, 
                                            our talents’ quality of life is doubled while reducing their cost to a third.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <p className="center-text">
                            Copyright &copy; Bigjara 2021. All Rights Reserved
                        </p>
                    </footer>
                </main>
                {/* <SayHello name={"Adeleke Bright"} />
                <DisplayStudents students={students} /> */}
            </Fragment>  
    )
}

function Error404(props){
    return (
        <h1>Error 404</h1>
    )
}
export class App extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router>
                <Switch>
                    
                    <Route path="/companies"> 
                        <ErrorBoundary>
                            <Suspense fallback={<h2>Wahala</h2>}>
                                <Company/>
                            </Suspense>
                        </ErrorBoundary>
                    </Route>
                    <Route path="/engineers">
                        <ErrorBoundary>
                            <Suspense fallback={<h2>Wahala</h2>}>
                                <Engineers/>
                            </Suspense>
                        </ErrorBoundary>
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