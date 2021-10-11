// topic - use of this keyword

// When we use "this" keyword inside the object or blogs {} then it refers to the current calling object.

// When we use "this" keyword outside the blogs {} then it refers to window object which is a global object.

// The things which we define globally ultimately  referes to the window object(globally means outside the class)



// ---------------- krishna code ---------------

// IN OBJECT IF PROPERTY VALUE IS FUNCTION THEN THAT PROPERTY IS CALLED METHOD()
// WINDOW is super object OR GLOBAL OBJECT
// whenever variables defined with let, const, var and any method/function directly call then its altimatly call/defined on super object/WINDOW
// Window refers to browser(DOM) and window is have global scope

// this = current calling object
// this always refers to any object
// this value is complete object       
// this = object   BECAUSE WHEN WE DO console.log(this) ans = {}


// let counter = {
//     count: 0,
//     next: function () {                     // here property(key) next have value is function    (thats its called method)

//         console.log(this)              // { count: 0, next: [Function: next] }      // this have value of complete object 

//         let kk = this.count = this.count + 1
//         console.log(kk)                // 1
//         return kk

//         // this.count++
//         // ++this
//         // this.count += 1                  // increase value of count by 1    

//     }
// }

// next()          // next is not defined  bcoz its call on window and in window object next not defined
// counter.next()                  // next() method called on counter object and counter object defined in window
// counter.next()

// let zz = counter.next() // in zz stores next() method

// let zz1 = counter.next  // in zz1 stores property next value   and  which is a function and
// AND this time THIS keywords not focused on counter object its seperated from counter object
// when this have not any object referance then its refers to global (window) object and its (this) valu is window 



// var x = 10                    
// console.log(x)        // 10
// console.log(window.x) // 10   // we can also write it like this (result shows on browser) // type of window is globalthis

// var have global scope when we want to se results in window we must use of var insted of let,const
// window results not seen in VSC terminal its shows on only browser(DOM)

// alert('hello')
// window.alert('hello')          (we can also write like this) // alert is a method of window object.


//  console.log(this)   // { }     means its gives global object(window) becoz its currenty refers to window
// console.log(window === this)             // true


// function global(){
//     console.log(window === this)
// }
// global()         // true      // becoz function global() calling on global object/function write in globaly altimatly its refers to window
// window.global()  // true     // we can also write like this 


//-----------------------------------------------------

// let bike1 = {
//     brand: 'HONDA',
//     getbrand: function () {
//         console.log(this.brand)    // HONDA
//          return this.brand
//     }
// }

// let bike2 = {
//     brand: 'HERO',
//     // getbrand : function(){
//     //     console.log(this.brand)
//     // }
// }

// let x = bike1.getbrand()
// console.log(x)                 // HONDA  when function not return this.brand then its undefined

// let xx = bike1.getbrand
// console.log(xx)               // its value is function ( simply  we fetch value of object property from object)


// let xx1 = bike1.getbrand  // in xx1 stores property getbrand value   and  which is a function and
// AND this time THIS keywords not focused on bike1 object its seperated from bike1 object
// when this have not any object referance then its refers to global (window) object and its (this) value is window (object) 

// // let xx1 = function(){
//     //     console.log(this.brand)          // undefined  ( becoz in object window not have property brand)
//     // }

// // this = window
// // this.brand = undefined         



// ####################################### THIS METHODS ####################################



// ## 1). bind()          using bind method we can set the value of 'this' key word


// set/pass this value
// make replica of function
// () in this we set this (object) value
// its method apply on object property


// let xx = bike1.getbrand.bind(bike2)     // HERO            // we assign value to the property . value is function and its pass arguments = this = object
// //    xx = function () {
// //         console.log(this.brand)
// //     }                                      // this = bike2        // here xx is a method() becoz its value is function
// console.log(xx())   // HERO  or  Undefined



// method calling  = inside the method console.log used then its print that particular in terminal when method/function call
// print method   =  when function return anything then its gives method value otherwise (not return) its undefined  when print all function



//==========================================================================================================

//## 2). call(" "," ")

// call have two parameters one is this value (object name) and other is function parameter(argument)
//  its method apply on function
// e.g    .call("objectName","argument")


//--------------------------------------------------------------------------------------------
// function calling(para){
//     console.log(para  +  this.brand)    // This = window  and  this.brand = undefined
// }
// calling('HI ')   // HI undefined


//--------------------------------------------------------------------------------------------

// // var brand = 'Kirloskar'

// function calling(para){
   
//     console.log(para  +  this.brand)       // // HI Kirloskar       (result shows in browser becoz var defined globaly)
// }
// calling('HI ')           

// //---------------------------------------------------------------------------------------------------------

// let bike1 = {
//     brand: 'HONDA',
//     getbrand: function () {
//         console.log(this.brand)    
//          return this.brand
//     }
// }

// let bike2 = {
//     brand: 'HERO',
// }

// calling.call(bike1,"my bike is ")       // my bike is HONDA
// calling.call(bike2,"my bike is ")       // my bike is HERO



//============================================================================================

//## 3) .apply(" "," ")

//  apply have two parameters one is this value (object name) and other is function parameter(argument) as an ARRAY
//  its method apply on function
// e.g    .apply("objectName","ARRAY")


// calling.apply(bike1,["i have "])      // i have HONDA
// calling.apply(bike2,["i have "])      // i have HERO



