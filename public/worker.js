const printName = name => name 
onmessage  = function(e){
    // console.log("We just received your worker")
    // const result = e.data[0] + e.data[1]
    // if (isNaN(result)){
    //     postMessage("Please provide valid two numbers")
    // }else{
    //     const workerResult = "Result : " + result 
    //     console.log("Worker posting message back to main script")
    //     postMessage(workerResult)
    //     setInterval(() => {
    //         postMessage(printName(workerResult))
    //      } , 300)
    // }
    console.log("Thank you for your message") 
    const feedback = e.data 
    postMessage(`You sent ${feedback}`)
}

