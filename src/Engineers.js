// This will be used for consuming State management 
// For consuming API's via Graph and REST 
// For uploading Files 

import {
    React , 
    lazy , 
    Suspense , 
    Fragment , 
    Component
} from "react" 

import {
    validateName
} from "./js/validate"
const JobHeader = lazy(() => import("./JobHeader"))  //== Loading a component dynamically 
function Instruction(props){ 
    return (
        <>
            <div className="framer">
                <div className="frame">
                    <div className="fr-2"></div> 
                    <div className="fr-md-8 fr-12 m-b-5">
                        <article>
                            <p class="text">
                                Bigjara sources, hires and manages best in class remote technical talent for
                                leading companies. We are currently accepting applications for Fullstack Developers, 
                                Frontend Developers, Backend Developers, DevOps Engineers, QA Specialists 
                                and Engineering Managers.
                            </p> 
                            <h3>What to expect in our process</h3> 
                            <ul>
                                <li>Nothing</li>
                                <li>Something</li>
                                <li>Which thing</li>
                            </ul>
                           
                            <h3>If accepted into our pool, you will recieve </h3>
                            <ul>
                                <li>Nothing</li>
                                <li>Something</li>
                                <li>Which thing</li>
                            </ul>
                        </article>
                    </div>
                    <div className="fr-2"></div>
                </div>
            </div>
        </>
    )
} 

function Footer(props){
    return (
        <>
          <div className="center-text bg-white dark-text">
              <p>View our <a href="#">Equal Employment Opportunity Policy</a></p> 
              <p>
                  <span>Powered by</span>
                  <a href="#">Recruit CRM</a> 
                  <a href="#">Applicant Tracking System</a>
              </p>
  
          </div>
  
        </>
    )
  }
function TextField(props){
   if (props.hasMargin){
       return (
           <div className="fr-md-6">
               <div className="m-r-5">
                    <label htmlFor={props.whatFor}>{props.name}</label>
                    <input 
                       type={props.type} 
                       className={props.className} 
                       placeholder={props.placeholder} 
                       onBlur={props.onBlur} 
                       onInput={props.onInput} 
                       onChange={props.onChange} 
                       id={props.id}
                    />
                   <span className={props.validClass}>{props.validationMessage}</span>
               </div>
           </div>
       )
   }
   return (
    <div className="fr-md-6">
         <label htmlFor={props.whatFor}>{props.name}</label>
         <input 
            type={props.type} 
            className={props.className} 
            placeholder={props.placeholder} 
            onBlur={props.onBlur} 
            onInput={props.onInput} 
            onChange={props.onChange}  
            id={props.id}
         /> 
         <span className={props.validClass}>{props.validationMessage}</span>

    </div>
   )
}
export default class Engineers extends Component {
    constructor(props){
        super(props) 
        this.state = {
            firstName : {
               value : "" , 
               msg : "" , 
               theClass : ""
            }  , 
            lastName : {
                value : "" , 
                msg : "" , 
                theClass : ""
             }  , 
            processing : ""
        }
        this.handleBlur   = this.handleBlur.bind(this) 
        this.handleInput  = this.handleInput.bind(this) 
        this.handleUpload = this.handleUpload.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleClick  = this.handleClick.bind(this)
    }
    componentDidMount(){

    } 
    componentWillUnmount(){

    }
    componentDidUpdate(){

    } 
    handleBlur(e){
        let {target} = e 
        let {id , value , classList , parentNode} = target  
    
        switch(target.id){
            case "firstName" : 
                if (validateName(value).value !== null) {
                    this.setState({
                        firstName : {
                        value : value , 
                        msg : "First Name" , 
                        theClass : "red-text"
                        }
                    })
               }
               break; 
            case "lastName" : 
                if (validateName(value).value !== null) {
                    this.setState({
                        lastName : {
                        value : value , 
                        msg : "The Last name" , 
                        theClass : "red-text"
                        }
                    })
                }
                break; 
            default : 
              return false
        }
    } 
    handleInput(){
    
    }
    handleUpload(){

    }
    handleSubmit(e){
        e.preventDefault() 
        let firstName = this.state.firstName.value , 
        lastName = this.state.lastName.value 
        if (firstName && lastName){
            this.setState({
                processing : "loader"
            })
        }
    } 

