// let url = new URL("orders" , self.location.origin) 
// console.log(url , url.href)

const urlsToOpen = (serverName) => {
    clients.matchAll({
        type : "window" , 
        includeUncontrolled : true
    }).then(windowClients => {
        let matchingClient = null 
        let clientIsFocused = false 
        for (let i = 0 ; i < windowClients.length ; i++){
            const windowClient = windowClients[i] 
            if (windowClient.focused){
                clientIsFocused = true 
                break;
            }
            if(windowClient.url === serverName){
                matchingClient = windowClient
                break
            }
        }
        // if (clientIsFocused){
        //     // Do not show notification
        // instead use the postMessage event to post a message to the client 
        // windowClients.forEach(client => client.postMessage({mesage : message , time : time}))
        // }
        // You can also cache a page that should be visited when notified
        if (matchingClient){
            return matchingClient.focus() 
        }else{
            return clients.openWindow(serverName)
        }
    })
}

self.addEventListener("notificationclose" , event => {
    let notification = event.notification 
    let primaryKey = notification.data.primaryKey 
    console.log("Closed notification : " + primaryKey)
    //send the user details to the server to help us in determining how 
    // users interact with notification and to help us know what to do
})

self.addEventListener("notificationclick" , event => {
   
    let notification = event.notification 
    let primaryKey = notification.data.primaryKey 
    let action = event.action 
    if (action === "close"){
        notification.close()
    }else{
        //clients.openWindow("http://localhost:5000") 

        urlsToOpen("http://localhost:3000")
        notification.close()
    }
})

// Handling of push messaging from our push service

self.addEventListener("push" , event => { 
    let body 
    let title 
    if (event.data){
        body = event.data.json().body 
        title = event.data.json().title 
    }else{
        body = "Push message with no payload"
        title = "No title"
    }
    
    //replace icons with a 192px icon for the brand
    let notifyOptions = {
        body : body , 
        vibrate : [100 , 50 , 100] , 
        image : `../logo192.png`  , 
        badge : `../logo192.png` ,
        requireInteration : true , 
        tag : "message-1" , 
        renotify : true , 
        icon : `../logo192.png` , 
        timestamp : Date.now().getTime() , 
        data : {
            dateOfArrival : Date.now() , 
            primaryKey : 2
        } , 
        actions : [
            {action : "explore" , title : "Open" , icon : `../logo192.png`} , 
            {action : "close" , title : "Close" , icon : `../logo192.png`}
        ]
    }
    event.waitUntil(
        self.registration.showNotification(title , notifyOptions)
    )
})