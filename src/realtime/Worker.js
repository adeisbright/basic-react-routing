// let self = window.Worker 

export default () => {
    
    let listen = false
    if (!listen){
        let url = "http://localhost:4000/v1/vendors/notifications"
        const stream = new EventSource( url, {withCredentitals : true})
        stream.addEventListener("notification" , event => {
            let message = { 
                message :  JSON.parse(event.data)  , 
                type : "message"
            }
            postMessage(message)
        }) 
        stream.onerror = (e) => {
            
            let message = { 
                message :  []  , 
                type : "message"
            }
            postMessage(message)
            /*
            Remita RRR: 290497492479
₦500.00
            */
            
        } 
        listen = true
    }
     
}