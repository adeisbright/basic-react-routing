import React , {lazy , Suspense , Fragment } from "react" 

import {
    BrowserRouter as Router , 
    Switch , 
    Route , 
    Link , 
    useHistory , 
    useLocation , 
    useParams
} from "react-router-dom" 

import Courses from "./Courses"
import customers from "./CustomerList" 
import Customer from "./Customer"


const Navigation = lazy(() => import("./Navigation"))
const Jumbotron = lazy(() => import("./Jumbotron"))
const CourseList = lazy(() => import("./CourseList"))
const Location = lazy(() => import("./Location"))

const Error404 = () => {
    return (
        <>
            <h1>Error 404</h1>
            <p>Sorry , we could not find what you are looking for</p>
            <Link to="/">Go back</Link>
        </>
    )
} 

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                   <Route path="/location">
                       <Suspense fallback={<p>Hello</p>}>
                            <Location/>
                       </Suspense>
                       
                    </Route>
                    <Route path="/" exact>
                        <Suspense fallback={<div>Loading....</div>}>
                            <Navigation />
                            <Jumbotron />
                            <CourseList courses={Courses} />
                            <Customer customers={customers} />
                        </Suspense>
                    </Route>
                    <Route component={Error404} />
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App