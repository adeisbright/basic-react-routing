import React  , {Fragment} from "react" 
import { Link } from "react-router-dom"
import Learn from "../images/learn.svg"
const Jumbotron = () => {
    return (
        <Fragment>
            <section className="after-fixed-elem m-b-5">
                <div className="full-frame">
                    <div className="framer bg-parent pad-top-2 pad-bottom-2 grow-animation-ease">
                        <div className="frame justify-content-between">
                            <div className="fr-md-6 fr-12 pad-bottom-1 pad-top-1">
                                <div className="m-r-2">
                                    <h2 className="hero-title m-b-1  bold-700">
                                        Learn &amp; Grow 
                                        <br/> with Bigjara  
                                    </h2>
                                    <p className="hero-text m-b-1-5">
                                        Learn Software development , Ethical Hacking , Blockchain ,
                                        ML and IOT; then grow using those skills with Bigjara
                                    </p>
                                    <Link
                                        type="button" 
                                        role="button" 
                                        to="#faq" 
                                        className="button no-outline no-border bg-white dark-blue-solid-border blue-text m-r-1 m-b-1 font-1 no-decoration"
                                        id="started"
                                    >
                                        Learn more
                                    </Link>
                                    <Link
                                        type="button" 
                                        role="button" 
                                        to="/signup" 
                                        className="button  no-outline white-solid-border  bg-blue-dark white-text border-white  font-1"
                                        id="started"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                            <div className="fr-md-6  come-front-1 show">
                                <figure>
                                    <img 
                                        src={Learn}
                                        className="w-100 w-90 " 
                                        title="Bigjara Images" 
                                        alt="Bigjara Hero Image"
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

export default Jumbotron