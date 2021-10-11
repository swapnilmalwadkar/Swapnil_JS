//-------------------------- arrey practice ----------------------------- 06/09/2021

// data type - " arrey" 
// using arrey we can store multiple values in one variable
// arreys stores the value by index no.

   
let a = [23,34,54,22,37]
// console.log(a.length)  // 5
// console.log(a[1])     // 34

// a[2] = 100;              // updating element of arrey
// console.log(a)         // [ 23, 34, 100, 22, 37 ]

// a[a.length-1] = 500     // updating the last element of an arrey
// console.log(a)       // [ 23, 34, 54, 22, 500 ]

// console.log(a[a.length-1])   // 37 // printing last element of an aarey

// for(let i=0; i<a.length; i++){
//     console.log(a[i])              // for printing all arrey as it is
// }                                 // 23 34 54 22 37

// delete(a[1]);
// console.log(a)

// -------arrey methods -------------
// arrey methods total 23 methods 

// push - it add the element at the end of an arrey and returns the new length of an arrey

// let a = [23,54,77,88,65,]
//  let ss = a.push(200,300)
//  console.log(ss)  // 7
//  console.log(a)
// -----------------------------------------------------------------------------------------------
// pop - it removes the last element of an aarey and returns it
//  let bb = a.pop()
//  console.log(bb)   // 65
//  console.log(a)
// -------------------------------------------------------------------------------------------

// shift - it removes the element at start of an aarey and returns it.

// let w = a.shift()
// console.log(w)     // 23
// console.log(a)
// -----------------------------------------------------------------------------------------
// unshift - it add the element at start of an array and returns the new length of an aarey.
// let cc = a.unshift(55,66)
// console.log(cc)      // 7
// console.log(a)
// ----------------------------------------------------------------------------------------------
// slice - it removes the elements from arrey and returns the aarey of deleted elements

// let num = [56,43,22,57,87,99,54]
// let ss = num.slice(2)
// console.log(ss)         // [ 22,57,87,99,54]

// let sss = num.slice(2,5)
// console.log(sss)           // [ 22, 57, 87 ]

// let rr = num.slice(2,-2)
// console.log(rr)             // [ 22, 57, 87 ]

// let uu = num.slice(-5,-1)
// console.log(uu)            // [ 22, 57, 87, 99 ]

// let aa = num.slice(-2)      // to returns last two elements of aaray
// console.log(aa)        //   [ 99, 54 ]     

// let ee = num.slice(-5)
// console.log(ee)             // [ 22, 57, 87, 99, 54 ]

// ------------------------------------------------------------------------------------------------

// splice - removes elements from arrey and if necessary add new element and returns array of deleted elements

// let qq = [64,76,88,35,56,24,46]
// let ss = qq.splice(2)
// console.log(ss)         // [ 88, 35, 56, 24, 46 ]


// let xx = qq.splice(2,4) 
// console.log(xx)            // [ 88, 35, 56, 24 ]
// console.log(qq)            // [ 64, 76, 46 ]

// let ee = qq.splice(2,4,100,200,300,400)
// console.log(ee)            // [ 88, 35, 56, 24 ]
// console.log(qq)              // [64,76,100,200,300,400,46]


// let ss = qq.splice(-5,5)
// console.log(ss)       //   [ 88, 35, 56, 24, 46 ]
// console.log(qq)     // [ 64, 76 ]

// ------------------------------------------------------------------------------------------

// concat -  combines two or multiple arrey returning the arrey.

// let a1 = [23,45,76]
//     a2 = [56,78,34]

// let dd = a1.concat(a2)
// console.log(dd)             // [ 23, 45, 76, 56, 78, 34 ]

// let aa = a2.concat(a1)
// console.log(aa)             // [ 56, 78, 34, 23, 45, 76 ]

// another use of concat method

// let  a =["sunny","ram","ganu"]
// let b = a.concat("pravin","maddy")
// console.log(b)                       // [ 'sunny', 'ram', 'ganu', 'pravin', 'maddy' ]

// -----------------------------------------------------------------------------------------------------

// sort - (with string)  - it prints elements of arrey  in alphabetical order. it returns arrey

// let names1 = ["swapnil","krishna","yogesh","pravin","sandeep"]
// let newarr = names1.sort()
// console.log(names1)             // [ 'krishna', 'pravin', 'sandeep', 'swapnil', 'yogesh' ]
// console.log(newarr)             // [ 'krishna', 'pravin', 'sandeep', 'swapnil', 'yogesh' ]
// -----------------------------------------------------------------------------------------------------

// reverse - it prints arrey in reverse order, it returns arrey

// let cc = [34,65,78,98]
// let a = cc.reverse()
// console.log(a)            // [ 98, 78, 65, 34 ]
 
        // or 

