import React  , {Fragment} from "react" 

const Testimonial = ({testimonials}) => {
    let programTestimonials = testimonials.map((testimonial , index) => 
        <Fragment key={index}>
            <div className="fr-md-4 m-b-2" >
                <div className="jara-card border-topline relative">
                    <p 
                        className="center-text" 
                        style={{position:"relative",marginTop:"-50px"}}>
                        <img 
                            className="w-100 img-circle no-border" 
                            src={testimonial.author.avatarUrl}
                            alt={testimonial.altText} 
                        /> 
                    </p>
                    <p className="testimony center-text">
                        {testimonial.content}
                    </p>
                    <div className="test-footer center-text">
                        <p>
                            {testimonial.author.name} : {testimonial.author.career} 
                        </p>
                        {/* <strong>
                            <em>
                                {testimonial.author.career}
                            </em>
                        </strong> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
    return (
        <section id="testimonials">
            <div className="full-frame bg-white m-b-5 c-t-a">
                <div className="framer">
                    <div className="center-text">
                        <h2 className="m-b-1"> What our students are saying</h2>
                        <p className="m-b-5">Selected Testimonials</p>
                    </div>
                    <div className="frame justify-content-between m-b-2">
                        {programTestimonials}
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Testimonial ;