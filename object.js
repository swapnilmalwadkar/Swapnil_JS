
// let info = {
//     firstName: "swapnil",
//     lastName: "malwadkar",
//     age: 25,
//     id:40
// }

// // fetching the value from an object

// console.log(info.lastName)     //  we can dot(.) notation and bracket notation to access the property
                                 // and values of the object.
// console.log(info['lastName'])

// *******************************************

// updating the value of an object

// info.firstName = "sandeep"
// console.log(info.firstName)


// info['firstName'] = "sandeep"
// console.log(info.firstName)
// console.log(info)

// **************************************************

// add or insert new property to an object

// info.address = "baramati"
// console.log(info)

// info['address']= "baramati"
// console.log(info)


// ****************************************************

// deleting the property of an object

// delete info.age
// console.log(info)

// delete info['id']
// console.log(info)



// // use of for loop in object

// let person1 = {
//     firstName : "sachin",
//     lastName : "tendulkar",
//     number : 10,
//     runs : 10000,
//     roll : "batsman"

// }

// to print all the object as it is we use for loop.

// // for(let key in person1){
// //     console.log(key)      // here if we put only key then we will get all the keys(properties) only.

// // }

// for (let key in person1){
//     console.log(key,person1[key])     // by this we get aal keys and its values.
// }





// ***************  logical questions on object **************************

// let students = [
//     {
//         firstName : "chinmay",
//         age : 25,
//         skills : ["python","javascript","css","jquery"]
//     },
//     {
//         firstName : "poorva",
//         age : 28,
//         skills : ["javascript","css"]
//     },
//     {
//         firstName : "abhisha",
//         age : 27,
//         skills : ["python","javascript"]
//     }
// ]

// console.log(students[0].skills.length)    // 4
// console.log(students[1].skills.length)    // 2

// console.log(students[1]['skills'])    // with bracket notation  [ 'javascript', 'css' ]


// //problem -1 print names of the students having age above 25 from above example

// for (let i = 0;i<students.length; i++){
//     if(students[i]['age'] > 25){
//         console.log(students[i]['firstName'])
//     }
// }                                                    // poova ,abhisha




// // *********************************************************************************



// let students = [
//     {
//         firstName : "chinmay",
//         age : 25,
//         skills : ["python","javascript","css","jquery"]
//     },
//     {
//         firstName : "poorva",
//         age : 28,
//         skills : ["javascript","css"]
//     },
//     {
//         firstName : "abhisha",
//         age : 27,
//         skills : ["python","javascript"]
//     }
// ]


// // problem 2 get average age of all students.

// let sum = 0;

// for (let i = 0; i<students.length; i++){
//     sum = sum + students[i]['age']
// }

// console.log(sum/students.length)     // 26.666666666666668


 // *************************************************************************


 let students = [
    {
        firstName : "chinmay",
        age : 25,
        skills : ["python","javascript","css","jquery"]
    },
    {
        firstName : "poorva",
        age : 28,
        skills : ["javascript","css"]
    },
    {
        firstName : "abhisha",
        age : 27,
        skills : ["python","javascript"]
    }
]


 // // we have get the name of students with no. properties they have

//  for(i = 0; i<students.length; i++){
//      console.log(`${students[i].firstName} : ${students[i].skills.length}`)
//  }
//  chinmay : 4
//  poorva : 2
//  abhisha : 2


// // we have to get name of students with its skills

// for(i=0; i<students.length; i++){
//     console.log(`${students[i].firstName} : ${students[i].skills}`)
// }

//  chinmay : python,javascript,css,jquery
// poorva : javascript,css
// abhisha : python,javascript



// // we have to print the names of students having skill python

   //  first way

//    for(let i = 0; i<students.length; i++){       // here we use . notation because this is arrey of obejects
//        if(students[i].skills.indexOf("python")>=0){
//        console.log(students[i]['firstName'])
//     }
// }


   // second way

//    for(let i=0; i<students.length;i++){
//        if(students[i].skills.includes("python")){
//            console.log(students[i]['firstName'])
//        }   
//    }