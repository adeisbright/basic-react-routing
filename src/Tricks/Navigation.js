import React , {useEffect , useState , useRef} from "react"
import {
    Link
} from "react-router-dom"
import "./easyframer.css"
import "./style.css"
import "./nav.css"
 
const Navigation = () => {
    let mobileClass = "mobile-navigations d-md-hide"
    let [isOpen , setIsOpen] = useState(false)
    let [mClass , setMClass] = useState(" d-nothing out-of-view")
    let [toggler , setToggler] = useState("mobile-toggler relative change-toggle pad-top-15")
    const handleMobileNav = () => {
        setIsOpen(!isOpen)
        setMClass(mClass.includes("d-nothing") ? "" : " d-nothing out-of-view")
        setToggler(toggler.includes("change-toggle") ? 
            "mobile-toggler relative pad-top-15" 
            : "mobile-toggler relative change-toggle pad-top-15")
    }

    return (
        <div 
            className="full-frame bg-white fixed-to-top pad-top-10 pad-bottom-10 border-bottom-grey" 
        >
            <div className="framer">
                <div className="frame justify-content-between">
                        <div className="d-sm-hide">
                            <Link 
                                className="brand-name"
                                to="/"
                            >
                                <h1>Bigjara</h1>
                            </Link>
                        </div>
                        <nav 
                            className="d-sm-hide md-nav pad-top-15"
                        >
                            <Link to="/about" tabIndex="-1">About</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/location">Location</Link>
                            <Link to="/sign-up">Signup</Link>
                        </nav>
                      
                      
                        <div className="d-md-hide pad-top-15">
                            <a className="brand-name" href="/">
                                <h1 className="dark-text" 
                                    style={{fontWeight:"700" ,fontSize:"1.9rem"}}
                                > 
                                    Bigjara 
                                </h1>
                            </a>
                        </div> 
                        
                        <div className="d-md-hide search-and-toggle pad-top-15">
                            <button 
                                className={toggler}
                                onClick={handleMobileNav}
                            >
                                <span/>   
                                <span/>  
                                <span/>  
                            </button> 
                        </div> 
                        {isOpen ?
                            <section
                                className={mobileClass + mClass}
                            >
                                <a href="#faq">FAQ</a>
                            </section>
                         : null 
                        }
                    </div>
            </div>
        </div>
        
    )
} 

export default Navigation