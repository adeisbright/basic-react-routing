import {sendData} from "../js/api" 
const Subscribe = () => {
    if ("Notification" in window && navigator.serviceWorker){
        if (Notification.permission === "granted"){
            navigator.serviceWorker.getRegistration().then(registration => {
                if (registration){
                    const subscribeOptions = {
                        userVisibleOnly : true , 
                        applicationServerKey : "BE5dUS9Z2fn-1M-ABvxtPORLTQiIgsOz3Zx3kuPMTMDUzcOyGn-tFxP24Z0e41zxCYlkLS6SF8wZr9HswqEjc_8"
                    }
                    registration.pushManager.getSubscription()
                        .then(sub => {
                            if (sub === null){
                                registration.pushManager.subscribe(subscribeOptions)
                               
                            }else{
                                registration.pushManager.subscribe(subscribeOptions)
                                .then(sub => {
                                    let server = "http://localhost:4000/v1/store-push-subscription"
                                    sendData(server , sub)
                                    .then(res => {
                                        //Save it to cache or do anything with it 
                                        console.log(res)
                                    })
                                    .catch(err => {
                                        console.error(err)
                                    })
                                }) 
                                // sub.unsubscribe()
                                // .then(res => {
                                //     console.log("Unsubscribed this user")
                                // })
                                // .catch(err => console.error("Issues"))
                                //send this subscription object alongside some key credentials to the server
                               .catch(err => console.error(err))
                            }
                        })
                        .catch(err => {
                            console.error("Issues : " , err)
                        })
                }
            })
        }else{
            console.log("Not notified")
        }
    }
}

export default Subscribe