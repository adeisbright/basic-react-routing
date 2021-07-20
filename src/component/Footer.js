import React , {Fragment } from "react" 
import {
    Link
} from "react-router-dom" 

import "../css/easyframer.css"
import "../Tricks/style.css"
import "./Footer.css"

let lists = [
    {
        title : "About Bigjara" , 
        lists: [
            {
                href : "/about/values" , 
                content : "Our values"
            } , 
            // {
            //     href : "/partners" , 
            //     content : "Our partners"
            // } ,
            // {
            //     href : "/partner" , 
            //     content : "Become a partner"
            // }
            //  , 
             {
                href : "/career" , 
                content : "Work at Bigjara"
            }
        ]
    },
    {
        title : "Core Focus" , 
        lists: [
            {
                href : "/courses" , 
                content : "Front End Engineering"
            } , 
            {
                href : "/courses" , 
                content : "Back End Engineering"
            } ,
            {
                href : "/courses" , 
                content : "Mobile Computing"
            }
             , 
             {
                href : "/courses" , 
                content : "UI/UX"
            }
        ]
    } , 
    {
        title : "Need Help" , 
        lists: [
            {
                href : "/help" , 
                content : "FAQs"
            } , 
            {
                href : "/help" , 
                content : "Pricing"
            } ,
            {
                href : "/help" , 
                content : "Make complaint"
            }
        ]
    } , {
        title : "Important Read" , 
        lists: [
            {
                href : "/privacy-policy" , 
                content : "Privacy policy"
            } , 
            {
                href : "/privacy-policy" , 
                content : "Terms of use"
            }
        ]
    }
]
const FooterSection = ({sections}) => {
    let portions = sections.map((section , index) => (
        <div className="fr-md-3 footer-text  m-b-1" key={index}>
            <h5 className="footer-menu-heading">{section.title}</h5>
            {section.lists.map((list , i) => (
                <div key={i}>
                    <Link to={list.href} className="footer-list">
                        {list.content}
                    </Link>
                </div>
            ))}
        </div>
    ))
    return (
        <div className="frame d-column pad-top-2 pad-bottom-2 m-b-2">
            {portions}
        </div>
    )
}
let date = new Date() ; 
let year = date.getFullYear()
const Footer = () => {
    return (
        <footer style={{background:"#4a4d55" , marginBottom:"0!important"}}>
            <div className="">
                <div className="framer">
                        <FooterSection sections={lists} />
                {/* <div className="flex white-text center-text">
                    <p>
                        <a style={{color:"#fff!important"}} href="https://facebook.com/pages/category/Media/Bigjara-242426523005315">
                            <i className="fa fa-facebook m-r-1"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://chat.whatsapp.com/DawHQfPTxSkHWk4LA0TDhO">
                            <i className="fa fa-whatsapp m-r-1"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/bigjara/">
                            <i className="fa fa-instagram m-r-1"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://twitter.com/bigjaraT">
                            <i className="fa fa-twitter m-r-1"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://www.youtube.com/channel/UCNyEQunA0PowJJVay-4vzaw">
                            <i className="fa fa-youtube m-r-1"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://linkedin.com/in/bigjara">
                            <i className="fa fa-linkedin m-r-1"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/bigjara">
                            <i className="fa fa-github m-r-1"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://join.slack.com/t/bigjara/shared_invite/zt-j9jpsh79-WlokEM9rrn~r1cc7zqGypw">
                        <i className="fa fa-slack m-r-1"></i>
                        </a>
                    </p>
                    
                </div> */}
                <p className="center-text font-1 bold-250 white-text pad-bottom-1 no-margin-bottom">
                        All Rights Reserved. Copyright &copy; Bigjara Softwares {year}
                    </p>
                </div>
            </div>
        </footer> 
    )
}

export default Footer 