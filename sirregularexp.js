 // in javascript everything is a object.


// let amol ={
//     age : 34,
//     firstName : "amolrao",
//     displayName: function(){
//         console.log(`my name is ${this.firstName}`)

//     }
// }
// console.log(amol.age)
// console.log(amol.firstName)
// amol.displayName()


// let lastName = new String("deshpande")
// console.log(lastName.toUpperCase())
// console.log(lastName.length)


// let names = ["chinmay","swapnil","akshay","prashant"]

// let lastName = new Array(4)

// lastName[0] = "deshpande"
// lastName[1] = "malwadkar"
// lastName[2] = "jagtap"
// lastName[3] = "limbone"

// console.log(lastName)       // [ 'deshpande', 'malwadkar', 'jagtap', 'limbone' ]


// //----------- class -------

// class person{
//     constructor(age,firstName){     // using constructor we add the properties while 
//         this.age = age
//         this.firstName = firstName
//     }
//     displayName(){
//         console.log(`my name is ${this.firstName}`)
//     }
// }

// let swapnil = new person(25,'swap')
// let samir = new person(27,'sam')

// // console.log(swapnil)
// // console.log(samir)

// // swapnil.displayName()
// // samir.displayName()



// let students = new Array(2)

// students[0] = swapnil
// students[1] = samir

// for(let i=0; i<students.length; i++){

//     let obj = students[i]
//     for(let key in obj){
//         console.log(key,obj[key])
//     }
// }




//-------------  regular expressions ----------

// there are two ways of expressing the regular expressions.

// 1 -    let regex1 = new Regex("hello")   // as a costructor

// 2 -    let regex2 = /worlds/;         // using slash    

// ------------------ with second way--------------

// method 1 - search

// let rr  = "Hi i am to PYTHON and learning python"
// let regex2 = /python/;                  // i is a modifier which means case insesitiv
// let h = rr.search(regex2)
// console.log(h) 




// let rr  = "Hi i am to PYTHON and learning python"
// let regex2 = /python/i;                  // i is a modifier which means case insesitiv
// let h = rr.search(regex2)
// console.log(h)    //  //  11  because search method returns index no.


// let regex2 = /python/g;
// let rr  = "Hi i am to PYTHON and learning python"
// let h = rr.search(regex2)
// console.log(h)                 //  // 31




// let regex2 = /python/gi;
// let rr  = "Hi i am to PYTHON and learning python"
// let h = rr.search(regex2)
// console.log(h)                 //  // 11

// --------------------------------------------------------------------

// method - 2 - match

// let regex3 = /python/gi;
// let rra  = "Hi i am to PYTHON and learning python"
// let gg = rra.match(regex3)
//  console.log(gg)              //  // [ 'PYTHON', 'python' ] because match method returns arrey of exact match
                                              


// let regex3 = /python/g;
// let rra  = "Hi i am to PYTHON and learning python"
// let gg = rra.match(regex3)
// console.log(gg)                  // //   [ 'python' ]  



// let regex3 = /python/i;
// let rra  = "Hi i am to PYTHON and learning python"
// let gg = rra.match(regex3)
// console.log(gg)                     // // [ 'PYTHON' ]

// // ----------------------------------------------------------------------------

// method - 3 -  replace

// let regex3 = /virat/ig;
// let abc = "virat is a great player and VIRAT is from mumbai"
// let dd = abc.replace(regex3,"sachin")
// console.log(dd)             // // sachin is a great player and sachin is from mumbai



// let regex3 = /virat/i;
// let abc = "virat is a great player and VIRAT is from mumbai"
// let dd = abc.replace(regex3,"sachin")
// console.log(dd)              //  sachin is a great player and VIRAT is from mumbai. it replace only first occurance  


// let regex3 = /virat/g;
// let abc = "virat is a great player and VIRAT is from mumbai"
// let dd = abc.replace(regex3,"sachin")
// console.log(dd)            //  sachin is a great player and VIRAT is from mumbai


///^javascript.d$/gim
//^ multi-line string only
// $ multi-line ends with only
// [abc][a-z][A-Z][0-9]

// ------------ day 3---------------------------

// program 1 -  get the elements which include pune

// let names = ["chinmay-pune",'poorva-ujjain','abhisha-chandrapur','mayuri-nagpur','amol-pune']

// const h = /pune/ // pattern
// console.log(h.test(names[0]))       // test method returns true or falls

// let puneS = names.filter(function(el){
//     return h.test(el)
// })
// console.log(puneS)

// --------------------------------------------------------------------------------------------

// prog2

//  const h = /^a/   // pattern
//  let names = ["chinmay-pune",'poorva-ujjain','abhisha-chandrapur','mayuri-nagpur','amol-pune']
// console.log(h.test(names[1]))

// let puneS = names.filter(function(el){
//     return h.test(el)
// })
// console.log(puneS)

// // prog3

// let namesStudents = ["amol","archit","amit","amey","abhisha",'arman']
// let ba =  /^....$/
// //-----------------------------------
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)


// // prog3

// let namesStudents = ["amol","archit","amit","amey","abhisha",'arman']
// let ba =  /^[a][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)

// prog 4

// // let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]
// // let b = /^[7][7].{8}$/
// // let yy = num.filter(function(el){
// //     return b.test(el)
// // })
// // console.log(yy)



// //program 5

// //\d - [0-9]


// // let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]
// // let b = /^[\d][\d].{8}$/
// // let yy = num.filter(function(el){
// //     return b.test(el)
// // })
// // console.log(yy)


// // \D - [^0-9]
// // let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]
// // //let b = /^[\D][\D].{8}$/
// // let b = /^[^0-9][^0-9].{8}$/
// // let yy = num.filter(function(el){
// //     return b.test(el)
// // })
// // console.log(yy)




// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[^a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)

// //same as this [a-zA-Z0-9_]

// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[\W][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)


// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)

// //same as this [a-zA-Z0-9_]

// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba = 
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)















// 