// let xyz = ["om","jay","guru","yash"]
// let f = xyz.reverse()
// console.log(f)                 //  [ 'yash', 'guru', 'jay', 'om' ]

// ------------------------------------------------------------------------------------------------

// fill - it is used to fill your required element in the arrey. returns arrey

// let swap = [23,54,66,77,88,34]
// let s = swap.fill("om",1,4)       //  (value to fill,start position,end position) end element is not  taken
// console.log(s)                    // [ 23, 'om', 'om', 'om', 88, 34 ]


// let ss = [32,45,33,56,7]
// let xx = ss.fill(100,1,3)
// console.log(xx)             // [ 32, 100, 100, 56, 7 ]

// ------------------------------------------------------------------------------------------------

// some - it returns true or falls. if any one element of arrey satisfies our condition then it will return true

// let name1 = ["swapnil","sandy","gaurav","ganu"]
// let cc = name1.some((el,indx,arrey)=>{
//     return el.length == 4
// })
// console.log(cc)                   // true

// --------------------------------------------------------------------------------------------------

// every - it returns true or falls. it prints true only when all elements if arrey satisfy our conditon. 
// let a = [ 22,45,43,45,66,21]
// let ss = a.every(function(el,index,arrey){
//     return el >20
// })
// console.log(ss)                             /// true

// --------------------------------------------------------------------------------------------------

// find - it returns the first element that satisfy our condition. starts searching words from leftside.

// let sbm = [20,15,35,32,43,30,33]
// let a = sbm.find(function(el,index,arrey){
//         return el>20
// })
// console.log(a)         // 35

// -----------------------------------------------------------------------------------------------------

// findIndex  - this method returns index of the first element that satisfy given condition.

// let xyz = [20,14,27,16,13,23,17,15,44]
// let s = xyz.findIndex(function(el,index,arrey) {
//         return el > 20
        
// })
// console.log(s)                 // 2

// ----------------------------------------------------------------------------------------------------------

// filter - filter method returns an arrey of all elements that satisfy our given condition.

// let ss = [ 23,35,73,45,76,44,89]
// let dd = ss.filter((el,index,arrey)=>{
//         return el < 50
// })
// console.log(dd)                        // [ 23, 35, 45, 44 ]

// ------------------------------------------------------------------------------------------

// forEach - The forEach() method calls a function once for each element in an array, in order.

// let numbers = [ 12,10,8,6,4,]
// let a = numbers.forEach(function(el,index,arrey){
//         console.log(el*10)
// })

// it prints all the arrey elements one by one

// let num = ["swap","sam","jay","guru"]
// let ss = num.forEach(function(el,index,arrey){
//         console.log(el+ ":" +index)
// })

// -------------------------------------------------------------------------------------------

// Includes -it prints true or falls. 

// let dd = ["ganesh","harish","sandeep","vedant"]
// let ss = dd.includes("sandeep")
// console.log(ss)                                    // true

// -------------------------------------------------------------------------------------

// indexOf - this method work same as includes method.but it return index no of searched element and if element
// not found then it will print -1

// let names = ["sanjay","aman","rehman","aman","rahul"]
// let aa = names.indexOf("aman")
// console.log(aa)                    //1

// in this method we can give a starting point to search the element is well.

// let bb = names.indexOf("aman",1)
// console.log(bb)  // 1

// let cc = names.indexOf("aman",2)
// console.log(cc)                          // 3

// ---------------------------------------------------------------------------------------------------

// lastindexOf - this is similar to indexof method the only difference is ,it starts searching our element
//              from the end of an arrey.

// let names = ["sanjay","aman","rehman","aman","rahul"]
// let ww = names.lastIndexOf("aman")
// console.log(ww)                               // 3

//  in this method we can give a starting point to search the element is well.

// let names = ["sanjay","aman","rehman","aman","rahul"]
// let dd = names.lastIndexOf("aman",2)
// console.log(dd)                                 // 1

// ----------------------------------------------------------------------------------------------------

// flat - it is used to convert multidiamentional aarey into single arrey. it returns arrey

// let arr = [[1,2,3],[3,4,5],[6,7,8]]
// let newarr = arr.flat(Infinity)
// console.log(newarr)               // [1,2,3,4,5,6,7,8]

// --------------------------------------------------------------------------------------------------

// map - calls a defined call back function on each element of an arrey and returns an arrey that contains result.

// let ff = [23,45,43,67,53]   // we have multiply each element by 2
// let as = ff.map(function(el,index,arrey){
//         return el*2
// })
// console.log(as)         // [ 46, 90, 86, 134, 106 ]

// --------------------------------------------------------------------------------------------------

