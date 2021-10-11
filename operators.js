 // //         new topic = "spread and rest operators


// // https://medium.com/@luke_smaki/javascript-es6-spread-operator-and-rest-parameters-b3e89d112281
 // 
 // use above url to rad all theory related to spread and rest operators.  its imporatnt.




//  1 - spread operator  // we can pass limited number of arguments with this operator.

//The spread operator (…) allows us to expand an iterable like array into its individual elements. 

// for starting 5
// let numbersa = [33,44,66,77,88,99,100,55,78,66,34,99,84]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }
// add(...numbersa)                     // 220






// 2 - rest operator      // we can used all ,arrey methods in the function because function parameter is a arrey.

// The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array

// function add(...a){
//     return a.reduce(function(acc,el){
//         return acc + el
//     })
// }
// let ffff = add(1,2,213,13,12,312,321,3,213,213,21,321,3,123,12,312,3,21,312)
// console.log(ffff)

//  we can pass multiple number of aruments to function with rest operators.


// function multiply(...a) {

//     return a.map(function(el,index, arrey){

//         return el * 2

//     })
// }
    
// let cc = multiply(2,4,6,8,10,34,545,2,656,7,45,43)
// console.log(cc)






// spread  

// let sss = [13,12,15,33,22,45]

// function add(x,y,z){
//     console.log(x+y+z)
// }
// add(...sss)

// rest 

// function add(...a){
//     return a.reduce(function( acc,el){
//         return acc + el
//     })
        
// }
//  let aa = add(2,4,6,5,3)
//  console.log(aa)
