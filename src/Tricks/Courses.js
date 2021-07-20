
import Learn from "../images/learn.svg" 
import Build from "../images/build.svg"

const Courses = [
    {
        avatar : Learn , 
        duration : "2 months" , 
        title : "Front End Engineering" , 
        description : `Learn web fundamentals , build clean interfaces ,
        and properly version your code. Gain indepth knowledge of HTML5 ,  
        CSS3 ,Bootstrap , SASS , Tooling ,  ES6+ , React , Git ,
        Github , and traspilers. 
        ` , 
        curriculum : {
            title : "Front End curriculum" , 
            sections : [
                {
                    title : "Section 1: Introduction to the Internet and Web Browsers " , 
                    topics : [
                        "Understanding the Internet" , 
                        "How browsers work"  , 
                        "Understanding HTTP/HTTPS " ,  
                        "Project 1.1 Verifying the DNS of a site" ,
                        "Project 1.2 Uploading files to the server" ,  
                        "Project 1.3 Sending emails using an SMTP server" ,  
                        "Homework #1"  
                    ]
                } , 
                {
                    title : "Section 2: Markup with HTML5" , 
                    topics : [
                        "Introduction to HTML5" , 
                        " Elements , tags , and attributes "  , 
                        "Paragraph " ,  
                        "Headings" ,
                        "Links " ,  
                        "Images" ,  
                        "Audio , Video , and IFRAME" ,
                        "List " , 
                        "Forms" , 
                        "Table" ,
                        "Web Graphics" , 
                        "Semantic Tags" , 
                        "Project 3.1 Porfolio page markup" , 
                        "Project 3.2 Github clone markup" , 
                        "Project 3.3 Tictok clone markup " , 
                        "Project 3.4 konga.com clone markup " , 
                        "Project 3.5 uniport.edu clone markup" , 
                        "Project 3.5 uniport.edu clone markup" , 
                        "Homework #2"

                    ]
                   
                } , 
                {
                    title : "Section 3: Cascading Style Sheet" , 
                    topics : [
                        "Introduction to CSS3" , 
                        " How to add CSS to HTML file"  , 
                        "CSS selectors" ,  
                        "Colors and Backgrounds" ,
                        "Text and Fonts" ,  
                        "Units of Measurement" ,  
                        "The box model theory " ,
                        "Border" , 
                        "Padding" , 
                        "Margin" ,
                        "Web Graphics" , 
                        "Styling Tables" , 
                        "Styling Forms" , 
                        "Styling List" , 
                        "Styling Images" , 
                        "Display" , 
                        "Overflow" , 
                        "Float" , 
                        "Positioning" , 
                        "Flex box and Grid" , 
                        "Linear and Radial Gradient" , 
                        "Transform , Transition , and Animation" , 
                        "Project 3.1 Porfolio page styling" , 
                        "Project 3.2 Github clone styling" , 
                        "Project 3.3 Tictok clone styling" , 
                        "Project 2.4 Konga.com clone styling" , 
                        "Homework 3"

                    ]
                   
                } ,
                {
                    title : "Section 4: Responsive Design" , 
                    topics : [
                        "What is responsive design ?" , 
                        "Fluid layout"  , 
                        "Fluid Image" ,  
                        "Media Queries" ,
                        "Responsive design with Bigjara Framework" ,  
                        "Project 4.1 Making Porfolio responsive" ,  
                        " Project 4.2 Making Github clone responsive" ,
                        "Project 4.3 Making Tictok clone responsive " , 
                        "Project 4.4 Making Jiji.com clone responsive" , 
                        "Project 4.5 Making uniport.edu clone responsive " ,
                        "Homework #4" , 

                    ]
                   
                },
                {
                    title : "Section 5: Programming with Javascript " , 
                    topics : [
                        "What is the essence of Programming ?" , 
                        "Common Problems in computing"  , 
                        "Getting started with Javascript" ,  
                        "Bindings" ,
                        "Operators" ,  
                        "Window Globals" ,  
                        "Conditionals" ,
                        "Repetition" , 
                        "Functions " , 
                        "Arrays" ,
                        "Set and Map" , 
                        "Introduction to Object Oriented Programming" , 
                        "OOP in Javascript" , 
                        "String" , 
                        "Number" , 
                        "Math Object" , 
                        "Date Object" , 
                        "Regular Expression " , 
                        "Exception Handling" , 
                        "Document Object Model" , 
                        "Event Handling" , 
                        "Modular Programming" , 
                        "Asynchronous Programming" , 
                        "Developers Tool" , 
                        "Writing efficient Javascript" , 
                        "Project 5.1 MVC Architectured Todo list App " , 
                        "Project 5.3 Gmail clone " , 
                        "Project 5.4 Browser Calculator" , 
                        "Project 5.5 Tictak game" , 
                        "Project 5.6 Snake Game" , 
                        "Project 5.7 Computer Based Testing Platform" , 
                        "Project 5.8 Result Processing Browser Software " , 
                        "Homework #5"

                    ]
                   
                } , 
                {
                    title : "Section 6: Version Control and Collaboration" , 
                    topics : [
                        "Why Version Control ?" , 
                        "Getting started with Git"  , 
                        "How git works" ,  
                        "Configuring git" ,
                        "Initializing a repository" ,  
                        "Viewing repostiory status" ,  
                        "How to add changes" ,
                        "How to make useful commit" , 
                        "Tags  , and code versioning" , 
                        "Commit History" ,
                        "Branching" , 
                        "Branching" , 
                        "Checkout" , 
                        "Undoing changes" , 
                        "Introduction to Github" , 
                        "Github interface overview" , 
                        "Branching " , 
                        "Pull Request" , 
                        "Issues" , 
                        "Labels" , 
                        "Milestones" , 
                        "Github Pages and Wikis" , 
                        "Git and Github" , 
                        "Github Teams and Organization" , 
                        "Introduction to Open Source Development with github" , 
                        "Project 6.1 Tracking local project " , 
                        "Project 6.2 Adding a remote repository " , 
                        "Project 6.3 Making changes to a remote repository" , 
                        "Project 6.4 Contributing to an external project" , 
                        "Homework #6 " 

                    ]
                   
                } , 
                {
                    title : "Section 7: React" , 
                    topics : [
                        " Why React ?" , 
                        "Understanding Elements , and components  "  , 
                        "JSX , and Props" ,  
                        "Creating components" ,
                        "List " ,  
                        "Events" ,  
                        "Component Lifecycle " ,
                        "Form and Controlled Components" , 
                        "State Management" , 
                        "Routing with React Router" ,
                        "React  , and Bigjara Framework -  A complete combo " , 
                        "Thinking in React" , 
                        "Project 7.1 Design of whatsApp with React" , 
                        "Project 7.2 Design of Telegram with React" , 
                        "Project 7.2 Design of Facebook with React " , 
                        "Homework #7 " 

                    ]
                   
                } , 
                {
                    title : "Section 8: Assessment and Examination" , 
                    topics : [
                        "Complete Design of a startup in any chosen sector?" , 
                        "Group project"  , 
                        "Publishing your portfolio " ,  
                        "Job and Career Networking" ,
                        "Thank you" 
                    ]
                   
                }
            ]
        }
    } ,
    {

        avatar : Build , 
        duration : "2 months" , 
        title : "Back End Engineering" , 
        description : `Learn how to build an efficient , scalable , and robust back 
        end infrastructure to power organization's need. 
        earn how to create secure and irresitible API's.
        ` , 
        curriculum : {
            title : "Back End curriculum" , 
            sections : [
                {
                    title : "Section 1: Introduction to Server side programming" , 
                    topics : [
                        "Server : Hardware or Software ?" , 
                        "HTTP"  , 
                        "Routing " ,  
                        "Security and Configuration" ,
                        "Project 1.1 A practical step on understanding how server operates" ,  
                        "Homework #1"
                    ]
                } , 
                {
                    title : "Section 2: Data Engineering with PostgreSQL" , 
                    topics : [
                        "Understanding SQL" , 
                        "Entity modeling and ERD"  , 
                        "PostgreSQL" ,  
                        "Creating Database " ,
                        "Database access and Security" ,  
                        "Constraint" ,  
                        "Table" ,
                        "CRUD operations" , 
                        "Transaction" , 
                        "Views" ,
                        "Project 2.1 Restaurant Modeling" , 
                        "Project 2.2 Recruitment System Data Modeling " , 
                        "Project 2.3 Social Networking System Modeling" , 
                        "Homework #2" 
                    ]
                   
                } , 
                {
                    title : "Section 3: Data Engineering with MongoDB" , 
                    topics : [
                        "The concept of collection and document " , 
                        "MongoDB as a DBMS " , 
                        "Creating and Destroying a Database" ,  
                        "Database access and security " , 
                        "Creating capped and uncapped collections"  , 
                        "Creating new documents " ,  
                        "CRUD operations " ,  
                        "Document modifiers " ,  
                        "Working with Arrays " ,  
                        "Web Grahics " ,  
                        "Sharding and Scaling " , 
                        "Project 3.1 Modeling of a Restaurant " ,  
                        "Project 3.2 Recruitment System Data Modeling " , 
                        "Project 3.3 Social Media Modeling " , 
                        "Homework 3"
                    ]
                   
                } ,
                {
                    title : " Section 4: Server Programming with Node.js" , 
                    topics : [
                        "Introduction to Server Side Programming with Node" ,  
                        "Environment Setup " ,  
                        "Event Loop" ,   
                        "Node core modules " ,  
                        "File system modules  " , 
                        "Third party modules " ,  
                        "Express and its related technologies " ,  
                        "Designing and Developing API's with Express  " , 
                        "Multip-page App with Express " ,  
                        "Testing " , 
                        "Profiling , and Optimization  " , 
                        "Security checks " ,  
                        "Staging , and Deployment  " , 
                        "Project 4.1 A simple web server " ,  
                        "Project 4.2 Music Downloader App " ,  
                        "Project 4.3 API (REST , and GraphQL) for Hotel Management System " ,  
                        "Project 4.4 A realtime voting application " ,  
                        "Project 4.5 A file collaboration tool " ,  
                        "Project 4.6 A Content Management System with Emailing Feature " ,  
                        "Project 4.7 Ecommerce Application " ,  
                        "Homework #4 "
                    ]
                   
                },
                {
                    title : "Section 5: Server Programming with Django" , 
                    topics : [
                        "Django to the rescue" ,  
                        "Creating a Django Project " , 
                        "Django Project Settings " ,  
                        " How to create an app  " , 
                        "Working on Django Models  " , 
                        "Django Templating Language " ,  
                        "Routing" ,  
                        "Serving static files  " , 
                        "Django Admin Site " ,  
                        "Security " , 
                        "Deploying a Django app " , 
                        "Project 5.1 A simple web server " , 
                        "Project 5.2 Music Downloader App " ,  
                        "Project 5.3 API (REST , and GraphQL) for Hotel Management System" ,  
                        "Project 5.4 A realtime voting application  " , 
                        "Project 5.5 A file collaboration tool " , 
                        "Project 5.6 A Content Management System with Emailing Feature" ,
                        "Project 5.7 Ecommerce Application " , 
                        "Homework #5  "
                    ]
                   
                } , 
                {
                    title : "Section 6:  Assessment and Evaluation" , 
                    topics : [
                        "Why Version Control ?" , 
                        "Project : Model of a Population Record System"  , 
                    ]
                   
                } 
            ]
        }
    } ,
    {
        title : "Front End Engineering" , 
        avatar : Build , 
        duration : "3 months" , 
        description : `Learn web fundamentals , build clean interfaces ,
        and properly version your code. Gain indepth knowledge of HTML5 ,  
        CSS3 ,Bootstrap , SASS , Tooling ,  ES6+ , React , Git ,
        Github , and traspilers. 
        ` , 
        curriculum : {
            title : "Front End curriculum" , 
            sections : [
                {
                    title : "Section 1: Introduction to the Internet and Web Browsers " , 
                    topics : [
                        "Understanding the Internet" , 
                        "How browsers work"  , 
                        "Understanding HTTP/HTTPS " ,  
                        "Project 1.1 Verifying the DNS of a site" ,
                        "Project 1.2 Uploading files to the server" ,  
                        "Project 1.3 Sending emails using an SMTP server" ,  
                        "Homework #1"  
                    ]
                } , 
                {
                    title : "Section 2: Markup with HTML5" , 
                    topics : [
                        "Introduction to HTML5" , 
                        " Elements , tags , and attributes "  , 
                        "Paragraph " ,  
                        "Headings" ,
                        "Links " ,  
                        "Images" ,  
                        "Audio , Video , and IFRAME" ,
                        "List " , 
                        "Forms" , 
                        "Table" ,
                        "Web Graphics" , 
                        "Semantic Tags" , 
                        "Project 3.1 Porfolio page markup" , 
                        "Project 3.2 Github clone markup" , 
                        "Project 3.3 Tictok clone markup " , 
                        "Project 3.4 konga.com clone markup " , 
                        "Project 3.5 uniport.edu clone markup" , 
                        "Project 3.5 uniport.edu clone markup" , 
                        "Homework #2"

                    ]
                   
                } , 
                {
                    title : "Section 3: Cascading Style Sheet" , 
                    topics : [
                        "Introduction to CSS3" , 
                        " How to add CSS to HTML file"  , 
                        "CSS selectors" ,  
                        "Colors and Backgrounds" ,
                        "Text and Fonts" ,  
                        "Units of Measurement" ,  
                        "The box model theory " ,
                        "Border" , 
                        "Padding" , 
                        "Margin" ,
                        "Web Graphics" , 
                        "Styling Tables" , 
                        "Styling Forms" , 
                        "Styling List" , 
                        "Styling Images" , 
                        "Display" , 
                        "Overflow" , 
                        "Float" , 
                        "Positioning" , 
                        "Flex box and Grid" , 
                        "Linear and Radial Gradient" , 
                        "Transform , Transition , and Animation" , 
                        "Project 3.1 Porfolio page styling" , 
                        "Project 3.2 Github clone styling" , 
                        "Project 3.3 Tictok clone styling" , 
                        "Project 2.4 Konga.com clone styling" , 
                        "Homework 3"

                    ]
                   
                } ,
                {
                    title : "Section 4: Responsive Design" , 
                    topics : [
                        "What is responsive design ?" , 
                        "Fluid layout"  , 
                        "Fluid Image" ,  
                        "Media Queries" ,
                        "Responsive design with Bigjara Framework" ,  
                        "Project 4.1 Making Porfolio responsive" ,  
                        " Project 4.2 Making Github clone responsive" ,
                        "Project 4.3 Making Tictok clone responsive " , 
                        "Project 4.4 Making Jiji.com clone responsive" , 
                        "Project 4.5 Making uniport.edu clone responsive " ,
                        "Homework #4" , 

                    ]
                   
                },
                {
                    title : "Section 5: Programming with Javascript " , 
                    topics : [
                        "What is the essence of Programming ?" , 
                        "Common Problems in computing"  , 
                        "Getting started with Javascript" ,  
                        "Bindings" ,
                        "Operators" ,  
                        "Window Globals" ,  
                        "Conditionals" ,
                        "Repetition" , 
                        "Functions " , 
                        "Arrays" ,
                        "Set and Map" , 
                        "Introduction to Object Oriented Programming" , 
                        "OOP in Javascript" , 
                        "String" , 
                        "Number" , 
                        "Math Object" , 
                        "Date Object" , 
                        "Regular Expression " , 
                        "Exception Handling" , 
                        "Document Object Model" , 
                        "Event Handling" , 
                        "Modular Programming" , 
                        "Asynchronous Programming" , 
                        "Developers Tool" , 
                        "Writing efficient Javascript" , 
                        "Project 5.1 MVC Architectured Todo list App " , 
                        "Project 5.3 Gmail clone " , 
                        "Project 5.4 Browser Calculator" , 
                        "Project 5.5 Tictak game" , 
                        "Project 5.6 Snake Game" , 
                        "Project 5.7 Computer Based Testing Platform" , 
                        "Project 5.8 Result Processing Browser Software " , 
                        "Homework #5"

                    ]
                   
                } , 
                {
                    title : "Section 6: Version Control and Collaboration" , 
                    topics : [
                        "Why Version Control ?" , 
                        "Getting started with Git"  , 
                        "How git works" ,  
                        "Configuring git" ,
                        "Initializing a repository" ,  
                        "Viewing repostiory status" ,  
                        "How to add changes" ,
                        "How to make useful commit" , 
                        "Tags  , and code versioning" , 
                        "Commit History" ,
                        "Branching" , 
                        "Branching" , 
                        "Checkout" , 
                        "Undoing changes" , 
                        "Introduction to Github" , 
                        "Github interface overview" , 
                        "Branching " , 
                        "Pull Request" , 
                        "Issues" , 
                        "Labels" , 
                        "Milestones" , 
                        "Github Pages and Wikis" , 
                        "Git and Github" , 
                        "Github Teams and Organization" , 
                        "Introduction to Open Source Development with github" , 
                        "Project 6.1 Tracking local project " , 
                        "Project 6.2 Adding a remote repository " , 
                        "Project 6.3 Making changes to a remote repository" , 
                        "Project 6.4 Contributing to an external project" , 
                        "Homework #6 " 

                    ]
                   
                } , 
                {
                    title : "Section 7: React" , 
                    topics : [
                        " Why React ?" , 
                        "Understanding Elements , and components  "  , 
                        "JSX , and Props" ,  
                        "Creating components" ,
                        "List " ,  
                        "Events" ,  
                        "Component Lifecycle " ,
                        "Form and Controlled Components" , 
                        "State Management" , 
                        "Routing with React Router" ,
                        "React  , and Bigjara Framework -  A complete combo " , 
                        "Thinking in React" , 
                        "Project 7.1 Design of whatsApp with React" , 
                        "Project 7.2 Design of Telegram with React" , 
                        "Project 7.2 Design of Facebook with React " , 
                        "Homework #7 " 

                    ]
                   
                } , 
                {
                    title : "Section 8: Assessment and Examination" , 
                    topics : [
                        "Complete Design of a startup in any chosen sector?" , 
                        "Group project"  , 
                        "Publishing your portfolio " ,  
                        "Job and Career Networking" ,
                        "Thank you" 
                    ]
                   
                }
            ]
        }
    } , 
    {
        title : "Front End Engineering" , 
        avatar : Learn , 
        duration : "4 months" , 
        description : `Learn web fundamentals , build clean interfaces ,
        and properly version your code. Gain indepth knowledge of HTML5 ,  
        CSS3 ,Bootstrap , SASS , Tooling ,  ES6+ , React , Git ,
        Github , and traspilers. 
        ` , 
        curriculum : {
            title : "Front End curriculum" , 
            sections : [
                {
                    title : "Section 1: Introduction to the Internet and Web Browsers " , 
                    topics : [
                        "Understanding the Internet" , 
                        "How browsers work"  , 
                        "Understanding HTTP/HTTPS " ,  
                        "Project 1.1 Verifying the DNS of a site" ,
                        "Project 1.2 Uploading files to the server" ,  
                        "Project 1.3 Sending emails using an SMTP server" ,  
                        "Homework #1"  
                    ]
                } , 
                {
                    title : "Section 2: Markup with HTML5" , 
                    topics : [
                        "Introduction to HTML5" , 
                        " Elements , tags , and attributes "  , 
                        "Paragraph " ,  
                        "Headings" ,
                        "Links " ,  
                        "Images" ,  
                        "Audio , Video , and IFRAME" ,
                        "List " , 
                        "Forms" , 
                        "Table" ,
                        "Web Graphics" , 
                        "Semantic Tags" , 
                        "Project 3.1 Porfolio page markup" , 
                        "Project 3.2 Github clone markup" , 
                        "Project 3.3 Tictok clone markup " , 
                        "Project 3.4 konga.com clone markup " , 
                        "Project 3.5 uniport.edu clone markup" , 
                        "Project 3.5 uniport.edu clone markup" , 
                        "Homework #2"

                    ]
                   
                } , 
                {
                    title : "Section 3: Cascading Style Sheet" , 
                    topics : [
                        "Introduction to CSS3" , 
                        " How to add CSS to HTML file"  , 
                        "CSS selectors" ,  
                        "Colors and Backgrounds" ,
                        "Text and Fonts" ,  
                        "Units of Measurement" ,  
                        "The box model theory " ,
                        "Border" , 
                        "Padding" , 
                        "Margin" ,
                        "Web Graphics" , 
                        "Styling Tables" , 
                        "Styling Forms" , 
                        "Styling List" , 
                        "Styling Images" , 
                        "Display" , 
                        "Overflow" , 
                        "Float" , 
                        "Positioning" , 
                        "Flex box and Grid" , 
                        "Linear and Radial Gradient" , 
                        "Transform , Transition , and Animation" , 
                        "Project 3.1 Porfolio page styling" , 
                        "Project 3.2 Github clone styling" , 
                        "Project 3.3 Tictok clone styling" , 
                        "Project 2.4 Konga.com clone styling" , 
                        "Homework 3"

                    ]
                   
                } ,
                {
                    title : "Section 4: Responsive Design" , 
                    topics : [
                        "What is responsive design ?" , 
                        "Fluid layout"  , 
                        "Fluid Image" ,  
                        "Media Queries" ,
                        "Responsive design with Bigjara Framework" ,  
                        "Project 4.1 Making Porfolio responsive" ,  
                        " Project 4.2 Making Github clone responsive" ,
                        "Project 4.3 Making Tictok clone responsive " , 
                        "Project 4.4 Making Jiji.com clone responsive" , 
                        "Project 4.5 Making uniport.edu clone responsive " ,
                        "Homework #4" , 

                    ]
                   
                },
                {
                    title : "Section 5: Programming with Javascript " , 
                    topics : [
                        "What is the essence of Programming ?" , 
                        "Common Problems in computing"  , 
                        "Getting started with Javascript" ,  
                        "Bindings" ,
                        "Operators" ,  
                        "Window Globals" ,  
                        "Conditionals" ,
                        "Repetition" , 
                        "Functions " , 
                        "Arrays" ,
                        "Set and Map" , 
                        "Introduction to Object Oriented Programming" , 
                        "OOP in Javascript" , 
                        "String" , 
                        "Number" , 
                        "Math Object" , 
                        "Date Object" , 
                        "Regular Expression " , 
                        "Exception Handling" , 
                        "Document Object Model" , 
                        "Event Handling" , 
                        "Modular Programming" , 
                        "Asynchronous Programming" , 
                        "Developers Tool" , 
                        "Writing efficient Javascript" , 
                        "Project 5.1 MVC Architectured Todo list App " , 
                        "Project 5.3 Gmail clone " , 
                        "Project 5.4 Browser Calculator" , 
                        "Project 5.5 Tictak game" , 
                        "Project 5.6 Snake Game" , 
                        "Project 5.7 Computer Based Testing Platform" , 
                        "Project 5.8 Result Processing Browser Software " , 
                        "Homework #5"

                    ]
                   
                } , 
                {
                    title : "Section 6: Version Control and Collaboration" , 
                    topics : [
                        "Why Version Control ?" , 
                        "Getting started with Git"  , 
                        "How git works" ,  
                        "Configuring git" ,
                        "Initializing a repository" ,  
                        "Viewing repostiory status" ,  
                        "How to add changes" ,
                        "How to make useful commit" , 
                        "Tags  , and code versioning" , 
                        "Commit History" ,
                        "Branching" , 
                        "Branching" , 
                        "Checkout" , 
                        "Undoing changes" , 
                        "Introduction to Github" , 
                        "Github interface overview" , 
                        "Branching " , 
                        "Pull Request" , 
                        "Issues" , 
                        "Labels" , 
                        "Milestones" , 
                        "Github Pages and Wikis" , 
                        "Git and Github" , 
                        "Github Teams and Organization" , 
                        "Introduction to Open Source Development with github" , 
                        "Project 6.1 Tracking local project " , 
                        "Project 6.2 Adding a remote repository " , 
                        "Project 6.3 Making changes to a remote repository" , 
                        "Project 6.4 Contributing to an external project" , 
                        "Homework #6 " 

                    ]
                   
                } , 
                {
                    title : "Section 7: React" , 
                    topics : [
                        " Why React ?" , 
                        "Understanding Elements , and components  "  , 
                        "JSX , and Props" ,  
                        "Creating components" ,
                        "List " ,  
                        "Events" ,  
                        "Component Lifecycle " ,
                        "Form and Controlled Components" , 
                        "State Management" , 
                        "Routing with React Router" ,
                        "React  , and Bigjara Framework -  A complete combo " , 
                        "Thinking in React" , 
                        "Project 7.1 Design of whatsApp with React" , 
                        "Project 7.2 Design of Telegram with React" , 
                        "Project 7.2 Design of Facebook with React " , 
                        "Homework #7 " 

                    ]
                   
                } , 
                {
                    title : "Section 8: Assessment and Examination" , 
                    topics : [
                        "Complete Design of a startup in any chosen sector?" , 
                        "Group project"  , 
                        "Publishing your portfolio " ,  
                        "Job and Career Networking" ,
                        "Thank you" 
                    ]
                   
                }
            ]
        }
    }
]  

export default Courses 