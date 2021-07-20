import {
    React , 
    useState , 
    useEffect , 
    Suspense , 
    Lazy 
} from "react" 

import {
    BrowserRouter as Router ,
    Switch , 
    Route , 
    Link 
} from "react-router-dom" 

import Dashboard from "./Dashboard"
import Preferences from "./Preference"  
import Login from "./Login" 
import useToken from './useToken';

import "../css/easyframer.css" 
import "../css/style.css" 

// function setToken(userToken){
//     sessionStorage.setItem('token', userToken);
// }

// function getToken(){
//     const tokenString = sessionStorage.getItem('token');
//     return tokenString || null 
// }



export default function App(){ 
    // const token = getToken() 
    const { token, setToken } = useToken();
    if (!token){ 

        return <Login setToken={setToken} />
    }
    return (
        <>
           <Router>
               <Switch>
                   <Route path="/dashboard">
                       <Dashboard />
                   </Route>
                   <Route path="/preferences">
                       <Preferences />
                   </Route>
                   <Route path="/">
                       <h2>Welcome Home</h2>
                   </Route>
               </Switch>
           </Router>
        </>
    )
}