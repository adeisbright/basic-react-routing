import React , {Fragment , useState } from "react" 
import {
    validateEmail , 
    validateFullName , 
    validateMobile , 
    sendData
} from "../js/api"

const Address = () => {
    return (
        <div className="fr-12 fr-md-6 m-b-1">
            <div className="m-r-1">
                <h3 className="m-b-2"> Nigeria HQ</h3>
                <address>
                    <p className="m-b-1">
                        <strong>18 Dame Oyem Street</strong> <br/>
                        <em>Ojo , Lagos</em>
                    </p>
                    <p className="m-b-1"> You can send a whatsApp message to any of the contact below :</p>
                    <ul>
                        <li>
                            <a href="https://wa.me/+2348140850141">+2348140850141</a>
                        </li>
                    </ul>
                   
                </address>
            </div>
        </div> 
    )
}

const ContactForm = () => {

    let [name , setName] = useState("") 
    let [email , setEmail] = useState("") 
    let [subject , setSubject] = useState("") 
    let [message , setMessage] = useState("") 
    let [response , setResponse] = useState("")

    const handleSubmit = e => {
        e.preventDefault() ;
        let isAllValid = name && email && subject && message
        console.log(email)
        if (isAllValid){
            setResponse("Processing...")
            let url = `http://localhost:4300/contact-messages`
            sendData(url , {
                n : name , 
                e : email , 
                m : message, 
                s : subject
            })
            .then(res => {
                console.log(res)
                setResponse(res.message)
            }).catch(err => err.message)
        }else{
            setResponse("Fill the form correctly")
        }
    }

    const handleChange = e => {
        e.preventDefault() ;
        let {value} = e.target
        
        if(!value){
            return false;
        }
        switch(e.target.id){
            case "name" : 
                if (validateFullName(value).value){
                    setName(value)
                }
                break;
            case "email" : 
                if (validateEmail(value)){
                    setEmail(value)

                }
                break;
            case "subject" : 
                if (validateFullName(value).value){
                    setSubject(value)
                }
                break;
            case "message" :
                setMessage(value)
                break;
            default :
                console.log(e.target.id)
                return false;
        }
    }

    return (
        <div className="fr-12 fr-md-6">
            <form className="g-white shadow pad-20" onSubmit={handleSubmit}>
                <h3 className="center-text m-b-1">Send us a message</h3>
                <div className="frame justify-content-between m-b-1 w-100">
                    <div className="fr-md-5 fr-12">
                        <input 
                            className="input input-border-faint pad-input input-m-b-1 contact" 
                            type="text" 
                            placeholder="Your name*" 
                            id="name"
                            value={name}
                            onChange={handleChange}
                        /> 

                    </div>
                    <div className="fr-md-6 fr-12">
                        <input 
                            className="input input-border-faint pad-input input-m-b-1 contact" 
                            type="email" 
                            placeholder="Enter your email*" 
                            id="email"
                            value={email}
                            onChange={handleChange}
                        /> 
                        
                    </div>
                    <div className="fr-md-12 fr-12">
                        <input 
                            className="input input-border-faint pad-input input-m-b-1 contact" 
                            type="text" 
                            placeholder="Subject*" 
                            id="subject"
                            value={subject}
                            onChange={handleChange}
                        /> 
                        
                    </div>
                    <div className="fr-md-12 fr-12">
                        <textarea 
                            className="input input-border-faint pad-input input-m-b-1 contact" 
                            placeholder="comment*" 
                            id="message"
                            value={message}
                            onChange={handleChange}
                        /> 
                        
                    </div>
                </div>
                <button
                    className="button pad-input no-border no-outline bg-dark-blue white-text button blinking-button radius-5" 
                    type="submit" 
                >
                    Submit 
                </button>
                <p>{response}</p>
            </form>
        </div>    
    )
}

const ContactUs = () => {

    return (
        <section id="contact-section">
            <div className="framer m-b-5 c-t-a">
                <h2 className="center-text m-b-2"> Contact us</h2>
                <div className="frame">
                    <Address />
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default ContactUs 

          
          