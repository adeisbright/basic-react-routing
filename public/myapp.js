
let input = document.createElement("input") 
let body =  document.querySelector("body")
input.type="text" 
input.setAttribute("class" , "input input-border-faint pad-10")
body.append(input)
if (window.Worker){
    //console.log("Your browser supports worker")
    let worker = new Worker("worker.js") 
    
    worker.onmessage = function(e){
        //console.log(e.data)
        let name = document.createElement("h3") 
        name.textContent = e.data 
       body.append(name)
    }
    input.addEventListener("blur" , event => {
        worker.postMessage(event.target.value)
        console.log("posted message to worker")
    })
   
}else{
    console.log("Your browser does not support web worker")
}
let CACHE_NAME = "my-site-cache-v1" 
let urlsToCache = [
    "/" , 
    "/manifest.json" , 
    "/myapp.js"
]
if ("serviceWorker" in navigator){
    window.addEventListener("load" , function(){
        navigator.serviceWorker.register("service-worker.js").then(function(registration) { //Dynamically load a file
            // registration was successful 
            //registration.showNotification("Hello World")
            console.log("ServiceWorker registration successful with scope  : " , registration.scope)
            //Install the service worker
            self.addEventListener("install" , event => {
                console.log("Opened Cache")
                event.waitUntil(
                    caches.open(CACHE_NAME)
                        .then(cache =>{
                            console.log("Opened Cache")
                            return cache.addAll(urlsToCache)
                        }).catch(err => {
                            console.error("It failed to install" , err)
                        })
                        
                )
            })
            //fetch 
            self.addEventListener("fetch" , event => {
                console.log("Opened Cache")
                event.respondWith(
                    caches.match(event.request)
                        .then(response =>{
                            if (response) {
                                return response
                            }
                            return fetch(event.request).then(response => {
                                //check if we receive a valid response 
                                if (!response || response.status !== 200 || response.type !== "basic"){
                                    return response
                                }
                                // clone the response 
                                var responseToCache = response.clone() 
                                caches.open(CACHE_NAME)
                                    .then(cache => {
                                        cache.put(event.request , responseToCache)
                                    })
                                    return response
                            })
                        }).catch(err => {
                            console.error("It failed to install" , err)
                        })  
                )
            })

            self.addEventListener("activate" , event => {
                let cacheAllowList = ["pages-cache-v1" , "blog-posts-cache-v1"] 
                event.waitUntil(
                    caches.keys().then(cacheNames => {
                        return Promise.all(
                            cacheNames.map(cacheName => {
                                if (cacheAllowList.indexOf(cacheName) === -1){
                                    return caches.delete(cacheName)
                                }
                            })
                        )
                    })
                )
            })
        }).catch(err =>{
            //registration failed 
            console.log("Service worker registration failed: " , err)
        })
    })
}
