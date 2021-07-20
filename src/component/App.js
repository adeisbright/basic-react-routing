import React , {Fragment , lazy , Suspense , useEffect} from "react" 
import {
    BrowserRouter as Router  , 
    Switch , 
    Route  , 
    Link
} from "react-router-dom"
import Kingsley from "../images/kingsley.JPG"

// import "../Tricks/style.css"
// import "../Tricks/nav.css"
const Navigation = lazy(() => import("./Navigation")) 
const Hero = lazy(() => import("./Hero")) 
const Benefit = lazy(() => import("./Benefit"))
const Testimonial = lazy(() => import("./Testimonial"))
const ContactUs = lazy(() => import("./ContactUs"))
const CTA = lazy(() => import("./CTA")) 
const Footer = lazy(() => import("./Footer"))
const JoinBigjara = lazy(() => import("./JoinBigjara"))
const About = lazy(() => import("./About")) 
const Blog = lazy(() => import("./Blog")) 
const Career = lazy(() => import("./Career"))
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"))
const testimonials = [
    {
        content : `I was living in Benue when I stumbled over an advert 
        from the parent company.Today , I am inspired to build solutions
        and to problems and I am currently working on projects with 
        economic benefits` , 
        author : {
            avatarUrl : Kingsley , 
            name : "Kingsley" , 
            career : "Front End Developer"
        }
    } , 
    {
        content : `I was living in Benue when I stumbled over an advert 
        from the parent company.Today , I am inspired to build solutions
        and to problems and I am currently working on projects with 
        economic benefits` , 
        author : {
            avatarUrl : Kingsley , 
            name : "Kingsley" , 
            career : "Front End Developer"
        }
    } , 
    {
        content : `I was living in Benue when I stumbled over an advert 
        from the parent company.Today , I am inspired to build solutions
        and to problems and I am currently working on projects with 
        economic benefits` , 
        author : {
            avatarUrl : Kingsley , 
            name : "Kingsley" , 
            career : "Front End Developer"
        }
    }
]
let benefits = [
    {
        title : "Easy to start" , 
        description : `We make it very easy to kickstart a career in software engineering ,
         and its related discipline for everyone. We design our program with 
         beginners in mind , and the overall goal is to help you become an 
         Intermediate Developer of global standard` , 
        iconClass : "fa fa-globe fa-2x blue-tex m-b-1" 
    } , 
    {
        title : "Project focused" , 
        description : `Learn by solving real-world problems. 
        Bigjara is the home to smart engineers across different 
        fields united by code. Our engineers solve societal problems 
        from finance to education. You will benefit from this project focused culture` , 
        iconClass : "fa fa-binoculars fa-2x blue-tex m-b-1" 
    } , 
    {
        title : "24/7 Support" , 
        description : `We stand for each other especially when bug attack your codebase. 
        Reach out to management and instructors to get the help you need whether 
        with your coding question or in any , area within bigjara capabilities`, 
        iconClass : "fa fa-bell fa-2x blue-tex m-b-1" 
    }
]
const Error404 = () => {
    return (
        <>
            <h1>Error 404</h1>
            <p>Sorry , we could not find what you are looking for</p>
            <Link to="/">Go back</Link>
        </>
    )
} 

const App = () => {
    useEffect(() => {
        document.body.style.background = "#fff!important"
    })
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <Suspense fallback={<p>Loading ....</p>}>
                        <About/>
                    </Suspense>
                    
                </Route>
                <Route path="/blog">
                    <Suspense fallback={<p>Loading ....</p>}>
                        <Blog/>
                    </Suspense>
                    
                </Route>
                <Route path="/career">
                    <Suspense fallback={<p>Loading ....</p>}>
                        <Career/>
                    </Suspense>
                    
                </Route>
                <Route path="/privacy-policy">
                    <Suspense fallback={<p>Loading ....</p>}>
                        <PrivacyPolicy/>
                    </Suspense>
                    
                </Route>
                <Route path="/sign-up">
                    <Suspense fallback={<p style={{margin:"0"}}>Bigjara....</p>}>
                        <JoinBigjara/>
                    </Suspense>
                    
                </Route>
                <Route path="/">
                <Suspense fallback={<p style={{margin:"auto 0!important"}}>Bigjara...</p>}>
                            <Navigation/>
                            <Hero />
                            <Benefit benefits={benefits} />
                            <Testimonial testimonials={testimonials} />
                            <ContactUs />
                            <CTA />
                            <Footer />
                       </Suspense>
                </Route>
                <Route component={Error404} />
            </Switch>
        </Router>
    )
}

export default App ;