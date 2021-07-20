import Stripe from "../images/stripe-ceo.jpg"
import StripeLogo from "../images/stripe-log.png" 
import VisaLog from "../images/visa-logo.png"
import Williams from "../images/otto.jpeg"
import YcombinatorLogo from "../images/ycombinator-logo.png"
import Michael from "../images/michael-siebel.jpeg"

const customers = [

    {
        logo : StripeLogo , 
        name : "Patrick Collison" , 
        position : "CEO , Stripe" , 
        comment : `Paystack is highly technical and fanatically 
                   customer oriented. We’re excited to back such people
                  in one of the world’sfastest-growing regions.` , 
        avatar : Stripe , 
        alt : "Stripe Logo"
    } , 
    {
        logo : VisaLog , 
        name : "Otto Williams" , 
        position : "Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa" , 
        comment : `Our investment in Paystack aligns 
                    with the kind of investments we look for - those that will
                    help extend our reach into the global commerce ecosystem` , 
        avatar : Williams, 
        alt : "Visa Logo"
    } , 
    {
        logo : YcombinatorLogo , 
        name : "Patrick Collison" , 
        position : "CEO , Stripe" , 
        comment : `As YC's first Nigerian startup Paystack leads the
         charge of great companies coming out of Africa, 
         powering modern payments for an entire continent.` , 
        avatar : Michael , 
        alt : "Ycombinator Logo"
    } , 
]

export default customers