import React  , {useState} from "react" 
import {
    Link 
} from "react-router-dom"

import "../css/easyframer.css"
import "../Tricks/style.css"
import "../Tricks/nav.css"
const Navigation = () => {
    let fullWidthClass = [
        "full-frame " , 
        "bg-white "  , 
        "fixed-to-top " , 
        "pad-top-10 " , 
        "pad-bottom-10 " ,  
        "border-bottom-grey "
    ] 

    let mobileNavClass  = [] 
    let desktopNavClass = [] 
    let mobileClass = "mobile-navigations d-md-hide"
    let [isOpen , setIsOpen] = useState(false)
    let [mClass , setMClass] = useState(" d-nothing out-of-view")
    let [toggler , setToggler] = useState("mobile-toggler relative change-toggle pad-top-15")
    const openNav = () => {
        setIsOpen(!isOpen)
        setMClass(mClass.includes("d-nothing") ? "" : " d-nothing out-of-view")
        setToggler(toggler.includes("change-toggle") ? 
            "mobile-toggler relative pad-top-15" 
            : "mobile-toggler relative change-toggle pad-top-15")
    }
    return (
        <div className={fullWidthClass.join("")}>
            <header className="framer">
                <section className="frame justify-content-between">
                    <div className="d-sm-hide">
                        <Link to="/" className="brand-name">
                            <h1 className="dark-text">Bigjara</h1>
                        </Link>
                    </div>
                    <nav 
                        className="d-sm-hide md-nav pad-top-15"
                    >
                        <Link to="/about" tabIndex="-1">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/career">Career</Link>
                        <Link to="/sign-up" className="md-btn-register no-border no-outline radius-5">Signup</Link>
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
                            onClick={openNav}
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
                            <Link to="/about" tabIndex="-1">About</Link>
                            <Link to="/blog">Blog</Link> 
                            <Link to="/career">Career</Link>
                            <Link 
                                to="/sign-up" 
                                className="md-btn-register no-border no-outline radius-5 center-text">
                                    Signup
                            </Link>
                        </section>
                        : null 
                    }
                </section>
            </header>
        </div>
    )
}

export default Navigation