

// let cypressA = new Promise (function(resolve,reject){

//     let r = 10
//     if(r == 10){
//         resolve("promise is fullfilled")
//     }
//     else{
//         "promise is not fullfilled"
//     }
// })
// cypressA.then(function(message){
//     console.log(message)
// }).catch(function(message){
//     console.log(message)
// })                                             // promise is fullfilled



// ------------------------------------------------------------------------


function add(x,y){
    console.log(`i am added ${x + y}`)
}

let cypressA = new Promise (function(resolve,reject){
    let info = {
        firstName : "chinmay",
        rollNo : 29
    }

let notinfo = {
    error : 123,
    message : "check the connection"
}
if(info.hasOwnProperty("firstName")){
    resovle(info)
}
else{
    reject(notinfo)
}
cypressA.then(function(info){
    console.log(info)
})
.catch(function(notinfo){
    console.log(`the error code is ${notinfo.error} and  message is ${notinfo.message}`)
})
})