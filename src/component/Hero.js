import React  , {Fragment} from "react" 
import { Link } from "react-router-dom"
import Learn from "../images/learn.svg"
const Hero = () => {
    return (
        <Fragment>
            <section>
                <div>
                    <div className="framer bg-parent pad-top-2 pad-bottom-2 grow-animation-ease">
                        <div className="frame justify-content-between">
                            <div className="fr-md-6 fr-12 pad-bottom-1 pad-top-1">
                                <div className="m-r-2">
                                    <h2 className=" hero-title m-b-1  bold-700">
                                        e-Bootcamp 
                                        <br/> with Bigjara  
                                    </h2>
                                    <p className="hero-text m-b-1-5">
                                        Begin your Software Development Journey with Interactive 
                                        Live classes from your Home
                                    </p>
                                    <Link
                                        type="button" 
                                        role="button" 
                                        to="/about" 
                                        className="button hide-on-small   no-outline no-border bg-white dark-blue-solid-border blue-text m-r-1 m-b-1 font-1 no-decoration"
                                    >
                                        Learn more
                                    </Link>
                                    <Link
                                        type="button" 
                                        role="button" 
                                        to="/signup" 
                                        className="button hide-on-small no-outline white-solid-border  bg-blue-dark white-text border-white  font-1"
                                        id="started"
                                    >
                                        Sign up
                                    </Link>
                                    <p className="text-center w-100 d-md-hide " style={{marginBottom:"0"}}>
                                        <Link
                                            type="button" 
                                            role="button" 
                                            to="/about" 
                                            className="button w-100 center-text radius-5 no-outline no-border bg-white dark-blue-solid-border blue-text m-r-1 m-b-1 font-1 no-decoration"
                                        >
                                            Learn more
                                        </Link>
                                    </p>
                                    <p className="text-center w-100 d-md-hide">
                                        <Link
                                            type="button" 
                                            role="button" 
                                            to="/signup" 
                                            className="button w-100 center-text radius-5 no-outline no-border bg-blue-dark white-text  m-r-1 m-b-1 font-1 no-decoration"
                                        >
                                            Sign-up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fr-md-6  come-front-1 show pad-bottom-1 pad-top-1">
                                <figure>
                                    <img 
                                        src={Learn}
                                        className="w-100 " 
                                        title="Bigjara Images" 
                                        alt="Bigjara Hero"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Hero