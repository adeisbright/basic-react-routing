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
                            <h2 className="center-text">Privacy Policy</h2>
                        </header>
                        <section>
                            <p>
                                At Bigjara (“Bigjara”, “we”, “us”, “our”) we respect your privacy rights.
                                We have created this privacy policy (“Privacy Policy”) to explain how we treat the information 
                                collected and received from your use of our Services (as defined in our Terms of Use or “TOU”) 
                                provided through https://bigjara.com and any other websites or applications we own, operate, 
                                or control (the “Website(s)”). 
                                This Privacy Policy applies only to the use of our Services, and we are not responsible for the practices of persons, 
                                companies, institutions or websites that Udacity does not control, manage, or employ.
                            </p>
                            <p>
                               Kindly take time to read this Privacy Policy , as they govern how you use Bigjara. 
                               If you have any reservation against this Privacy Policy, please kindly contact us 
                               before using our service or better still do not use our Services.
                            </p>
                            <p>
                                Bigjara Software is the data controller of every  information we collect from you. 
                                You can contacus us  for additional details. 
                            </p>
                        </section>
                        <section id="important-info">
                            <h3 className="center-text">Information to note while using our service</h3>
                            <p>
                                Please understand that when you  submit any information to us, 
                                you acknowledge that we may collect, use, disclose and retain such information
                                in accordance with this Privacy Policy and as permitted or required by law.
                                If you do not agree with these terms, then please do not provide any information to us. 
                                We may offer social  features such as sharing  as part of our Services which, 
                                among other features, allows you to make your 
                                Profile public.
                                By agreeing to participate in any of our Services, 
                                you acknowledge that any information or materials you 
                                include in your Profile can be viewed by other persons accessing the Website(s).
                                We have no control over the access 
                                or use of information provided to third parties that provide  Sharing outside our website(s)
                            </p>
                        </section>
                        <section id="information-we-collect">
                            <h3 className="center-text">Information we collect</h3>
                            <section id="information-you-provide">
                                <h4>Information you provide us</h4>
                                <p>
                                    We collect a variety of information that you provide  to us. 
                                    We collect information from you through:
                                </p>
                                <ul>
                                    <li>
                                        Using any of our Services, including registering for a User Account through any of our website
                                    </li>
                                    <li>
                                        Signing up for  updates (email , Notification , SMS)
                                    </li>
                                    <li>Requesting customer support and technical assistance</li>
                                    <li>Submitting requests or questions to us via forms or in email</li>
                                    <li>Making a purchse from us especially when you enroll in any of e-Bootcamp</li>
                                </ul>
                                <p>The types of data we collect from you include :</p>
                                <ul>
                                    <li>Name, address, telephone number and email address</li>
                                    <li>IP Address and Geolocation for security of our infrastructure</li>
                                    <li>Login credentials if you have an account with us</li>
                                    <li>Information about your age  , gender , and other socio-economic 
                                        record
                                    </li>
                                    <li>User generated content when you post a comment , reply a question , 
                                        or share a story on our website(s)
                                    </li>
                                </ul>
                            </section>
                        </section>
                        <section id="information-we-collect">
                            <h3 className="center-text">Information we collect through automation</h3>
                            <section id="information-you-provide">
                                <h4>Analytics Information</h4>
                                <p>
                                    When you use our Bigjara, we and our service providers (which are third party companies that work on our behalf) may use cookies, 
                                    and similar technologies to track, collect and aggregate certain information including, among other things, 
                                    which pages of our Website(s) were visited, the order in which they were visited, 
                                    when they were visited, the URLs from which you linked to our Website(s), 
                                    and which hyperlinks were “clicked.” Collecting such information may involve logging the IP address, 
                                    operating system and browser software used by each user of the Website. 
                                    Through such information, we may be able to determine from an IP address a user’s Internet Service Provider 
                                    and the general geographic location (city/state) of his or her point of connectivity.
                                </p>
                                <p>
                                    We can also use these technologies to help us determine and identify those who return to use our services, 
                                    the type of content and sites to which a user of viewed, the length of time each user spends at 
                                    any particular area of our Website(s), and the specific activity  that users choose to engage in.
                                </p>
                                <p>
                                    We use third-partyanalytics services (Google Analytics) on Bigjara to 
                                    collect and analyze usage information through cookies and similar tools; 
                                    engage in auditing, research, or reporting; assist with fraud prevention; 
                                    and provide certain features to you. 
                                    Disable cookies, if you do not want us to collect data related to analytics purpose.
                                </p>
                            </section>
                        </section>
                        <section>
                            <h3 className="center-text">How we use the information we collect</h3>
                            <section id="information-you-provide">
                                <p>
                                We use your information for various purposes depending on the types of information 
                                we have collected from and about you and the specific services you use, in order to:
                                </p>
                                <ul>
                                    <li>Send you timely information in connection with the Services</li>
                                    <li>Respond to your requestss</li>
                                    <li>Contact you by email , phone(including calls and SMSs) about Bigjara 
                                        and its third party services
                                    </li>
                                    <li>Customize the content we provide through the service</li>
                                    <li>Secure the service you used and other services</li>
                                    <li>Help us to better under your needs , and improve on the way we 
                                        serve you
                                    </li>
                                </ul>
                            </section>
                        </section>
                        <section>
                            <h3 className="center-text">How We Share and Disclose Your Information</h3>
                            <section id="information-you-provide">
                                <p>
                                Bigjara will share your information in the following ways:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Service Providers</strong>
                                        <span>
                                            We share your information with operations 
                                            agent and other third parties who perform services on our behalf.
                                            They have access to perform these services but are prohibited from using your information 
                                            for other purposes. They provide a variety of services to us, 
                                            including billing, sales, marketing, test proctoring, product content and features,
                                            advertising, analytics, research, customer service, data storage, security, 
                                            fraud prevention, payment processing, and legal services.
                                        </span>
                                    </li>
                                    <li>
                                        <strong>Business Partners</strong>
                                        <span>
                                            We may share your information with partners through your consent to 
                                            partners who are interested in offering their service.
                                        </span>
                                    </li>
                                </ul>
                            </section>
                        </section>
                        <section>
                            <h3 className="center-text">Retention of Your Information</h3>
                            <section id="information-you-provide">
                                <p>
                                We keep your information for no longer than necessary for the purposes for which it
                                is processed. The length of time for which we retain information depends on the 
                                purposes for which we collected and use it and/or as required to comply with
                                existing laws.
                                </p>
                            </section>
                            <h3 className="center-text">How we protect Your Information</h3>
                            <section id="information-you-provide">
                                <p>
                                We consider the confidentiality and security of your information to be of the
                                utmost importance. We take a several technical, administrative, 
                                and physical measures to protect your information from disclosure to or access by
                                 third parties. 
                                 Please note that we do not guarantee the security of information, as no method of 
                                 internet transmission or storage is completely secure.
                                </p>
                            </section>
                            <h3 className="center-text">Bigjara Contact Information</h3>
                            <section id="information-you-provide">
                                <p>
                                    If you have any questions, comments or complaints about this Privacy Policy,
                                    please contact us:
                                </p>
                                <p>
                                    <span>Email</span>
                                    <a href="maito:privacy@udacity.com" target="_blank">privacy@udacity.com</a>
                                </p>
                                <address>
                                    <p>Bigjara Software</p>
                                    <span>18 Dame Oyem Street , Ojo - Lagos</span>
                                </address>
                            </section>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    )
}
const PrivacyPolicy  = () => {

    return (
        <Suspense fallback={
            <div>
                Loading ....
            </div>
        }>
            <Navigation/>
            <Story/>
            
            <Footer/>
        </Suspense>
    )
}

export default PrivacyPolicy