// ---------------- next lecture -----------------------------




// let person = {

//     age:12,
//     fullName:"chinmay",
//     display:function(){
//         return [12,13]
//     }

// }

// let [a,b]= person.display()
// console.log(a)
// console.log(b)


//--------------------------------

// let add = function(){
//     return 10 + 12                           // this is function expression
// }


// // let a = function(){
// //     return 10 + 12
// // }

// function addition(a){                        // this function declaration
//     return a
// }

// // let f = function(){
// //     return 10 + 12
// // }



// let f = addition(add)       // here we pass add which a function itself and defined at the start
// let adda = f()             // and hence function inside function becomes method i.e f()
// console.log(adda)         // 22







// let person = {

//     age:12,
//     fullName:"chinmay",
//     display:function(){
//         return [12,13]
//     }

// }

// let [a,b]= person.display()          // here by person.display() we got the arrey and on left side we the destructring of that arrey
// console.log(a)                // 12
// console.log(b)                // 13


// let v = person.display
// console.log(v())                  // [ 12, 13 ]

// ----------------------------------------------------------------------------------

// var age = 10

// let person = {
//     age:12,
//     fullName:"chinmay",
//     display:function(){
//         return this.age
//     }

// }


// let person2 = {
//     age:23,
//     fullName:"chinmay deshpande",

// }
// console.log(person['age'])             // 12
// let a= person.display()
// console.log(a)                         // 12


// let v  = function(){
//     return this.age
// }

// let m = person.display.bind(person2)       // here we set the value of this = person2  object
//                                             // so it will pick the value of age from person2 object

// let va = person.display.bind(person)  // here we set the value of this = person object
//                                       // so it will pick the value of age from person object

// console.log(m())       // 23
// console.log(va())      //  12

//------------------------------------------------------------------------------


// //call and apply 
// console.log(v.call(person2))
// console.log(v.call(person))

// person = {
//     age:12,
//     fullName:"chinmay",
//     display:function(){
//         return this.age
//     }

// }


// person2 = {
//     age:23,
//     fullName:"chinmay deshpande",

// }

 
// let r = function(a,b){              // this function we make to fetch values from multiple objects
//     return  b + " " + this.fullName
// }

// first we use call method  // inthis method first parameter is 'this' keyword value and second parameter is function paramater.
// r.call(person2,"good morning")     // good morning chinmay deshpande     refer line 429-431
// r.call(person,"good evening")      //  good evening chinmay

// now we use apply method
// let ss = r.apply(person2,["good morning","goodevening"]) // here we give three dots(.) to use as a rest operators
// console.log(ss)
// ans goodevening chinmay deshpande             // with rest operators we can pass multiple parameters

// let mm = r.apply(person,["good evening","goodmorning"])
// console.log(mm)
// ans is goodmorning chinmay


//--------------------------------------------------->


// var nam = "rohan"

// let  g = {
//     nam:"chinmay",
//     age:30,
//     display:function(){
//         console.log("welcome "+this.nam)
//         function greet(){
//             console.log("welcome "+this.nam) // not chinmay

//         }
//         greet()

//     }

// }
// g.display()       // welcome chinmay
//                 //welcome undefined   // when we see this on browser then ans is welcome rohan
//                                       // we define rohan globally
// here display() method has two functions(function inside function) so first functions 'this' word will sets 
// this keywords value equls to object name means for first function this = g
// and second function will refer to global (window) object and we define nothing in the global so it 
// is showing welcome undefined


//--------------------------->
// to avoid above problem we use arrow function when using function inside function 
// so arrow function takes the 'this' keyword value of its parents parant here it will take g
// with arrow function this keyword has scope of its parants scope
//  let  g = {
//     nam:"chinmay",
//     age:30,
//     display:function(){
//         console.log("welcome "+this.nam)
//         let  greet = ()=>{
//             console.log("welcome "+this.nam) // not chinmay

//         }
//         greet()

//     }

// }
// g.display()

// welcome chinmay
//welcome chinmay

//----------------------------------------->


// let  g = {
//     nam:"chinmay",
//     age:30,
//     display:()=>{
//         console.log("welcome "+this.nam)
//         let  greet = ()=>{
//             console.log("welcome "+this.nam) // not chinmay

//         }
//         greet()

//     }

// }
// g.display()





// ----------------------------------------------------------------------------------



person = {
    age:12,
    fullName:"chinmay",
    display:function(){
        return this.age
    }

}


person2 = {
    age:23,
    fullName:"chinmay deshpande",

}



let r = function(b){
    return  b + this.fullName
}


let f = r.call(person2,"good morning")
let n = r.call(person,"good evening")

console.log(f)
console.log(n)



// let r = function(a){
//     return  [a[0] + this.fullName + a[1] + this.fullName]
// }
// console.log(r.apply(person2,["good morning","goodevening"]))
// //r.apply(person,["good evening","goodmorning"])


// let arr = ["good morning","goodevening"]


// let r = function(a,b){
//     return  [a + this.fullName + b + this.fullName]
// }
// console.log(r.apply(person2,[...arr]))
// //r.apply(person,["good evening","goodmorning"])




// let amol = {
//     age:23,
//     firstName:'chinmay deshpande',
//     language:"Hindi"
// }
// //  updating the value
// amol.age = 24 
// // Adding the new value 
// amol.color = "white"
// // del the value
// delete amol.firstName



