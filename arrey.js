// data type - " arrey" 
// using arrey we can store multiple values in one variable
// arreys stores the value by index no.

// arrey methods total 23 methods                     

// method 1 - push          

// let rollNo = [12,33,23,46,50]
 
// let a = rollNo.push(100,200,300);
// console.log(rollNo)   //// to print arrey with added element
// console.log(a)        //// to print length of arrey with added element

// *********************************************

// method 2 - pop

// let rollNo = [ 12,33,23,46,50]

// let a = rollNo.pop()    
// console.log(rollNo)    //// to print arrey with removed element
// console.log(a)         //// to print removed element

// ***********************************************

// method 3 - unshift 

// let rollNo = [ 12,33,23,46,50]

// let a = rollNo.unshift(100,200,300)
// console.log(rollNo);
// console.log(a)

// ************************************************

// method 4 - shift

// let rollNo = [ 12,33,23,46,50]

// let a = rollNo.shift();
// console.log(rollNo);
// console.log(a)

// *************************************************

// method 5 - slice

// let birthYear = [1995,1999,2028,2022,2025,1988,2005]

// let a = birthYear.slice(2,5);
// console.log(birthYear);            
// console.log(a)

// ************************************************

// method 6 - splice

// let arreyName = ["swapnil","sanket","akshay","prashant","monya"]

// let a = arreyName.splice(1,3,"ram","laxman","seeta")
// console.log(arreyName);
// console.log(a)

// **************************************************

// method  7 - concat 

// let arreyOne = [1,2,3,4,5]
// let arreyTwo = [6,7,8,9,10]

// let a = arreyOne.concat(arreyTwo);
// console.log(a)

// we can concat multiple arrey is well

//  let arreyOne = [1,2,3,4,5]
//  let arreyTwo = [6,7,8,9,10]
//  let arreThree = [11,12,13,14,15]

//  let a = arreyOne.concat(arreyTwo,arreThree);
//  console.log(a)

// *************************************************

// method 8 - sort 

// let studentName = ["swapnil","prashant","akshay","gaurav"]
// let a = studentName.sort();
// console.log(a)

// ***************************************************

// method 9 - reverse

// let studentName = ["swapnil","prashant","akshay","gaurav"]
// let a = studentName.reverse();
// console.log(a)

// *********************************************

// method 10 - fill

// let arreyOne = [ 1,2,3,4,5,6,7,8,9,10]

// let a = arreyOne.fill("swapnil",2,7);
// console.log(a)

// **************************************************

// method 11 - some( returns true or false)

 // it prints true if any one element in the arrey satisfy our condition
     
// let numbers = [10,25,22,23,26]
// let a = numbers.some(function(el,index,arrey){
//   return  el < 20;
// })
// console.log(a)

// ************************************************

// method 12 - every ( returns true or false)

// it prints true if all the elements of arrey satisy given condition 

// let numbers = [ 10,12,32,22,23,43]
// let a = numbers.every(function(el,index,arrey){
//     return el < 50
// })
// console.log(a)

// ***************************************************

// method 13 - find 
// it returns first element of the arrey that passes a test

// let ages = [10,12,18,20]
// let a = ages.find(function(el,index,arrey){
//     return el > 15;
// })
// console.log(a)

// ******************************************************

// method 14 - findIndex
// this method returns the ibdex of the arrey element that satisfy given condition.

// let ages = [10,12,18,20]
// let a = ages.findIndex(function(el,index,arrey){
//     return el > 15;
// })
// console.log(a)

// ******************************************************

// method 15 - filter 
// this method fiterout the element that satisfy our given condition

// let ages = [ 12,15,23,20,12,14]

// let a = ages.filter(function(el,index,arrey){
//     return el <= 15;
// })
// console.log(a)

// ***************************************************

// method 16 - forEach

// let names = ["swapnil","prashant","sonu","akshay"]
// let a = names.forEach(function(el,index,arrey){
//         console.log(el)
// })

// *************************************************

// method 17 - includes  ( ut returns true or false)

// let names = ["swapnl","suraj","ganesh","viraj","harish"]

// let a = names.includes("viraj");
// console.log(a)

// *****************************************************

// method 18 - indexOf( it starts searching word from the left of the arrey)

// let names = ["guru","jay","sonu","vedant","sanket"]
// let a = names.indexOf("sonu")
// console.log(a)

// *****************************************************


// method 19 - lastIndexOf( it starts searching word from right of the arrey)

// let names = ["guru","jay","sonu","vedant","sonu","sanket"]

// let a = names.lastIndexOf("sonu")
// console.log(a)

// ************************************************************

// method 20 - flat 

// let a = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// let b = a.flat()
// console.log(b)

// *********************************************************

// method 21 - map ( used to perform action on every element of the arrey)

// let numArrey = [2,4,6,3,1,7,9,4,2]
// let a = numArrey.map(function(el,index,arrey){
//     return el * 2
// })
// console.log(a)

// ****************************************************

// method 22 - reduce(used to make addition of all the elements of the given arrey)

// let a = [10,20,30,10]

// let b = a.reduce(function(acc,el,index,arrey){
//     return acc + el;
// },0)

// console.log(b)

// we can set the value of accumulator as per our requirement

// let a = [10,20,30,10]

// let b = a.reduce(function(acc,el,index,arrey){
//     return  acc + el;
// },30)

// console.log(b)

// **************************************************

// method 23 - join 

// let  a = [12,14,34,42,55,79]
// let b = a.join(":")
// console.log(b)
// console.log(typeof(b))  // string





 






