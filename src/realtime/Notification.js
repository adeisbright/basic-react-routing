/**
 * 
 * @param {String} title title or heading for the notification object that will appear
 * @param {Object} options configuration options for how the notification will appear 
 * @returns a notification object 
 * This function should not be called immediately the user lands on the page 
 * Call this function in response to a user action like after making a booking
 * Use the double request method to seek for permission so as to reduce the number of 
 * clients blocking our notification service
 */
const Notify = () => {
   
        if ("Notification" in window && navigator.serviceWorker){
            Notification.requestPermission(status => {
                if (Notification.permission === "granted"){
                    console.log("Permission for notification was granted" , status)
                }else if(Notification.permission === "denied"){
                    alert("Enable notification  for  timely update on your booking")
                }else{
                    Notification.requestPermission(status => {
                        console.log("Status" , status)
                    })
                }
            })
        }else {
            //pass a silent warning to the user to upgrade their device
            alert("Please , update your browser to get timely notification")
        }
}
export default Notify