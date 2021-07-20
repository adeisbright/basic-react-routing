import React from "react"


const Customer = props => {
    const customers = props.customers.map((customer , i) => 
        <div className="fr-md-4 m-b-2" key={i}> 
            <div className="jara-card">
                <figure className="flex">
                    <img 
                        className="w-100 company-logo" 
                        src={customer.logo}
                        alt={customer.alt} 
                    />
                </figure> 
                <p> {customer.comment}</p> 
                <div className="flex">
                    <figure className="m-r-1">
                        <img 
                            className="w-100 img-circle" 
                            src={customer.avatar}
                            alt={customer.name}
                        />
                    </figure> 
                    <div>
                        <p><strong>{customer.name}</strong></p> 
                        <small>{customer.position}</small>
                    </div>
                    
                </div>
            </div>
        </div>
    )
    return (
        <section className="framer">
            <h2>
                Enjoyed by global customers
            </h2>
            <p>
               Bijgara makes everything simple and easier to use
                We make education <br/> commerce , community development , 
                and personal security easy
            </p>
            <div className="frame">
                {customers}
            </div>
        </section>
    )
}

export default Customer