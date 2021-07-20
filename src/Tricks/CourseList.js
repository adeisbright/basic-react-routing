import React, { useState , useRef, useEffect, createRef  , useCallback} from "react" 


const CourseList = (props) => { 
    const arrLength = props.courses.length 
    let modalBoxRef = useRef([]) 
    let closeToggleRef = useRef(null)
    let observe  = useRef(null) 

    let ne = useCallback(node => {
        if (node !== null){
            return node
        }
    } , [])

    const openModal = () => {
        // console.log(arrLength)
        if (modalBoxRef.current.length !== arrLength){
            modalBoxRef.current = Array(arrLength).fill() 
                .map((_ , i) => 
                    modalBoxRef.current[i] || createRef()
                )
        }
        // let modalRef = modalBoxRef.current
        // console.log(modalRef[0])
        console.log(ne)
        // modalRef.style.display = "block"

        // let modalContent = modalRef.firstElementChild
        // let contentWidth = Number(modalContent.getAttribute("data-modal-content-width"))
        // let distanceFromTop = Number(modalContent.getAttribute("data-modal-content-distance-from-top"))
        // modalContent.style.cssText += `;width:${contentWidth}%;margin:${distanceFromTop}% auto`
       
        // let closer = closeToggleRef.current 
        // closer.addEventListener("click" , e => {
        //     let closeRef = modalBoxRef.current
        //     closeRef.style.display = "none"
        // })
    }
  
    useEffect(() => {
        const callback = function(entries) {
            entries.forEach(entry => {
                entry.target.classList.toggle("is-visible");
            });
        };
        
        const observer = new IntersectionObserver(callback , {threshold : 0.80});
        
        const targets = observe.current;
        observer.observe(targets)

        //Check if a page is visible or not 

        let hidden , visibilityChange ;
        
        if (typeof document.hidden !== "undefined"){
            
            hidden = "hidden" 
            visibilityChange = "visibilitychange"
        }else if (typeof document.msHidden !== "undefined"){
            hidden = "msHidden" 
            visibilityChange = "msvisibilitychange"
        }else if(typeof document.webKitHidden !== "undefined"){
            hidden = "webkitHidden" 
            visibilityChange = "webkitvisibilitychange"
        }
        const ever = () => {
            if(document[hidden]){
                console.log("E hide")
            }
        }

        if (typeof document.addEventListener === "undefined"  ||  hidden === "undefined"){
            alert("This requires a workable browser like chrome or firefox")
        }else{
            document.addEventListener(visibilityChange , ever , false)
           //alert("The Page Visibility API is working now")
        }

    } , [])
    const list = props.courses.map((course , index) => 
        <div className="fr-md-3  m-b-1" key={index} ref={observe}>
            <div className="m-r-1 bg-white shadow relative">
                <figure>
                    <img 
                        src={course.avatar} 
                        alt="Our courses" 
                        title="Bigjara courses" 
                        className="img-rectangular w-100"
                    />
                </figure>
                <div className="ribbon-box">
                    <p className="rotate">Enroll Now</p>
                </div>
                <div className="ribbon-box-2">
                    <p className="rotate-2">{course.duration}</p>
                </div>
                <div className="course-body pad-20">
                    <h3 className="font-2 center-text m-b-1 course-title">{course.title}</h3>
                    <p className="dark-text-faint course-description">
                        {course.description}
                    </p>
                </div>
            </div>
            <div className="center-text m-r-1">
                <button 
                    className="overview m-b-2 white-border-text b bg-pink uppercase 
                    no-border no-outline button white-text modal-trigger"
                    onClick={openModal}
                >
                    Read the Curriculum
                </button>
                <div 
                    className={"w-100 h-100 modal z-index-overall   top-0 left-0  wrapper"}
                    style={{bottom:"6rem!important"}}
                    ref={ne}
                >
                    <div 
                        className="modal-content center-box h-100 shadow overflow-auto bg-white"
                        data-modal-content-distance-from-top="0" 
                        data-modal-content-width="80" 
                    >
                            <span 
                                className="close both-hover-with-focus"
                                ref={closeToggleRef}
                                >
                                    &times;
                            </span>
                            <h4 className="no-margin-bottom modal-heading bold-700 pad-2 font-1">
                                {course.curriculum.title}
                            </h4>
                            <div className="modal-content-content">
                                {course.curriculum.sections.map((section , i) => 
                                    <div key={i}> 
                                        <h5 key={i} className="bg-faint pad-2 font-1 bold-250">
                                            {section.title}
                                        </h5>
                                        {section.topics.map((topic , i) => 
                                            <p key={i}>
                                                <i className="fa fa-television m-r-1"></i>
                                                {topic}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <section id="courses">
            <div className="full-frame">
                <div className="framer">
                    <h2 
                        className="center-text slow-hover m-b-1-5"
                         style={{fontSize:"2rem!important"}}
                    >
                        Registration ongoing
                    </h2>
                    <p className="center-text font-1-5 m-b-2">
                        Join our amazing young and talented community
                    </p>
                    <p className="center-text font-1-5 m-b-2">
                        We are currently accepting registration to enroll in  the courses below
                    </p>
                    <div className="frame">
                        {list}
                    </div>
                </div>
            </div>
        </section>
        
    )
} 

export default CourseList