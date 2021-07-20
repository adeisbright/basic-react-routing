const isLocalhost = Boolean(
    window.location.hostname === "localhost" || 
    window.location.hostname === "[::1]" || 
    window.location.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9]?)){3}$/
    )
)

const registerServiceWorker = (swUrl) => {
    navigator.serviceWorker.register(swUrl) 
        .then(registration => {
            //registration.showNotification(title,options)
            const installingWorker = registration.installing 
            // if (installingWorker.state === "installed"){
            //     if (navigator.serviceWorker.controller){
            //         console.log("New content is available")
            //     }else{
            //         console.log("Content is cached for offline use")
            //     }
            // }
        })
        .catch(err => console.error(err))
}

const isValidServiceWorker = swUrl => {
    fetch(swUrl) 
        .then(response => {
            if (
                response.status === 404 || 
                response.headers.get("content-type").indexOf("javascript") === -1
            ){
                navigator.serviceWorker.read.then(registration => {
                    registration.unregister().then(() => {
                        window.location.reload()
                    })
                })
            }else{
                registerServiceWorker(swUrl)
            }
        })
        .catch(err => {
            console.error("No Internet Connection found.")
        })
}

const unregisterSW = () => {
    if ("serviceworker" in navigator){
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister()
        })
    }
}

const register = (url) => {
    if (process.env.NODE_ENV === "development"){
        
        window.addEventListener("load" , () =>{
            const swUrl = `${process.env.PUBLIC_URL}/${url}`
            if (isLocalhost){
                isValidServiceWorker(swUrl)
            }else{
                registerServiceWorker(swUrl)
            }
        })
    }else if (process.env.NODE_ENV === "production" && "serviceWorker"){
        const publicUrl = new URL(process.env.PUBLIC_URL , window.location) 
        if (publicUrl.origin !== window.location.origin){
            return
        }

        window.addEventListener("load" , () => {
            const swUrl = `${process.env.PUBLIC_URL}/${url}`
            if(isLocalhost){
                isValidServiceWorker(swUrl)
                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        "This app is being cache-first by a service worker." + 
                        "To learn more  , visit https://ndundu.com"
                    )
                })
            }else{
                registerServiceWorker(swUrl)
            }
        })
    }
}

export default register