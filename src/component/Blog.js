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
                            <h2 className="center-text">Blog</h2>
                        </header>
                        <section>
                            <p>
                                We will be publishing contents on that can help you or your business
                                to grow in the digital economy
                            </p>
                            <p>
                                Thanks for checking . We have no published post for now
                            </p>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    )
}
const Blog = () => {

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

export default Blog