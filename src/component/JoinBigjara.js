import React , {Fragment , useState , useEffect , useRef} from "react" 
import {
    validateEmail , 
    validateName , 
    validateMobile , 
    sendData
} from "../js/api"

import "../css/easyframer.css"
import "../Tricks/style.css"
import "./Footer.css"

const JoinBigjara = () => {

    let date = new Date() ; 
    let year = date.getFullYear()

    let [firstName , setFirstName] = useState("") 
    let [lastName , setLastName] = useState("") 
    let [email , setEmail] = useState("") 
    let [mobile , setMobile] = useState("") 
    let [channel, setChannel] = useState("facebook") 
    let [message , setMessage] = useState("")
    let [response , setResponse] = useState("")

    //Ref for feedback as user leaves form field 
    let fNameRef  = useRef(null) 
    let lNameRef  = useRef(null) 
    let emailRef  = useRef(null) 
    let mobileRef  = useRef(null) 

    const handleSubmit = e => {
        e.preventDefault() ;
        let isAllValid = firstName && lastName && mobile && email && channel
        if (isAllValid){
            setResponse("Processing...")
            let url = `http://localhost:4300/sign-up`
            sendData(url , {
                fN : firstName , 
                lN : lastName , 
                e : email , 
                m : mobile, 
                c : channel
            })
            .then(res => {
                console.log(res)
                setResponse(res.message)
            }).catch(err => setResponse(err.message))
        }else{
            setResponse("Fill the form correctly")
        }
    }
    const handleBlur = e => {
        e.preventDefault() ;
        let {value} = e.target
        
        if(!value){
            return false;
        }
        switch(e.target.id){
            case "firstName" : 
                let fRef = fNameRef.current 
                if (validateName(value).value){
                    setFirstName(value)
                    fRef.classList.remove("border-error-color")
                    fRef.classList.add("border-good-color")
                }else {
                    fRef.classList.add("border-error-color")
                    fRef.classList.remove("border-good-color")
                }
                break;
            case "lname" : 
                let lRef = lNameRef.current 
                if (validateName(value).value){
                    setLastName(value)
                    lRef.classList.remove("border-error-color")
                    lRef.classList.add("border-good-color")
                }else {
                    lRef.classList.add("border-error-color")
                    lRef.classList.remove("border-good-color")
                    
                }
                break;
            case "email" : 
                let eRef = emailRef.current 
                if (validateEmail(value)){
                    setEmail(value)
                    eRef.classList.remove("border-error-color")
                    eRef.classList.add("border-good-color")
                }else {
                    eRef.classList.remove("border-good-color")
                    eRef.classList.add("border-error-color")
                }
                break;
            case "mobile" : 
                let mRef = mobileRef.current 
                if (validateMobile(value)){
                    setMobile(value)
                    mRef.classList.remove("border-error-color")
                    mRef.classList.remove("border-good-color")
                }else {
                    mRef.classList.add("border-error-color")
                    mRef.classList.remove("border-good-color")
                }
                break;
            case "channel" :
                setChannel(value)
                e.target.classList.remove("border-error-color")
                break;
            default :
                console.log(e.target.id)
                return false;
        }
    }
    // useEffect(() => {
    //     document.body.style.background = "#1C3A4B"
    // })
    return (
        <div style={{height:"100vw",background:"#1C3A4B",marginTop:"0!important"}}>
            <section className="bg-register framer ">
                <p className="center-text white-text" style={{"paddingTop" : "3rem"}}>Bigjara Softwares</p>
                <div className="frame">
                    <div className="fr-md-4"></div>
                    <div className="fr-md-4">
                        <form 
                            onSubmit={handleSubmit}
                            className="form-shadow bg-white pad-20 m-b-1 radius-5">
                            <p className="red-text"></p>
                            <div className="center-text">
                                <p>Gain essential skills needed for today's industry</p>
                                {/* <p>Register for free  <br/> to get started</p> */}
                            </div>
                            <label htmlFor="first name">First Name</label>
                            <input 
                                className="input input-border-faint pad-5 small-shift validate" 
                                type="text" 
                                id="firstName"
                                ref={fNameRef}
                                onBlur={handleBlur}
                            />
                            <label htmlFor="last name">Last Name</label>
                            <input 
                                className="input input-border-faint pad-5 small-shift validate" 
                                type="text" 
                                id="lname"
                                onBlur={handleBlur}
                                ref={lNameRef}
                            />
                            <span></span>
                            <label htmlFor="email">Email</label>
                            <input 
                                className="input input-border-faint pad-5 small-shift validate" 
                                type="email" 
                                id="email"
                                onBlur={handleBlur}
                                ref={emailRef}
                            />
                            <span></span>
                            <label htmlFor="telephone">Phone</label>
                            <input 
                                className="input input-border-faint pad-5 small-shift validate" 
                                type="tel" 
                                id="mobile"
                                onBlur={handleBlur}
                                ref={mobileRef}
                            />
                            <span></span>
                            <label htmlFor="how did you hear about us">How did you hear about us?</label>
                            <select
                                className="input input-border-faint pad-5 small-shift validate" 
                                id="channel"
                                onBlur={handleBlur}
                            >
                                <option value="facebook">Facebook</option>
                                <option value="twitter">Twitter</option>
                                <option value="instagram">Instagram</option>
                                <option value="whatsApp">whatsApp</option>
                                <option value="linkedin">Linkedin</option>
                                <option value="google">Google Search</option>
                                <option value="website">Bigjara Website</option>
                            </select>
                            <span></span>
                            <label htmlFor="how did you hear about us">Learning Path?</label>
                            <select
                                className="input input-border-faint pad-5 small-shift validate" 
                                id="course"
                                onBlur={handleBlur}
                            >
                                <option value="fed">Front End</option>
                                <option value="bed">Back End</option>
                                <option value="blockchain">Blockchain</option>
                            </select>
                            <span>*Blockchain will not start same date as others</span>
                            <input 
                                type="submit" 
                                className="input input-border-faint pad-5 bg-green white-text m-b-1 radius-5"
                            />
                            <span>{response}</span>
                        </form>
                        <p className="center-text white-text">&copy; Bigjara Softwares {year}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JoinBigjara