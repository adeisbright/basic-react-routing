import React , {Fragment , lazy , Suspense} from "react" 
const Navigation = lazy(() => import("./Navigation")) 
const CTA = lazy(() => import("./CTA")) 
const Footer = lazy(() => import("./Footer")) 

const Hero = () => {
    return (
        <div className="framer pad-top-2 pad-bottom-2">
            <div className="frame">
                <div className="fr-md-12 center-text">
                    <article>
                        <header>
                            <h2 className="center-text">Career</h2>
                        </header>
                        <section>
                            <p>
                                There is currently no opening role. Check back in a months time
                            </p>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    )
}
const Career = () => {

    return (
        <Suspense fallback={
            <div>
                Loading ....
            </div>
        }>
            <Navigation/>
            <Hero/>
            <CTA/>
            
            <Footer/>
        </Suspense>
    )
}

export default Career