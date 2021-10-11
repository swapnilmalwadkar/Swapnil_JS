 // // class means user defined data type (our made data type) 


// //there are three methods to set the properties of object
  
 //  1 -  setting properties of object outside the class 

 //  2 -  setting the properties of object using the "set-get" function within the class

 //  3 - using the constructor

 

 // ****************first method********************************

 // [first method] -  setting properties of object outside the class 

//  class person{
//         age = null
//         rollNumber = null
//  }

//  let swapnil = new person()
//  swapnil.age = 25           // // we can use bracket noation is well to add,update,delete and change the 
//  swapnil.rollNumber = 4447    // value of object
//  console.log(swapnil)

//  swapnil.lastName = 'malwadkar'     // adding the property
//  console.log(swapnil)
                               
//  swapnil.rollNumber =  4446        // updating the property
//  console.log(swapnil)


// let prashant = new person()  // we can make multiple objects like this and also we can add,delete 
// prashant.age = 24             //  change and update the value odf that object.
// prashant.rollNumber = 4000
// console.log(prashant)


// *************second method **************************

//[second method] -  setting the properties of object using the "set-get" function within the class

// class person {

//     setAge(a){
//         this.age = a                  // here we set our function
//     }

//     setrollNumber(r){     
//          this.rollNumber = r       // set separate function for each new  property
//     }

//     setAddress(b){
//         this.Address = b
//     }

//     setlastName(c){
//         this.setlastName = c
//     }

// }

// // let swapnil = new person()
// // swapnil.setAge(20)
// // swapnil.setrollNumber(4450)
// // console.log(swapnil)
// // swapnil.setAddress('baramati')
// // console.log(swapnil)
// // swapnil.setlastName('malwadkar')
// // console.log(swapnil)


// let prashant = new person()
// prashant.setAge(25)             // we can make multiple objects like this
// prashant.setrollNumber(5000)
// prashant.setAddress('malshiras')
// prashant.setlastName('limbone')
// console.log(prashant)
// prashant.setrollNumber(6000)     // we can update the value like that
// console.log(prashant)



// ****************** third method *******************

// [ third method] - setting the properties of object using the constructor

// class person{
//     constructor(age,rollnumber,address,lastname,weight){
//         this.age = age
//         this.rollnumber = rollnumber
//         this.address = address
//         this.lastname = lastname
//         this.weight = weight
//     }
// }

// let swapnil = new person(15,4444,'malegaon','malwadkar',60)
// console.log(swapnil.address)   // to print specific property
// console.log(swapnil)           // to print all the object

// let prashant = new person(23,100,'limbonewasti','limbone',60)   // if we want to add a new property then
//  console.log(prashant)                             // we have add this property in our constructor first