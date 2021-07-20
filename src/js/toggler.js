let selector = e => document.querySelector(e) 
let selectAll = e => document.querySelectorAll(e)
let toggler = selector("#navbar-toggler") 
if (toggler){ 
    try { 
        // Opening mobile search 
        let searchTrigger = selector(".nav-search")
        let searchBox = selector(".mobile-search")
        let stickySidebar = selector(".sticky") 
        searchTrigger.addEventListener("click" , e => {
            searchBox.classList.toggle("d-active-sm")
            searchBox.nextElementSibling.classList.toggle("after-fixed-elem")
        })  
        // Opening the sidebar 
        let stickyClass = stickySidebar.classList
        toggler.addEventListener("click" , e => { 
            selector(".main").classList.toggle("main-now") 
        
        stickyClass.toggle("sticky")

        //stickyClass.remove("bg-dark-light")
        //stickySidebar.setAttribute("class" , "fixam from-left")
        })
    }catch(error){
        console.error(error.message)
    }
}  
let closeIcons = Array.from(selectAll(".remove-father")) 
if (closeIcons){
    closeIcons.map(icon  => {
        icon.addEventListener("click" , event => {
            let target = event.target 
            target.parentNode.parentNode.style.display = "none"
        })
    })
}