    handleClick(){

    }
    render(){
        return (
            <Fragment>
                <Suspense fallback={<p>Still Loading...</p>}>
                    <JobHeader></JobHeader>
                </Suspense>
                <>
                   <Instruction />
                </>
                <main>
                    <form 
                        method="post" 
                        enctype="multipart/form-data" 
                        className="framer"
                        onSubmit={this.handleSubmit}>
                        <div className="frame">
                            <div className="fr-2"></div>
                            <div className="fr-md-8 fr-12">
                                <div className="frame m-b-5">
                                    <div className="fr-md-4">
                                        <div class="m-r-1">
                                            <h3>Personal Information</h3> 
                                            <small>Your personal information</small>
                                        </div>
                                    </div>  
                                    <div className="fr-md-8">
                                        <div className="frame justify-content-between my-div">
                                            <TextField 
                                                hasMargin={true} 
                                                className={"input input-border-faint pad-10"} 
                                                name={"First Name"} 
                                                placeholder={"Adeleke"} 
                                                id="firstName" 
                                                onBlur={this.handleBlur} 
                                                validClass ={this.state.firstName.theClass} 
                                                validationMessage ={this.state.firstName.msg}
                                            />
                                            <TextField 
                                               
                                                className={"input input-border-faint pad-10"} 
                                                name={"Last Name"} 
                                                placeholder={"Bright"} 
                                                id="lastName" 
                                                onBlur={this.handleBlur} 
                                                validClass ={this.state.lastName.theClass} 
                                                validationMessage ={this.state.lastName.msg}
                                            />
                                             <TextField 
                                                hasMargin={true} 
                                                className={"input input-border-faint pad-10"} 
                                                name={"Email"} 
                                                placeholder={"adetight@gmail.com"} 
                                                id="email" 
                                                onBlur={this.handleBlur} 
                                                validClass ={this.state.firstName.theClass} 
                                                validationMessage ={this.state.firstName.msg}
                                            />
                                             <TextField 
                                               
                                               className={"input input-border-faint pad-10"} 
                                               name={"Phone"} 
                                               placeholder={"+2349057542479"} 
                                               id="phone" 
                                               onBlur={this.handleBlur} 
                                               validClass ={this.state.lastName.theClass} 
                                               validationMessage ={this.state.lastName.msg}
                                           />
                                           <TextField 
                                                hasMargin={true} 
                                                className={"input input-border-faint pad-10"} 
                                                name={"City"} 
                                                placeholder={"Lagos"} 
                                                id="city" 
                                                onBlur={this.handleBlur} 
                                                validClass ={this.state.firstName.theClass} 
                                                validationMessage ={this.state.firstName.msg}
                                            />
                                            <TextField 
                                               className={"input input-border-faint pad-10"} 
                                               name={"Country"} 
                                               placeholder={"Nigeria"} 
                                               id="country" 
                                               onBlur={this.handleBlur} 
                                               validClass ={this.state.lastName.theClass} 
                                               validationMessage ={this.state.lastName.msg}
                                           />
                                           
                                        </div> 
                                    </div>
                                </div> 
                                <div className="frame m-b-5">
                                    <div className="fr-md-4">
                                        <div class="m-r-1">
                                            <h3>Employment Details</h3> 
                                            <small>Your professional work history</small>
                                        </div>
                                    </div>  
                                    <div className="fr-md-8">
                                        <div className="frame justify-content-between my-div">
                                            <TextField 
                                                hasMargin={true} 
                                                className={"input input-border-faint pad-10"} 
                                                name={"Current Organization"} 
                                                placeholder={"Bigjara"} 
                                                id="organization" 
                                                onBlur={this.handleBlur} 
                                                
                                            />
                                            <TextField 
                                               
                                               className={"input input-border-faint pad-10"} 
                                               name={"Employment Status"} 
                                               placeholder={"Employed"} 
                                               id="workStatus" 
                                               onBlur={this.handleBlur} 
                                            />
                                             <TextField 
                                                hasMargin={true} 
                                                className={"input input-border-faint pad-10"} 
                                                name={"Title"} 
                                                placeholder={"Software Developer"} 
                                                id="workTitle" 
                                                onBlur={this.handleBlur} 
                                                
                                            />
                                            <div className="fr-6">
                                               <label htmlFor="experience">Total Experience</label> 
                                                <select className="input input-border-faint pad-10" name="experience">
                                                    <option value="0">0</option>
                                                    <option value="1">1 year</option>
                                                    <option value="2">2 years</option>
                                                </select>
                                            </div>
                                           
                                        </div> 
                                    </div>
                                </div> 
                                 <div className="frame m-b-5 border-at-bottom">
                                    <div className="fr-md-4">
                                        <div class="m-r-1">
                                            <h3>Important Links</h3> 
                                            <small>Your links only</small>
                                        </div>
                                    </div>  
                                    <div className="fr-md-8">
                                        <div className="frame justify-content-between my-div">
                                            <TextField 
                                                hasMargin={true} 
                                                className={"input input-border-faint pad-10"} 
                                                name={"Linkedin Profile"} 
                                                placeholder={"https://linkedin.com/in/adeleke-bright"} 
                                                id="linkedin" 
                                                onBlur={this.handleBlur} 
                                            />
                                            <TextField 
                                               
                                                className={"input input-border-faint pad-10"} 
                                                name={"Github Profile"} 
                                                placeholder={"https://github.com/adeisbright"} 
                                                id="github" 
                                                onBlur={this.handleBlur} 
                                               
                                            />
                                             <TextField 
                                                hasMargin={true} 
                                                className={"input input-border-faint pad-10"} 
                                                name={"Portfolio"} 
                                                placeholder={"https://yourportfolio.com"} 
                                                id="portfolio" 
                                                onBlur={this.handleBlur} 
                                               
                                            />
                                             <TextField 
                                               
                                               className={"input input-border-faint pad-10"} 
                                               name={"Twitter"} 
                                               placeholder={"https://twitter.com/adeleke-bright"} 
                                               id="phone" 
                                               onBlur={this.handleBlur} 
                                               validClass ={this.state.lastName.theClass} 
                                               validationMessage ={this.state.lastName.msg}
                                           />
                                             <div className="fr-6">
                                                <div class="m-r-5">
                                                    <input 
                                                    type="file" className="input input-border-faint pad-10"
                                                    />
                                                </div>
                                            </div>
                                            <div className="fr-6">
                                            
                                            <input 
                                                    type="file" className="input input-border-faint pad-10"
                                                    />
                                                
                                            </div>
                                           
                                        </div> 
                                        </div>
                                    </div>
                                        <div className="framer">
                                            <div className="frame">
                                                <div className="fr-5"></div>
                                                <div className="fr-6 center-text">
                                                    <div>
                                                        <input type="checkbox" className="m-r-5" /> 
                                                        <label>I agree to the terms and conditions</label>
                                                    </div>
                                                    <input 
                                               className="input input-border-faint pad-10 bg-dark white-text " 
                                               type="submit" 
                                            /> 
                                            <div className={this.state.processing} />
                                                </div>
                                                <div className="fr-1"></div>
                                            </div>
                                        </div>
                                    
                               
                            </div> 
                        </div>
                    </form>
                </main>
                <Footer />
            </Fragment>
        )
    }
}