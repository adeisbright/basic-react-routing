import React , {Fragment , useState} from "react" 
import {
    Link 
} from "react-router-dom"
const CTA = () => {
    return (
        <section>
            <div className="framer m-b-5 c-t-a">
                <p className="font-1">Join the growing Bigjara Community</p>
                <div className="frame">
                    <div className="fr-12 fr-md-10 m-b-1">
                        <h2 className="bold-700 cta-wide m-b-1">
                            Skill up for tomorrow <br/> in less than 1 minute
                        </h2>
                    </div>
                    <div className="fr-12 fr-md-2 m-b-1 p-t-md-4">
                        <Link to="/signup" 
                            className="no-border no-outline radius-5 bg-dark-blue white-text button blinking-button"
                        >
                            Get Started 
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CTA ; 