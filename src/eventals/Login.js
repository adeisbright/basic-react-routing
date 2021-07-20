import {
    React , 
    useState , 
    useEffect , 
    Suspense , 
    Lazy 
} from "react" 
import PropTypes from "prop-types"
import {sendData ,getData ,   selector} from "../js/api"  
import "../css/easyframer.css" 
import "../css/style.css" 

export default function Login({setToken}){ 
    const [email , setEmail] = useState() 
    const [password , setPassword] = useState() 
    const handleSubmit = e => {
        e.preventDefault() 
        if (email && password){ 
            sendData("http://localhost:4500/api/v1/auth/admin" , {
                email : email , 
                password : password, 
            }).then(res => { 
                console.log(res.message) 
                if (res.status === 200) setToken(res.message)
            }).catch(err => {
               console.error(err)
            })
        }
    } 
    return (
        <div className="framer">
            <div className="frame"> 
                <div className="fr-md-4">
                    <form onSubmit={handleSubmit}> 
                        <h1> Please  , Login </h1>
                        <label htmlFor="username">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="input input-border-faint pad-10 m-b-1" 
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="username">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="input input-border-faint pad-10 m-b-1" 
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input 
                            type="submit" 
                            id="submit" 
                            className="input input-border-faint pad-10 m-b-1 bg-blue white-text" 
                        />
                    </form>
                </div> 
            </div> 
        </div>
    )
}

Login.propTypes = {
    setToken : PropTypes.func.isRequired
}