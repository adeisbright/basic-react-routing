// This will be used for consuming State management 
// For consuming API's via Graph and REST 
// For uploading Files 

import {
    React , 
    lazy , 
    Suspense , 
    Fragment , 
   
} from "react" 


const JobHeader = lazy(() => import("./JobHeader"))  

export default function Company(props){
    return (
        <Fragment>
            <Suspense fallback={
                <h3>Still Loading...</h3>
            }>
                <JobHeader />
            </Suspense>
            <main>
                <div className="framer">
                    <div>
                        <h2>Welcome to our Company Section</h2>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}