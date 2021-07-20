import React  , {Fragment} from "react" 

const Benefit = ({benefits}) => {
    let programBenefits = benefits.map((benefit , index) => 
        <Fragment key={index}>
            <div className="fr-md-4 pad-10 m-b-1">
                <i className={benefit.iconClass}/> 
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
            </div>
        </Fragment>
    )
    return (
        <section>
            <div className="full-frame">
                <div className="framer pad-top-2 pad-bottom-2">
                    <h3 className="center-text"> Why e-Bootcamp</h3>
                    <div className="frame justify-content-between">
                        {programBenefits}
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Benefit