import React , {Fragment , lazy , Suspense} from "react" 
const Navigation = lazy(() => import("./Navigation")) 
const ContactUs = lazy(() => import("./ContactUs"))
const CTA = lazy(() => import("./CTA")) 
const Footer = lazy(() => import("./Footer")) 

const Story = () => {
    return (
        <div className="framer pad-top-2 pad-bottom-2">
            <div className="frame">
                <div className="fr-md-10">
                    <article>
                        <header>
                            <h2 className="center-text">About Bigjara</h2>
                        </header>
                        <section>
                            <p>
                                Bigjara partners with experienced digital professionals with in-demand skills 
                                to bring affordable learning to individuals and organization
                            </p>
                            <p>
                                We are committed to facilitaing economic growth , foster community development , 
                                and to enhance individual liberty
                            </p>
                            <p>
                                e-Bootcamp seeks to make learning online engaging and beneficial.
                                We are bringing the offline experience to the way we faciliate learning since 
                                we've observed the inertia faced by many in completing on-demand courses
                            </p>
                            <p>We conduct the Bootcamp through teleconferencing solutions  , messaging apps , 
                                filesharing softwares , productivity apps , and in-house tools with all focused 
                                on making the learning experience enriching
                            </p>
                            <p>We are currently providing instructions on the following :</p>
                            <ol>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Javascript</li>
                                <li>Git</li>
                                <li>Github</li>
                                <li>React &lt;pro&gt;</li>
                            </ol>
                        </section>
                        <section id="mission">
                            <h3>Our Mission</h3>
                            <p>
                                Our mission is to build continually build tools  , processes , and people
                                to faciliate economic growth , foster community development , and enhance 
                                individual liberty
                            </p>
                        </section>
                        <section id="vision">
                            <h3>Our Vision</h3>
                            <p>
                                Our vision is to be among the top 5 organizations furthering economic and social growth
                            </p>
                        </section>
                        <section id="values">
                            <h3>Core Values</h3>
                            <p>Our Values is captured in Bigjara</p>
                            <p><strong>B</strong><span>old</span></p>
                            <p><strong>I</strong><span>ntegrity</span></p>
                            <p><strong>G</strong><span>ratitude</span></p>
                            <p><strong>J</strong><span>ovial</span></p>
                            <p><strong>A</strong><span>ttentive</span></p>
                            <p><strong>R</strong><span>esilience</span></p>
                            <p><strong>A</strong><span>vailable</span></p>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    )
}
const About  = () => {

    return (
        <Suspense fallback={
            <div>
                Loading ....
            </div>
        }>
            <Navigation/>
            <Story/>
            <CTA/>
            
            <Footer/>
        </Suspense>
    )
}

export default About